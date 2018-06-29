/*********************************************************************
 * confirm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">默认弹框</div>
        <ls-button :text="'弹窗'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="showModal"></ls-button>
        <div class="introduce-title">根据位置定位弹框</div>
        <!--<ls-button :text="'弹窗'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="showSelfModal"></ls-button>-->
        <ls-modal :isShow="confShow"
                  :title="'标题'"
                  :isShowHeader="true"
                  @modalEvent="modalEvent">
            <div>this is body, you can defined it by yourself</div>
            <div slot="footer" style="text-align: center;">
                <ls-button :text="'取消'" type="default" @buttonEvent="modalEvent"></ls-button>
                <ls-button :text="'确定'" type="primary" @buttonEvent="modalEvent"></ls-button>
            </div>
        </ls-modal>
        <!--<ls-dropdown ref="dropdown" class="dropdown-select"
                     :isAutoWidth="true"
                     :disabled="false"
                     @dropdownEvent="handleDropdownEvent">
            <h1 slot="list">test</h1>
        </ls-dropdown>-->
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
            {name: '弹框', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "弹框组件的使用方法",
            subTitle: "查看弹框框组件的使用详情在‘pages/demo/modal/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-modal :isShow="confShow" :title="'标题'" :isShowHeader="true" @modalEvent="modalEvent"&gt;&lt;/ls-modal&gt;`
            },
            {
                title: '参数说明',
                desc: `isShow: 是否显示, title: 显示标题文字, isShowHeader: 是否显示头部, modalEvent: 模态框点击事件`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param confShow 是否显示弹出框
         * @param selfShow 是否显示自定义弹出框
         */
        private confShow: boolean = false;


        private mounted(): void {
            this.readFile('../demo/modal/Index.vue');
        }


        /* 确认框弹出方法 */
        private showModal(): void {
            this.confShow = true;
        }

        /* 弹出框点击事件 */
        private modalEvent(d: any): void {
            let type: string = d.action;
            this.confShow = false;
        }

        /* 自定义弹出框 */
        private showSelfModal(): void {

        }

        /* 自定义弹出框事件 */
        private handleDropdownEvent(): void {
            debugger;
        }
    }
</script>