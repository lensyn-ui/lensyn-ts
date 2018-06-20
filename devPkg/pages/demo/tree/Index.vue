/*********************************************************************
 * tree component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">树</div>
        <ls-tree :isEnableChecked="false" :datas="treeDatas" @treeEvent="treeEvent" style="margin-top: 10px;"></ls-tree>
        <div class="introduce-title">带选择框树</div>
        <ls-tree :isEnableChecked="true" :datas="treeDatas" @treeEvent="treeEvent" style="margin-top: 10px;"></ls-tree>
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
            {name: '树', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "树组件的使用方法",
            subTitle: "查看树组件的使用详情在‘pages/demo/tree/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-tree :isEnableChecked="false" :datas="treeDatas" @treeEvent="treeEvent" style="margin-top: 10px;""&gt;&lt;/ls-tree&gt;`
            },
            {
                title: '参数说明',
                desc: `treeDatas: 下拉数据，必须参数（id: 必须唯一, children: 子节点数组, name: 显示值）, treeEvent: 树点击事件，可以根据action来判断具体的事件类型`
            }
        ] as any[];
        private treeDatas: any[] = [
            {
                id: "1",
                name: "node-1",
                children: [
                    {
                        id: "1-1",
                        name: "node-1-1",
                        children: [
                            {id: "1-1-1", name: "node-1-1-1"},
                            {id: "1-1-2", name: "node-1-1-2"},
                        ]
                    },
                    {id: "1-2", name: "node-1-2"},
                    {id: "1-3", name: "node-1-3"},
                    {id: "1-4", name: "node-1-4"}
                ]
            }
        ] as any[];
        private nowPick: string = 'select-2';

        /* 树形事件捕获方法 */
        private treeEvent(args: any): void {
            switch(args.action) {
                case 'clickLabel':
                    console.log(args.data.name);
                    break;
                case 'clickExpandIcon':
                    console.log(args.data.name);
                    break;
                case 'checked':
                    console.log(args.data.name);
                    break;
                case 'unchecked':
                    console.log(args.data.name);
                    break;
                default:
                    break;
            }
        }
    }
</script>