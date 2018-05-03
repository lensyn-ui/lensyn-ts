/*************************************************
* Created by zhangtao on 2018/04/11
*************************************************/
<template>
    <div class="filter-tree">
        <ul class="filter-toolbar" v-if="isShowToolbar">
            <li class="tool-item iconfont icon-shanchu_lajitong" @click="onClickDelete">删除</li>
            <li class="tool-item iconfont icon-shuaxin" @click="onClickRefresh" >刷新</li>
        </ul>

        <div class="filter-content">
            <ls-input v-model="filterTable" :placeholder="placeholder" />
            <ls-tree
                    ref="tree"
                    :datas="datas"
                    :store="store"
                    :scopedSlots="$scopedSlots"
                    :isAllowShowContextMenu="isAllowShowContextMenu"
                    :labelProperty="labelProperty"
                    :isEnableActiveNode="isEnableActiveNode"
                    :checkMode="checkMode"
                    :isEnableChecked="isEnableChecked"
                    @treeEvent="onClickTree">
            </ls-tree>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import PlainInput from "./form-widgets/PlainInput.vue";
    import Tree from "./tree/Tree.vue";
    import Widget from "./base/Widget.vue";

    @Component({
        components: {
            "ls-input": PlainInput,
            "ls-tree": Tree
        }
    })
    export default class FilterTree extends Widget {
        @Prop({type: Array, default: () => []})
        private datas: any[];
        @Prop({type: String, default: "查找表格"})
        private placeholder: string;
        @Prop({type: Boolean, default: true})
        private isShowToolbar: boolean;
        @Prop({type: Object})
        private store: any;
        @Prop({type: Function})
        private isAllowShowContextMenu: (data: any) => boolean;
        @Prop({type: Boolean, default: false})
        private isEnableActiveNode: boolean;
        @Prop({type: String, default: "name"})
        private labelProperty: string;
        @Prop({type: Boolean})
        private isEnableChecked: boolean;
        @Prop({type: String})
        private checkMode: string;

        private filterTable: string = "";

        @Watch("filterTable")
        private onFilterTableChange() {
            this.filterTreeDatas();
        }

        public expandNode(data: any) {
            let tree = this.getTree();

            tree.expandNode(data);
        }

        public getActiveDatas() {
            let tree = this.getTree();

            return tree.getActiveDatas();
        }

        public filterTreeDatas() {
            let tree = this.getTree();

            tree.filterNode((data: any) => {
                if (!this.filterTable) {
                    return true;
                }

                return data.name.toLowerCase().indexOf(this.filterTable.toLowerCase()) !== -1;
            });
        }

        public removeNode(id: string) {
            let tree = this.getTree();

            tree.removeNode(id);
        }

        public clearTree() {
            let tree = this.getTree();

            tree.clearTree();
        }

        private getTree(): any {
            return this.$refs.tree as any;
        }

        private onClickTree(event: any) {
            this.$emit("treeEvent", event);
        }

        private onClickDelete() {
            this.$emit("btnEvent", {action: "delete"});
        }

        private onClickRefresh() {
            this.$emit("btnEvent", {action: "refresh"});
        }

    };
</script>

