/*************************************************
* Created by zhangtao on 2018/03/25
*************************************************/
<template>
    <div class="table-list-item">
        <div class="list-header"> {{data.content}} </div>
        <ul class="list-content">
            <li v-for="(item, index) in children" :key="index">{{item.content}}</li>
            <li class="load-more" v-if="isShowLoadMore" @click="onClickLoadMore" >...</li>
            <li class="collapse-item iconfont icon-shouhui" v-if="isExpand" @click="onClickCollapse"></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class TableListItem extends Vue {
        @Prop({type: Object, required: true})
        private data: any;
        @Prop({type: Number, default: 6})
        private maxContentItemCount: number;

        private isExpand: boolean = false;

        private get isShowLoadMore() {
            return this.data.children && this.data.children.length > this.maxContentItemCount && !this.isExpand;
        }

        private get children() {
            let children = this.data.children;

            if (children) {
                if (this.isExpand || children.length <= this.maxContentItemCount) {
                    return children;
                }

                return children.slice(0, this.maxContentItemCount - 1);

            }
            return [];
        }

        private onClickLoadMore() {
            this.isExpand = true;
        }

        private onClickCollapse() {
            this.isExpand = false;
        }
    };
</script>