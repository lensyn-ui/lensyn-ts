/*************************************************
* Created by zhangtao on 2018/04/08
*************************************************/
<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";
    import Input from "./Input.vue";
    import { FormValidateResult, FormValidateRule } from "dwh-component";

    @Component
    export default class RegValidateInput extends Input<String> {
        @Prop({type: String})
        protected value: string;

        protected inputValue: string = "";

        isValidInputValue(value: string): FormValidateResult {
            let rule = this.rule as FormValidateRule;

            if (this.isEmptyValue(value) && (!rule || !rule.required)) {
                return {status: true};
            }

            if (rule && rule.required && this.isEmptyValue(value)) {
                return {status: false, msg: rule.requiredMsg ? rule.requiredMsg : this.defaultRequiredMsg};
            }

            if (rule.regExp && rule.regExp.test(value)) {
                return {status: true};
            }

            return {status: false, msg: rule.invalidMsg ? rule.invalidMsg : this.defaultInvalidMsg};
        }
    };
</script>
