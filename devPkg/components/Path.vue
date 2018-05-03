<template>
    <div class="path" v-show="visible">
        <div class="dock">
            <div class="dock-item path-title"> {{pathTitle}} </div>

            <div class="dock-body">
                <ls-breadcrumb :paths="pathData" />
            </div>

            <div class="dock-item">
                <i class="close iconfont icon-guanbi_quxiao" @click="onClickClose"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop } from "vue-property-decorator";

    import Breadcrumb from "./Breadcrumb.vue";
    import Widget from "./base/Widget.vue";
    import { BreadcrumbData } from "dwh-component";

    @Component({
        components: {
            "ls-breadcrumb": Breadcrumb
        }
    })
    export default class extends Widget {
        @Prop({type: Array, required: true})
        private pathData: BreadcrumbData[];
        @Prop({type: String, default: "当前位置:"})
        private pathTitle: string;

        private onClickClose() {
            this.$emit("clickEvt", {action: "close"});
        }
    }
</script>
