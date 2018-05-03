/*************************************************
* Created by zhangtao on 2018/04/17
*************************************************/
<template>
    <transition name="drawerlayout">
        <div v-show="show" class="drawerlayout" :class="{right: position === 'right'}" :style="contentStyle">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Prop} from "vue-property-decorator";
    import Widget from "./base/Widget.vue";

    @Component
    export default class DrawerLayout extends Widget {
        @Prop({type: String, default: "right"})
        private position: string;
        @Prop({type: [Number, String], default: 300})
        private expandWidth: number | string;
        @Prop({type: Boolean, default: false})
        private show: boolean;

        private get contentStyle(): any {
            return {width: String(this.expandWidth).endsWith('%') ? this.expandWidth : `${this.expandWidth}px`};
        }
    };
</script>