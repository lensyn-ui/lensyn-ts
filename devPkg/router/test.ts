/*ts文件应该是定义路由之类的文件?*/
import {AsyncComponent} from "vue";
import {RouteConfig} from "vue-router";

const TestIndex: AsyncComponent = (): any => {
    return import("../pages/test/Index.vue");
};
const TestData: AsyncComponent = (): any => {
    return import("../pages/test/TestData.vue");
};

const routes: RouteConfig[] = [
    {
        /*里面的参数是干嘛的?*/
        path: "/test", component: TestIndex, children: [
        {path: "", component: TestData},
        {path: "testData", component: TestData}
    ]
    }
];

export default routes;