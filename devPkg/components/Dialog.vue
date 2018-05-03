<template>
    <div class="dialog" :class="{'no-footer': !isShowFooter}">
        <div class="dialog-content">
            <div class="header">
                <div class="title">{{title}}</div>
                <i class="iconfont close icon-guanbi_quxiao" @click="onClickClose"></i>
            </div>
            <div class="body">
                <slot></slot>
            </div>
            <div class="footer" v-if="isShowFooter">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({type: String, default: ""})
        private title: string;

        private get isShowFooter(): boolean {
            return !!this.$slots.footer;
        }

        private onClickClose() {
            this.$emit("clickDialog", {action: "close"});
        }
    }
</script>