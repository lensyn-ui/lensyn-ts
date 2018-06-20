/*********************************************************************
 * Vue private page tips file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div v-show="tipsShow" class="pagetips-container">
        <div class="container" :class="pagetips.type">{{pagetips.title}}<em>{{pagetips.subTitle}}</em><i @click="closeTip"></i></div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Object, required: true})
        private pagetips: any;

        /**
         * 页面参数释义
         * @param tipsShow 是否展示提示信息
         */
        private tipsShow: boolean = true;

        /* 关闭提示信息 */
        private closeTip(): void {
            this.tipsShow = false;
        }
    }
</script>