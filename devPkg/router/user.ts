import { AsyncComponent} from "vue";
import { RouteConfig } from "vue-router";

const Login: AsyncComponent = (): any =>
    import(/* webpackChunkName: "login"*/"../pages/login/Login.vue");

const routes: RouteConfig[] = [
    { path: "/login", component: Login, name: "Login", meta: {layout: "ls-blank-layout"} }
];

export default routes;