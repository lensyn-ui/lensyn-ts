/*************************************************
* Created by zhangtao on 2018/03/25
*************************************************/
<template>
    <div class="table-list">
        <ul class="table-list-toolbar">
            <li class="back"></li>
            <li class="forward"></li>
            <li class="fangda" @click="onClickFangDa"></li>
            <li>
                <input v-model="scalePercent" />
            </li>
            <li class="suoxiao" @click="onClickSuoXiao"></li>
        </ul>
        <div class="table-list-content">
            <ls-table-list-item v-for="(item, index) in datas" :data="item" :key="index" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import TableListItem from "./TableListItem.vue";

    @Component({
        components: {
            "ls-table-list-item": TableListItem
        }
    })
    export default class TableList extends Vue {
        @Prop({type: Array, default: () => []})
        private datas: any[];

        private scaleMinValue: number = 0.1;
        private scaleMaxValue: number = 10;

        private scaleSize: number = 0.1;
        private scalePercent: string = "100%";
        private currentScale: number = 1;

        private originalWidth: number | null = null;
        private originalHeight: number | null = null;

        private onClickFangDa() {
            let newValue = this.currentScale + this.scaleSize;
            if (newValue <= this.scaleMaxValue) {
                this.currentScale = newValue;
                this.resizeTableContentView();
            }
        }

        private onClickSuoXiao() {
            let newValue = this.currentScale - this.scaleSize;

            if (newValue >= this.scaleMinValue) {
                this.currentScale = newValue;
                this.resizeTableContentView();
            }
        }

        private resizeTableContentView() {
            let contentElement = this.$el.querySelector(".table-list-content") as HTMLElement;


            if (contentElement !== null) {
                if (this.originalHeight === null) {
                    this.originalHeight = contentElement.offsetHeight;
                }
                if (this.originalWidth === null) {
                    this.originalWidth = contentElement.offsetWidth;
                }
                contentElement.style.width = this.originalWidth * this.currentScale + "px";
                contentElement.style.height = this.originalHeight * this.currentScale + "px";

                contentElement.style.transform = `scale(${this.currentScale})`;
            }


        }
    };
</script>