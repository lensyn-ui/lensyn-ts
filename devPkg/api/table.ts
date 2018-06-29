/*********************************************************************
 * table 测试数据获取 page api
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import { SuccessCallback, ErrorCallback } from "common.d.ts";
import { Ajax } from "../util";
import { UrlConfig } from "../config";

/**
 * 数据获取
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let getData = (data: any, success: SuccessCallback, error?: ErrorCallback) => {
    let temp: any[] = [];
    for (let i = 0; i < 10; i ++) {
        temp.push({
            column001: `${Math.ceil(Math.random() * 10000)}`,
            column002: `${Math.ceil(Math.random() * 10000)}`,
            column003: `${Math.ceil(Math.random() * 10000)}`,
            column004: `${Math.ceil(Math.random() * 10000)}`,
            column005: `${Math.ceil(Math.random() * 10000)}`,
            column006: `${Math.ceil(Math.random() * 10000)}`
        });
    }
    success({totalNumber: 32, list: temp});
    /*Ajax.sendRequest({
        method: "POST",
        url: UrlConfig.LOGIN_URL,
        data: {},
        params: data
    }, success, error);*/
};


export default {
    getData
};