/*********************************************************************
 * Vue private auto columns file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="columns-container" :style="[{'width': `${nowColWidth}%`, 'margin-left': `${offsetCol}%`, 'padding': `0 ${gutter}px`}]">
        <div class="contaier">
            <slot><!-- 嵌入列的内容 --></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Inject} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Number, default: 24})
        private col: number;
        @Prop({type: Number, default: 0})
        private offset: number;
        @Inject('nowGutter')
        private gutter: number;

        /* 计算获取列宽百分比 */
        private get nowColWidth(): number {
            return parseFloat((this.col / 24 * 100).toFixed(4));
        }

        /* 计算获取左边距 */
        private get offsetCol(): number {
            return parseFloat((this.offset / 24 * 100).toFixed(4));
        }
    }
</script>