/*********************************************************************
 * Components usage introduce file
 * Created by deming-su on 2018/6/19
 *********************************************************************/

import {AsyncComponent} from "vue";
import {RouteConfig} from "vue-router";

/* 栅格路由 */
const Grid: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Grid"*/"../pages/demo/grid/Index.vue");
};

/* 自定义栅格路由 */
const GridCustom: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "GridCustom"*/"../pages/demo/grid/Custom.vue");
};

/* 查询路由 */
const Query: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Query"*/"../pages/demo/query/Index.vue");
};

/* 分页路由 */
const Pagination: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Pagination"*/"../pages/demo/pagination/Index.vue");
};

/* 自定义分页路由 */
const PaginationCustom: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "PaginationCustom"*/"../pages/demo/pagination/Custom.vue");
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

/* 自定义树路由 */
const TreeCustom: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "TreeCustom"*/"../pages/demo/tree/Custom.vue");
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

/* 选择框路由 */
const Checkbox: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Checkbox"*/"../pages/demo/checkbox/Index.vue");
};

/* 策划弹出框路由 */
const Sideslip: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Sideslip"*/"../pages/demo/sideslip/Index.vue");
};

/* rate star */
const RateStar: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "RateStar"*/"../pages/demo/rate/Index.vue");
};

/* dropDown */
const DropDown: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "DropDown"*/"../pages/demo/dropDown/Index.vue");
};

/* popUp */
const PopUp: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "PopUp"*/"../pages/demo/popUp/Index.vue");
};

/* transfer */
const Transfer: AsyncComponent = (): any => {
    return import(/* webpackChunkName: "Transfer"*/"../pages/demo/transfer/Index.vue");
};

const routes: RouteConfig[] = [
    {path: "/grid", component: Grid, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/gridcustom", component: GridCustom, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/query", component: Query, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/table", component: Table, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/pagingtable", component: Pagingtable, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/pagination", component: Pagination, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/paginationcustom", component: PaginationCustom, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/baseselect", component: Baseselect, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/multipleselect", component: Multiple, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/tree", component: Tree, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/treecustom", component: TreeCustom, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/date", component: Datepicker, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/button", component: Button, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/input", component: Input, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/tab", component: Tab, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/confirm", component: Confirm, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/modal", component: Modal, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/alarm", component: Alarm, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/tooltip", component: Tooltip, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/sideslip", component: Sideslip, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/checkbox", component: Checkbox, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/ratestar", component: RateStar, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/dropdown", component: DropDown, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/popUp", component: PopUp, meta: {layout: "ls-main-layout", requestLogin: true}},
    {path: "/transfer", component: Transfer, meta: {layout: "ls-main-layout", requestLogin: true}}
];

export default routes;