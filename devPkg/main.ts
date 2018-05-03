/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/
"use strict";

/* ES6解析兼容 */
import 'babel-polyfill';

/* 引入页面样式文件 */
import './styles/main.less';

/* 加载vue核心组件 */
import Vue, {CreateElement} from 'vue';

/* 加载 lensyn-ui */
import LensynUI from "lensyn-ui";

Vue.use(LensynUI);

/* 加载 datepicker */
import DatePicker from "vue-datepicker-local";

Vue.component("ls-date-time-picker", DatePicker);

/* 加载全局组件 */
import GlobalCompoent from "./components/dwh-global";

Vue.use(GlobalCompoent);

/* 加载vue状态管理器 */
import store from './store';

/* 加载模块路由 */
import router from './router';

/* 引入容器页面 */
import Index from "./pages/Index.vue";

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