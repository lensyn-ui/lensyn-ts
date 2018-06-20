/*********************************************************************
 * Paging component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">分页</div>
        <ls-pagination :total="pagingData.total"
                       :current="pagingData.current"
                       :display="pagingData.display"
                       @paginationEvent="pageChange"></ls-pagination>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { Breadcrumb, Pagetips } from "../../../components";

    @Component({
        components: {
            'ls-breadcrumb': Breadcrumb,
            'ls-pagetips': Pagetips
        }
    })
    export default class extends Vue {

        /**
         * 页面参数释义
         * @param pagingData 分页参数
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param introduceInfo 组件使用方法
         */
        private pagingData: any = {
            total: 123,
            current: 1,
            display: 10
        } as any;
        private breadList: any[] = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '分页', link: '', id: 'breadcrumb002'}
        ] as any[];
        private tipsInfo: any = {
            title: "分页控件的使用方法",
            subTitle: "查看分页组件的使用详情在‘pages/demo/pagination/Index.vue’",
            type: 'primary'
        } as any;
        private introduceInfo: any[] = [
            {
                title: '实现代码',
                desc: `&lt;ls-pagination :total="pagingData.total" :current="pagingData.current" :display="pagingData.display" @paginationEvent="pageChange"&gt;&lt;/ls-pagination&gt;`
            },
            {
                title: '参数说明',
                desc: `pagingData.total: 总条数, pagingData.current: 当前页数, pagingData.display: 当前显示条数, paginationEvent: 分页控件点击事件`
            }
        ] as any[];

        /* 分页回调点击事件 */
        private pageChange(d: any): void {
            console.log(d);
        }
    }
</script>