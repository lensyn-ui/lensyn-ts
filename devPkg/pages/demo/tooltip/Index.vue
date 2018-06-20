/*********************************************************************
 * alarm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">tooltip</div>
        <ls-button :text="'tooltip'" :size="'normal'"
                   :type="'primary'" v-tooltip.top="'tooltip'"></ls-button>
        <ls-button :text="'tooltip'" :size="'normal'"
                   :type="'primary'" v-tooltip.bottom="'tooltip'"></ls-button>
        <ls-button :text="'tooltip'" :size="'normal'"
                   :type="'primary'" v-tooltip.left="'tooltip'"></ls-button>
        <ls-button :text="'tooltip'" :size="'normal'"
                   :type="'primary'" v-tooltip.right="'tooltip'"></ls-button>
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
            {name: 'tooltip', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "tooltip框组件的使用方法",
            subTitle: "查看tooltip框组件的使用详情在‘pages/demo/tooltip/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-button :text="'tooltip'" :size="'normal'" :type="'primary'" v-tooltip.top="'tooltip'"&gt;&lt;/ls-button&gt;`
            },
            {
                title: '参数说明',
                desc: `text: 提示内容, size: （big: 大, normal: 常用, mini: 小）, type: （primary: 提示, warning: 警告, danger: 危险）, v-tooltip.top: (top: 上方, left: 左边, right: 右边, bottom: 下边)`
            }
        ] as any[];
    }
</script>