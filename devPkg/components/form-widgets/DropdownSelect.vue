/*************************************************
* Created by zhangtao on 2018/04/20
*************************************************/
<template>
    <ls-dropdown ref="dropdown" class="dropdown-select">
        <div slot="input" class="dropdown-select__input">
            {{inputValue}}
        </div>
        <div slot="list" class="dropdown-select__data">
            <div v-if="isEnableFilter" class="dropdown-select__filter-input-wrapper">
                <input class="dropdown-select__filter-input" v-model="filterValue" />
            </div>
            <ul class="dropdown-select_list">
                <li class="dropdown-select__list-item" v-for="item in showDatas"
                    :class="{'dropdown-select__list-item__checked': isItemChecked(item)}"
                    @click="onClickItem(item)"
                    :key="getItemId(item)">
                    {{getItemLabel(item)}}
                </li>
            </ul>
        </div>
    </ls-dropdown>
</template>

<script lang="ts">
    import {Component, Prop, Watch} from "vue-property-decorator";
    import FormWidget from "../base/FormWidget.vue";
    import Dropdown from "../Dropdown.vue";

    @Component({
        components: {
            "ls-dropdown": Dropdown
        }
    })
    export default class DropdownSelect extends FormWidget<string | number> {
        @Prop({type: Array, required: true})
        private datas: any[];
        @Prop({type: String, default: "id"})
        private idProperty: string;
        @Prop({type: String, default: "name"})
        private labelProperty: string;
        @Prop({type: Function})
        private isMatchSearchValue: (data: any) => boolean;
        @Prop({type: [String, Number], default: ""})
        protected value: string | number;
        @Prop({type: Boolean, default: false})
        private isEnableFilter: boolean;

        private currentSelected: string | number = "";
        private showDatas: any[] = [];
        private filterValue: string = "";

        private get inputValue() {
            let item = this.findItemById(this.currentSelected);

            if (item !== null) {
                return this.getItemLabel(item);
            }
            return "";
        }

        @Watch("filterValue")
        private onFilterValueChange() {
            this.refreshShowDatas();
        }

        @Watch("datas")
        private onDatasChange() {
            this.refreshShowDatas();
        }

        @Watch("value")
        private onValueChange(currentValue: string | number) {
            if (currentValue !== this.currentSelected) {
                this.currentSelected = this.value;
            }
        }

        protected mounted() {
            this.currentSelected = this.value;
            this.refreshShowDatas();
        }

        private refreshShowDatas() {
            this.showDatas = this.datas.filter((item) => this.checkedItemIsMatchFilterValue(item));
        }

        private checkedItemIsMatchFilterValue(item: any) {
            if (this.filterValue === "") {
                return true;
            }

            if (typeof this.isMatchSearchValue !== "undefined") {
                return this.isMatchSearchValue(item);
            }

            return this.defaultIsMatchSearchValue(item);
        }

        private defaultIsMatchSearchValue(item: any) {
            let label = this.getItemLabel(item);

            return label.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1;
        }

        private onClickItem(item: any) {
            let value = this.getItemId(item);

            if (value !== this.currentSelected) {
                let dropdown = this.$refs.dropdown as any;

                this.currentSelected = value;
                this.updateModel(this.currentSelected);
                dropdown.collapse();
            }
        }

        private findItemById(id: string | number) {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (this.getItemId(this.datas[i]) === id) {
                    return this.datas[i];
                }
            }
            return null;
        }

        private getItemLabel(item: any) {
            return item[this.labelProperty];
        }

        private getItemId(item: any) {
            return item[this.idProperty];
        }

        private isItemChecked(item: any) {
            return this.getItemId(item) === this.currentSelected;
        }

    };
</script>