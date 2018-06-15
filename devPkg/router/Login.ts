/*********************************************************************
 * defined Login page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import {AsyncComponent} from "vue";
import {RouteConfig} from "vue-router";

/* 登录路由 */
const Login: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Login"*/"../pages/login/Login.vue");
};

const routes: RouteConfig[] = [
    { path: "/login", component: Login, meta: { layout: "ls-blank-layout", requestLogin: false } }
];

export default routes;