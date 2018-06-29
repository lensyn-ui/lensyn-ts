/*********************************************************************
 * common Vue store file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import { Module, ActionTree, GetterTree, MutationTree } from "vuex";
import { UserInfo } from "../types/common";

interface CommonInfo {
    userInfo?: UserInfo;
    testInfo: string;
}

const initState: CommonInfo = {
    userInfo: undefined,
    testInfo: ""
};

const getters: GetterTree<any, any> = {
    /* 获取用户信息 */
    getUserInfo(state): CommonInfo {
        const { userInfo } = state;
        return userInfo;
    },
    /* 获取用户信息 */
    getTestInfo(state): CommonInfo {
        const { testInfo } = state;
        return testInfo;
    }
};

const actions: ActionTree<any, any> = {
    /* 设置用户信息 */
    setUserInfo({commit}, obj: UserInfo): any {
        commit('mutationUserInfo', obj);
    }
};

const mutations: MutationTree<any> = {
    mutationUserInfo(state, obj: UserInfo) {
        state.testInfo = obj.name;
        state.userInfo = obj;
    }
};

const namespaced: boolean = true;

export const common: Module<any, any> = {
    namespaced,
    state: {...initState},
    getters,
    actions,
    mutations
};