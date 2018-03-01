
import Vue from "vue";
import Router from "vue-router";

import testRoutes from "./test";

Vue.use(Router);

const router = new Router({routes: [
    ...testRoutes
]});

export default router;