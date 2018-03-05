/*********************************************************************
 * Created by zhangtao on 2018/3/5
 *********************************************************************/
import Vue from 'vue';

/* vuex 数据状态管理器 */
import Vuex from 'vuex';

/* Vue加载状态管理器实例 */
Vue.use(Vuex);

/* 加载公共 state */
import common from "./common";

/* 实例化Vuex状态管理器对象 */
export default new Vuex.Store({
    strict: false,
    state: {
        topState: "最外层的状态"
    },
    modules: {
        common: {
            namespaced: true,
            ...common
        }
    }
});