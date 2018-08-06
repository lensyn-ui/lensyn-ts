<template>
    <div class="login-view">
        <div class="login-container">
            <span class="title">用户登录</span>

            <div class="login-content">
                <input class="form-widget" placeholder="请输入用户名" v-model="userName"/>
                <input class="form-widget" placeholder="请输入密码" v-model="userPassword" type="password"/>
                <div class="form-widget">
                    <span class="checkbox" :class="{checked: isRemeberPassword}" @click="onClickRemeberPassword"></span>
                    <span class="label">记住密码</span>
                </div>
                <span class="button form-widget" @click="loginEvt">登录</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import BaseView from "../BaseView.vue";
    import LoginApi from "../../api/login";

    @Component
    export default class Login extends BaseView {
        /**
         * 页面变量定义
         * @define isRemeberPassword 是否记住密码
         * @define userName 用户名
         * @define userPassword 登录密码
         */
        private isRemeberPassword: boolean = false;
        private userName: string = "admin";
        private userPassword: string = "123456";

        protected mounted() {
            this.setInitData();
        }

        /* 设置初始值，如果用户设置记住密码，需要重置密码 */
        private setInitData() {
            let userName = localStorage.getItem("userName"),
                password = localStorage.getItem("password");

            if (userName) {
                this.userName = userName;
                this.userPassword = password!;
                this.isRemeberPassword = true;
            }
        }

        /* 登录方法 */
        private loginEvt() {
            if (this.userName && this.userPassword) {
                sessionStorage.setItem("currentUser", this.userName);

                if (this.isRemeberPassword) {
                    this.remeberPassword();
                } else {
                    this.clearPassword();
                }

                this.$router.push({path: "/home"});
                /* todo 调用登录接口
                LoginApi.login({username: this.userName, password: this.userPassword}, (responseData) => {
                    sessionStorage.setItem("currentUserToken", JSON.stringify(responseData.data));
                    sessionStorage.setItem("currentUser", this.userName);

                    if (this.isRemeberPassword) {
                        this.remeberPassword();
                    } else {
                        this.clearPassword();
                    }
                    this.$router.push({path: "/system"});
                }, (error) => this.handleRequestError(error));*/
            } else {
                this.$lensyn.alarm.show("请输入帐号信息", "danger");
            }
        }

        /* 记住密码 */
        private remeberPassword() {
            localStorage.setItem("userName", this.userName);
            localStorage.setItem("password", this.userPassword);
        }

        /* 清除记住密码 */
        private clearPassword() {
            localStorage.removeItem("userName");
            localStorage.removeItem("password");
        }

        /* 记住密码选项 */
        private onClickRemeberPassword() {
            this.isRemeberPassword = !this.isRemeberPassword;
        }
    };
</script>