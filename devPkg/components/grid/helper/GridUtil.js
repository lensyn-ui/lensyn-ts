let toString = Object.prototype.toString;

const Util  = {
    /** 匹配 #{ hello } 字符串 */
    VARIABLE_PROPERTY_REG: /^#\{\s*(\w+)\s*\}/,
    /** 同上,只是不需要以 # 开头 和需要全局匹配 */
    VARIABLE_PLACEHOLDER_REG: /#\{\s*(\w+)\s*\}/g,
    
    isContainVariable(property) {
        return this.VARIABLE_PLACEHOLDER_REG.test(property);
    },
    
    /**
     * 获取表达式的值
     * @param {Object} obj - 表达式中变量所对应的对象
     * @param {string} expression - 表达式
     */
    getExpressionValue(obj, expression) {
        var result = expression;
        if (this.isContainVariable(expression)) {
            try {
                result = this.processScript(obj, expression);
            } catch (scriptException) {
                try {
                    result = this.replacePlaceHolder(expression, obj);
                } catch (expressionException) {
                    throw new Error("表达式不合法 => " + expression);
                }
            }
        }
        return result;
    },

    /**
     * 执行 js 语句, 并返回结果
     * @param {Object} obj - 执行语句时变量所属的对象
     * @param {string} stentence - js 语句
     */
    processScript(obj, stentence) {
        var self = this;
        if (!obj) {
            return true;
        }
        stentence = preprocess(stentence);
        var fn = buildFn(stentence);

        return fn(obj);

        function preprocess(condition) {
            return condition.replace(self.VARIABLE_PLACEHOLDER_REG, "obj.$1");
        }

        function buildFn(sentence) {
            return new Function("obj", "return " + sentence);
        }
    },

    /**
     * 使用对象中的属性的值替换字符串中的占位符
     * @param {string} str
     * @param {Object} obj
     */
    replacePlaceHolder(str, obj) {
        return str.replace(this.VARIABLE_PLACEHOLDER_REG, (match, key) => {
            return obj[key] === undefined ? "" : obj[key];
        });
    },

    isArray(data) {
        return toString.call(data) === "[object Array]";
    },

    isFunction(fn) {
        return typeof fn === "function";
    },

    isUndefined(data) {
        return typeof data === "undefined";
    }
};

export default Util;