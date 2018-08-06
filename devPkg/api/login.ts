/*********************************************************************
 * login page api
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import { SuccessCallback, ErrorCallback } from "common.d.ts";
import { Ajax } from "../util";
import { UrlConfig } from "../config";
import axios, {AxiosRequestConfig} from "axios";

/**
 * 用户登录
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let login = (data: any, success: SuccessCallback, error?: ErrorCallback) => {
    Ajax.sendRequest({
        method: "POST",
        url: UrlConfig.LOGIN_URL,
        data: {},
        params: data
    }, success, error);
};

/**
 * 获取项目菜单
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let getMenu = (success: SuccessCallback, error?: ErrorCallback) => {
    Ajax.sendRequest({
        url: UrlConfig.MENU_URL
    }, success, error);
};

/**
 * 引用页面用法释义
 * import Login form "./api/login";
 * Login.login();
 */
export default {
    login,
    getMenu
};