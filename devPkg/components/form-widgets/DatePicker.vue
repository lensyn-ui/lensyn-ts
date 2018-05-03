<template>
    <div class="ls-input" v-show="visible">
        <div class="date-picker">
            <input type="date" @focus="onInputFocus" @blur="onInputBlur" v-model="inputValue" :readonly="widgetReadonly" :disabled="disabled" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";
    import { FormValidateResult, FormValidateRule } from "dwh-component";
    import Input from "./Input.vue";

    @Component
    export default class DatePicker extends Input<string> {
        @Prop({type: String})
        protected value: string;
        @Prop({type: String, default: "yyyy-MM-dd"})
        private dateFormat: string;
        
        protected inputValue: string = "";
        
        isValidInputValue(value: string): FormValidateResult {
            let rule = this.rule as FormValidateRule;

            if (rule && rule.required && this.isEmptyValue(this.inputValue)) {
                return {status: false, msg: rule.requiredMsg ? rule.requiredMsg : this.defaultRequiredMsg};
            }
            return {status: true};
        }

        private formatDate(format: string, date: Date): string {
            let o : {[key: string]: number} = {
                "M+": date.getMonth()+1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth()+3)/3),
               "S": date.getMilliseconds()
            };
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));               
            }   
            
            for (let k in o) {
                if (o.hasOwnProperty(k)) {
                    if (new RegExp("("+ k +")").test(format)) {
                        let replaceStr = RegExp.$1.length === 1 ? o[k] :
                                                                  ("00" + o[k]).substring(("" + o[k]).length);
                        format = format.replace(RegExp.$1, replaceStr as string);                 
                    }   
                }
            }
            return format;
        }

        public getValue(): string {
            if (this.inputValue) {
                return this.formatDate(this.dateFormat, new Date(this.inputValue));
            }
            return this.inputValue;
        }
    };
</script>
