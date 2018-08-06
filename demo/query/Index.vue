/*********************************************************************
 * query component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <ls-row :gutter="16">
            <ls-column :offset="6" :col="6">
                <div class="search-form-item">
                    <div class="dock-label"><em>*</em>带*的表单</div>
                    <div class="dock-body">
                        <ls-input :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-label">文字左边</div>
                    <div class="dock-body">
                        <ls-input :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-label right">文字右边</div>
                    <div class="dock-body">
                        <ls-input :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-body full">
                        <ls-input :placeholder="'全列展示'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-body full">
                        <ls-input :placeholder="'图标框'" v-model="queryObj.value0"></ls-input>
                        <i class="icon">&#xe61a;</i>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-body full">
                        <ls-input :placeholder="'文字框'" v-model="queryObj.value0"></ls-input>
                        <i class="txt">测试</i>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="12">
                <div class="search-form-item">
                    <div class="dock-label block">文字右边</div>
                    <div class="dock-body full">
                        <ls-input :placeholder="'分行标签展示'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="24">
                <ls-button :text="'按钮'" :size="'normal'" :type="'primary'" @buttonEvent="buttonEvent"></ls-button>
            </ls-column>
        </ls-row>
        <ls-row :gutter="16">
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-label"><em>*</em>带*的表单</div>
                    <div class="dock-body">
                        <ls-input :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="6">
                <div class="search-form-item">
                    <div class="dock-label">文字左边</div>
                    <div class="dock-body">
                        <ls-input :placeholder="'请输入文字'" v-model="queryObj.value0"></ls-input>
                    </div>
                </div>
            </ls-column>
            <ls-column :col="24">
                <div class="search-form-item">
                    <div class="dock-body">
                        <ls-button :text="'对齐'" :size="'normal'" :type="'primary'" @buttonEvent="buttonEvent"></ls-button>
                    </div>
                </div>
            </ls-column>
        </ls-row>
        <ls-row>
            <ls-column :col="24">
                <ls-grid ref="grid" :datas="testDatas" :columns="testColumns" style="margin-top: 30px;"
                         :isShowFooter="true" :isShowFooterCheckbox="true" :isEnablePagination="false"
                         rowClassNameFn="#{id} === 1 ? 'dd' : 'bb'"></ls-grid>
            </ls-column>
        </ls-row>
        <ls-loading :isShow="loadingShow">
            <h2>加载中... ...</h2>
        </ls-loading>
        <div class="introduce-info">
            <pre v-html="nowText"></pre>
        </div>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import {VNode} from "vue";

    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '表单', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo = {
            title: "表单组件的使用方法",
            subTitle: "查看表单组件的使用详情在‘pages/demo/query/Index.vue’",
            type: 'primary'
        } as any;

        /**
         * 页面参数释义
         * @param queryObj form表单数据对象
         * @param testDatas 表格测试数据
         * @param testColumns 表格列属性设置
         * @param loadingShow 是否显示加载框
         */
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
                {
                    type: "ls-button",
                    props: { text: "批量删除", type: 'danger', size: 'mini' },
                    style: {'width': '100px'},
                    listenerMap: {buttonEvent: "btnEvt"},
                    btnEvt: (data: any) => console.log(data)
                }
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
                    type: "ls-button",
                    props: { text: "test", type: "warning", size: "mini" },
                    style: { width: '100px' },
                    listenerMap: {buttonEvent: "btnEvt"},
                    btnEvt: (data: any) => console.log(data)
                }
            ]}
        ] as any[];
        private loadingShow: boolean = false;

        private mounted(): void {
            this.readFile('../demo/query/Index.vue');
        }

        /* 查询事件 */
        private buttonEvent(): void {
            this.loadingShow = true;
            setTimeout(() => {
                this.loadingShow = false;
            }, 2800);
        }
    }
</script>