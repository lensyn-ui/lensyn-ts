<template>
    <div class="ls-input" v-show="visible" :class="{'disabled': disabled}">
        <input
                :placeholder="placeholder"
                @focus="onInputFocus"
                @blur="onInputBlur"
                @input="onInputInput"
                v-model="inputValue"
                :readonly="widgetReadonly"
                :disabled="disabled" />
        <span v-show="isShowErrorMsg" class="msg error-msg" :class="[errorMsgPosition]">{{errorMsg}}</span>
    </div>
</template>

<script lang="ts">
    import { Prop, Watch, Component } from "vue-property-decorator";

    import { FormValidateResult, FormValidateRule } from "dwh-component";
    import FormWidget from "../base/FormWidget.vue";

    @Component
    export default class Input<T> extends FormWidget<T> {
        @Prop({type: String, default: "bottom"})
        private errorMsgPosition: string;
        @Prop({type: [Object, Function]})
        protected rule: (value: T) => FormValidateResult | FormValidateRule;
        @Prop({type: String, default: ""})
        private placeholder: string;
        @Prop({type: String, default: "blur"})
        protected updateType: string;

        private errorMsg: string | undefined = "";
        private isShowErrorMsg: boolean = false;

        protected inputValue: T;
        protected defaultRequiredMsg: string = "值不能为空";
        protected defaultInvalidMsg: string = "请输入正确的值";

        @Watch("value")
        private onValueChange(currentValue: T): void {
            this.inputValue = currentValue;
        }

        @Watch("inputValue")
        private onInputValueChange() {
            this.$emit("valueChange");
        }

        protected created() {
            this.inputValue = this.value;
        }

        private isFunction(fn: any): boolean {
            return typeof fn === "function";
        }

        private onInputFocus(): void {
            this.errorMsg = "";
            this.isShowErrorMsg = false;
        }

        private onInputBlur(): void {
            if (this.updateType === "blur") {
                let result = this.validate();

                if (result) {
                    this.$emit("input", this.getValue());
                    this.$nextTick(() => this.$emit("change", this.getValue()));
                }
            }
        }

        private onInputInput(): void {
            if (this.updateType === "input") {
                let result = this.validate();

                if (result) {
                    this.$emit("input", this.getValue());
                    this.$nextTick(() => this.$emit("change", this.getValue()));
                }
            }
        }

        protected validate(): boolean {
            let result = this.validateValue(this.inputValue);

            if (!result.status) {
                this.isShowErrorMsg = true;
                this.errorMsg = result.msg;

                return false;
            }
            return true;
        }

        private validateValue(value: T): FormValidateResult {
            if (this.isFunction(this.rule)) {
                return this.rule(value) as FormValidateResult;
            }

            return this.isValidInputValue(value);
        }

        protected isEmptyValue(value: any): boolean {
            return ["", null, undefined].indexOf(value) !== -1;
        }

        protected isValidInputValue(value: T): FormValidateResult {
            throw new Error("child must implements isValidInputValue");
        }

        public isValid(): boolean {
            let result = this.isValidInputValue(this.inputValue);

            return result.status;
        }

        public getValue(): T {
            return this.inputValue;
        }

    };
</script>
