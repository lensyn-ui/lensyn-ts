<template>
    <div class="page-header">
        <div class="logo"></div>
        <ls-navigator :navigatorData="navigatorData"></ls-navigator>
        <div class="user-info">
            <span>test</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    import Navigator from "./Navigator.vue";
    import { MenuDataType } from "dwh-component";

    @Component({
        components: {
            "ls-navigator": Navigator
        }
    })
    export default class extends Vue {
        @Prop({type: Array, default: []})
        private navigatorData: MenuDataType[];
    };
</script>
