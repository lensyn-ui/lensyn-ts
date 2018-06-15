/*********************************************************************
 * project common interface defined file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 登录用户信息 */
interface UserInfo {
    id: string;
    name?: string;
}

/* 接口请求参数 */
interface RequestData {
    url: string;
    method?: string;
    data?: object;
    params?: object;
    contentType?: string;
}


/* 接口请求返回类型定义 */
type SuccessCallback = (data: any) => void;
type ErrorCallback = (errorMsg: any) => void;


export {
    UserInfo,
    SuccessCallback,
    ErrorCallback,
    RequestData
};
