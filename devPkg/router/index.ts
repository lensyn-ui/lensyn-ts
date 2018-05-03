import Vue from "vue";
import Router, { Route } from "vue-router";

// import system from "./system";
// import scheduling from "./scheduling";
// import dataManagement from "./data-management";
// import warehouse from "./warehouse";
// import user from "./user";
// import analysis from "./analysis";
import test from "./test";

Vue.use(Router);

const router = new Router({routes: [
    { path: "/", redirect: "/system", meta: {requestLogin: true} },
    // ...user,
    // ...system,
    // ...scheduling,
    // ...dataManagement,
    // ...warehouse,
    // ...analysis,
    ...test
]});

let isUserLogin = () => {
    return sessionStorage.getItem("currentUser") !== null;
    // return true;
};

router.beforeEach((to: Route, from: Route, next) => {
    if (to.meta.requestLogin) {
        if (isUserLogin()) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;