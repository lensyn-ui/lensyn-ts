/*************************************************
* Created by zhangtao on 2018/03/25
*************************************************/
<template>
    <div class="table-drawer">
        <ul class="table-drawer__toolbar">
            <li class="table-drawer__toolbar-item table-drawer__toolbar-item_suoxiao" @click="onClickSuoXiao"></li>
            <li class="table-drawer__toolbar-item table-drawer__toolbar-item_scale">
                <input class="table-drawer__toolbar-scale-input" v-model="scalePercent" />
            </li>
            <li class="table-drawer__toolbar-item table-drawer__toolbar-item_fangda" @click="onClickFangDa"></li>
            <li class="table-drawer__toolbar-item table-drawer__toolbar-item_forward"></li>
            <li class="table-drawer__toolbar-item table-drawer__toolbar-item_back"></li>
        </ul>
        <div ref="contentElement" class="table-drawer__content">
            <canvas ref="canvas" width="100" height="100"></canvas>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";

    import Paint from "./paint/index";

    @Component
    export default class Drawer extends Vue {
        @Prop({type: String, default: "#407DD1"})
        private mainColor: string;
        @Prop({type: Array, required: true})
        private datas: any;

        private scalePercent: string = "100%";
        private scaleChangeSize: number = 0.1;
        private currentScale: number = 1;
        private painter: Paint | null = null;

        @Watch("currentScale")
        private onCurrentScaleChange() {
            this.draw();
        }

        protected mounted() {
            this.$nextTick(() => {
                this.resizeCanvas();
                this.draw();
            });
        }

        private onClickSuoXiao() {
            if (this.currentScale > this.scaleChangeSize) {
                this.currentScale -= this.scaleChangeSize;
            }
        }

        private onClickFangDa() {
            this.currentScale += this.scaleChangeSize;
        }

        private resizeCanvas() {
            let contentElement = this.$refs.contentElement as HTMLElement,
                width = contentElement.clientWidth,
                height = contentElement.clientHeight,
                canvas = this.$refs.canvas as HTMLElement;

            canvas.setAttribute("width", width + "");
            canvas.setAttribute("height", height + "");
        }

        private draw() {
            if (this.painter === null) {
                this.painter = new Paint();
            }
            let props = this.formatDatas();

           this.painter.clear();
           this.painter.draw(this.$refs.canvas as HTMLCanvasElement, props);
        }

        private formatDatas() {
            let props: any = this.getDefaultProps();

            props.datas = this.datas;
            props.scale = this.currentScale;

            return props;
        }

        private getDefaultProps() {
            return {
                type: "rectangle-list-group",
                x: 0,
                y: 0,
                headerHeight: 44,
                width: 178,
                itemHeight: 32,
                itemVerticalSpace: 10,
                itemHorizontalSpace: 8,
                borderColor: this.mainColor,
                headerBg: this.mainColor,
                itemBorderColor: this.mainColor,
                itemFontStyle: this.mainColor,
            };
        }
    };
</script>