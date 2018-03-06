/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * request
 *********************************************************************/

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const sendRequest = (request: AxiosRequestConfig, successCallback: () => void, errorCallback: () => void): void => {
    axios(request).then((response: AxiosResponse) => {
        successCallback();
    }).catch((error) => {
        errorCallback();
    });
};

export {
    sendRequest
};