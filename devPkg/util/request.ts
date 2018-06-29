/*********************************************************************
 * ajax request file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { RequestData, SuccessCallback, ErrorCallback } from "common.d.ts";
import { UrlConfig } from "../config";
import { ConstConfig } from "../config";


/**
 * 页面参数
 * @type {number} 当前请求个数
 */
let loadingCount = 0;

/**
 * 获取请求地址
 * @param url 请求地址
 * @param params 需要替换地址中的数据对象
 * @returns {string} 返回完整请求地址
 */
const getUrl = (url: string, params?: any): string => {
    url = url.replace(/{(\w+)}/g, (reg: string, key: string): string => params[key]);
    return `${UrlConfig.BASE_URL}${url}`;
};

/**
 * 构建请求参数
 * @param data 请求参数对象
 * @returns {AxiosRequestConfig} 返回请求对象
 */
const buildRequestData = (data: RequestData): AxiosRequestConfig => {
    let result: AxiosRequestConfig = {};

    result.method = data.method ? data.method : "GET";
    result.params = data.params;
    result.data = data.data;

    if (result.method === "POST") {

        /* 设置请求头文档类型 */
        result.headers = {
            "Content-Type": data.contentType ? data.contentType : "application/json;charset=utf-8"
        };

        /* form提交 */
        result.transformRequest = (requestData) => {
            if (data.contentType && data.contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
                let str = "";

                for (let key in requestData) {
                    if (data.hasOwnProperty(key)) {
                        str += `${key}=${requestData[key]}&`;
                    }
                }
                return encodeURI(str.slice(0, str.length - 1));
            } else {
                return JSON.stringify(requestData);
            }
        };
    }
    /* 设置超时 */
    result.timeout = ConstConfig.REQUEST_TIMEOUT;
    return result;
};

/**
 * 判断是否请求成功
 * @param responsdData 请求返回数据
 * @returns {boolean} 返回是否成功
 */
const isRequestSuccess = (responsdData: AxiosResponse): boolean => {
    if (responsdData.data && responsdData.data.meta) {
        return responsdData.data.meta.code === 1;
    }
    return true;
};


/**
 * Ajax 请求方法
 * @param request 请求参数
 * @param successCallback 成功返回回调函数
 * @param errorCallback 失败返回回调函数
 */
const sendRequest = (request: RequestData, successCallback: SuccessCallback, errorCallback?: ErrorCallback) => {
    let url = getUrl(request.url, request.urlParam),
        requestData = buildRequestData(request);

    requestData.url = url;

    loadingCount++;

    /* axios 发起请求 */
    axios(requestData).then((response: AxiosResponse) => {
        if (isRequestSuccess(response)) {
            successCallback(response.data);
        } else if (errorCallback) {
            errorCallback(response);
        }
        loadingCount--;
        if (loadingCount <= 0) {
            loadingCount = 0;
        }
    }).catch((error) => {
        if (errorCallback) {
            errorCallback(error);
        }
        loadingCount--;
        if (loadingCount <= 0) {
            loadingCount = 0;
        }
    });
};

export {
    sendRequest
};