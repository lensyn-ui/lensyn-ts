<template>
    <div class="tree-custom">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
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
            <ls-column :col="12">
                <div class="notice-modal-info">
                    <ls-tree :isEnableChecked="true"
                             :idProperty="'orgCode'"
                             :labelProperty="'orgName'"
                             :datas="deptList"
                             :indent="28"
                             @treeEvent="treeEvent"></ls-tree>
                </div>
            </ls-column>
        </ls-row>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">自定义树说明</div>
                <div class="desc">
                    自定义树有可能会使树形事件捕获方法treeEvent的case发生变化，此时只需要在treeEvent去console一下args.action的对应值，再补充相应的case就行了。
                </div>
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
            {name: '自定义树', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "树组件的使用方法",
            subTitle: "自定义树组件的使用详情在‘pages/demo/tree/Custom.vue’",
            type: 'primary'
        } as any;

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

        private deptList: any[] = [
            {
                "orgName": "四川省能投集团有限公司",
                "orgCode": "rootka9exkrayqsy",
                "curStatus": 1,
                "orgType": "00",
                "indexOrder": 1,
                "children": [{
                    "orgName": "测试111",
                    "orgCode": "rootka9exkrayqsy1",
                    "curStatus": 11,
                    "orgType": "001",
                    "indexOrder": 11,
                    "children": [
                        {
                            "orgName": "测试1111",
                            "orgCode": "rootka9exkrayqsy11",
                            "curStatus": 111,
                            "orgType": "0011",
                            "indexOrder": 111,
                        },
                        {
                            "orgName": "测试1112",
                            "orgCode": "rootka9exkrayqsy12",
                            "curStatus": 1112,
                            "orgType": "0012",
                            "indexOrder": 1112,
                        }
                    ]
                }, {
                    "orgName": "测试222",
                    "orgCode": "rootka9exkrayqsy2",
                    "curStatus": 12,
                    "orgType": "002",
                    "indexOrder": 12,
                }]
            }
        ] as any[];

        /* 树形事件捕获方法 */
        private treeEvent(args: any): void {
            switch (args.action) {
                case 'clickLabel':
                    console.log(args.data.orgName);
                    break;
                case 'clickExpandIcon':
                    console.log(args.data.orgName);
                    break;
                case 'checked':
                    console.log(args.data.orgName);
                    break;
                case 'unchecked':
                    console.log(args.data.orgName);
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
                }
            } as any, [data.name]);
        }
    }
</script>
<style lang="less">
    .tree-custom {
        /* 左边树重写 */
        .self-tree-box {
            display: block;
            min-height: 200px;
            background: #f2f2f2;
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
        }
        /* 右边树重写 */
        .notice-modal-info {
            .tree__expand-icon {
                position: relative;
                margin-right: 4px;
                vertical-align: -3px;
                border-left-color: #f08500;
                &:before {
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: -6px;
                    display: block;
                    border: solid 5px transparent;
                    border-left-color: #fff;
                }
            }
            .tree__expand-icon.tree__expand-icon--expand {
                border-color: transparent;
                border-top-color: #f08500;
                &:before {
                    top: -6px;
                    left: -5px;
                    border-color: transparent;
                    border-top-color: #fff;
                }
            }
            .tree__checkbox.tree__checkbox--partial {
                background-color: #f08500;
                border-color: #f08500;
            }
            .tree__checkbox--checked {
                background-color: #f08500;
                border-color: #f08500;
                &:before {
                    top: -1px;
                    height: 10px;
                    border-width: 0 1px 1px 0;
                }
            }
        }
    }
</style>