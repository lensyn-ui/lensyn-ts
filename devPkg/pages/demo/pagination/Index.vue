/*********************************************************************
 * Paging component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">通用分页</div>
        <ls-row>
            <ls-column :col="24">
                <ls-pagination :total="pagingData.total"
                               :current="pagingData.current"
                               :display="pagingData.display"
                               @paginationEvent="pageChange" style="margin: 0"></ls-pagination>
            </ls-column>
        </ls-row>
        <div class="introduce-title">可配置分页</div>
        <ls-row>
            <ls-column :col="6">
                <ls-multiple-select :datas="paggingProp" v-model="nowProp"></ls-multiple-select>
            </ls-column>
            <ls-column :col="18">
                <ls-pagination :total="567"
                               :current="pagingData.current"
                               :display="30"
                               :isShowTotal="getNowProp.isShowTotal"
                               :isGoShow="getNowProp.isGoShow"
                               :isHFShow="getNowProp.isHFShow"
                               :isItemShow="getNowProp.isItemShow"
                               :displayLists="displayLists"
                               @paginationEvent="pageChange" style="margin: 0"></ls-pagination>
            </ls-column>
        </ls-row>
        <div class="introduce-info">
            <div class="item" v-for="item in introduceInfo">
                <div class="title">{{item.title}}</div>
                <div class="desc" v-html="item.desc"></div>
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
    import { Vue, Component } from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '分页', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "分页控件的使用方法",
            subTitle: "查看分页组件的使用详情在‘pages/demo/pagination/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `&lt;ls-pagination :total="pagingData.total" :current="pagingData.current" :display="pagingData.display" @paginationEvent="pageChange"&gt;&lt;/ls-pagination&gt;`
            },
            {
                title: '通用参数说明',
                desc: `total: 总条数, current: 当前页数, display: 当前显示条数, paginationEvent: 分页控件点击事件`
            },
            {
                title: '组件可配置属性',
                desc: `isShowTotal 是否总条数文字描述, isGoShow 是否显示go属性, isHFShow 是否显示‘首页/尾页’按钮, isItemShow 是否显示条数选择框, displayLists 下拉每页条数 默认为[10,20,50,100], pagegroup 出现‘...’间隔数 默认为5`
            },
            {
                title: '回调函数返回值',
                desc: `paginationEvent(result: any) => void, result.currentPage 当前第几页，result.displayItem 当前每页展示得数据条数`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param pagingData 分页参数
         * @param paggingProp 分页控件可设置属性列表
         * @param nowProp 当前选择得属性
         * @param displayLists 自定义分页显示条数
         */
        private pagingData: any = {
            total: 123,
            current: 1,
            display: 10
        } as any;
        private paggingProp: any[] = [
            {id: 'paggingProp001', name: '是否总条数文字描述', value: 'isShowTotal'},
            {id: 'paggingProp002', name: '是否显示go属性', value: 'isGoShow'},
            {id: 'paggingProp003', name: '是否显示‘首页/尾页’按钮', value: 'isHFShow'},
            {id: 'paggingProp004', name: '是否显示条数选择框', value: 'isItemShow'}
        ] as any[];
        private nowProp: string[] = ["isShowTotal"];
        private displayLists: any[] = [{label: '30', value: 30},{label: '80', value: 80},{label: '120', value: 120}] as any[];

        /* 获取当前属性 */
        private get getNowProp(): any {
            let prop: any = {isShowTotal: false, isGoShow: false, isHFShow: false, isItemShow: false} as any;
            for(let name in prop) {
                let index: number = this.nowProp.findIndex((val: string) => val === name);
                prop[name] = index > -1;
            }
            return prop;
        }


        private mounted(): void {
            this.readFile('../demo/pagination/Index.vue');
        }


        /* 分页回调点击事件 */
        private pageChange(d: any): void {
            this.$lensyn.alarm.show('分页点击事件', 'success', `当前第${d.currentPage},每页展示${d.displayItem}条数据`, true);
        }
    }
</script>
<style lang="less">
    /*.notice-paging-container {*/
        /*margin: auto;*/
        /*>.pagination {*/
            /*>li {*/
                /*>a {*/
                    /*border: 1px solid #f5f5f5!important;*/
                    /*border-radius: 4px;*/
                    /*margin: 0 3px;*/
                    /*padding: 3px 8px;*/
                /*}*/
                /*&.active {*/
                    /*>a {*/
                        /*border-color: #f0f1f2!important;*/
                        /*background-color: #f0f1f2!important;*/
                    /*}*/
                /*}*/
            /*}*/
        /*}*/
    /*}*/
</style>