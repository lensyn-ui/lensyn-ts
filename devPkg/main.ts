/*********************************************************************
 * project entry file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

"use strict";

/* ES6解析兼容 */
import 'babel-polyfill';
import 'es6-promise/auto';

/* 加载vue核心组件 */
import Vue, {CreateElement} from 'vue';
import Component from 'vue-class-component';

/* 加载vue状态管理器 */
import store from './store';

/* 注入路由生命周期-ts */
Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate"
]);

/* 加载模块路由 */
import router from './router';

/* 引入容器页面 */
import Index from "./pages/Index.vue";

/* 加载全局组件 */
import GlobalComponent from "./components/lensyn-global";
Vue.use(GlobalComponent);

/* 加载lensyn-ui组件库 */
import "lensyn-ui/lib/lensyn-ui.css";
import LensynUI from "lensyn-ui";
Vue.use(LensynUI);

/* 引入页面样式文件 */
import './styles/main.less';

/* vue实例化，加载路由、状态管理器、指向模板引擎 */
/* tslint:disable-next-line */
new Vue({
    el: "#mainContent",
    router,
    store,
    render(createElement: CreateElement) {
        if (this.$route.path === "/") {
            return createElement("div");
        }

        let routeMeta = this.$route.meta,
            props: { layout?: string } = {};

        if (routeMeta && routeMeta.layout) {
            props.layout = routeMeta.layout;
        }
        return createElement(Index, {props});
    }
});