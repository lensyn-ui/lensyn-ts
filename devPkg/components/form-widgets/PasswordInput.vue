
<template>
    <div class="ls-input" v-show="visible">
        <input type="password" @focus="onInputFocus" @blur="onInputBlur" v-model="inputValue" :readonly="widgetReadonly" :disabled="disabled" />
        <span v-show="isShowErrorMsg" class="msg error-msg" :class="[errorMsgPosition]">{{errorMsg}}</span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";
    import Input from "./Input.vue";
    import { FormValidateResult, FormValidateRule } from "dwh-component";

    @Component
    export default class PlainInput extends Input<String> {
        @Prop({type: String})
        protected value: string;
        
        protected inputValue: string = "";

        isValidInputValue(value: string): FormValidateResult {
            let rule = this.rule as FormValidateRule;

            if (rule && rule.required && this.isEmptyValue(this.inputValue)) {
                return {status: false, msg: rule.requiredMsg ? rule.requiredMsg : this.defaultRequiredMsg};
            }
            return {status: true};
        }
    }
</script>
