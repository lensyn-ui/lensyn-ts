
/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * 导出所有路由
 *********************************************************************/

import Vue from "vue";
import Router from "vue-router";

import testRoutes from "./test";

Vue.use(Router);

const router = new Router({routes: [
    ...testRoutes
]});

export default router;