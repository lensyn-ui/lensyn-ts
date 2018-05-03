import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { RequestData, SuccessCallback, ErrorCallback } from "dwh-request";
import { UrlConfig } from "../config";
import { ConstConfig } from "../config";
import Loading from "../components/Loading";

const getUrl = (url: string): string => {
    return `${UrlConfig.BASE_URL}${url}`;
};

const buildRequestData = (data: RequestData): AxiosRequestConfig => {
    let result: AxiosRequestConfig = {};

    result.method = data.method ? data.method : "GET";
    result.params = data.params;
    result.data = data.data;

    if (result.method === "POST") {
        result.headers = {
            "Content-Type": data.contentType ? data.contentType : "application/json;charset=utf-8"
        };
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
    // 暂时不设置 timeout
    result.timeout = ConstConfig.REQUEST_TIMEOUT;

    return result;
};

const isRequestSuccess = (responsdData: AxiosResponse): boolean => {
    if (responsdData.data && responsdData.data.meta) {
        return responsdData.data.meta.code === 1;
    }
    return true;
};

let loadingCount = 0;

const sendRequest = (request: RequestData, successCallback: SuccessCallback, errorCallback?: ErrorCallback) => {
    let url = getUrl(request.url),
        requestData = buildRequestData(request);

    requestData.url = url;

    loadingCount++;
    Loading.show();

    axios(requestData).then((response: AxiosResponse) => {
        if (isRequestSuccess(response)) {
            successCallback(response.data);
        } else if (errorCallback) {
            errorCallback(response);
        }
        loadingCount--;
        if (loadingCount <= 0) {
            loadingCount = 0;
            Loading.hide();
        }
    }).catch((error) => {
        if (errorCallback) {
            errorCallback(error);
        }
        loadingCount--;
        if (loadingCount <= 0) {
            loadingCount = 0;
            Loading.hide();
        }
    });
};

export {
    sendRequest
};