/*********************************************************************
 * single select component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">简单/自定义的形参单选</div>
        <ls-row>
            <ls-column :col="8">
                <ls-dropdown-select :datas="selectDatas" v-model="nowPick" @clickSelectItem="itemPickEvt"></ls-dropdown-select>
            </ls-column>
            <ls-column :col="8">
                <ls-dropdown-select idProperty="testId"
                                    valueProperty="testValue"
                                    labelProperty="testName"
                                    :isEnableFilter="true"
                                    :isMatchSearchValue="filterFunc"
                                    :datas="testDatas"
                                    v-model="nowTestPick">
                </ls-dropdown-select>
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
<style>

</style>
<script lang="ts">
    import { Vue, Component, Watch } from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '下拉', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "单选下拉组件的使用方法",
            subTitle: "查看单选组件的使用详情在‘pages/demo/selection/base.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码（简单）',
                desc: `&lt;ls-dropdown-select :datas="selectDatas" v-model="nowPick"&gt;&lt;/ls-dropdown-select&gt;`
            },
            {
                title: '实现代码（自定义）',
                desc: `&lt;ls-dropdown-select idProperty="testId" valueProperty="testValue" labelProperty="testName" :isMatchSearchValue="filterFunc" :isEnableFilter="true" :datas="selectDatas" v-model="nowPick"&gt;&lt;/ls-dropdown-select&gt;`
            },
            {
                title: '参数说明',
                desc: `selectDatas: 下拉数据（id: 必须唯一, value: 选项值, name: 显示值）, nowPick: 当前选中的值`
            },
            {
                title: '形参说明',
                desc: `idProperty 指定使用ID属性（即selectDatas得id为指定属性）, labelProperty 指定使用label属性, valueProperty 指定使用value属性, isEnableFilter 允许用户输入过滤, isMatchSearchValue: (item: any, value: any) => boolean 使用用户得过滤方法`
            },
            {
                title: '点击事件说明',
                desc: `clickSelectItem: (item: {id: String, key: String, $event: Event}) => void 选择项点击事件 返回一个对象 id、key、$event（当前点击事件源）`
            }
        ] as any[];

        @Watch("nowTestPick")
        private onTestChange(val: string): void {
            this.$lensyn.alarm.show('自定义选择提示', 'success', `当前选择值：${val}`, true);
        }

        /**
         * 页面参数释义
         * @param selectDatas 下拉框选择数据列表
         * @param nowPick 下拉框当前选择数据
         */
        private selectDatas: any[] = [
            {id: 1, value: "1", name: "select-1"},
            {id: 2, value: "2", name: "select-2"},
            {id: 3, value: "3", name: "select-3"},
            {id: 4, value: "4", name: "select-4"},
            {id: 5, value: "5", name: "select-5"},
            {id: 6, value: "6", name: "select-6"},
            {id: 7, value: "7", name: "select-7"},
            {id: 8, value: "8", name: "select-8"},
            {id: 9, value: "9", name: "select-9"}
        ] as any[];
        private testDatas: any[] = [
            {testId: "001", testValue: "001", testName: "select-1", filter: '009'},
            {testId: "002", testValue: "002", testName: "select-2", filter: '008'},
            {testId: "003", testValue: "003", testName: "select-3", filter: '007'},
            {testId: "004", testValue: "004", testName: "select-4", filter: '006'},
            {testId: "005", testValue: "005", testName: "select-5", filter: '005'},
            {testId: "006", testValue: "006", testName: "select-6", filter: '004'},
            {testId: "007", testValue: "007", testName: "select-7", filter: '003'},
            {testId: "008", testValue: "008", testName: "select-8", filter: '002'},
            {testId: "009", testValue: "009", testName: "select-9", filter: '001'}
        ] as any[];
        private nowPick: string = '5';
        private nowTestPick: string = '005';

        private filterFunc(item: any, val: string): boolean {
            debugger;
            return item.filter && item.filter.toLowerCase().indexOf(val && val.toLowerCase()) > -1;
        }

        private mounted(): void {
            this.readFile('../demo/selection/base.vue');
        }

        /* 点击事件 */
        private itemPickEvt(item: any): void {
            debugger;
            console.log(item);
        }
    }
</script>