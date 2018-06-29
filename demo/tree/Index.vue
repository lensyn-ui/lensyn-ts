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
                <ls-tree :isEnableChecked="true" :datas="treeDatas" @treeEvent="treeEvent"></ls-tree>
            </ls-column>
        </ls-row>
        <div class="introduce-title">自定义样式树</div>
        <ls-row>
            <ls-column :col="12">
                <div class="self-tree-box">
                    <ls-tree :isEnableChecked="false"
                             :isEnableActiveNode="true"
                             :datas="treeDatas"
                             :renderTreeNode="renderEvt"
                             @treeEvent="treeEvent"></ls-tree>
                </div>
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
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { VNode } from "vue";
    import Template from "../Template.vue";

    @Component({})
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
                desc: `treeDatas 下拉数据，必须参数（id: 必须唯一, children: 子节点数组, name: 显示值）, isEnableActiveNode 是否表示选中元素（给选中元素添加选中样式及默认背景色，可重写样式）`
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

        private mounted(): void {
            this.readFile('../demo/tab/Index.vue');
        }

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

        /* 添加自定义数显示标签 */
        private renderEvt(createElement: (d: string, p: any, f?: any[]) => VNode, data: any) {
            return createElement('span', {
                class: {
                    'process-tree-icon': true,
                    'process-tree-root': !data.children || data.children.length === 0,
                    'process-tree-parent': data.children && data.children.length > 0
                },
                on: {

                }
            } as any, [data.name]);
        }
    }
</script>
<style lang="less">
    .self-tree-box {
        display: block;
        min-height: 200px;
        background: #f2f2f2;
        /* 树样式重写 ---start--- */

        .process-tree-parent:before,
        .process-tree-root:before {
            content: '文件';
            display: inline-block;
            vertical-align: baseline;
            margin: 0 5px 0 15px;
            font-size: 12px;
            color: #407dd1;
        }

        .process-tree-parent:before {
            content: '收起';
            color: #3cbb5b;
            margin: 0 5px 0 2px;
        }

        .tree__expand-icon--expand + .process-tree-parent:before {
            content: '展开';
            color: #3cbb5b;
        }

        .tree__node {
            border-left: solid 2px transparent;
        }

        .tree__node--active {
            border-left: solid 2px #407dd1;
            background-color: #ffffff !important;
        }

        .tree__expand-icon {
            margin-left: 15px;
        }

        /* 树样式重写 ---end--- */
    }
</style>