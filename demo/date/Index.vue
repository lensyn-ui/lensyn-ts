/*********************************************************************
 * date picker component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">默认选择器</div>
        <ls-date-picker v-model="dateValue"></ls-date-picker>
        <div class="introduce-title">时间选择器</div>
        <ls-date-picker v-model="timeValue" format="YYYY-MM-DD HH:mm:ss"></ls-date-picker>
        <div class="introduce-title">联合日期选择器</div>
        <ls-date-picker class="mini" v-model="unitValue"></ls-date-picker>
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
    import { Vue, Component } from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '日期', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo = {
            title: "日期组件的使用方法",
            subTitle: "查看日期组件的使用详情在‘pages/demo/date/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-date-picker v-model="datePickerValue" style="margin-top: 10px;""&gt;&lt;/ls-date-picker&gt;`
            },
            {
                title: '参数说明',
                desc: `datePickerValue: 当前选择值`
            },
            {
                title: '引用文档说明',
                desc: `https://weifeiyue.github.io/vue-datepicker-local/`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param dateValue 当前日期选择值
         * @param timeValue 当前时间选择值
         * @param unitValue 多个时间选择值
         */
        private dateValue: string = "";
        private timeValue: string = "";
        private unitValue: string[] = [];

        private mounted(): void {
            this.readFile('../demo/date/Index.vue');
        }
    }
</script>