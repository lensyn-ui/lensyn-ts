<template>
    <div class="text-radio-list">
        <div class="text-radio" v-for="item in datas" :key="item.value" :class="{checked: currentChecked === item.value}" @click="onClickRadio(item)">
            <span>{{item.label}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";
    import { TextRadioData } from "dwh-component";
    import FormWidget from "../base/FormWidget.vue";

    @Component
    export default class TextRadioList extends FormWidget<string|number> {
        @Prop({type: Array, required: true})
        private datas: TextRadioData[];
        @Prop({type: [Number, String], default: ""})
        protected value: string | number;

        private currentChecked: string | number = "";

        @Watch("value")
        private onValueChange() {
            this.refreshCurrentValue();
        }

        private created() {
            this.refreshCurrentValue();
        }

        private refreshCurrentValue() {
            this.currentChecked = this.value;
        }

        private onClickRadio(item: TextRadioData): void {
            this.currentChecked = item.value;

            this.updateModel(this.currentChecked);
            this.$emit("changeEvt", {action: "checked", checked: item.value, data: item});
        }
    } 
</script>
