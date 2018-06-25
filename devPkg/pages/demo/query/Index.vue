/*********************************************************************
 * alarm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <ls-row :gutter="16">
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value1"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value2"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value3"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value4"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value5"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-input style="width: 100%;" :placeholder="'请输入文字'" v-model="queryObj.value6"></ls-input>
            </ls-column>
            <ls-column :col="4">
                <ls-button :text="'按钮'" :size="'normal'" :type="'primary'"></ls-button>
            </ls-column>
        </ls-row>
        <ls-row>
            <ls-column :col="24">
                <ls-grid ref="grid" :datas="testDatas" :columns="testColumns" style="margin-top: 30px;"
                         :isShowFooter="true" :isShowFooterCheckbox="true" :isEnablePagination="false"
                         rowClassNameFn="#{id} === 1 ? 'dd' : 'bb'"></ls-grid>
            </ls-column>
        </ls-row>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Breadcrumb, Pagetips, Row, Column } from "../../../components";

    import {VNode} from "vue";

    @Component({
        components: {
            'ls-breadcrumb': Breadcrumb,
            'ls-pagetips': Pagetips,
            'ls-row': Row,
            'ls-column': Column
        }
    })
    export default class extends Vue {
        /**
         * 页面参数释义
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param queryObj form表单数据对象
         * @param testDatas 表格测试数据
         * @param testColumns 表格列属性设置
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
        private queryObj: any = {
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: ''
        } as any;
        private testDatas: any[] = [
            { id: 1, category: "mysql", hello: "1", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 2, category: "mysql", hello: "2", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 3, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 4, category: "mysql",hello: "33", radio: "wo", jobName: "hello", cronTranslate: "星期二", statusTranslate: "停止", createUser: "zhang" },
            { id: 5, category: "mysql",hello: "33", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "暂停", createUser: "zhang" },
            { id: 6, category: "mysql",hello: "33", radio: "dd", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 7, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 8, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 9, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 10, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 11, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" },
            { id: 12, category: "mysql",hello: "33", radio: "ww", jobName: "hello", cronTranslate: "星期二", statusTranslate: "正常", createUser: "zhang" }
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
                    { id: "1", name: "任务分类", value: "任务分类" },
                    { id: "2", name: "任务ID", value: "任务ID" },
                    { id: "3", name: "创建人", value: "创建人" }
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