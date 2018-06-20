/*********************************************************************
 * single select component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">输入框</div>
        <ls-input :placeholder="'请输入文字'"
                  :size="'big'"
                  v-model="val"
                  :autofocus="true"
                  @inputEvent="inputEvent"></ls-input>
        <ls-input :placeholder="'请输入文字'"
                  :size="'normal'"
                  v-model="val"
                  :widgetReadonly="true"></ls-input>
        <ls-input :placeholder="'请输入文字'"
                  :size="'mini'"
                  v-model="val"
                  :disabled="true"></ls-input>
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
            {name: '输入框', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "输入框组件的使用方法",
            subTitle: "查看输入框组件的使用详情在‘pages/demo/input/base.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-input :placeholder="'请输入文字'" :size="'big'" v-model="val" :autofocus="true" @inputEvent="inputEvent"&gt;&lt;/ls-input&gt;`
            },
            {
                title: '参数说明',
                desc: `placeholder: 默认提示, size: (big: 大, normal: 中, mini: 小), val: 输入值, autofocus: 是否自动获取焦点, inputEvent: 输入事件, widgetReadonly: 只读, disabled: 不可用`
            }
        ] as any[];
        private val: string = '';

        /* 输入事件监听 */
        private inputEvent(d: any): void {
            let oldValue: string = d.oldValue;
            let value: string = d.value;
            let action: string = d.action;
        }
    }
</script>