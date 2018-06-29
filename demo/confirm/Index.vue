/*********************************************************************
 * confirm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">输入框</div>
        <ls-button :text="'默认'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="showConfirm('default')"></ls-button>
        <ls-button :text="'自定义'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="showConfirm('self')"></ls-button>
        <!--弹窗 icon:primary,success warning alarm refuse四种类型,不传icon或者传''就是icon没有;
        button: default,primary,success,warning,danger四种类型,默认default+primary;
        btnText按钮文字: 数组从左到右,如果只传一个只有一个按钮,同时把btnType作为按钮的class-->
        <ls-confirm :isShow="confShow0"
                    :title="'默认确认框'"
                    :text="'默认确认框提示信息'"
                    :icon="'primary'"
                    :leftBtnType="'default'"
                    :leftBtnText="'取消'"
                    :leftShow="true"
                    :rightBtnType="'primary'"
                    :rightBtnText="'确定'"
                    :rightShow="true"
                    @confirmEvent="confEvt"></ls-confirm>
        <ls-confirm :isShow="confShow1" @confirmEvent="confEvt0">
            <div style="padding: 15px;">
                <div style="text-align: center;">
                    <h3>自定义</h3>
                    <p>这个弹窗里面的内容是自定义的</p>
                </div>
            </div>
        </ls-confirm>
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
            {name: '确认框', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "确认框组件的使用方法",
            subTitle: "查看确认框框组件的使用详情在‘pages/demo/confirm/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-confirm :isShow="confirm1" :icon="'primary'"&gt;&lt;/ls-confirm&gt;`
            },
            {
                title: '参数说明',
                desc: `弹窗 icon:primary,success warning alarm refuse四种类型,不传icon或者传''就是icon没有; button: default,primary,success,warning,danger四种类型,默认default+primary; btnText按钮文字: 数组从左到右,如果只传一个只有一个按钮,同时把btnType作为按钮的class`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param confShow0 确认提示显示标志
         * @param confShow1 确认提示显示标志
         */
        private confShow0: boolean = false;
        private confShow1: boolean = false;


        private mounted(): void {
            this.readFile('../demo/confirm/Index.vue');
        }


        /* 确认框弹出方法 */
        private showConfirm(type: string): void {
            if(type === 'default') {
                this.confShow0 = true;
            } else {
                this.confShow1 = true;
            }
        }

        /* 弹出框点击事件 */
        private confEvt(d: any): void {
            let type: string = d.action;
            this.confShow0 = false;
        }
        private confEvt0(d: any): void {
            let type: string = d.action;
            this.confShow1 = false;
        }
    }
</script>