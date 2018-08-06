/*********************************************************************
 * Vue private main layout file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="application-container">
        <!-- 顶部导航菜单 ---start--- -->
        <ls-navigator @clickNav="onClickNav" :navObj="navObj"/>
        <!-- 顶部导航菜单 ---end--- -->

        <!-- 左侧菜单 ---start--- -->
        <ls-menu @collapseEvt="collapseEvt" :menuList="menuObj"/>
        <!-- 左侧菜单 ---end--- -->

        <!-- 主体路由样式 ---start--- -->
        <div class="view-container" :class="[{'menu-collapse': menuCollapse}]">
            <router-view></router-view>
        </div>
        <!-- 主体路由样式 ---end--- -->
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"; 
    import { Navigator, Menu } from "../../components";
    import { ConstConfig } from "../../config";

    import { Action, Getter } from "vuex-class";

    import { UserInfo } from "../../types/common";

    const namespace: string = "common";

    @Component({
        components: {
            "ls-navigator": Navigator,
            "ls-menu": Menu
        }
    })
    export default class MainLayout extends Vue {
        @Action("setUserInfo", { namespace })
        private setNowUser: (info: UserInfo) => void;

        @Getter("getUserInfo", { namespace })
        private uInfo: UserInfo;

        @Getter("getTestInfo", { namespace })
        private testInfo: string;

        /**
         * 页面变量定义
         * @define navObj 导航栏数据对象
         * @define menuObj 左侧树数据对象
         * @define menuCollapse 菜单树是否收起
         */
        private navObj: any = {userName: "", title: ""} as any;
        private menuObj: string = "[]";
        private menuCollapse: boolean = false;

        protected mounted() {
            let currentUser: string = sessionStorage.getItem("currentUser") as string;

            this.setNowUser({id: "fjdsjfldjsl", name: currentUser} as UserInfo);

            this.navObj = {userName: currentUser, title: 'test'} as any;
            this.menuObj = sessionStorage.getItem("menus") || "[]";
        }

        /* navigator 点击事件 */
        private onClickNav(action: string) {
            switch (action) {
                case "refresh":
                    this.refreshView();
                    break;
                case "logout":
                    this.$router.push({path: '/login'});
                    break;
                default:
                    break;
            }
        }

        /* menu 点击事件 */
        private collapseEvt(action: any) {
            switch (action.action) {
                case "collapseMenu":
                    this.menuCollapse = action.collapse;
                    break;
                default:
                    break;
            }
        }

        /* 刷新窗口 */
        private refreshView() {
            window.location.reload();
        }
    };
</script>