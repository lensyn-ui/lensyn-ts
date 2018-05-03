<template>
    <div class="dropdown" :class="{'expand': isExpand}">
        <div class="input" ref="input" @click="onClickInput">
            <slot name="input" />
        </div>

        <div class="list" ref="list" :style="listStyle">
            <slot name="list" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";
    import Widget from "./base/Widget.vue";

    @Component
    export default class Dropdown extends Widget {
        @Prop({type: Boolean, default: false})
        private isCover: boolean;
        @Prop({type: Boolean, default: true})
        private isAllowExpand: boolean;
        @Prop({type: Number, default: 5})
        private offsetTop: number;

        private isExpand: boolean = false;
        private onClickDocListener: any = null;
        private listStyle: any = {};

        @Watch("isExpand")
        private onIsExpandChange(currentValue: boolean) {
            if (currentValue) {
                this.repositionList();
            }
        }

        private mounted() {
            this.bindEventHandler();
        }

        private beforeDestory() {
            window.document.removeEventListener("click", this.onClickDocListener);
        }

        private bindEventHandler() {
            this.onClickDocListener = this.onClickDoc.bind(this);
            window.document.addEventListener("click", this.onClickDocListener);
        }

        private onClickInput() {
            if (this.isAllowExpand) {
                this.isExpand = true;
            }
        }

        private onClickDoc(event: MouseEvent) {
            let list = this.$refs.list as HTMLElement,
                input = this.$refs.input as HTMLElement,
                target = event.target as HTMLElement;

            if (this.isExpand && !list.contains(target) && target !== input && !input.contains(target)) {
                this.isExpand = false;
            }
        }

        private repositionList() {
            let position = this.$el.getBoundingClientRect(),
                top = this.isCover ? position.top : position.top + position.height + this.offsetTop;

            this.listStyle = {
                top: top + "px",
                left: position.left + "px",
                width: position.width + "px"
            };
        }

        public collapse() {
            this.isExpand = false;
        }
    };
</script>

