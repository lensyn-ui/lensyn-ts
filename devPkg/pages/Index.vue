/*********************************************************************
 * Created by zhangtao on 2018/3/5
 *********************************************************************/

<template>
    <div class="application-container">
        <div class="router-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class extends Vue {
    };
</script>