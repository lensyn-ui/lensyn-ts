/*********************************************************************
 * confirm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">弹框</div>
        <ls-button :text="'弹窗'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="showModal"></ls-button>
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
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Breadcrumb, Pagetips } from "../../../components";

    @Component({
        components: {
            'ls-breadcrumb': Breadcrumb,
            'ls-pagetips': Pagetips
        }
    })
    export default class extends Vue {

        /**
         * 页面参数释义
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param introduceInfo 组件使用方法
         */
        private breadList: any[] = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '弹框', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "弹框组件的使用方法",
            subTitle: "查看弹框框组件的使用详情在‘pages/demo/modal/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-modal :isShow="confShow" :title="'标题'" :isShowHeader="true" @modalEvent="modalEvent"&gt;&lt;/ls-modal&gt;`
            },
            {
                title: '参数说明',
                desc: `isShow: 是否显示, title: 显示标题文字, isShowHeader: 是否显示头部, modalEvent: 模态框点击事件`
            }
        ] as any[];
        private confShow: boolean = false;

        /* 确认框弹出方法 */
        private showModal(): void {
            this.confShow = true;
        }

        /* 弹出框点击事件 */
        private modalEvent(d: any): void {
            let type: string = d.action;
            this.confShow = false;
        }
    }
</script>