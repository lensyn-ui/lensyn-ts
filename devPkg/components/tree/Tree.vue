/*************************************************
* Created by zhangtao on 2018/04/10
*************************************************/
<template>
    <ul class="tree-ts">
        <ls-tree-item v-for="item in showDatas"
                      :level="1"
                      :indent="indent"
                      :idProperty="idProperty"
                      :labelProperty="labelProperty"
                      :childProperty="childProperty"
                      :key="getItemId(item)"
                      :isEnableChecked="isEnableChecked"
                      :data="item"
                      :checkMode="checkMode"
                      @nodeEvent="handleNodeEvent">
        </ls-tree-item>
    </ul>
</template>

<script lang="ts">
    import {Component, Prop, Provide, Watch} from "vue-property-decorator";
    import { mixins } from "vue-class-component";
    import Widget from "../base/Widget.vue";
    import TreeItem from "./TreeItem.vue";
    import CommonMixin from "./CommonMixin.vue";
    import { Tool } from "../../util";
    import ContextMenu from "./ContextMenu.ts";

    @Component({
        name: "tree",
        components: {
            "ls-tree-item": TreeItem
        }
    })
    export default class Tree extends mixins(CommonMixin, Widget) {
        @Prop({type: Array, default: () => []})
        private datas: any[];
        @Prop({type: Boolean, default: true})
        private isEnableActiveNode: boolean;
        @Prop({type: String, default: "single"})
        private activeNodeMode: string;
        @Prop({type: Boolean, default: true})
        private isOnlyLeafActive: boolean;
        @Prop({type: Object})
        private store: any;

        @Prop({type: Boolean, default: true})
        private isEnableContextMenu: boolean;
        @Prop({type: Function, default: () => false})
        private isShowContextMenu: (data: any) => boolean;
        @Prop({type: Object})
        private scopedSlots: any;
        @Prop({type: Function})
        private isAllowShowContextMenu: (data: any) => boolean;
        @Prop({type: Number, default: 10})
        private contextMenuLeftOffset: number;
        @Prop({type: Number, default: 10})
        private contextMenuTopOffset: number;

        private treeDatas: any[] = [];
        private loadDatasMap: {[key: string]: boolean} = {};
        private showDatas: any[] = [];

        @Provide()
        private expandIds: any[] = [];
        @Provide()
        private activeIds: any[] = [];
        @Provide()
        private checkedIds: any[] = [];
        @Provide()
        private partCheckedIds: any[] = [];

        @Watch("datas")
        private onDatasChange() {
            this.refreshTreeDatas();
        }

        private mounted() {
            this.refreshTreeDatas();
        }

        public getActiveDatas() {
            let datas: any[] = [];

            Tool.tree.forEachArrayTree(this.treeDatas, (item: any) => {
                if (this.isActiveNode(item)) {
                    datas.push(item);
                }
            });

            return datas;
        }

        public expandNode(data: any) {
            let id: any = this.getItemId(data),
                node = this.findNodeById(id);

            this.expandIds.push(id);
            this.handleExpandNode(node);
            this.emitEvent({action: "expand", data, node});
        }

        public filterNode(matchFn: (data: any) => boolean) {
            this.showDatas = Tool.tree.filterTree(this.treeDatas, matchFn);
        }

        public clearTree() {
            this.expandIds.splice(0, this.expandIds.length);
            this.loadDatasMap = {};
        }

        public removeNode(id: string) {
            let parentNode: any = null,
                childNode: any = null;

            Tool.tree.forEachArrayTree(this.treeDatas, (item, parent) => {
                if (parentNode === null) {
                    let nodeId = this.getItemId(item);
                    if (nodeId === id) {
                        parentNode = parent;
                        childNode = item;
                    }
                }
            });
            parentNode.children.splice(parentNode.children.indexOf(childNode), 1);
            this.treeDatas = this.treeDatas;
        }

        public isNodeChecked(data: any) {
            let id: any = data;

            if (typeof data === "object") {
                id = this.getItemId(data);
            }

            return this.checkedIds.indexOf(id) !== -1;
        }

        public isNodePartChecked(data: any) {
            let id: any = data;

            if (typeof data === "object") {
                id = this.getItemId(data);
            }

            return this.partCheckedIds.indexOf(id) !== -1;
        }

        public getCheckedLeafNode() {
            let result: any[] = [];

            Tool.tree.forEachArrayTree(this.treeDatas, (data: any) => {
                if (this.isLeafNode(data) && this.isNodeChecked(data)) {
                    result.push(data);
                }
            })
            return result;
        }

        public checkedAll() {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                this.handleCheckedNode(this.datas[i]);
            }
        }

        public clearChecked() {
            if (this.checkedIds.length !== 0) {
                for (let i = 0, j = this.datas.length; i < j; ++i) {
                    this.handleUnCheckedNode(this.datas[i]);
                }
            }
        }

        public setNodesBeChecked(datas: any) {
            for (let i = 0, j = datas.length; i < j; ++i) {
                this.setNodeBeChecked(datas[i]);
            }
        }

        public setNodeBeChecked(data: any) {
            let id: any = this.getItemId(data),
                node = this.findNodeById(id);

            if (node) {
                this.handleCheckedNode(node);
            }
        }

        private findNodeById(id: string): any {
            let node = null;

            Tool.tree.forEachArrayTree(this.treeDatas, (item: any) => {
                if (this.getItemId(item) === id) {
                    node = item;
                }
            });

            return node;
        }
        private isActiveNode(data: any): boolean {
            let id = this.getItemId(data);

            return this.activeIds.indexOf(id) !== -1;
        }

        private refreshTreeDatas() {
            let datas = JSON.parse(JSON.stringify(this.datas));

            this.showDatas = this.treeDatas = datas;
        }

        private handleNodeEvent({action, data, $event}: any) {
            switch (action) {
                case "clickNode":
                    this.handleClickNode(data);
                    break;
                case "clickCheckbox":
                    this.handleClickCheckbox(data);
                    break;
                case "clickRadio":
                    this.handleClickRadio(data);
                    break;
                case "doubleClickNode":
                    this.handleDoubleClickNode(data);
                    break;
                case "contextMenu":
                    this.handleClickContextMenu(data, $event);
                    break;
                default:
                    break;
            }
        }

        private handleClickContextMenu(data: any, $event: MouseEvent){
            if (this.isEnableContextMenu &&
                this.scopedSlots &&
                this.scopedSlots.contextMenu &&
                this.isAllowShowContextMenu(data)) {

                $event.preventDefault();
                let contextMenu = new ContextMenu(data, this.scopedSlots.contextMenu);
                contextMenu.show({
                    x: $event.pageX + this.contextMenuLeftOffset,
                    y: $event.pageY + this.contextMenuTopOffset
                });
            }
        }

        private handleDoubleClickNode(data: any) {
            this.emitEvent({action: "doubleClickNode", data});
        }

        private handleClickRadio(data: any) {
            let id = this.getItemId(data);

            this.checkedIds.splice(0, 1, id);
            this.emitEvent({action: "checkedRadio", data});
        }

        private handleClickCheckbox(data: any) {
            let id = this.getItemId(data),
                checkedIds = this.getNodeAndChildIds(data);

            if (this.isNodeChecked(data)) {
                this.handleUnCheckedNode(data);
            } else {
                this.handleCheckedNode(data);
            }
        }

        /**
         * 取消选中节点
         * @param {object} data
         * @todo 在计算完成后再修改 checkedIds 和 partCheckedIds
         */
        private handleUnCheckedNode(data: any) {
            let childIds = this.getNodeAndChildIds(data),
                parentNodes = this.getNodeParent(data);

            // 处理子节点
            for (let i = 0, j = childIds.length; i < j; ++i) {
                let id = childIds[i],
                    index = this.checkedIds.indexOf(id);

                if (index !== -1) {
                    this.checkedIds.splice(index, 1);
                }
            }

            // 处理父结点
            for (let i = 0, j = parentNodes.length; i < j; ++i) {
                let node = parentNodes[i],
                    nodeId = this.getItemId(node),
                    childs = this.getItemChildren(node),
                    checkedIndex = this.checkedIds.indexOf(nodeId),
                    parcheckedIndex = this.partCheckedIds.indexOf(nodeId),
                    checkedCount = 0;

                for (let k = 0, p = childs.length; k < p; ++k) {
                    let child = childs[k];

                    if (this.isNodeChecked(child) || this.isNodePartChecked(child)) {
                        checkedCount++;
                    }
                }

                if (checkedCount === 0) {
                    if (this.isNodePartChecked(node)) {
                        this.partCheckedIds.splice(parcheckedIndex, 1);
                    }
                } else if (checkedCount !== 0 && !this.isNodePartChecked(node)) {
                    this.partCheckedIds.push(nodeId);
                }

                if (checkedIndex !== -1) {
                    this.checkedIds.splice(checkedIndex, 1);
                }
            }
            this.$nextTick(() => this.emitEvent({action: "unchecked", data}));
        }

        /**
         * 选中结点
         * @param {object} data
         * @todo 在计算完成后再修改 checkedIds 和 partCheckedIds
         */
        private handleCheckedNode(data: any) {
            let childIds = this.getNodeAndChildIds(data),
                parentNodes = this.getNodeParent(data);

            // 处理子节点
            for (let i = 0, j = childIds.length; i < j; ++i) {
                let id = childIds[i],
                    partIndex = this.partCheckedIds.indexOf(id),
                    checkedIndex = this.checkedIds.indexOf(id);

                if (partIndex !== -1) {
                    this.partCheckedIds.splice(partIndex, 1);
                }

                if (checkedIndex === -1) {
                    this.checkedIds.push(id);
                }
            }

            // 处理父级节点，id 的顺序是从下到上
            for (let i = 0, j = parentNodes.length; i < j; ++i) {
                let node = parentNodes[i],
                    nodeId = this.getItemId(node),
                    childs = this.getItemChildren(node),
                    k = 0,
                    p = childs.length;

                for (; k < p; ++k) {
                    let childId = this.getItemId(childs[k]);

                    if (this.checkedIds.indexOf(childId) === -1) {
                        break;
                    }
                }

                if (k === p) {
                    if (this.checkedIds.indexOf(nodeId) === -1) {
                        this.checkedIds.push(nodeId);
                    }
                } else {
                    if (this.partCheckedIds.indexOf(nodeId) === -1) {
                        this.partCheckedIds.push(nodeId);
                    }
                }
            }
            this.$nextTick(() => this.emitEvent({action: "checked", data}));
        }

        private getNodeAndChildIds(data: any) {
            let ids: any[] = [];

            Tool.tree.forEachTree(data, (item) => {
                let id = this.getItemId(item);

                ids.push(id);
            });

            return ids;
        }

        /**
         * 获取一个节点的所有父级结点，包括自身
         * @param {object} data
         */
        private getNodeAndParent(data: any) {
            return Tool.tree.findArrayTreeParentPath(this.treeDatas, data, this.childProperty);
        }

        /**
         * 获取一个节点的所有父级结点
         * @param {object} data
         */
        private getNodeParent(data: any) {
            let datas = this.getNodeAndParent(data);

            datas.shift();

            return datas;
        }

        private handleClickNode(data: any) {
            let id = this.getItemId(data);

            if (this.isEnableActiveNode) {
                if (!this.isOnlyLeafActive || this.isLeafNode(data)) {
                    if (this.activeNodeMode === "single") {
                        this.activeIds.splice(0, this.activeIds.length, id);
                    } else {
                        if (this.activeIds.indexOf(id) === -1) {
                            this.activeIds.push(id);
                        } else {
                            this.activeIds.splice(this.activeIds.indexOf(id), 1);
                        }
                    }
                }
            }

            if (this.isBranchNode(data)) {
                if (this.expandIds.indexOf(id) === -1) {
                    this.expandNode(data);
                } else {
                    this.expandIds.splice(this.expandIds.indexOf(id), 1);
                    this.emitEvent({action: "collapse", data});
                }
            }
            this.emitEvent({action: "clickNode", data});
        }

        private handleExpandNode(data: any) {
            if (this.store) {
                let id = this.getItemId(data);

                if (!this.loadDatasMap[id]) {
                    this.store.load(data, (datas: any) => {
                        data.children = datas;
                        this.loadDatasMap[id] = true;
                    });
                }
            }
        }

        private emitEvent(event: any) {
            this.$emit("treeEvent", event);
        }
    };
</script>