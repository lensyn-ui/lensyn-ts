<template>
    <component :is="layout"></component>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";
    
    import BlankLayout from "./layout/BlankLayout.vue";
    import MainLayout from "./layout/MainLayout.vue";    

    @Component({
        components: {
            "ls-main-layout": MainLayout,
            "ls-blank-layout": BlankLayout
        }
    })
    export default class extends Vue {
        @Prop({type: String, default: "ls-main-layout"})
        private layout: string;
    };
</script>
