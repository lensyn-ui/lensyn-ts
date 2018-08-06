<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">rate star</div>
        <div>
            <ls-rate :isEnableHover="true"></ls-rate>
            <ls-rate :isEnableHover="true"
                     :value="nowStar"
                     :rateCount="starTotal"
                     :isEnableEdit="true"
                     @input="rateChange"></ls-rate>
        </div>
        <div class="introduce-info">
            <div class="item">
                <div class="title">参数说明</div>
                <div class="desc">
                    value可以设置多少克星被选中，rateCount设置有多少颗星，isEnableHover设置鼠标滑过是否显示星星，isEnableEdit设置星星是否可编辑，如果可以编辑，则给组件绑定@input事件，在事件里面修改星星的值。
                </div>
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
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: 'rate star', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "rate组件的使用方法",
            subTitle: "查看rate组件的使用详情在‘pages/demo/rate/Index.vue’",
            type: 'primary'
        } as any;

        /**
         * 页面参数定义
         * @param starTotal 星星总数
         * @param nowStar 当前星星数
         */
        private nowStar: number = 3;
        private starTotal: number = 6;

        private mounted(): void {
            this.readFile('../demo/rate/Index.vue');
        }

        private rateChange(event: any) {
            this.nowStar = event as number;
        }
    }
</script>