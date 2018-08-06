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
                   :type="'danger'"></ls-button>
        <div class="introduce-title">自定义按钮</div>
        <ls-button :size="'normal'"
                   :disabled="false"
                   :type="'primary'">
            <div>
                <span>自定义按钮</span>
                <i>这里可以是icon</i>
            </div>
        </ls-button>
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

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '按钮', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "按钮组件的使用方法",
            subTitle: "查看按钮组件的使用详情在‘pages/demo/button/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-button :text="'按钮'" :size="'normal'" :disabled="false" @buttonEvent="buttonEvent"&gt;&lt;/ls-button&gt;`
            },
            {
                title: '参数说明',
                desc: `text 按钮显示文字, size: （normal: 正常, big: 大, mini: 小）, disabled: 是否可以点击, type: （default: 默认（可以不传）, primary: 主要, success: 成功, warning: 警告, danger: 危险）`
            },
            {
                title: '事件说明',
                desc: `buttonEvent: () => void 点击事件`
            }
        ] as any[];


        private mounted(): void {
            this.readFile('../demo/button/Index.vue');
        }


        /* 按钮点击事件 */
        private buttonEvent(): void {
            this.$lensyn.alarm.show("按钮点击事件", "success", "按钮点击事件", true);
        }
    }
</script>