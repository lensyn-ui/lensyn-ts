/*********************************************************************
 * ajax request url file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 通用 ---start--- */

const BASE_URL = "/api";
const LOGIN_URL = "/login/loginIn";
const MENU_URL = "/get/menu";

/* 通用 ---end--- */

/* 首页 ---start--- */

/* 首页-用户信息接口 */
const HOME_USER_INFO = "/home/{userId}/information";

/* 首页 ---end--- */

export default {
    BASE_URL,
    LOGIN_URL,
    MENU_URL,
    HOME_USER_INFO
};