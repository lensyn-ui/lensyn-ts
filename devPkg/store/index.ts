/*********************************************************************
 * Vue store export file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import Vue from 'vue';

/* vuex 数据状态管理器 */
import Vuex, { StoreOptions } from 'vuex';

/* Vue加载状态管理器实例 */
Vue.use(Vuex);

/* 加载公共 state */
import { common } from "./common";

/* 定义store对象 */
const store: StoreOptions<any> = {
    modules: {
        common
    }
};

/* 实例化Vuex状态管理器对象 */
export default new Vuex.Store<any>(store);
