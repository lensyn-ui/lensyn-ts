/*********************************************************************
 * Vue private breadcrumb file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="breadcrumb-container">
        <div class="container">
            <div class="item" v-for="item in breadcrumbList" @click="breadcrumbEvt(item)">{{item.name}}</div>
        </div>
        <div class="btns">
            <div class="refresh" @click="refreshEvt"></div>
            <slot name="btns"></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Array, required: true})
        private breadcrumbList: any[];

        /* 面包屑点击事件 */
        private breadcrumbEvt(item: any): void {
            if(item.link && item.link !== "") {
                this.$router.push({path: item.link});
            }
        }

        /* 页面刷新按钮 */
        private refreshEvt(): void {
            window.location.reload(true);
        }
    }
</script>