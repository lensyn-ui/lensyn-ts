<template>
    <div class="checkbox-list" :class="{'have-title': isShowTitle}">
        <div class="checkbox-list-title" v-if="isShowTitle">
            <ls-checkbox :label="title" @change="onSelectedAll" :value="isSelectedAll" />
            <span>{{`(${datas.length})`}}</span>
        </div>
        <div class="checkbox-list-content">
            <ls-checkbox v-for="item in datas" :disabled="disabled" :key="item.name" 
                :value="isChecked(item.value)" :label="item.name" @changeEvt="onChangeCheckboxStatus" />
        </div>
        <span v-show="isShowErrorMsg" class="msg error-msg">{{errorMsg}}</span>
    </div>
</template>

<script lang="ts">
    import { mixins } from "vue-class-component";
    import { Component, Prop, Watch } from "vue-property-decorator";
    import { CheckboxListData, CheckboxEvent, FormValidateRule, FormValidateResult } from "dwh-component";
    import FormWidget from "../base/FormWidget.vue";
    import ValidateMixin from "../mixin/ValidateMixin";
    import Checkbox from "../form-widgets/Checkbox.vue";

    @Component({
        components: {
            "ls-checkbox": Checkbox
        }
    })
    export default class CheckboxList extends FormWidget<any[]> {
        @Prop({type: Array, required: true})
        private datas: CheckboxListData[];
        @Prop({type: String, default: ""})
        private title: string;
        @Prop({type: Array, default: () => []})
        protected value: any[];
        @Prop({type: [Object, Function]})
        protected rule: FormValidateRule;

        private errorMsg: string | undefined = "";
        private isShowErrorMsg: boolean = false;
        private checkboxValues: any[] = [];
        protected defaultRequiredMsg: string = "值不能为空";

        get isShowTitle(): boolean {
            return this.title.length > 0;
        }

        get isSelectedAll(): boolean {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (!this.isChecked(this.datas[i].value)) {
                    return false;
                }
            }
            return true;
        }

        @Watch("value")
        private onValueChange() {
           this.refreshCheckboxValues();
        }

        private created() {
            this.refreshCheckboxValues();
        }

        private isChecked(value: any): boolean {
            return this.checkboxValues.indexOf(value) !== -1;
        }

        private refreshCheckboxValues(): void {
            let value = this.value ? this.value : [];

            this.checkboxValues = JSON.parse(JSON.stringify(value));
        }

        private onChangeCheckboxStatus(event: CheckboxEvent): void {
            let data = this.findDataByName(event.name);

            if (data !== null) {
                if (this.isChecked(data.value)) {
                    this.checkboxValues.splice(this.checkboxValues.indexOf(data.value), 1);
                } else {
                    this.checkboxValues.push(data.value);
                }
            }
            if (this.validate()) {
                this.updateModel(this.checkboxValues);
                this.$nextTick(() => {
                    this.$emit("changeEvt", { action: "check", title: this.title, value: this.checkboxValues});
                });
            }
        }

        private findDataByName(name: string): CheckboxListData | null {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (this.datas[i].name === name) {
                    return this.datas[i];
                }
            }
            return null;
        }

        private onSelectedAll() {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                this.checkboxValues.push(this.datas[i].value);
            }
        }

        private validateValue(): FormValidateResult {
            if (this.rule && this.rule.required) {
                if (this.checkboxValues.length > 0) {
                    return {status: true};
                } else {
                    return {status: false, msg: this.defaultRequiredMsg};
                }
            }
            return {status: true};
        }

        protected validate(): boolean {
            let result = this.validateValue();

            if (!result.status) {
                this.isShowErrorMsg = true;
                this.errorMsg = result.msg;
                return false;
            } else {
                this.isShowErrorMsg = false;
                this.errorMsg = "";
            }
            return true;
        }

    }
</script>
