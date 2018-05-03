<template>
    <ls-dropdown class="tree-select" :class="{disabled: disabled}" :disabled="disabled" :offsetTop="0">
        <div slot="input" class="selected">{{currentSelectedName}}</div>
        <div slot="list" class="dropdown">
            <div class="dropdown-header">
                <div class="dock">
                    <div class="dock-body">
                        <ls-plain-input v-model="searchName" :placeholder="searchPlaceholder" />
                        <ls-button name="搜索" class="gray-btn" @clickEvt="onClickSearch"></ls-button>
                    </div>
                    <div class="dock-item">
                        <ls-button v-if="isShowClearBtn" name="清空" class="gray-btn" @clickEvt="onClickClear"></ls-button>
                        <ls-button v-if="isShowSelectAllBtn" name="全选" class="gray-btn" @clickEvt="onClickSelectAll"></ls-button>
                    </div>
                </div>
            </div>

            <div class="dropdown-content">
                <ls-tree ref="tree"
                         :datas="showTreeData"
                         :idProperty="idKey"
                         :labelProperty="labelKey"
                         :checkMode="checkMode"
                         :isEnableActiveNode="false"
                         @treeEvent="onChangeSelected"
                         :isEnableChecked="true">

                </ls-tree>
            </div>
        </div>
    </ls-dropdown>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import { TreeData, TreeDataItem, TreeEvent } from "dwh-component";
    import FormWidget from "../base/FormWidget.vue";
    import PlainInput from "../form-widgets/PlainInput.vue";
    import DropDown from "../Dropdown.vue";
    import Tree from "../tree/Tree.vue";
    import { Tool } from "../../util";

    @Component({
        components: {
            "ls-plain-input": PlainInput,
            "ls-dropdown": DropDown,
            "ls-tree": Tree
        }
    })
    export default class TreeSelect extends FormWidget<TreeData> {
        @Prop({type: Array, required: true})
        private datas: TreeData;
        @Prop({type: Array, default: () => {}})
        protected value: TreeData;
        @Prop({type: String, default: "id"})
        private idKey: string;
        @Prop({type: String, default: "name"})
        private labelKey: string;
        @Prop({type: String, default: "名称搜索"})
        private searchPlaceholder: string;
        @Prop({type: String})
        private checkMode: string;

        private showTreeData: TreeData = [];
        private searchName: string = "";
        private currentSelectedValue: TreeData = [];
        private currentSelectedName: string = "";

        private get isShowClearBtn() {
            return this.checkMode !== "single";
        }

        private get isShowSelectAllBtn() {
            return this.checkMode !== "single";
        }

        /**
         * 当值改变时更新当前选中的值
         * @param {object} currentValue - 当前选中的值
         */
        @Watch("value") 
        private onValueChange(currentValue: TreeData) {
            if (this.currentSelectedValue !== currentValue) {
                this.refreshCurrentSelectedValue();
                this.refreshShowTreeData();

            }
        }

        @Watch("datas")
        private onDatasChange() {
            this.refreshShowTreeData();
            if (this.currentSelectedValue !== this.value) {
                this.$nextTick(() => {
                    let tree = this.$refs.tree as any;
                    tree.setNodesBeChecked(this.value);
                });
            }
        }

        @Watch("currentSelectedValue")
        private onCurrentSelectedValueChange() {
            this.refreshCurrentSelectedName();
            this.refreshShowTreeData();
        }

        private created() {
            this.refreshCurrentSelectedValue();
            this.refreshCurrentSelectedName();
            this.refreshShowTreeData();
        }

        /**
         * 点击搜索
         */
        private onClickSearch() {
            this.refreshShowTreeData();
        }

        /**
         * 点击全选
         */
        private onClickSelectAll() {
            let tree = this.$refs.tree as any;

            tree.checkedAll();
        }

        /**
         * 点击清空
         */
        private onClickClear() {
            let tree = this.$refs.tree as any;

            tree.clearChecked();
        }

        /**
         * 当选中或取消选中时更新当前的选中值
         * @param {object} event
         */
        private onChangeSelected({action, data}: any) {
            if (action === "checked" || action === "unchecked") {
                let tree = this.$refs.tree as any,
                    datas = tree.getCheckedLeafNode();

                this.currentSelectedValue = datas;
                this.updateModel(this.currentSelectedValue);
                return;
            }

            if (action === "checkedRadio") {
                this.currentSelectedValue = [data];
                this.updateModel(this.currentSelectedValue);
                return;
            }
        }
        /**
         * 更新当前输入框中的值
         */
        private refreshCurrentSelectedName() {
            let datas = this.getSelectedItems();

            this.currentSelectedName = datas.map((item) => this.getItemName(item)).join(",");
        }

        /**
         * 获取一条数据的 id
         */
        private getItemId(data: TreeDataItem): string | number {
            return data[this.idKey];
        }

        /**
         * 获取一条数据的名称
         * @param {object} data
         */
        private getItemName(data: TreeDataItem): string {
            return data[this.labelKey];
        }

        /**
         * 判断一条数据是否匹配搜索的值
         * @param {object} data
         */
        private isMatchSearchValue(data: TreeDataItem): boolean {
            if (!this.searchName) {
                return true;
            }
            let name = this.getItemName(data);

            return name.indexOf(this.searchName) !== -1;
        }

        /**
         * 获取当前选中的项
         */
        public getSelectedItems(): TreeData {
            return this.currentSelectedValue;
        }

        /**
         * 更新当前选中的值
         */
        private refreshCurrentSelectedValue() {
            this.currentSelectedValue = JSON.parse(JSON.stringify(this.value));
        }

        /**
         * 过滤数据
         */
        private refreshShowTreeData() {
            let datas = Tool.tree.filterTree(this.datas, (item: TreeDataItem) => this.isMatchSearchValue(item));
            this.showTreeData = JSON.parse(JSON.stringify(datas));
        }
    };
</script>