/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * 测试页面的路由
 *********************************************************************/

import { AsyncComponent} from "vue";
import { RouteConfig } from "vue-router";

const Test: AsyncComponent = (): any => import("../pages/test/TestOne.vue");
const TestTwo: AsyncComponent = (): any => import("../pages/test/TestTwo.vue");

const routes: RouteConfig[] = [
    { path: "/", component: Test },
    { path: "/test-two", component: TestTwo }
];

export default routes;