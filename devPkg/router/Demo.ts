/*********************************************************************
 * Components usage introduce file
 * Created by deming-su on 2018/6/19
 *********************************************************************/

import {AsyncComponent} from "vue";
import {RouteConfig} from "vue-router";

/* 查询路由 */
const Query: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Query"*/"../pages/demo/query/Index.vue");
};

/* 分页路由 */
const Pagination: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Pagination"*/"../pages/demo/pagination/Index.vue");
};

/* 简单下拉路由 */
const Baseselect: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Baseselect"*/"../pages/demo/selection/base.vue");
};

/* 多选下拉路由 */
const Multiple: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Multiple"*/"../pages/demo/selection/multiple.vue");
};

/* 树路由 */
const Tree: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Tree"*/"../pages/demo/tree/Index.vue");
};

/* 日期路由 */
const Datepicker: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Datepicker"*/"../pages/demo/date/Index.vue");
};

/* 按钮路由 */
const Button: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Button"*/"../pages/demo/button/Index.vue");
};

/* 输入框路由 */
const Input: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Input"*/"../pages/demo/input/Index.vue");
};

/* 选项卡路由 */
const Tab: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Tab"*/"../pages/demo/tab/Index.vue");
};

/* 确认框路由 */
const Confirm: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Confirm"*/"../pages/demo/confirm/Index.vue");
};

/* 弹框路由 */
const Modal: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Modal"*/"../pages/demo/modal/Index.vue");
};

/* 提示/警示框路由 */
const Alarm: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Alarm"*/"../pages/demo/alarm/Index.vue");
};

/* tooltip路由 */
const Tooltip: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Tooltip"*/"../pages/demo/tooltip/Index.vue");
};

/* 默认表格路由 */
const Table: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Table"*/"../pages/demo/table/Index.vue");
};

/* 分页表格路由 */
const Pagingtable: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Pagingtable"*/"../pages/demo/table/paging.vue");
};

const routes: RouteConfig[] = [
    { path: "/query", component: Query, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/table", component: Table, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/pagingtable", component: Pagingtable, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/pagination", component: Pagination, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/baseselect", component: Baseselect, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/multipleselect", component: Multiple, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/tree", component: Tree, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/date", component: Datepicker, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/button", component: Button, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/input", component: Input, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/tab", component: Tab, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/confirm", component: Confirm, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/modal", component: Modal, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/alarm", component: Alarm, meta: {  layout: "ls-main-layout", requestLogin: true } },
    { path: "/tooltip", component: Tooltip, meta: {  layout: "ls-main-layout", requestLogin: true } }
];

export default routes;