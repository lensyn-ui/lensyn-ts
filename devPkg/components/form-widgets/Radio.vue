<template>
    <div class="radio">
        <input type="radio" :disabled="disabled" :name="radioName" :checked="value" @change="onRadioCheckedChange" />
        <span>{{label}}</span>
    </div>
</template>

<script lang="ts">
    import { Prop, Component } from "vue-property-decorator";

    import FormWidget from "../base/FormWidget.vue";

    @Component
    export default class Radio extends FormWidget<boolean> {
        @Prop({type: Boolean})
        protected value: boolean;
        @Prop({type: String, default: ""})
        private label: string;
        @Prop({type: String})
        private radioName: string;
        @Prop({type: String})
        private dataKey: string;

        private onRadioCheckedChange(event: Event) {
            let target = event.target as HTMLInputElement,
                value = target.checked;

            event.preventDefault();
            this.updateModel(value);
            this.$nextTick(() => {
                this.$emit("changeEvt", {action: "check", name: this.dataKey ? this.dataKey : this.radioName, value});
            })
        }
    };
</script>
