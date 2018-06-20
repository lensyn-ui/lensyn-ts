/*********************************************************************
 * Vue private auto rows file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="rows-container" :gutter="nowGutter" :style="[{'margin-left': `-${nowGutter}px`, 'margin-right': `-${nowGutter}px`}]">
        <slot><!-- 嵌入行的内容 --></slot>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Number, default: 20})
        private gutter: number;

        private get nowGutter(): number {
            return parseInt(`${this.gutter / 2}`);
        }
    }
</script>