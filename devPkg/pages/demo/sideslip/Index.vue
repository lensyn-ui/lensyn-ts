/*********************************************************************
 * sideslip component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">提示/警示框</div>
        <ls-row>
            <ls-column :col="12">
                <ls-button text="显示 panel" @buttonEvent="buttonEvent"></ls-button>
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
        <ls-panel-drawer-layout
                :isShow="sideslipShow"
                :isEnableResize="true"
                @panelDrawerLayoutEvent="onPanelDrawerLayoutEvent">
            <div slot="content">
                <h1>dd</h1>
            </div>
        </ls-panel-drawer-layout>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '侧滑弹出框', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo = {
            title: "侧滑弹出框组件的使用方法",
            subTitle: "查看侧滑弹出框组件的使用详情在‘pages/demo/sideslip/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-panel-drawer-layout :isShow="sideslipShow" :isEnableResize="true" @panelDrawerLayoutEvent="onPanelDrawerLayoutEvent"&gt;&lt;/ls-panel-drawer-layout&gt;`
            },
            {
                title: '参数说明',
                desc: `isShow 是否显示, isEnableResize 是否允许变化宽度`
            },
            {
                title: '事件说明',
                desc: `panelDrawerLayoutEvent: (action: {action: string}) => void 点击事件反馈`
            }
        ] as any[];

        /**
         * 页面数据释义
         * @param sideslipShow 侧滑
         */
        private sideslipShow: boolean = false;

        private mounted(): void {
            this.readFile('../demo/sideslip/Index.vue');
        }

        /* 提示/警示框弹出方法 */
        private buttonEvent(): void {
            this.sideslipShow = !this.sideslipShow;
        }

        /* 策划事件 */
        private onPanelDrawerLayoutEvent(action: any): void {
            if(action.action === 'close') this.sideslipShow = false;
        }
    }
</script>