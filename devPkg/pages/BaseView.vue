<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class BaseView extends Vue {
        private isLoginExpired(error: any) {
            if (error && error.request && error.request.responseURL.indexOf("login_page") !== -1) {
                return true;
            }
            return false;
        }

        protected handleRequestError(error: any): void {
            if (this.isLoginExpired(error)) {
                this.showRequestErrorMsg("登陆失效，请重新登陆");
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

        protected showRequestErrorMsg(msg = "请求失败，请稍候重试"): void {
            this.$lensyn.toast.show(msg, "danger");
        }

        protected resizeView() {
            let el = this.$el,
                title = el.querySelector(".view-title") as HTMLElement,
                header = el.querySelector(".view-header") as HTMLElement,
                content = el.querySelector(".view-content") as HTMLElement,
                paddingTop = getComputedStyle(el).getPropertyValue("padding-top");

            content.style.height = (el.clientHeight - parseInt(paddingTop) - title!.offsetHeight - header!.offsetHeight) + "px";
        }
    };
</script>
