/*********************************************************************
 * single select component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">选项卡</div>
        <ls-tab :datas="tabDatas0"></ls-tab>
        <div class="introduce-title">可编辑选项卡</div>
        <ls-tab :datas="tabDatas" :isEnableCreateTab="true" :isEnableDeleteTab="true" @tabEvent="tabEvent"></ls-tab>
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
         * @param tabDatas tab默认数据
         */
        private breadList: any[] = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '选项卡', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "选项卡组件的使用方法",
            subTitle: "查看选项卡组件的使用详情在‘pages/demo/tab/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-tab :datas="tabDatas" :isEnableCreateTab="true" :isEnableDeleteTab="true" @tabEvent="tabEvent"&gt;&lt;/ls-tab&gt;`
            },
            {
                title: '参数说明',
                desc: `datas: 初始化tab数据，必须参数（id: key, name: 展示名字）, isEnableCreateTab: 可添加tab, isEnableDeleteTab: 可删除tab`
            }
        ] as any[];
        private tabDatas0: any[] = [
            {id: 1, name: "tab-1"},
            {id: 2, name: "tab-2"},
            {id: 4, name: "tab-4"},
            {id: 5, name: "tab-5"},
            {id: 6, name: "tab-6"},
            {id: 7, name: "tab-7"},
            {id: 8, name: "tab-8"}
        ] as any[];
        private tabDatas: any[] = [
            {id: 1, name: "tab-1", checked: true},
            {id: 2, name: "tab-2"},
            {id: 4, name: "tab-4"},
            {id: 5, name: "tab-5"},
            {id: 6, name: "tab-6"},
            {id: 7, name: "tab-7"},
            {id: 8, name: "tab-8"},
            {id: 9, name: "tab-9"},
            {id: 10, name: "tab-10"},
            {id: 11, name: "tab-11"},
            {id: 12, name: "tab-12"},
            {id: 13, name: "tab-13"}
        ] as any[];

        /* 点击事件监听 */
        private tabEvent(d: any): void {
            switch (d.action) {
                case 'clickTab':
                    // do something here;
                    break;
                case 'close':
                    let idx: number = this.tabDatas.findIndex((it: any) => it.id === d.data.id);
                    this.tabDatas.splice(idx, 1);
                    break;
                case 'create':
                    this.tabDatas.push({id: Date.now(), name: `tab-${Date.now()}`} as any);
                    break;
                default:
                    break;
            }
        }
    }
</script>