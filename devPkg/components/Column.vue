/*********************************************************************
 * Vue private auto columns file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="columns-container" ref="nowColumnNode" :style="[{'width': `${nowColWidth}%`, 'padding': `0 ${nowGutter}px`}]">
        <div class="contaier">
            <slot><!-- 嵌入列的内容 --></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Number, default: 24})
        private col: number;

        private nowGutter: number = 0;

        private get nowColWidth(): number {
            return parseFloat((this.col / 24 * 100).toFixed(4));
        }

        private mounted(): void {
            let _node: HTMLElement = this.$refs.nowColumnNode as HTMLElement;
            if(_node) {
                let node: HTMLElement = _node.parentNode as HTMLElement;
                this.nowGutter = parseInt(node.getAttribute('gutter') || '0');
            }
        }
    }
</script>