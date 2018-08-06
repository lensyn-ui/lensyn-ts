/*********************************************************************
 * multiple select component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">多选</div>
        <ls-row>
            <ls-column :col="8">
                <ls-multiple-select :datas="selectDatas" v-model="nowPick"></ls-multiple-select>
            </ls-column>
            <ls-column :col="8">
                <ls-multiple-select :isRemoveSelected="true"
                                    idProperty="testId"
                                    valueProperty="testValue"
                                    labelProperty="testName"
                                    :datas="testDatas"
                                    v-model="nowTestPick"></ls-multiple-select>
            </ls-column>
            <ls-column :col="8">
                <ls-multiple-select
                        valueProperty="star"
                        v-model="levelSelectValue"
                        :userCustomList="true"
                        :datas="levelSelectDatas">
                    <ls-select-item v-for="item in levelSelectDatas"
                                    :key="item.id"
                                    :value="item.star"
                                    :id="item.id">
                        <div class="rate-select">
                            <ls-rate :value="item.star"></ls-rate>
                        </div>
                    </ls-select-item>

                </ls-multiple-select>
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
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '下拉', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo = {
            title: "单选下拉组件的使用方法",
            subTitle: "查看单选组件的使用详情在‘pages/demo/selection/base.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-dropdown-select :datas="selectDatas" v-model="nowPick" style="margin-top: 10px;"&gt;&lt;/ls-dropdown-select&gt;`
            },
            {
                title: '参数说明',
                desc: `selectDatas: 下拉数据（id: 必须唯一, value: 选项值, name: 显示值）, nowPick: 当前选中的值`
            },
            {
                title: '形参说明',
                desc: `idProperty 指定使用ID属性（即selectDatas得id为指定属性）, labelProperty 指定使用label属性, valueProperty 指定使用value属性, isRemoveSelected 从下拉选择框中移除已被选择的项`
            }
        ] as any[];

        /**
         * 页面数据释义
         * @param selectDatas 简单多选数据
         * @param selectDatas 复杂多选数据
         * @param nowPick 简单多选选中数据
         * @param nowTestPick 复杂多选选择数据
         */
        private selectDatas: any[] = [
            {id: 1, value: 'select-1', name: "select-1"},
            {id: 2, value: 'select-2', name: "select-2"},
            {id: 3, value: 'select-3', name: "select-3"},
            {id: 4, value: 'select-4', name: "select-4"},
            {id: 5, value: 'select-5', name: "select-5"},
            {id: 6, value: 'select-6', name: "select-6"},
            {id: 7, value: 'select-7', name: "select-7"},
            {id: 8, value: 'select-8', name: "select-8"},
            {id: 9, value: 'select-9', name: "select-9"}
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
        private nowPick: string[] = ['select-5'];
        private nowTestPick: string[] = ['005'];
        private  levelSelectValue = [];
        private levelSelectDatas = [
            { id: 1, star: 1, name: "1" },
            { id: 2, star: 2, name: "2" },
            { id: 3, star: 3, name: "3" },
            { id: 4, star: 4, name: "4" },
            { id: 5, star: 5, name: "5" }
        ];


        private mounted(): void {
            this.readFile('../demo/selection/multiple.vue');
        }
    }
</script>