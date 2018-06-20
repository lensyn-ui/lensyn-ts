/*********************************************************************
 * alarm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">简单表格</div>
        <ls-grid style="margin-top: 10px; height: 320px;" :datas="testDatas" :columns="testColumnSets" :isEnablePagination="false"></ls-grid>
        <div class="introduce-title">自定义表格</div>
        <ls-grid ref="grid" :datas="testDatas" :columns="testColumns" style="margin-top: 30px;"
                 :isShowFooter="true" :isShowFooterCheckbox="true" :isEnablePagination="false"
                 rowClassNameFn="#{id} === 1 ? 'dd' : 'bb'" />
        <div class="introduce-title">固定列表格</div>
        <!--<ls-grid :datas="testDatas" :columns="testColumnSets" style="margin-top: 30px; height: 200px;"
                 :isShowFooter="false" :isShowFooterCheckbox="true" :isEnablePagination="false"
                 rowClassNameFn="#{id} === 1 ? 'dd' : 'bb'" />-->
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
                { label: "hello", field: "hello", width: "100px" },
                { label: "radio", field: "radio" },
                { label: "jobName", field: "jobName" },
                { label: "分类", field: "categor", children: [
                    { label: "数据库类型", field: "category" },
                    { label: "主键关系", field: "radio" }
                ]},
                { label: "周", field: "cronTranslate" },
                { label: "状态", field: "statusTranslate" }
            ]
        ] as any[];
        private testColumns: any[] = [
            { label: "", field: "id", width: "50px", type: "checkbox", showInFooter: true },
            { label: "行号", field: "rowNumber", width: "50px", type: "rowNumber" },
            { label: "", field: "hello", width: "50px", type: "radio", footerSub: [
                { type: "custom", component: "ls-button", props: { name: "批量删除"},
                    style: {'width': '80px'}, className: "gray-btn", onClick: (data: any) => console.log(data)}
            ]},
            { label: "Hello", field: "hello", width: "50px", editor: "input", editOn: "click"},
            { label: "radio", field: "radio", editor: "ls-dropdown-select", editOn: "click", props: {
                datas: [
                    { id: "1", name: "任务分类", value: "searchType" },
                    { id: "2", name: "任务ID", value: "searchId" },
                    { id: "3", name: "创建人", value: "searchUser" }
                ]
            }},
            { label: "日期", field: "cronTranslate"},
            { label: "任务分类", field: "category", width: '180px', format: (value: any, rowData: any) => {
                return value + Math.random();
            } },
            { label: "状态", field: "statusTranslate", width: '75px', renderCell: (createElement: (d: string, p: any, f?: any[]) => VNode, data: any) => {
                return createElement('div', {
                    class: {
                        'demo-status': true,
                        'warning': data.statusTranslate === '暂停',
                        'danger': data.statusTranslate === '停止'
                    },
                    on: {
                        click: (evt: Event) => {
                            console.log(evt);
                        }
                    },
                    directives: [
                        {name: "tooltip", value: data.statusTranslate}
                    ]
                } as any, [data.statusTranslate]);
            } },
            { label: "创建人", field: "createUser" },
            { label: "操作", width: "200px", field: "operate", disabled: "#{id} === 2", visible: "#{id} !== 1", sub: [
                {
                    type: "button",
                    subType: "icon",
                    visible: "#{hello} !== '1'",
                    directives: [{name: "tooltip", value: '开始'}],
                    disabled: "#{id} === 4",
                    iconClass: "demo-font",
                    onClick: (data: any) => console.log(data)
                },
                { type: "button",
                    subType: "custom",
                    component: "ls-button",
                    props: { text: "test"},
                    onClick: (data: any) => console.log(data)
                }
            ]}
        ] as any[];
    }
</script>