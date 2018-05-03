/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="application-container">
        <!-- 顶部导航菜单 ---start--- -->
        <ls-navigator
                @clickNav="onClickNav"
                @featureEvent="onFeatureEvent"
                :userName="currentUser"
                :isFeatureMatch="isFeatureMatch"
                :searchDatas="menuListData" />
        <!-- 顶部导航菜单 ---end--- -->

        <!-- 侧边栏菜单 ---start--- -->
        <ls-menu :menuList="menuListData" @menuEvt="onMenuEvt" />
        <!-- 侧边栏菜单 ---end--- -->

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
    import { MenuDataType, MenuEvent } from "dwh-component";
    import { MenuData } from "../../config";
    import {WidgetEvent} from "../../types/dwh-component";

    const  VIEW_FEATURE_MAP = [
        {
            view: "MyData",
            keywords: ["我的数据"]
        },
        {
            view: "ProjectManager",
            keywords: ["项目管理", "新建项目", "删除项目"]
        },
        {
            view: "ModelManager",
            keywords: ["模型管理", "新建模型", "新建Cube"]
        },
        {
            view: "TaskScheduling",
            keywords: ["任务调度", "迁移任务", "备份任务"]
        },
        {
            view: "SchedulingMonitor",
            keywords: ["调度监控"]
        },
        {
            view: "DataSource",
            keywords: ["数据源管理", "创建数据源", "数据源"]
        },
        {
            view: "WareHouseView",
            keywords: ["仓库视图"]
        }
    ];

    @Component({
        components: {
            "ls-navigator": Navigator,
            "ls-menu": Menu
        }
    })
    export default class MainLayout extends Vue {
        private currentUser: string = "";
        private menuCollapse: boolean = false;
        private menuListData: MenuDataType[] = MenuData;

        protected mounted() {
            let currentUser = sessionStorage.getItem("currentUser");

            if (currentUser !== null) {
                this.currentUser = currentUser;
            }
        }

        private isFeatureMatch(value: string, data: any) {
            if (value) {
                return data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
            }
            return true;
        }

        private onMenuEvt(event: MenuEvent) {
            this.menuCollapse = event.collapse;
        }

        private onClickNav({action, data}: WidgetEvent) {
            switch (action) {
                case "loginOut":
                    this.executeLoginOut();
                    break;
                case "searchFeature":
                    this.searchFeature(data);
                    break;
                case "refresh":
                    this.refreshView();
                    break;
                case "forward":
                    this.forwardView();
                    break;
                case "back":
                    this.backupView();
                    break;
                default:
                    break;
            }
        }

        private backupView() {
            this.$router.back();
        }

        private forwardView() {
            this.$router.forward();
        }

        private refreshView() {
            window.location.reload();
        }

        private searchFeature(keyword: string) {
            for (let i = 0, j = VIEW_FEATURE_MAP.length; i < j; ++i) {
                let item = VIEW_FEATURE_MAP[i];

                if (item.keywords.indexOf(keyword) !== -1) {
                    this.$router.push({name: item.view});
                    return;
                }
            }
        }

        private onFeatureEvent({action, data}: WidgetEvent) {
            if (action === "clickItem") {
                this.$router.push({path: data.link});
            }
        }

        private executeLoginOut() {
             let dialog = this.$lensyn.confirmDialog;
            dialog.show({
                title: "确认退出",
                msg: "确认退出？",
                confirmLabel: "是",
                cancelLabel: "否",
                onClickConfirm: () => {
                    this.$router.push({name: "Login"});
                    sessionStorage.removeItem("currentUser");
                    dialog.hide();
                },
                onClickCancel: () => {
                    dialog.hide();
                }
            });
        }
    };
</script>