webpackJsonp([18],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(505);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3fac232_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(598);
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
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3fac232_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\pages\\login\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3fac232", Component.options)
  } else {
    hotAPI.reload("data-v-f3fac232", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseView_vue__ = __webpack_require__(597);
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


var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 页面变量定义
         * @define isRemeberPassword 是否记住密码
         * @define userName 用户名
         * @define userPassword 登录密码
         */
        _this.isRemeberPassword = false;
        _this.userName = "admin";
        _this.userPassword = "123456";
        return _this;
    }
    Login.prototype.mounted = function () {
        this.setInitData();
    };
    /* 设置初始值，如果用户设置记住密码，需要重置密码 */
    Login.prototype.setInitData = function () {
        var userName = localStorage.getItem("userName"), password = localStorage.getItem("password");
        if (userName) {
            this.userName = userName;
            this.userPassword = password;
            this.isRemeberPassword = true;
        }
    };
    /* 登录方法 */
    Login.prototype.loginEvt = function () {
        if (this.userName && this.userPassword) {
            sessionStorage.setItem("currentUser", this.userName);
            if (this.isRemeberPassword) {
                this.remeberPassword();
            }
            else {
                this.clearPassword();
            }
            this.$router.push({ path: "/home" });
            /* todo 调用登录接口
            LoginApi.login({username: this.userName, password: this.userPassword}, (responseData) => {
                sessionStorage.setItem("currentUserToken", JSON.stringify(responseData.data));
                sessionStorage.setItem("currentUser", this.userName);

                if (this.isRemeberPassword) {
                    this.remeberPassword();
                } else {
                    this.clearPassword();
                }
                this.$router.push({path: "/system"});
            }, (error) => this.handleRequestError(error));*/
        }
        else {
            this.$lensyn.alarm.show("请输入帐号信息", "danger");
        }
    };
    /* 记住密码 */
    Login.prototype.remeberPassword = function () {
        localStorage.setItem("userName", this.userName);
        localStorage.setItem("password", this.userPassword);
    };
    /* 清除记住密码 */
    Login.prototype.clearPassword = function () {
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
    };
    /* 记住密码选项 */
    Login.prototype.onClickRemeberPassword = function () {
        this.isRemeberPassword = !this.isRemeberPassword;
    };
    Login = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"]
    ], Login);
    return Login;
}(__WEBPACK_IMPORTED_MODULE_1__BaseView_vue__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Login);
;


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
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

var BaseView = /** @class */ (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 当前用户登录失效 */
    BaseView.prototype.isLoginExpired = function (error) {
        if (error && error.request && error.request.responseURL.indexOf("login_page") !== -1) {
            return true;
        }
        return false;
    };
    /* 处理Ajax请求失败的方法 */
    BaseView.prototype.handleRequestError = function (error) {
        var _this = this;
        if (this.isLoginExpired(error)) {
            this.showRequestErrorMsg("登陆失效，请重新登陆");
            setTimeout(function () {
                _this.$router.push({ name: "Login" });
            }, 2000);
            return;
        }
        if (error.data && error.data.meta && error.data.meta.message) {
            this.showRequestErrorMsg(error.data.meta.message);
        }
        else {
            this.showRequestErrorMsg();
        }
    };
    /* 默认提示 */
    BaseView.prototype.showRequestErrorMsg = function (msg) {
        if (msg === void 0) { msg = "请求失败，请稍候重试"; }
        this.$lensyn.alarm.show(msg, "danger");
    };
    BaseView = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"]
    ], BaseView);
    return BaseView;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));
/* harmony default export */ __webpack_exports__["a"] = (BaseView);
;


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BaseView_vue__ = __webpack_require__(506);
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
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BaseView_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\pages\\BaseView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43b29d96", Component.options)
  } else {
    hotAPI.reload("data-v-43b29d96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-view" }, [
    _c("div", { staticClass: "login-container" }, [
      _c("span", { staticClass: "title" }, [_vm._v("用户登陆")]),
      _vm._v(" "),
      _c("div", { staticClass: "login-content" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userName,
              expression: "userName"
            }
          ],
          staticClass: "form-widget",
          attrs: { placeholder: "请输入用户名" },
          domProps: { value: _vm.userName },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userName = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userPassword,
              expression: "userPassword"
            }
          ],
          staticClass: "form-widget",
          attrs: { placeholder: "请输入密码", type: "password" },
          domProps: { value: _vm.userPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userPassword = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-widget" }, [
          _c("span", {
            staticClass: "checkbox",
            class: { checked: _vm.isRemeberPassword },
            on: { click: _vm.onClickRemeberPassword }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "label" }, [_vm._v("记住密码")])
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "button form-widget", on: { click: _vm.loginEvt } },
          [_vm._v("登陆")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3fac232", esExports)
  }
}

/***/ })

});