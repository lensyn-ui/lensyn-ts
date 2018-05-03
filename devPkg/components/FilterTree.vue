<template>
    <div class="filter-tree">
        <ul class="filter-toolbar" v-if="isShowToolbar">
            <li class="tool-item iconfont icon-shanchu_lajitong">删除</li>
            <li class="tool-item iconfont icon-shuaxin" >刷新</li>
        </ul>

        <div class="filter-content">
            <ls-input v-model="filterTable" :placeholder="placeholder" />
            <ls-tree :treeParams="{}" :treeObj="showDatas" @treeEvt="onClickTree"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import { TreeData } from "dwh-component";
    import PlainInput from "./form-widgets/PlainInput.vue";
    import Widget from "./base/Widget.vue";
    import { Tool } from "../util";

    @Component({
        components: {
            "ls-input": PlainInput
        }
    })
    export default class FilterTree extends Widget {
        @Prop({type: Array, default: () => []})
        private datas: TreeData;
        @Prop({type: String, default: "查找表格"})
        private placeholder: string;
        @Prop({type: Boolean, default: true})
        private isShowToolbar: boolean;

        private filterTable: string = "";
        private showDatas: TreeData = [];

        @Watch("datas")
        private onDatasChange() {
            this.refreshShowDatas();
        }

        @Watch("filterTable")
        private onFilterTableChange() {
            this.refreshShowDatas();
        }

        protected mounted() {
            this.refreshShowDatas();
        }

        private refreshShowDatas() {
            if (!this.filterTable) {
                this.showDatas = JSON.parse(JSON.stringify(this.datas));
            } else {
                let datas = Tool.tree.filterTree(this.datas, (item: any) => {
                    return item.name.toLowerCase().indexOf(this.filterTable.toLowerCase()) !== -1;
                });
                this.showDatas = JSON.parse(JSON.stringify(datas))
            }
        }

        private onClickTree(event: any) {
            this.$emit("treeEvt", event);
        }

    };
</script>

