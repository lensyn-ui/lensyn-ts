/*********************************************************************
 * date picker component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">按钮</div>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="false" @buttonEvent="buttonEvent"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="true"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="false"
                   :type="'primary'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="true"
                   :type="'primary'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="false"
                   :type="'success'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="true"
                   :type="'success'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="false"
                   :type="'warning'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'normal'"
                   :disabled="true"
                   :type="'normal'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'big'"
                   :disabled="false"
                   :type="'danger'"></ls-button>
        <ls-button :text="'按钮'"
                   :disabled="false"
                   :type="'danger'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'mini'"
                   :disabled="true"
                   :type="'danger'"></ls-button>
        <ls-button :text="'按钮'"
                   :size="'mini'"
                   :disabled="true"
                   :type="'danger'">自定义
            </ls-button>
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
            {name: '按钮', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "按钮组件的使用方法",
            subTitle: "查看按钮组件的使用详情在‘pages/demo/button/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-button :text="'按钮'" :size="'normal'" :disabled="false" @buttonEvent="buttonEvent"&gt;&lt;/ls-button&gt;`
            },
            {
                title: '参数说明',
                desc: `text: 按钮显示文字, size: （normal: 正常, big: 大, mini: 小）, disabled: 是否可以点击, buttonEvent: 点击事件, type: （primary: 主要, success: 成功, warning: 警告, danger: 危险）`
            }
        ] as any[];

        /* 按钮点击事件 */
        private buttonEvent(): void {

        }
    }
</script>