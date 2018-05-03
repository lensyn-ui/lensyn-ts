import { Component, Prop, Vue } from "vue-property-decorator";

import { FormValidateResult, FormValidateRule } from "dwh-component"

@Component
export default class ValidateMixin<T> extends Vue {
    @Prop({type: [Object, Function]})
    protected rule: (value: T) => FormValidateResult | FormValidateRule;

    protected inputValue: T;
    protected errorMsg: string | undefined = "";
    protected isShowErrorMsg: boolean = false;
    protected defaultRequiredMsg: string = "值不能为空";
    protected defaultInvalidMsg: string = "请输入正确的值";

    protected validate(): boolean {
        let result = this.validateValue(this.inputValue);

        if (!result.status) {
            this.isShowErrorMsg = true;
            this.errorMsg = result.msg;

            return false;
        }
        return true;
    }

    protected validateValue(value: T): FormValidateResult {
        if (this.isFunction(this.rule)) {
            return this.rule(this.inputValue) as FormValidateResult;
        }
        return this.isValidInputValue(this.inputValue);
    }

    protected isFunction(value: any): boolean {
        return typeof value === "function";
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
};