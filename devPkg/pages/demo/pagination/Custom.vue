<template>
    <div class="pagigation-custom">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">可配置分页项</div>
        <ls-row>
            <ls-column :col="18">
                <ls-pagination class="notice-paging-container"
                               :total="567"
                               :current="pagingData.current"
                               :display="30"
                               :isShowTotal="true"
                               :isGoShow="false"
                               :isHFShow="true"
                               :isItemShow="false"
                               @paginationEvent="pageChange" style="margin: 0"></ls-pagination>
            </ls-column>
        </ls-row>
        <div class="introduce-info">
            <div class="item">
                <div class="title">实现代码</div>
                <div class="desc">和一般分页的代码一致，只需要修改css代码。</div>
            </div>
        </div>
        <div class="introduce-info">
            <pre v-html="nowText"></pre>
        </div>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '自定义分页', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "分页控件的使用方法",
            subTitle: "查看分页组件的使用详情在‘pages/demo/pagination/Index.vue’",
            type: 'primary'
        } as any;

        /**
         * 页面参数释义
         * @param pagingData 分页参数
         * @param paggingProp 分页控件可设置属性列表
         * @param displayLists 自定义分页显示条数
         */
        private pagingData: any = {
            total: 123,
            current: 1,
            display: 10
        } as any;

        private mounted(): void {
            this.readFile('../demo/pagination/Custom.vue');
        }

        /* 分页回调点击事件 */
        private pageChange(d: any): void {
            this.$lensyn.alarm.show('分页点击事件', 'success', `当前第${d.currentPage},每页展示${d.displayItem}条数据`, true);
        }
    }
</script>
<style lang="less">
    .pagigation-custom {
        .notice-paging-container {
            margin: auto;
            > .pagination {
                > li {
                    > a {
                        border: 1px solid #e2e2e2 !important;
                        border-radius: 4px;
                        margin: 0 3px;
                        padding: 3px 8px;
                    }
                    &.active {
                        > a {
                            border-color: #eff0f1 !important;
                            background-color: #eff0f1 !important;
                            color: #878787;
                        }
                    }
                }
            }
        }
    }
</style>