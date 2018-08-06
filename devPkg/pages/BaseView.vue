<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class BaseView extends Vue {

        /* 当前用户登录失效 */
        private isLoginExpired(error: any) {
            if (error && error.request && error.request.responseURL.indexOf("login_page") !== -1) {
                return true;
            }
            return false;
        }

        /* 处理Ajax请求失败的方法 */
        protected handleRequestError(error: any): void {
            if (this.isLoginExpired(error)) {
                this.showRequestErrorMsg("登录失效，请重新登录");
                setTimeout(() => {
                    this.$router.push({name: "Login"});
                }, 2000);
                return;
            }

            if (error.data && error.data.meta && error.data.meta.message) {
                this.showRequestErrorMsg(error.data.meta.message);
            } else {
                this.showRequestErrorMsg();
            }
        }

        /* 默认提示 */
        protected showRequestErrorMsg(msg = "请求失败，请稍候重试"): void {
            this.$lensyn.alarm.show(msg, "danger");
        }
    };
</script>
