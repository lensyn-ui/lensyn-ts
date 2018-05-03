<template>
    <div class="checkbox">
        <input type="checkbox" :checked="value" :disabled="disabled" @change="onChangeCheckboxChecked"/>
        <span class="label">{{label}}</span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";

    import FormWidget from "../base/FormWidget.vue";

    @Component
    export default class Checkbox extends FormWidget<boolean> {
        @Prop({type: Boolean})
        protected value: boolean;
        @Prop({type: String, default: ""})
        private label: string;

        private onChangeCheckboxChecked(event: Event): void {
            let target = event.target as HTMLInputElement,
                value = target.checked;

            this.updateModel(value);
            this.$nextTick(() => {
                this.$emit("changeEvt", { action: "check", name: this.label, value: value });
            });
        }
    };
</script>
