import axios from "axios";

const sendRequest = function (request: object, successCallback: Function, errorCallback: Function) {
    axios(request).then((response) => {
        successCallback();
    }).catch((error) => {
        errorCallback();
    });
};

export {
    sendRequest
};