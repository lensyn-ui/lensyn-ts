import { SuccessCallback, ErrorCallback } from "dwh-request";
import { request } from "../util/";
import { UrlConfig } from "../config";

/**
 * 用户登陆
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let login = (data: any, success: SuccessCallback, error?: ErrorCallback) => {
    request.sendRequest({
        method: "POST",
        url: UrlConfig.USER.LOGIN,
        data: {},
        params: data
    }, success, error);
};

export {
    login
};