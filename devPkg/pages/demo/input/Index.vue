/*********************************************************************
* single select component usage
* Created by deming-su on 2018/6/19
*********************************************************************/


<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">输入框</div>
        <ls-row>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          :size="'big'"
                          v-model="val"
                          :autofocus="true"
                          @inputEvent="inputEvent"></ls-input>
            </ls-column>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          :size="'normal'"
                          v-model="val"
                          :widgetReadonly="true"></ls-input>
            </ls-column>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          :size="'mini'"
                          v-model="val"
                          :disabled="true"></ls-input>
            </ls-column>
        </ls-row>
        <div class="introduce-title">带校验规则的输入框</div>
        <ls-row>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          v-model="emptyVal"
                          :rule="emptyRule"></ls-input>
            </ls-column>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          v-model="lengthVal"
                          :rule="lengthRule"></ls-input>
            </ls-column>
            <ls-column :col="8">
                <ls-input :placeholder="'请输入文字'"
                          v-model="specifyLenVal"
                          :rule="specifyLenRule"></ls-input>
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
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '输入框', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "输入框组件的使用方法",
            subTitle: "查看输入框组件的使用详情在‘pages/demo/input/base.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '输入框实现代码',
                desc: `&lt;ls-input :placeholder="'请输入文字'" :size="'big'" v-model="val" :autofocus="true" @inputEvent="inputEvent"&gt;&lt;/ls-input&gt;`
            },
            {
                title: '输入框参数说明',
                desc: `placeholder: 默认提示, size: (big: 大, normal: 中, mini: 小), val: 输入值, autofocus: 是否自动获取焦点, inputEvent: 输入事件, widgetReadonly: 只读, disabled: 不可用`
            },
            {
                title: '带校验规则的输入框实现代码',
                desc: `&lt;ls-input :rule="emptyRule"&gt;&lt;/ls-input&gt;`
            },
            {
                title: '带校验规则的输入框参数说明',
                desc: `rule 校验规则参数设置 默认为required 校验空 name: 'number' 为校验是否为数字 其他参数都为自己定义规则参数, 校验规则定义在 devPkg/util/validate.ts文件中 可以参考demo`
            }
        ] as any[];

        /**
         * 页面参数定义
         * @param val 输入框值
         * @param emptyVal 空校验值
         * @param emputRule 空校验规则
         * @param lengthVal 长度值
         * @param lengthRule 长度校验规则
         * @param specifyLenVal 指定长度值
         * @param specifyLenRule 指定长度校验规则
         */
        private val: string = '';
        private emptyVal: string = "";
        private emptyRule: any = {required: true} as any;
        private lengthVal: string = "";
        private lengthRule: any = {name: 'stringMaxLength', msg: "输入长度错误"} as any;
        private specifyLenVal: string = "";
        private specifyLenRule: any = {name: 'stringMaxLength', msg: "输入长度错误", length: 6} as any;


        private mounted(): void {
            this.readFile('../demo/input/Index.vue');
        }


        /* 输入事件监听 */
        private inputEvent(d: any): void {
            let oldValue: string = d.oldValue;
            let value: string = d.value;
            let action: string = d.action;
        }
    }
</script>