/*********************************************************************
 * defined Home page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import {AsyncComponent} from "vue";
import {RouteConfig} from "vue-router";

/* 首页路由 */
const Home: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Home"*/"../pages/home/Index.vue");
};

const routes: RouteConfig[] = [
    { path: "/home", component: Home, meta: {  layout: "ls-main-layout", requestLogin: true } }
];

export default routes;