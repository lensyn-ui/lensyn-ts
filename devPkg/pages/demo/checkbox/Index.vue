/*********************************************************************
* checkbox component usage
* Created by deming-su on 2018/6/19
*********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">单选/多选</div>
        <ls-row>
            <ls-column :col="12">
                <ls-checkbox v-for="(item,index) in checkArr"
                             v-model="item.checked"
                             :key="index"
                             :disabled="item.disabled"
                             :label="item.label"
                             @checkboxEvent="checkEvt($event,item)"
                ></ls-checkbox>
            </ls-column>
            <ls-column :col="12">
                <!--value需要是唯一标识-->
                <ls-radio v-for="(item,index) in radioArr"
                          :key="index"
                          v-model="item.checked"
                          :name="item.name"
                          :label="item.label"
                          @radioEvent="radioEvt($event,item)"
                ></ls-radio>
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
    import {Vue, Component, Watch} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '选择框', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "单选/多选组件的使用方法",
            subTitle: "查看单选/多选组件的使用详情在‘pages/demo/checkbox/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '多选实现代码',
                desc: `&lt;ls-checkbox :checked="true" :disabled="true" :label="'text'"&gt;&lt;/ls-checkbox&gt;`
            },
            {
                title: '多选参数说明',
                desc: `checked 是否选中, disabled 是否可用, label 显示文字`
            },
            {
                title: '单选实现代码',
                desc: `&lt;ls-radio :checked="true" :name="'test'" :value="'test'" :label="'text'"&gt;&lt;/ls-radio&gt;`
            },
            {
                title: '多选参数说明',
                desc: `checked 是否选中, name radio归组, value 对应值, label 显示文字`
            },
            {
                title: '点击事件说明',
                desc: `checkboxEvent: ($event: Event, item: any) => void 选择项点击事件 返回一个对象 id、key、$event（当前点击事件源）, radioEvent 和多选事件一致`
            }
        ] as any[];

        /**
         * 页面参数释义
         * @param multipleList 下拉框选择数据列表
         * @param nowPick 下拉框当前选择数据
         */
        private checkArr: any[] = [
            {label: '测试1', checked: false, disabled: false},
            {label: '测试2', checked: true},
            {label: '测试3', checked: true, disabled: true},
            {label: '测试4', checked: false, disabled: true}
        ] as any[];

        private radioArr: any[] = [
            {label: '男', checked: true, name: 'sex', value: 0},
            {label: '女', checked: false, name: 'sex', value: 1},
        ] as any[];


        private mounted(): void {
            this.readFile('../demo/checkbox/Index.vue');
        }

        /* checkbox点击事件 */
        private checkEvt(event: Event, item: any): void {
            console.log(event, item);
        }

        /* radiobox点击事件 */
        private radioEvt($event: any, item: any): void {
            this.radioArr.map((it) => {
                it.checked = false;
                if (it.value === item.value) {
                    it.checked = $event.checked;
                }
            });
            console.log(this.radioArr);
        }
    }
</script>