<template>
    <div class="login-view">
        <div class="login-container">
            <span class="title">用户登陆</span>

            <div class="login-content">
                <input class="form-widget" placeholder="请输入用户名" v-model="userName"/>
                <input class="form-widget" placeholder="请输入密码" v-model="userPassword" type="password"/>
                <div class="form-widget">
                    <span class="checkbox" :class="{checked: isRemeberPassword}" @click="onClickRemeberPassword"></span>
                    <span class="label">记住密码</span>
                </div>
                <span class="button form-widget" @click="loginEvt">登陆</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import BaseView from "../BaseView.vue";
    import { User } from "../../api";

    @Component
    export default class Login extends BaseView {
        private isRemeberPassword: boolean = false;
        private userName: string = "admin";
        private userPassword: string = "123456";

        protected mounted() {
            this.setInitData();
        }

        private setInitData() {
            let userName = localStorage.getItem("userName"),
                password = localStorage.getItem("password");

            if (userName !== null) {
                this.userName = userName;
                this.userPassword = password!;
                this.isRemeberPassword = true;
            }
        }

        private loginEvt() {
            if (this.userName && this.userPassword) {
                User.login({username: this.userName, password: this.userPassword}, (responseData) => {
                    sessionStorage.setItem("currentUserToken", JSON.stringify(responseData.data));
                    sessionStorage.setItem("currentUser", this.userName);

                    if (this.isRemeberPassword) {
                        this.remeberPassword();
                    } else {
                        this.clearPassword();
                    }
                    this.$router.push({path: "/system"});
                }, (error) => this.handleRequestError(error));
            } else {
                this.$lensyn.toast.show("请输入帐号信息");
            }
        }

        private remeberPassword() {
            localStorage.setItem("userName", this.userName);
            localStorage.setItem("password", this.userPassword);
        }

        private clearPassword() {
            localStorage.removeItem("userName");
            localStorage.removeItem("password");
        }

        private onClickRemeberPassword() {
            this.isRemeberPassword = !this.isRemeberPassword;
        }
    };
</script>