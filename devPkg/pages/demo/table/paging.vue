/*********************************************************************
* alarm component usage
* Created by deming-su on 2018/6/19
*********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">本地数据分页展示表格</div>
        <ls-row>
            <ls-column>
                <ls-pagination-grid ref="gridNode"
                                    :datas="testDatas"
                                    :columns="testColumnSets"
                                    :isShowFooter="true"></ls-pagination-grid>
            </ls-column>
        </ls-row>
        <div class="introduce-title">远程Ajax数据分页展示表格</div>
        <ls-row>
            <ls-column>
                <ls-pagination-grid ref="ajaxGridNode"
                                    :store="reuqestFunc"
                                    :columns="testColumnSets"
                                    :isShowFooter="true"></ls-pagination-grid>
            </ls-column>
        </ls-row>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
        <div class="introduce-info">
            <pre v-html="nowText"></pre>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import {VNode} from "vue";
    import Template from "../Template.vue";

    import TableApi from "../../../api/table";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '确认框', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "提示/警示框组件的使用方法",
            subTitle: "查看提示/警示框框组件的使用详情在‘pages/demo/alarm/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `this.$lensyn.alarm.show('提示信息标题', '提示信息内容', 'success', 'success', true);`
            },
            {
                title: '参数说明',
                desc: `1.title  2.内容  3.弹出框类型  4.title的icon  5.是否有关闭按钮`
            }
        ] as any[];

        /**
         * 页面释义
         * @param testDatas 表格测试数据
         * @param testColumnSets 表格列数据
         * @param reuqestFunc Ajax 数据获取方法
         */
        private testDatas: any[] = [] as any[];
        private testColumnSets: any[] = [
            [
                { label: "列001", field: "column001" },
                { label: "列002", field: "column002" },
                { label: "列003", field: "column003" },
                { label: "列004", field: "column004" },
                { label: "列005", field: "column005" },
                { label: "列006", field: "column006" }
            ]
        ] as any[];
        private reuqestFunc = {
            query: (params: any, success: (d: any) => void, error?: (d: any) => void) => {

                /* 参数传递 */
                TableApi.getData({page: params.page, rows: params.rows, testParam: params.testParam}, (d: any) => {
                    success({total: d.totalNumber, datas: d.list});
                }, (d: any) => {
                    error && error(d);
                });
            }
        };

        private mounted(): void {
            this.readFile('../demo/table/paging.vue');
            this.getData();

            /* 带分页表格的参数数据传递 */
            (this.$refs.ajaxGridNode as any).forceUpdateGrid({testParam: `test${Math.ceil(Math.random()*1000)}`});
        }

        /* 本地数据获取方法 */
        private getData(): void {
            this.$lensyn.loading.show();
            setTimeout(() => {
                this.$lensyn.loading.hide();
                for(let i = 0;i < 67;i ++) {
                    this.testDatas.push({
                        column001: `${Math.ceil(Math.random()*10000)}`,
                        column002: `${Math.ceil(Math.random()*10000)}`,
                        column003: `${Math.ceil(Math.random()*10000)}`,
                        column004: `${Math.ceil(Math.random()*10000)}`,
                        column005: `${Math.ceil(Math.random()*10000)}`,
                        column006: `${Math.ceil(Math.random()*10000)}`
                    } as any);
                }
                (this.$refs.gridNode as any).refreshGrid();
            }, 3000);
        }
    }
</script>