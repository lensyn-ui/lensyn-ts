<template>
    <div class="grid-demo">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">栅格</div>
        <ls-row>
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
        </ls-row>
        <ls-row>
            <ls-column :col="10">col-10</ls-column>
            <ls-column :col="8">col-8</ls-column>
            <ls-column :col="4">col-4</ls-column>
            <ls-column :col="2">col-2</ls-column>
        </ls-row>
        <ls-row>
            <ls-column :col="10">col-10</ls-column>
            <ls-column :col="8" :offset="6">col-8  offset-6</ls-column>
        </ls-row>
        <ls-row>
            <ls-column :col="10" :offset="2">col-10</ls-column>
            <ls-column :col="8" :offset="4">col-8  offset-6</ls-column>
        </ls-row>
        <ls-row :gutter="0">
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
            <ls-column :col="6">col-6</ls-column>
        </ls-row>
        <ls-row :gutter="0">
            <ls-column :col="10">col-10</ls-column>
            <ls-column :col="8">col-8</ls-column>
            <ls-column :col="4">col-4</ls-column>
            <ls-column :col="2">col-2</ls-column>
        </ls-row>
        <div class="grid-no-top">
            <ls-row :gutter="0">
                <ls-column :col="6">col-6</ls-column>
                <ls-column :col="6">col-6</ls-column>
                <ls-column :col="6">col-6</ls-column>
                <ls-column :col="6">col-6</ls-column>
            </ls-row>
            <ls-row :gutter="0">
                <ls-column :col="10">col-10</ls-column>
                <ls-column :col="8">col-8</ls-column>
                <ls-column :col="4">col-4</ls-column>
                <ls-column :col="2">col-2</ls-column>
            </ls-row>
        </div>
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
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '栅格', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo: any = {
            title: "栅格组件的使用方法",
            subTitle: "栅格组件的使用详情在‘pages/demo/grid/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '参数说明',
                desc: `<p>栅格以24格为基数，ls-row表示一行，ls-column表示一列。其中，ls-column的参数col表示该列所占的基数，offset表示偏移的基数。一行中，所有列的col和offset之和不能大于24。</p>
<p>栅格生成的.columns-container元素中，默认是有 margin-top: 15px; 如果不需要上边距，可以自行在样式中写   margin-top: 0px; 以覆盖掉。</p>
<p>ls-row的参数gutter表示列与列之间的间距，默认是&lt;ls-row :gutter="20"&gt;，如果不需要间距，可以写为&lt;ls-row :gutter="0"&gt;。或者也可改成其他想要的任意值。</p>`
            }
        ] as any[];
    }
</script>
<style lang="less">
    .grid-demo{
        .columns-container{
            .contaier{
                background-color: #f5f5f5;
                border: 1px solid #dcdcdc;
            }
        }
        /* 这里是不要top的栅格 */
        .grid-no-top{
            margin-top: 15px;
            .rows-container{
                .columns-container{
                    margin-top: 0;
                }
            }
        }
    }
</style>