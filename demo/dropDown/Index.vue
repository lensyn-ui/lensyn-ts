<template>
    <div class="dropDown-demo">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">dropDown</div>
        <div>
            <ls-row>
                <ls-column :col="6">
                    <ls-dropdown class="dropDown-define">
                        <div slot="input">dropDown</div>
                        <div slot="list">
                            <div v-for="(item,index) in dropDownList"
                                 @click="dropSelect(item)"
                                 class="dropDown-define-list">
                                {{item.label}}
                            </div>
                        </div>
                    </ls-dropdown>
                </ls-column>
                <ls-column :col="6">
                    <ls-dropdown class="dropDown-define">
                        <div slot="input">dropDown</div>
                        <div slot="list">
                            <div class="big-window">这是一个大弹窗，里面的内容可以自己写。</div>
                        </div>
                    </ls-dropdown>
                </ls-column>
            </ls-row>
        </div>
        <div class="introduce-info">
            <div class="item">
                <div class="title">参数说明</div>
                <div class="desc">
                    slot="input" 是上面展示框，slot="list" 是下面的下拉弹层。里面的html结构可以自定义。dropDown实际上就是提供了一个展示和一个下拉弹层。
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: 'dropDown', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "dropDown组件的使用方法",
            subTitle: "查看dropDown组件的使用详情在‘pages/demo/dropDown/Index.vue’",
            type: 'primary'
        } as any;

        /**
         * 页面参数定义
         */

        private dropDownList: any[] = [
            {label: '操作1', value: '123'},
            {label: '操作2', value: '222'},
        ] as any[];

        private dropSelect(event: any) {
            this.$lensyn.alarm.show('dropDown点击事件', 'success', `当前点击的是${event.label},其值是${event.value}`, true);
            document.body.click();
        }

    }
</script>
<style lang="less">
    .dropDown-demo {
        .dropDown-define {
            cursor: pointer;
            width: 100px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #fff;
            background-color: #0f7dd4;
            .dropDown-define-list {
                cursor: pointer;
                width: 200px;
                height: 36px;
                line-height: 36px;
                text-align: center;
                background-color: #fff;
                border: 1px solid #dcdcdc;
                margin-top: -1px;
                color: #222;
            }
            .big-window{
                width: 400px;
                height: 200px;
                border: 1px solid #dcdcdc;
                background-color: #fff;
                color: #222;
            }
        }
    }
</style>