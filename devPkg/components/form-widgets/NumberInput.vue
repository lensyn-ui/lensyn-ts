<script lang="ts">
    import { Prop, Component } from "vue-property-decorator";
    import Input from "./Input.vue";
    import { FormValidateResult, FormValidateRule } from "dwh-component";

    @Component
    export default class NumberInput extends Input<number|null> {
        @Prop({type: [String, Number]})
        protected value: number;
        
        protected inputValue: number | null = null;

        private invalidNumberMsg: string = "请输入数字";

        private isNumber(value: any): boolean {
            if (this.isEmptyValue(value)) {
                return false;
            }

            if (isNaN(value)) {
                return false;
            }
            return true;
        }

        private getInvalidRangeMsg(): string {
            let rule = this.rule as FormValidateRule;

            let min = typeof rule.min !== "undefined" ? rule.min : null,
                max = typeof rule.max !== "undefined" ? rule.max : null;

            if (min !== null && max === null) {
                return `请输入大于 ${min} 的值`;
            }
            if (min === null && max !== null) {
                return `请输入小于 ${max} 的值`;
            }
            return `请输入 ${min} - ${max} 的值`;
        }

        isValidInputValue(value: number|null): FormValidateResult {
            let rule = this.rule as FormValidateRule;

            if (this.isEmptyValue(value) && (!rule || !rule.required)) {
                return {status: true};
            }

            if (this.rule && rule.required && this.isEmptyValue(value)) {
                return {status: false, msg: rule.requiredMsg ? rule.requiredMsg : this.defaultRequiredMsg};
            }

            if (!this.isNumber(value)) {
                return {status: false, msg: rule.invalidMsg ? rule.invalidMsg : this.invalidNumberMsg};                    
            }

            if (this.rule) {
                let formatValue: number = Number(value);

                if (typeof rule.min !== "undefined" && formatValue < rule.min ||
                    typeof rule.max !== "undefined" && formatValue > rule.max) {
                    return {status: false, msg: this.getInvalidRangeMsg()};
                }
            }
            return {status: true}
        }

        public getValue(): number {
            return Number(this.inputValue);
        }
    };
</script>