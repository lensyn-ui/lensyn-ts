/*********************************************************************
 * alarm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">简单表格</div>
        <ls-row>
            <ls-column>
                <ls-grid style="height: 320px;"
                         :datas="testDatas"
                         :columns="testColumnSets"
                         :isEnablePagination="false"></ls-grid>
            </ls-column>
        </ls-row>
        <div class="introduce-title">自定义表格</div>
        <ls-row>
            <ls-column>
                <ls-grid ref="grid"
                         :datas="testDatas"
                         :columns="testColumns"
                         :isShowFooter="true"
                         :isShowFooterCheckbox="true"
                         :isEnablePagination="false"
                         rowClassNameFn="#{id} === 1 ? 'dd' : 'bb'"></ls-grid>
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

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '确认框', link: '', id: 'breadcrumb002'}
        ] as any[];
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
         * 页面参数释义
         * @param testDatas 表格测试数据
         * @param testColumnSets 简单表格列名数据
         * @param testColumns 简单表格列名数据
         */
        private testDatas: any[] = [
            { id: 1, category: "mysql", hello: "1", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 2, category: "mysql", hello: "2", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 3, category: "mysql", hello: "334", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 4, category: "mysql", hello: "336", radio: "wo", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 5, category: "mysql", hello: "338", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 6, category: "mysql", hello: "33", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 7, category: "mysql", hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
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
            { label: "", field: "id", width: "50px", type: "checkbox", showInFooter: true, showInHeader: true },
            { label: "行号", field: "rowNumber", width: "50px", type: "rowNumber" },
            {
                label: "",
                field: "hello",
                width: "50px",
                type: "radio",
                footerSub: [
                    {
                        type: "ls-button",
                        props: {text: "批量删除", status: 'primary'},
                        propsRowDataMap: {
                            text: (...d: any[]): string => {
                                console.log(d);
                                return "testName";
                            }
                        },
                        style: {'width': '80px'},
                        className: "gray-btn",
                        listenerMap: {buttonEvent: "btnEvt"},
                        btnEvt: (d: any) => {
                            console.log(d);
                        }
                    }
                ]
            },
            { label: "Hello", field: "hello", width: "50px", editor: "input", editOn: "click"},
            { label: "radio", field: "radio", editor: "ls-dropdown-select", editOn: "click", props: {
                datas: [
                    { id: "1", name: "任务分类", value: "searchType" },
                    { id: "2", name: "任务ID", value: "searchId" },
                    { id: "3", name: "创建人", value: "searchUser" }
                ]
            }},
            {
                label: "日期",
                field: "cronTranslate",
                format: (...d: any[]): string => {
                    return `format-${d[0]}`
                }
            },
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
            {
                label: "操作",
                width: "200px",
                field: "operate",
                sub: [
                    {
                        type: "ls-button",
                        props: { text: "删除", type: 'primary'},
                        propsRowDataMap: {
                            text: (...d: any[]): string => {
                                console.log(d);
                                return d[1].hello === '1' ? '测试' : '纽曼';
                            }
                        },
                        disabled: "#{hello} === '33'",
                        visible: `#{hello} !== '2'`,
                        style: {'width': '80px'},
                        listenerMap: {buttonEvent: "btnEvt"},
                        btnEvt: (d: any) => {
                            console.log(d);
                        },
                        directives: [
                            {name: "tooltip", value: '删除'}
                        ]
                    },
                    {
                        type: "ls-button",
                        props: { text: "删除1", type: 'primary'},
                        propsRowDataMap: {
                            text: (...d: any[]): string => {
                                console.log(d);
                                return d[1].hello === '1' ? '测试1' : '纽曼1';
                            }
                        },
                        disabled: (row: any): boolean => {
                            return row.hello === '1';
                        },
                        visible: `#{hello} !== '338'`,
                        style: {'width': '80px'},
                        listenerMap: {buttonEvent: "btnEvt"},
                        btnEvt: (d: any) => {
                            console.log(d);
                        }
                    }
                ]
            }
        ] as any[];

        private mounted(): void {
            this.readFile('../demo/table/Index.vue');
        }
    }
</script>