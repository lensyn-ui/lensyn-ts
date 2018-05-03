<template>
    <div class="category-select" :class="{expand: isExpand}" @click="onToggleExpand">
        <div class="selected"> {{currentSelectedName}} </div>
        <div class="dropdown" ref="dropdown">
            <ls-checkbox-list v-for="(item, index) in datas" :key="index"
                :title="item.title" :datas="item.datas" :value="currentSelectedValue[item.title]" @changeEvt="onChangeSelected">

            </ls-checkbox-list>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import { CategoryCheckboxListData, CheckboxListEvent, CategorySelectedData, CheckboxEvent, CheckboxListData } from "dwh-component";
    import FormWidget from "../base/FormWidget.vue";
    import CheckboxList from "./CheckboxList.vue";

    @Component({
        components: {
            "ls-checkbox-list": CheckboxList
        }
    })
    export default class CategorySelect extends FormWidget<CategorySelectedData> {
        @Prop({type: Array, required: true})
        private datas: CategoryCheckboxListData[];
        @Prop({type: Object, default: () => {}})
        protected value: CategorySelectedData;

        private isExpand: boolean = false;
        private currentSelectedValue: CategorySelectedData = {};
        private currentSelectedName: string = "";

        /**
         * 当值改变时更新当前选中的值
         * @param {object} currentValue - 当前选中的值
         */
        @Watch("value") 
        private onValueChange(currentValue: CategorySelectedData) {
            this.refreshCurrentSelectedValue();
        }

        @Watch("currentSelectedValue")
        private onCurrentSelectedValueChange() {
            this.refreshCurrentSelectedName();
        }

        private created() {
            this.refreshCurrentSelectedValue();
            this.refreshCurrentSelectedName();
        }

        /**
         * 收起展开下拉列表
         * 当点击下拉输入框时进行切换，点击其它地方不切换
         * @param {object} event
         */
        private onToggleExpand(event: Event): void {
            let target = event.target as HTMLElement,
                dropdown = this.$refs.dropdown as HTMLElement;

            if (dropdown.contains(target) || target === dropdown) {
                return;
            }

            this.isExpand = !this.isExpand;
        }

        /**
         * 当选中或取消选中时更新当前的选中值
         * @param {object} event
         */
        private onChangeSelected(event: CheckboxListEvent) {
            this.currentSelectedValue[event.title] = event.value;
            this.updateModel(this.currentSelectedValue);
            this.$nextTick(() => {
                this.$emit("changeEvt", {action: "check", value: this.currentSelectedValue});
            });
        }

        /**
         * 更新当前选中的值
         */
        private refreshCurrentSelectedValue() {
            this.currentSelectedValue = JSON.parse(JSON.stringify(this.value));
        }

        /**
         * 更新当前输入框中的值
         */
        private refreshCurrentSelectedName() {
            let datas = this.getSelectedItems();

            this.currentSelectedName = datas.map((item) => item.name).join(",");
        }

        /**
         * 查找当前选中的数据
         * @returns {object[]} - 被选中的项
         */
        private findCurrentSelectedItems(): CheckboxListData[] {
            let result: CheckboxListData[] = [];

            for (let key in this.currentSelectedValue) {
                if (this.currentSelectedValue.hasOwnProperty(key)) {
                    let values = this.currentSelectedValue[key],
                        datas = this.findCategoryDatasByTitle(key);

                    if (datas !== null) {
                        for (let i = 0, j = datas.length; i < j; ++i) {
                            if (values.indexOf(datas[i].value) !== -1) {
                                result.push(datas[i]);
                            }
                        }
                    }
                }
            }

            return result;
        }

        /**
         * 根据 title 查找对应的选项
         * @param {string} title
         * @returns {object[]} - 对应分组下的选项
         */
        private findCategoryDatasByTitle(title: string): CheckboxListData[] | null {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (this.datas[i].title === title) {
                    return this.datas[i].datas;
                }
            }
            return null;
        }

        /**
         * 获取当前选中的项
         */
        public getSelectedItems(): CheckboxListData[] {
            return this.findCurrentSelectedItems();
        }
    };
</script>
