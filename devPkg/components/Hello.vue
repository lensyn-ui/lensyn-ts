/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * 简单的测试组件
 *********************************************************************

<template>
    <h1>{{msg}}</h1>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({type: String, required: true})
        private msg: string;
    }
</script>
