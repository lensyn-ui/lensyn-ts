/*************************************************
* Created by zhangtao on 2018/04/17
*************************************************/
<template>
    <ls-dropdown class="feature-search" ref="dropdown">
        <div slot="input">
            <ls-plain-input v-model="searchValue" @valueChange="onSearchValueChange" updateType="input">

            </ls-plain-input>
        </div>
        <ul slot="list">
            <li v-for="item in currentShowDatas" :key="getItemId(item)">
                <span class="feature-name"
                      @click="onClickItem(item)">
                    {{getItemLabel(item)}}
                </span>
                <ul v-if="isItemHaveChild(item)">
                    <li v-for="child in getItemChildren(item)">
                        <span class="feature-name"
                              @click="onClickItem(child)">
                            {{getItemLabel(child)}}
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </ls-dropdown>
</template>

<script lang="ts">
    import {Component, Prop, Watch} from "vue-property-decorator";
    import Widget from "./base/Widget.vue";
    import Dropdown from "./Dropdown.vue";
    import PlainInput from "./form-widgets/PlainInput.vue";
    import { Tool } from "../util";

    @Component({
        components: {
            "ls-dropdown": Dropdown,
            "ls-plain-input": PlainInput
        }
    })
    export default class FeatureSearch extends Widget {
        @Prop({type: Array})
        private datas: any[]
        @Prop({type: String, default: "name"})
        private labelKey: string;
        @Prop({type: String, default: "id"})
        private idKey: string
        @Prop({type: String, default: "children"})
        private childKey: string;
        @Prop({type: Number, default: 16})
        private itemIndent: number;
        @Prop({type: Function})
        private isFeatureMatch: (value: string, data: any) => boolean;

        private searchValue: string = "";
        private currentShowDatas: any[] = [];

        @Watch("datas")
        private onDataChange() {
            this.refreshShowDatas();
        }

        @Watch("searchValue")
        private onSearchValueChange() {
            this.refreshShowDatas();
        }

        private mounted() {
            this.refreshShowDatas();
        }

        private refreshShowDatas() {
            this.currentShowDatas = Tool.tree.filterTree(this.datas, (item: any) => {
                return this.isFeatureMatch(this.searchValue, item);
            });
        }

        private getItemLabel(data: any): string {
            return data[this.labelKey];
        }

        private getItemId(data: any): string | number {
            return data[this.idKey];
        }

        private getItemChildren(data: any): any[] {
            return data[this.childKey];
        }

        private isItemHaveChild(data: any): boolean {
            return typeof data[this.childKey] !== "undefined";
        }

        private onClickItem(data: any) {
            let dropdown = this.$refs.dropdown as any;

            dropdown.collapse();
            this.$emit("featureEvent", {action: "clickItem", data});
        }
    };
</script>