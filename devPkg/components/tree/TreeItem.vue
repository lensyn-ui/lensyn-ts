/*************************************************
* Created by zhangtao on 2018/04/10
*************************************************/
<template>
    <div class="tree-item">
        <div class="node"
             :class="{active: isActive}"
             :style="{paddingLeft: nodeIndent}"
             @contextmenu="onClickContextMenu($event)"
             @click="onClickNode" @dblclick="onDoubleClickNode">
            <span v-if="currentNodeIsBranch" class="expand-icon" :class="{expand: isExpand}" ></span>
            <span v-if="isShowCheckbox" class="checkbox" :class="[checkedStatus]" @click="onClickCheckbox($event)"></span>
            <span v-if="isShowRadio" class="radio" :class="[checkedStatus]" @click="onClickRadio($event)"></span>
            <span class="label">{{getItemLabel(data)}}</span>
        </div>
        <div class="child" :class="{expand: isExpand}" v-if="isBranchNode">
            <tree-item v-for="item in getItemChildren(data)"
                       :level="level + 1"
                       :indent="indent"
                       :data="item"
                       :idProperty="idProperty"
                       :labelProperty="labelProperty"
                       :isEnableChecked="isEnableChecked"
                       :childProperty="childProperty"
                       :checkMode="checkMode"
                       @nodeEvent="handleNodeEvent"
                       :key="getItemId(item)" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Inject, Prop} from "vue-property-decorator";
    import {mixins} from "vue-class-component";
    import Widget from "../base/Widget.vue";
    import CommonMixin from "./CommonMixin.vue";

    @Component({
        name: "tree-item"
    })
    export default class TreeItem extends mixins(CommonMixin, Widget) {
        @Prop({type: Object, required: true})
        private data: any;
        @Prop({type: Number, default: 1})
        private level: number;

        @Inject()
        private expandIds: any[];
        @Inject()
        private activeIds: any[];
        @Inject()
        private checkedIds: any[];
        @Inject()
        private partCheckedIds: any[];

        private get isShowCheckbox(): boolean {
            return this.isEnableChecked && this.checkMode === "multiple";
        }

        private get isShowRadio(): boolean {
            return this.isEnableChecked &&
                this.checkMode === "single" &&
                this.isLeafNode(this.data);
        }

        private get isExpand(): boolean {
            let id = this.getItemId(this.data);

            return this.expandIds.indexOf(id) !== -1;
        }

        private get isActive(): boolean {
            let id = this.getItemId(this.data);

            return this.activeIds.indexOf(id) !== -1;
        }

        private get checkedStatus(): string {
            let id = this.getItemId(this.data);

            if (this.checkMode === "single") {
                return this.checkedIds.indexOf(id) === -1 ? "" : "checked";
            } else {
                if (this.checkedIds.indexOf(id) !== -1) {
                    return "checked";
                }

                if (this.partCheckedIds.indexOf(id) !== -1) {
                    return "partial";
                }
            }
            return "";
        }

        private get currentNodeIsBranch(): boolean {
            return this.isBranchNode(this.data);
        }

        private get nodeIndent(): string {
            return `${(this.level - 1) * this.indent}px`;
        }

        private onClickContextMenu($event: MouseEvent) {
            this.$emit("nodeEvent", {action: "contextMenu", data: this.data, $event});
        }

        private onClickNode() {
            this.$emit("nodeEvent", {action: "clickNode", data: this.data});
        }

        private onDoubleClickNode() {
            this.$emit("nodeEvent", {action: "doubleClickNode", data: this.data});
        }

        private onClickCheckbox($event: MouseEvent) {
            $event.stopPropagation();

            this.$emit("nodeEvent", {action: "clickCheckbox", data: this.data});
        }

        private onClickRadio($event: MouseEvent) {
            $event.stopPropagation();
            this.$emit("nodeEvent", {action: "clickRadio", data: this.data});
        }

        private handleNodeEvent(event: any) {
            this.$emit("nodeEvent", event);
        }
    };
</script>