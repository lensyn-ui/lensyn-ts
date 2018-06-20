/*********************************************************************
* alarm component usage
* Created by deming-su on 2018/6/19
*********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">简单表格</div>
        <ls-pagination-grid style="margin-top: 10px; height: 320px;"
                 :datas="testDatas"
                 :columns="testColumnSets"></ls-pagination-grid>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Breadcrumb, Pagetips } from "../../../components";
    import {VNode} from "vue";

    @Component({
        components: {
            'ls-breadcrumb': Breadcrumb,
            'ls-pagetips': Pagetips
        }
    })
    export default class extends Vue {

        /**
         * 页面参数释义
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param introduceInfo 组件使用方法
         * @param testDatas 表格测试数据
         * @param testColumnSets 简单表格列名数据
         * @param testColumns 简单表格列名数据
         */
        private breadList: any[] = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '确认框', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "提示/警示框组件的使用方法",
            subTitle: "查看提示/警示框框组件的使用详情在‘pages/demo/alarm/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `this.$lensyn.alarm.show('提示信息标题', '提示信息内容', 'success', 'success', true);`
            },
            {
                title: '参数说明',
                desc: `1.title  2.内容  3.弹出框类型  4.title的icon  5.是否有关闭按钮`
            }
        ] as any[];
        private testDatas: any[] = [
            { id: 1, category: "mysql", hello: "1", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 2, category: "mysql", hello: "2", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 3, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 4, category: "mysql",hello: "33", radio: "wo", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 5, category: "mysql",hello: "33", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 6, category: "mysql",hello: "33", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 7, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
        ] as any[];
        private testColumnSets: any[] = [
            [
                { label: "行号", field: "rowNumber", type: "rowNumber" },
                { label: "类型", field: "id", width: "100px" },
                { label: "分类", field: "categor", width: "100px", children: [
                    { label: "数据库类型", field: "category" },
                    { label: "主键关系", field: "radio", width: "100px" }
                ]},
                { label: "周", field: "cronTranslate" },
                { label: "状态", field: "statusTranslate" }
            ], [
                { field: "jobName", label: "334", width: "400px"}
            ]
        ] as any[];
    }
</script>