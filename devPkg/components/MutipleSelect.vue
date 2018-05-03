<template>
    <ls-dropdown ref="dropdown" :isCover="isCover" :isAllowExpand="currentDatas.length > 0" class="mutiple-select">
        <ul slot="input" class="selected">
            <li v-for="item in currentSelectedDatas" :key="getItemKey(item)">
                {{getItemName(item)}} <i v-if="isShowRemoveIcon(item)" class="close-icon" @click.stop="removeSelectedItem(item)"></i>
            </li>
        </ul>

        <ul slot="list" class="options" >
            <li v-for="item in currentDatas" :key="getItemKey(item)" @click="onSelectItem(item)">{{getItemName(item)}}</li>
        </ul>
    </ls-dropdown>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";
    import Dropdown from "./Dropdown.vue";
    import Input from "./form-widgets/Input.vue";

    @Component({
        components: {
            "ls-dropdown": Dropdown
        }
    })
    export default class MutipleSelect extends Input<string[] | number[]> {
        @Prop({type: Array, default: () => []})
        private datas: any[]
        @Prop({type: String, default: "id"})
        private idKey: string;
        @Prop({type: String, default: "name"})
        private labelKey: string;
        @Prop({type: String, default: "name"})
        private valueKey: string;
        @Prop({type: Array, default: () => []})
        protected value:  any[];
        @Prop({type: Boolean, default: true})
        private isCover: boolean;

        private currentDatas: any = [];
        private currentSelectedDatas: any[] = [];

        @Watch("datas")
        private onDatasChange() {
            this.currentSelectedDatas = [];
            this.currentDatas = [];
            this.refreshCurrentDatas();
        }

        @Watch("value")
        private onInitValueChange() {
            this.currentSelectedDatas = [];
            this.currentDatas = [];
            this.refreshCurrentDatas();
        }

        @Watch("currentDatas")
        private onCurrentDatasChange(currentValue: any[]) {
            if (currentValue.length === 0) {
                let dropdown = this.$refs.dropdown as any;
                dropdown.collapse();
            }
        }

        private get isSimpleData(): boolean {
            return typeof this.datas[0] !== "object";
        }

        private mounted() {
            this.refreshCurrentDatas();
        }

        private isShowRemoveIcon(item: any) {
            if (!this.isSimpleData && item.isFixed) {
                return false;
            }
            return true;
        }

        private refreshCurrentDatas() {
            let datas = JSON.parse(JSON.stringify(this.datas));

            for (let i = 0, j = datas.length; i < j; ++i) {
                let item = datas[i],
                    itemValue = this.getItemValue(item) as string;

                if (!this.isSimpleData && item.isFixed) {
                    this.currentSelectedDatas.push(item);
                } else {
                    if (this.value.indexOf(itemValue) === -1) {
                        this.currentDatas.push(item);
                    } else {
                        this.currentSelectedDatas.push(item);
                    }
                }

            }
        }

        private getCurrentValue(): any[] {
            return this.currentSelectedDatas.map((item: any) => this.getItemValue(item));
        }

        private getItemValue(item: any): any{
            if (this.isSimpleData) {
                return item;
            }
            return item[this.valueKey];
        }

        private getItemName(item: any) {
            if (this.isSimpleData) {
                return item;
            }
            return item[this.labelKey];
        }

        private getItemKey(item: any): any {
            if (this.isSimpleData) {
                return item;
            }
            return item[this.idKey];
        }

        private onSelectItem(data: any) {
            this.currentDatas = this.currentDatas.filter((item: any) => item !== data);
            this.currentSelectedDatas.push(data);
            this.updateModel(this.getCurrentValue());
        }

        private removeSelectedItem(data: any) {
           this.currentSelectedDatas = this.currentSelectedDatas.filter((item) => item !== data);
           this.currentDatas.push(data);
            this.updateModel(this.getCurrentValue());
        }
    }
</script>

