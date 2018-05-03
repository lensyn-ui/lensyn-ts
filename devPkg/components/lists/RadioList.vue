<template>
    <div class="radio-list">
        <ls-radio v-for="item in datas" :key="item.name" :dataKey="item.name"
                :value="radioValues[item.name]" :label="item.label" @changeEvt="onToggleRadioCheck" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import FormWidget from "../base/FormWidget.vue";
    import Radio from "../form-widgets/Radio.vue";

    interface RadioDataItem {
        name: string;
        label: string;
    }

    @Component({
        components: {
            "ls-radio": Radio
        }
    })
    export default class RadioList extends FormWidget<{[key: string]: boolean}> {
        @Prop({type: Array, required: true})
        private datas: RadioDataItem[];

        private radioValues: {[key: string]: boolean} = {};

        @Watch("value")
        private onValueChange(currentValue: {[key: string]: boolean}) {
            this.refreshRadioValue();
        }

        private created() {
            this.refreshRadioValue();
        }

        private refreshRadioValue() {
            let value = this.value ? this.value : {};

            for (let i = 0, j = this.datas.length; i < j; ++i) {
                let item = this.datas[i];

                this.$set(this.radioValues, item.name, !!value[item.name]);
            }
        }

        private onToggleRadioCheck(event: {name: string, value: boolean}) {
            let data: {[key: string]: boolean} = {[event.name]: event.value};

            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (this.datas[i].name !== event.name) {
                    data[this.datas[i].name] = false;
                }
            }
            this.updateModel(data);
        }

        public getValue(): {[key: string]: boolean} {
            return this.radioValues;
        }
    }
</script>

