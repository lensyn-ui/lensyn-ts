/*********************************************************************
 * multiple select component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">多选</div>
        <ls-multiple-select :datas="selectDatas" v-model="nowPick" style="margin-top: 10px;"></ls-multiple-select>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { VueConstructor } from "vue";

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
         * @param selectDatas 组件展示数据对象
         * @param nowVal 下拉选择器当前选择数据
         */
        private breadList: any[] = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '下拉', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "单选下拉组件的使用方法",
            subTitle: "查看单选组件的使用详情在‘pages/demo/selection/base.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-dropdown-select :datas="selectDatas" v-model="nowPick" style="margin-top: 10px;"&gt;&lt;/ls-dropdown-select&gt;`
            },
            {
                title: '参数说明',
                desc: `selectDatas: 下拉数据（id: 必须唯一, value: 选项值, name: 显示值）, nowPick: 当前选中的值`
            }
        ] as any[];
        private selectDatas: any[] = [
            {id: 1, value: 'select-1', name: "select-1"},
            {id: 2, value: 'select-2', name: "select-2"},
            {id: 3, value: 'select-3', name: "select-3"},
            {id: 4, value: 'select-4', name: "select-4"},
            {id: 5, value: 'select-5', name: "select-5"},
            {id: 6, value: 'select-6', name: "select-6"},
            {id: 7, value: 'select-7', name: "select-7"},
            {id: 8, value: 'select-8', name: "select-8"},
            {id: 9, value: 'select-9', name: "select-9"}
        ] as any[];
        private nowPick: string[] = ['select-6'];
    }
</script>