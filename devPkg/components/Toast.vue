<template>
    <div v-show="visible" class="toast">
        <div class="msg" :class="msgClass">
            {{msg}}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";
    import Widget from "./base/Widget.vue";

    @Component
    export default class Toast extends Widget {
        @Prop({type: String, default: "success"})
        private msgType: string;
        @Prop({type: String, required: true})
        private msg: string;

        get msgClass(): string {
            return this.msgType;
        }
    };
</script>