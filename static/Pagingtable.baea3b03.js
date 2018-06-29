webpackJsonp([15],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_paging_vue__ = __webpack_require__(594);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77608944_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paging_vue__ = __webpack_require__(929);
var disposed = false
var normalizeComponent = __webpack_require__(27)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_paging_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77608944_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paging_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\pages\\demo\\table\\paging.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77608944", Component.options)
  } else {
    hotAPI.reload("data-v-77608944", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(141);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 页面参数释义
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param introduceInfo 组件使用方法
         * @param nowText 组件使用方法
         */
        _this.breadList = [{ name: '首页', link: '/home', id: 'breadcrumb001' }];
        _this.introduceInfo = [];
        _this.nowText = "";
        return _this;
    }
    default_1.prototype.readFile = function (url) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                _this.nowText = "";
                var strInfo_1 = "";
                xhr.onload = function () {
                    strInfo_1 = "" + strInfo_1 + xhr.responseText;
                };
                xhr.onloadend = function () {
                    _this.nowText = strInfo_1.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
                };
            }
        };
        xhr.send();
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"])({
            components: {
                'ls-breadcrumb': __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Breadcrumb */],
                'ls-pagetips': __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Pagetips */],
                'ls-row': __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Row */],
                'ls-column': __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Column */]
            }
        })
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Template_vue__ = __webpack_require__(413);
/* unused harmony namespace reexport */
var disposed = false
var normalizeComponent = __webpack_require__(27)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Template_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\pages\\demo\\Template.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-162da0f8", Component.options)
  } else {
    hotAPI.reload("data-v-162da0f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Template_vue__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_table__ = __webpack_require__(928);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* 重写面包屑、提示、使用说明参数 */
        _this.breadList = [
            { name: '首页', link: '/home', id: 'breadcrumb001' },
            { name: '确认框', link: '', id: 'breadcrumb002' }
        ];
        _this.tipsInfo = {
            title: "提示/警示框组件的使用方法",
            subTitle: "查看提示/警示框框组件的使用详情在‘pages/demo/alarm/Index.vue’",
            type: 'primary'
        };
        _this.introduceInfo = [
            {
                title: '实现代码',
                desc: "this.$lensyn.alarm.show('\u63D0\u793A\u4FE1\u606F\u6807\u9898', '\u63D0\u793A\u4FE1\u606F\u5185\u5BB9', 'success', 'success', true);"
            },
            {
                title: '参数说明',
                desc: "1.title  2.\u5185\u5BB9  3.\u5F39\u51FA\u6846\u7C7B\u578B  4.title\u7684icon  5.\u662F\u5426\u6709\u5173\u95ED\u6309\u94AE"
            }
        ];
        /**
         * 页面释义
         * @param testDatas 表格测试数据
         * @param testColumnSets 表格列数据
         * @param reuqestFunc Ajax 数据获取方法
         */
        _this.testDatas = [];
        _this.testColumnSets = [
            [
                { label: "列001", field: "column001" },
                { label: "列002", field: "column002" },
                { label: "列003", field: "column003" },
                { label: "列004", field: "column004" },
                { label: "列005", field: "column005" },
                { label: "列006", field: "column006" }
            ]
        ];
        _this.reuqestFunc = {
            query: function (params, success, error) {
                __WEBPACK_IMPORTED_MODULE_2__api_table__["a" /* default */].getData(params, function (d) {
                    success({ total: d.totalNumber, datas: d.list });
                }, function (d) {
                    error && error(d);
                });
            }
        };
        return _this;
    }
    default_1.prototype.mounted = function () {
        this.readFile('../demo/table/paging.vue');
        this.getData();
        this.$refs.ajaxGridNode.forceUpdateGrid({});
    };
    /* 本地数据获取方法 */
    default_1.prototype.getData = function () {
        var _this = this;
        this.$lensyn.loading.show();
        setTimeout(function () {
            _this.$lensyn.loading.hide();
            for (var i = 0; i < 67; i++) {
                _this.testDatas.push({
                    column001: "" + Math.ceil(Math.random() * 10000),
                    column002: "" + Math.ceil(Math.random() * 10000),
                    column003: "" + Math.ceil(Math.random() * 10000),
                    column004: "" + Math.ceil(Math.random() * 10000),
                    column005: "" + Math.ceil(Math.random() * 10000),
                    column006: "" + Math.ceil(Math.random() * 10000)
                });
            }
            _this.$refs.gridNode.refreshGrid();
        }, 3000);
    };
    default_1 = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_1__Template_vue__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*********************************************************************
 * table 测试数据获取 page api
 * Created by deming-su on 2017/12/30
 *********************************************************************/
/**
 * 数据获取
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
var getData = function (data, success, error) {
    var temp = [];
    for (var i = 0; i < 10; i++) {
        temp.push({
            column001: "" + Math.ceil(Math.random() * 10000),
            column002: "" + Math.ceil(Math.random() * 10000),
            column003: "" + Math.ceil(Math.random() * 10000),
            column004: "" + Math.ceil(Math.random() * 10000),
            column005: "" + Math.ceil(Math.random() * 10000),
            column006: "" + Math.ceil(Math.random() * 10000)
        });
    }
    success({ totalNumber: 32, list: temp });
    /*Ajax.sendRequest({
        method: "POST",
        url: UrlConfig.LOGIN_URL,
        data: {},
        params: data
    }, success, error);*/
};
/* harmony default export */ __webpack_exports__["a"] = ({
    getData: getData
});


/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ls-breadcrumb", { attrs: { breadcrumbList: _vm.breadList } }),
      _vm._v(" "),
      _c("ls-pagetips", { attrs: { pagetips: _vm.tipsInfo } }),
      _vm._v(" "),
      _c("div", { staticClass: "introduce-title" }, [
        _vm._v("本地数据分页展示表格")
      ]),
      _vm._v(" "),
      _c(
        "ls-row",
        [
          _c(
            "ls-column",
            [
              _c("ls-pagination-grid", {
                ref: "gridNode",
                attrs: {
                  datas: _vm.testDatas,
                  columns: _vm.testColumnSets,
                  isShowFooter: true
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "introduce-title" }, [
        _vm._v("远程Ajax数据分页展示表格")
      ]),
      _vm._v(" "),
      _c(
        "ls-row",
        [
          _c(
            "ls-column",
            [
              _c("ls-pagination-grid", {
                ref: "ajaxGridNode",
                attrs: {
                  store: _vm.reuqestFunc,
                  columns: _vm.testColumnSets,
                  isShowFooter: true
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "introduce-info" },
        _vm._l(_vm.introduceInfo, function(item) {
          return _c("div", { staticClass: "item" }, [
            _c("div", { staticClass: "title" }, [_vm._v(_vm._s(item.title))]),
            _vm._v(" "),
            _c("div", {
              staticClass: "desc",
              domProps: { innerHTML: _vm._s(item.desc) }
            })
          ])
        })
      ),
      _vm._v(" "),
      _c("div", { staticClass: "introduce-info" }, [
        _c("pre", { domProps: { innerHTML: _vm._s(_vm.nowText) } })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77608944", esExports)
  }
}

/***/ })

});