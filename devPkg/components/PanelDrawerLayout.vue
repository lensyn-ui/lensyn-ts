/*************************************************
* Created by zhangtao on 2018/04/17
*************************************************/
<template>
    <ls-drawer-layout class="panel-drawer-layout" :show="isShow" :expandWidth="expandWidth">
        <div class="panel-header">
            {{title}}
            <i class="close"></i>
        </div>
        <div class="panel-body">
            <slot name="content">

            </slot>
        </div>
    </ls-drawer-layout>

</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";
    import DrawerLayout from "./DrawerLayout.vue";

    @Component({
        components: {
            "ls-drawer-layout": DrawerLayout
        }
    })
    export default class PanelDrawerLayout extends Vue {
        @Prop({type: Boolean, default: false})
        private show: boolean;
        @Prop({type: String, default: ""})
        private title: string;
        @Prop({type: [Number, String], default: 300})
        private expandWidth: number | string;

        private isShow: boolean = false;

        private dockClickHandler: any = null;
        private closeElement: Element | null = null;

        @Watch("show")
        private onShowChange(currentValue: boolean) {
            this.isShow = currentValue;
        }

        private mounted() {
            this.isShow = this.show;
            this.bindEventHandler();
            this.closeElement = this.$el.querySelector(".close");
        }

        private beforeDestroy() {
            if (this.dockClickHandler !== null) {
                document.removeEventListener("click", this.dockClickHandler);
            }
        }

        private bindEventHandler() {
            this.dockClickHandler = this.onClickDoc.bind(this);
            document.addEventListener("click", this.dockClickHandler);
        }

        private onClickDoc({target}: MouseEvent) {
            if (this.isShow) {
                let el = this.$el as HTMLElement;
                if (target === this.closeElement || !el.contains(target as HTMLElement)) {
                    this.$emit("clickPanel", {action: "close"});
                }
            }
        }
    };
</script>