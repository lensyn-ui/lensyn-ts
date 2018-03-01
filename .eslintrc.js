/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

module.exports = {
    extends: [
        'plugin:vue/essential'
    ],
    rules: {
        "extends": "eslint:recommended",
        "eqeqeq": ["error", "always"],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
        "max-statements": ["error", 50],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "camelcase": "error",
        "no-undef": "error",
        "no-unused-vars": "error",
        "no-fallthrough": "error",
        "no-extend-native": "error",
        "dot-notation": "error"
    }
  }