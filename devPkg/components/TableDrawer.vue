/*************************************************
* Created by zhangtao on 2018/04/21
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
        <div class="table-drawer__wrapper" @scroll="handleContentScroll($event)">
            <div ref="contentElement" class="table-drawer__content">
                <canvas ref="canvas" width="100" height="100"></canvas>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";
    // @todo 改为只加载所需用到的项目
    import * as Konva from "konva";

    @Component
    export default class TableDrawer extends Vue {
        @Prop({type: String, default: "#407DD1"})
        private mainColor: string;
        @Prop({type: Array, required: true})
        private datas: any;
        @Prop({type: String, default: "content"})
        private idProperty: string;
        @Prop({type: String, default: "content"})
        private labelProperty: string;

        private tableWidth: number = 178;
        private tableTitleHeight: number = 44;
        private tableItemHorizontalMargin: number = 18;
        private tableItemVerticalMargin: number = 18;

        private tableChildHeight: number = 32;
        private tableChildWidth: number = 162;
        private tableChildLimitCount: number = 6;
        private tableChildItemVerticalMargin: number = 10;
        private tableChildItemHorizontalMargin: number = 8;

        private scalePercent: string = "100%";
        private scaleChangeSize: number = 10;
        private currentScale: number = 1;

        private konvaState: Konva.Stage | null = null;
        private konvaRowTableHeightMap: any = {};
        private isExpandMap: any = {};

        private initContentWidth: number = 0;
        private initContentHeight: number = 0;

        @Watch("datas")
        private onDatasChange() {
            this.resetKonva();
            this.draw();
        }

        @Watch("currentScale")
        private onCurrentScaleChange() {
            this.scaleDraw();
        }

        @Watch("scalePercent")
        private onScalePercentChange() {
            let percent = parseFloat(this.scalePercent) / 100;

            if (percent === percent) {
                this.currentScale = percent;
            }
        }

        protected mounted() {
            this.$nextTick(() => {
                this.initKonva();
                this.draw();
            });
        }

        protected beforeDestroy() {
            if (this.konvaState) {
                this.konvaState.destroy();
            }
        }

        private onClickSuoXiao() {
            let percent = parseInt(this.scalePercent, 10);

            if (percent > this.scaleChangeSize) {
                percent = percent - this.scaleChangeSize;

                this.scalePercent = percent + "%";
            }
        }

        private onClickFangDa() {
            let percent = parseInt(this.scalePercent, 10);

            percent = percent + this.scaleChangeSize;

            this.scalePercent = percent + "%";
        }

        private initKonva() {
            let contentElement = this.$refs.contentElement as HTMLElement,
                width = contentElement.clientWidth,
                height = contentElement.clientHeight;

            this.initContentHeight = height;
            this.initContentWidth = width;
            this.konvaState = new Konva.Stage({container: contentElement, width, height, draggable: true});
        }

        private resetKonva() {
            if (this.konvaState) {
                this.konvaState.offset({x: 0, y: 0});
                this.konvaState.scale({x: 1, y: 1});
            }
        }

        private draw() {
            let oldLayer = this.konvaState!.getLayers()[0];

            if (oldLayer) {
                oldLayer.destroy();
            }

            let layer = new Konva.Layer();
            this.datas.forEach((item: any, index: number) =>{
                let chart = this.drawItem(item, index + 1);
                layer.add(chart);
            });
            this.konvaState!.add(layer);
        }

        private refreshDraw() {
            if (this.konvaState !== null) {
                this.konvaRowTableHeightMap = {};
                this.draw();
            }
        }

        private scaleDraw() {
            if (this.konvaState !== null) {
                this.konvaState.scale({x: this.currentScale, y: this.currentScale});
                this.konvaState.batchDraw();
            }
        }

        private resizeContentElement() {
            let actualSize = this.konvaState!.getClientRect(),
                contentElement = this.$refs.contentElement as HTMLElement;

            if (typeof actualSize.width !== "undefined" && actualSize.width > this.initContentWidth) {
                contentElement.style.width = actualSize.width + "px";
            } else {
                contentElement.style.width = this.initContentWidth + "px";
            }

            if (typeof actualSize.height !== "undefined" && actualSize.height > this.initContentHeight) {
                contentElement.style.height = actualSize.height + "px";
            } else {
                contentElement.style.height = this.initContentHeight + "px";
            }
        }

        private handleContentScroll(event: MouseWheelEvent) {
            if (this.konvaState !== null) {
                let target = event.target as HTMLElement,
                    left = target.scrollLeft,
                    top = target.scrollTop,
                    layer = this.konvaState.getLayers()[0];

                layer.move({x: left, y: top});
                layer.batchDraw();
            }
        }

        private getItemInitPosition(index: number) {
            let layers = this.konvaState!.getLayers(),
                width = this.konvaState!.width(),
                oneRowCount = Math.floor(width / this.tableWidth),
                column = index % oneRowCount === 0 ? oneRowCount : index % oneRowCount,
                row = Math.ceil(index / oneRowCount),
                x = 0,
                y = 0;

            if (row === 1) {
                y = 0;
            } else {
                y = this.getCurrentTableRowHeightSum(row);
            }

            if (column === 1) {
                x = 0;
            } else {
                x = (column - 1) * (this.tableWidth + this.tableItemHorizontalMargin);
            }

            return {x, y, row};
        }

        private getCurrentTableRowHeightSum(row: number) {
            let sum = 0;

            for (let key in this.konvaRowTableHeightMap) {
                if (this.konvaRowTableHeightMap.hasOwnProperty(key) && key + "" !== row + "") {
                    let heights = this.konvaRowTableHeightMap[key],
                        maxHeight = Math.max.apply(Math, heights);

                    sum = sum + maxHeight + this.tableItemVerticalMargin;
                }
            }
            return sum;
        }

        private drawItem(data: any, index: number): any {
            let group = new Konva.Group(),
                position = this.getItemInitPosition(index),
                height = this.calculateItemHeight(data);

            let outer = new Konva.Rect({
                x: position.x,
                y: position.y,
                width: this.tableWidth,
                height,
                fill: "#fff",
                stroke: this.mainColor,
                strokeWidth: 1
            });

            let titleWrapper = new Konva.Rect({
                x: position.x,
                y: position.y,
                height: this.tableTitleHeight,
                width: this.tableWidth,
                fill: this.mainColor
            });
            let titleText = new Konva.Text({
                x: titleWrapper.x() + titleWrapper.width() / 2,
                y: titleWrapper.y() + titleWrapper.height() / 2,
                text: data.content,
                fill: "#fff"
            });

            titleText.offsetX(titleText.getTextWidth() / 2);
            titleText.offsetY(titleText.getTextHeight() / 2);

            group.add(outer).add(titleWrapper).add(titleText);

            let childs = this.renderChilds(data.children, position, data);

            for (let i = 0, j = childs.length; i < j; ++i) {
                let child = childs[i];

                if (child.data.type === "collapseBtn") {
                    this.bindCollapseHandler(child.outer, child.data);
                }
                group.add(child.outer);
                group.add(child.text);
            }
            if (typeof this.konvaRowTableHeightMap[position.row] === "undefined") {
                this.konvaRowTableHeightMap[position.row] = [];
            }
            this.konvaRowTableHeightMap[position.row].push(height);

            return group;
        }

        private bindCollapseHandler(child: Konva.Rect, data: any) {
            child.on("mouseenter", () => {
               this.konvaState!.container().style.cursor = "pointer";
            });
            child.on("mouseleave", () => {
                this.konvaState!.container().style.cursor = "default";
            });

            child.on("click", () => {
                this.handleClickCollapse(data);
            });
        }

        private handleClickCollapse(data: any) {
            let parent = data.parent,
                id = this.getItemId(parent);

            this.isExpandMap[id] = !this.isExpandMap[id];
            this.refreshDraw();
        }

        private getItemId(data: any) {
            return data[this.idProperty];
        }

        private getItemLabel(data: any) {
            return data[this.labelProperty];
        }

        private isExpand(data: any) {
            let id = this.getItemId(data);

            return !!this.isExpandMap[id];
        }

        private calculateItemHeight(data: any) {
            let childCount = 0;

            if (data.children.length <= this.tableChildLimitCount) {
                childCount = data.children.length;
            } else if (this.isExpand(data)) {
                childCount = data.children.length + 1;
            } else {
                childCount = this.tableChildLimitCount;
            }

            return this.tableTitleHeight + (childCount + 1) * this.tableChildItemVerticalMargin +
                childCount * this.tableChildHeight
        }

        private renderChilds(childrens: any[], containerPosition: {x: number, y: number}, data: any) {
            let renderDatas: any[] = [],
                showChildCount = 0;

            if (childrens.length <= this.tableChildLimitCount || this.isExpand(data)) {
                showChildCount = childrens.length;
            } else {
                showChildCount = this.tableChildLimitCount - 1;
            }

            for (let i = 0; i < showChildCount; ++i) {
                let position = this.calculateChildPosition(i + 1, containerPosition);

                renderDatas.push({position, type: "text", content: this.getItemLabel(childrens[i]), parent: data});
            }

            if (childrens.length > this.tableChildLimitCount) {
                if (this.isExpand(data)) {
                    let position = this.calculateChildPosition(childrens.length + 1, containerPosition);
                    renderDatas.push({position, type: "collapseBtn", content: "^", parent: data});
                } else {
                    let position = this.calculateChildPosition(this.tableChildLimitCount, containerPosition);
                    renderDatas.push({position, type: "collapseBtn", content: "...", parent: data});
                }
            }

            return renderDatas.map((item: any) => this.renderChildItem(item));
        }

        private calculateChildPosition(index: number, containerPosition: {x: number, y: number}) {
            let x = containerPosition.x + this.tableChildItemHorizontalMargin,
                y = containerPosition.y + this.tableTitleHeight +
                    (index - 1) * this.tableChildHeight + index * this.tableChildItemVerticalMargin;

            return {x, y};
        }

        private renderChildItem(child: any) {
            let outer = new Konva.Rect({
                x: child.position.x,
                y: child.position.y,
                width: this.tableChildWidth,
                height: this.tableChildHeight,
                strokeWidth: 1,
                stroke: this.mainColor,
                fill: "#fff"
            });

            let text = new Konva.Text({
                x: outer.x() + outer.width() / 2,
                y: outer.y() + outer.height() / 2,
                text: child.content,
                fill: this.mainColor
            });

            text.offsetX(text.getTextWidth() / 2);
            text.offsetY(text.getTextHeight() / 2);

            return {outer, text, data: child};
        }
    };
</script>
