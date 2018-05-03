/*************************************************
* Created by zhangtao on 2018/03/24
*************************************************/
<template>
    <div class="panel">
        <div class="panel-header">{{title}}</div>
        <div class="panel-body">
            <slot name="body"></slot>
        </div>
        <div class="panel-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class Panel extends Vue {
        @Prop({type: String, default: "string"})
        private title: string;
    };
</script>