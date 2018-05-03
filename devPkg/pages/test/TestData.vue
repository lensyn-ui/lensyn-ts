<template>
    <div class="view project-view data-source-view">
        <div class="view-header" v-show="isShowPath">
            <ls-path :pathData="breadCrumbDatas" @clickEvt="closePath"></ls-path>
        </div>
        <div class="view-content">
            <div class="tool-bar">
                <div class="tool-item">
                    <ls-select v-model="projectTypeValue" :listObj="projectSelectOptions"></ls-select>
                </div>
                <div class="tool-item">
                    <ls-plain-input placeholder="请输入搜索" v-model="searchName"></ls-plain-input>
                </div>
                <div class="tool-item">
                    <ls-button name="确定" @clickEvt="searchEvt"></ls-button>
                </div>
            </div>
            <!--选项卡-->
            <ls-tabs
                    :tabsList="tabsData"
                    :isEnableCreateTab="false"
                    :defaultActiveTabIndex="0"
                    :isBorderTab="true"
                    @tabsClick="onChangeTaskStatusTab">

            </ls-tabs>

            <!-- 任务编辑弹出框 -->
            <ls-dialog v-show="isShowTaskEditDialog" :title="title" :title0="title0">

            </ls-dialog>


            <!--表格-->
            <ls-grid ref="grid"
                     :columns="columns"
                     :isShowFooter="true"
                     :isEnablePagination="true"
                     :perpageCount="10"
                     :datas="gridShowDatas"
            ></ls-grid>
            <!--<ls-grid ref="grid" :columns="columns"-->
                     <!--:store="dataSourceStore"-->
                     <!--:isShowFooter="true"-->
                     <!--:isEnablePagination="true"-->
                     <!--:formatQueryData="formatDataSource"-->
                     <!--:perpageCount="10"-->
                     <!--/>-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {BreadcrumbData, WidgetEvent, SelectData, TabData, EditDialogEvent} from "dwh-component";
    import BaseGridView from "../BaseGridView.vue";
    import {Path, Select, PlainInput, Grid, Tabs, PaginationGrid} from "../../components";
    import Dialog from "./Modal";
    import {loadTest} from "../../api/datasource";  /*getDataSourceList*/

    @Component({
        components: {
            "ls-grid": PaginationGrid,
            "ls-path": Path,
            "ls-select": Select,
            "ls-plain-input": PlainInput,
            "ls-tabs": Tabs,
            "ls-dialog": Dialog
        }
    })

    export default class extends BaseGridView {
        private isShowPath: boolean = true;
        private currentTab: string | number = '';

        private projectTypeValue: string = "projectName";
        private searchName: string = "";
        private isShowTaskEditDialog: boolean = false;
        private title: string = "新建";
        private title0: string = "fjdskljfldsjklf";

        // tabs
        private tabsData: TabData[] = [
            {id: "all", content: "全部"},
            {id: 0, content: "进行中"},
            {id: 1, content: "已暂停"},
            {id: 2, content: "已完成"}
        ];
        // 下拉
        private projectSelectOptions: SelectData[] = [
            {id: 1, name: "项目名", value: "projectName"},
            {id: 2, name: "创建人", value: "createUser"}
        ];
        // 面包屑
        private breadCrumbDatas: BreadcrumbData[] = [
            {id: 1, name: "首页"},
            {id: 2, name: "子页面1"},
            {id: 3, name: "子页面2"}
        ];
        // 表格
        private gridShowDatas: any[] = [];

        // 面包屑关闭
        private closePath(event: WidgetEvent) {
            if (event.action === "close") {
                this.isShowPath = false;
            }
        };

        // 选项卡切换
        private onChangeTaskStatusTab(event: any) {
            if (this.currentTab !== event.id) {
                console.log(event.id);
                this.currentTab = event.id;
            }
        }

        /*field是标识符，不然只会显示5个第五列*/
        private columns = [
            {label: "", field: "", type: "checkbox", showInFooter: true},
            {label: "名称", field: "dsName"},
            {label: "数据源地址", field: "url"},
            {label: "类型", field: "dsType"},
            {label: "创建人", field: "createUser"},
            {
                label: "操作", field: "operate", sub: [
                {
                    type: "button", subType: "icon",
                    directives: [{name: "tooltip", value: "编辑"}],
                    iconClass: "iconfont icon-bianji1",
                    onClick: () => this.showModal()
                },
                {
                    type: "button", subType: "icon",
                    directives: [{name: "tooltip", value: "删除"}],
                    iconClass: "iconfont icon-shanchu_lajitong"
                }
            ]
            }
        ];

        // 联动搜索
        private searchEvt() {
            console.log(this.projectTypeValue, this.searchName);
        }

        // 展示弹窗
        private showModal() {
            console.log(123);
            this.isShowTaskEditDialog = true;
        }


        // 获取表格数据
        private dataSourceStore() {
            loadTest({
                pageNum: 1,
                pageSize: 10
            }, (data: any) => {
                this.gridShowDatas = data.data;
            }, (error: any) => {
                this.handleRequestError(error);
            });
        };
//        private dataSourceStore = {
//            query: getDataSourceList
//        };

//        private formatDataSource(responseData: any): any {
//            let datas = responseData.data;
//
//            let formatData = datas.map((item: any) => {
//                let type = this.findDataSourceTypeById(item.dsType);
//
//                return {
//                    id: item.id,
//                    dsName: item.dsName,
//                    url: `${item.url}:${item.port ? item.port : ''}/${item.inst ? item.inst : ''}`,
//                    dsType: type!.value,
//                    createUser: item.createUser,
//                    createTime: item.createTime
//                }
//            });
//
//            return {datas: formatData, total: Number(responseData.total)};
//        }

        protected mounted() {
//            this.dataSourceStore();
        }
    }
</script>