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
        <div class="introduce-title">tag使用</div>
        <ls-row>
            <ls-column :col="24">
                <ls-tag>标签一</ls-tag>
                <ls-tag :close="true" :type="'success'">标签二</ls-tag>
                <ls-tag :close="true" :type="'warning'">标签三</ls-tag>
                <ls-tag :close="true" :type="'error'">标签四</ls-tag>
                <ls-tag :close="true">标签五</ls-tag>
                <ls-tag :close="true" :size="'mini'">标签六</ls-tag>
                <ls-tag :close="true" :size="'normal'">标签七</ls-tag>
                <ls-tag :close="true" :size="'big'">标签八</ls-tag>
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
            {name: 'tooltip', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo = {
            title: "tooltip框组件的使用方法",
            subTitle: "查看tooltip框组件的使用详情在‘pages/demo/tooltip/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: 'tooltip实现代码',
                desc: `&lt;ls-button :text="'tooltip'" :size="'normal'" :type="'primary'" v-tooltip.top="'tooltip'"&gt;&lt;/ls-button&gt;`
            },
            {
                title: 'tooltip参数说明',
                desc: `text: 提示内容, size: （big: 大, normal: 常用, mini: 小）, type: （primary: 提示, warning: 警告, danger: 危险）, v-tooltip.top: (top: 上方, left: 左边, right: 右边, bottom: 下边)`
            },
            {
                title: 'tag实现代码',
                desc: `&lt;ls-tag :close="true" :type="'success'" :size="'mini'"&gt;&lt;/ls-tag&gt;`
            },
            {
                title: 'tag参数说明',
                desc: `close 是否支持关闭, type 类型（success 成功, warning 警告, error 错误）, size 组件尺寸（normal 正常, mini 小尺寸, big 大尺寸）`
            }
        ] as any[];

        private mounted(): void {
            this.readFile('../demo/tooltip/Index.vue');
        }
    }
</script>