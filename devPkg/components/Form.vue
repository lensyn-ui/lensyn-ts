<template>
    <div class="form">
    </div>  
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    import FormWidget from "./base/FormWidget.vue";

    @Component
    export default class extends FormWidget<any> {
        public getValue(): any {
        }
    };
</script>
