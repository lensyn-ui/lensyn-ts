/*********************************************************************
* tree component usage
* Created by deming-su on 2018/6/19
*********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">默认/带选择框树</div>
        <ls-row>
            <ls-column :col="12">
                <ls-tree :isEnableChecked="false" :datas="treeDatas" @treeEvent="treeEvent"></ls-tree>
            </ls-column>
            <ls-column :col="12">
                <ls-tree :idProperty="'id'"
                         :labelProperty="'name'"
                         :isEnableChecked="true"
                         :datas="treeDatas"
                         :indent="28"
                         @treeEvent="treeEvent"></ls-tree>
            </ls-column>
        </ls-row>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {VNode} from "vue";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '树', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "树组件的使用方法",
            subTitle: "查看树组件的使用详情在‘pages/demo/tree/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-tree :isEnableChecked="false" :datas="treeDatas" @treeEvent="treeEvent" style="margin-top: 10px;""&gt;&lt;/ls-tree&gt;`
            },
            {
                title: '参数说明',
                desc: `datas 下拉数据，idProperty必须唯一，它是判断当前是否选中的标识；labelProperty表示选择框旁边的文本；isEnableActiveNode表示是否表示选中元素（给选中元素添加选中样式及默认背景色，可重写样式）；indent表示子节点文本的缩进值。`
            },
            {
                title: '点击事件说明',
                desc: `treeEvent: (action: string, data: any) => void 树点击事件 可以根据action来判断具体的事件类型 data 为返回数据`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param treeDatas 测试树数据
         */
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

        /* 树形事件捕获方法 */
        private treeEvent(args: any): void {
            switch (args.action) {
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

        /* 添加自定义数显示标签 */
        private renderEvt(createElement: (d: string, p: any, f?: any[]) => VNode, data: any) {
            return createElement('span', {
                class: {
                    'process-tree-icon': true,
                    'process-tree-root': !data.children || data.children.length === 0,
                    'process-tree-parent': data.children && data.children.length > 0
                },
                on: {}
            } as any, [data.name]);
        }
    }
</script>