/*********************************************************************
 * router config entry file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import Vue from "vue";
import Router, { Route } from "vue-router";
import LoginAjax from "../api/login";
import { Menu as MenuData } from "../config";

/* 导入各个子模块路由 */
import Login from "./Login";
import Home from "./Home";

/* 注入路由 */
Vue.use(Router);

/* 创建路由对象 */
const router = new Router({routes: [
    { path: "/", redirect: "/Login" },
    ...Login,
    ...Home
]});

/* 判断是否已经登录 */
let isUserLogin = () => {
    return sessionStorage.getItem("currentUser") !== null;
};

/* 是否已经获取menu菜单 */
let hasGetMenu = (): boolean => {
    return sessionStorage.getItem("menus") !== null;
};

/* 获取menu菜单 */
let getUserMenu = (cb: (isSuccess: boolean, data?: any) => void): void => {
    cb(true, MenuData);
    /* todo 根据项目定
    LoginAjax.getMenu((d: any) => {
        cb(true, d.data);
    }, (e: any) => {
        cb(false);
    });*/
};

/* 重定向路由 */
let assembleMenuData = (to: Route, from: Route, next: any): void => {
    if (hasGetMenu()) {
        /* todo 需要判断当前用户是否有权限跳转到to路由 */
        next();
    } else {
        /* todo 是否需要根据用户权限获取用户menu根据自己业务确定（此方法是需要获取用户权限menu） */
        getUserMenu((isSuccess: boolean, data: any[]) => {
            if (isSuccess) {
                /* 需要根据返回的值遍历出本地menu数据 */
                let temp: any[] = [];
                data.map((it: any) => {
                    /* condition */
                    /* assemble new temp menu */
                });
                temp = MenuData;
                /* 设置缓存 */
                sessionStorage.setItem("menus", JSON.stringify(temp));
                /* todo 需要判断当前用户是否有权限跳转到to路由 */
                next();
            } else {
                /* 根据自己项目业务逻辑进行跳转 */
                next("/login");
            }
        });
    }
};

/**
 * 路由定向方法
 * 保证页面菜单完整性，需先获取页面菜单，再判断用户是否已经登录
 */
router.beforeEach((to: Route, from: Route, next) => {
    if (to.meta.requestLogin) {
        if (isUserLogin()) {
            assembleMenuData(to, from, next);
        } else {
            next("/login");
        }
    } else {
        if (to.path === '/login' || to.path === '/login/') {
            next();
        } else {
            assembleMenuData(to, from, next);
        }
    }
});

export default router;