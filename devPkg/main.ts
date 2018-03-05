/*********************************************************************
 * Created by zhangtao on 2018/3/5
 *********************************************************************/

"use strict";

/* ES6解析兼容 */
import 'babel-polyfill';

/* 引入页面样式文件 */
import './styles/main.less';

/* 加载vue核心组件 */
import Vue from 'vue';

/* 加载vue路由 */
import Router from 'vue-router';

/* 加载vue状态管理器 */
import store from './store';

/* 加载模块路由 */
import router from './router';

/* 引入容器页面 */
import Index from "./pages/Index.vue";

/* vue实例化，加载路由、状态管理器、指向模板引擎 */
new Vue({
    el: "#mainContent",
    router,
    store,
    render: tplFormat => tplFormat(Index)
});