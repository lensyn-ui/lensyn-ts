/*********************************************************************
 * alarm component usage
 * Created by deming-su on 2018/6/19
 *********************************************************************/
 

<template>
    <div>
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">提示/警示框</div>
        <ls-button :text="'alarm1'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="alarmEvent('type0')"></ls-button>
        <ls-button :text="'alarm2'"
                   :size="'normal'"
                   :type="'primary'" @buttonEvent="alarmEvent('type1')"></ls-button>
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
            {name: '确认框', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo: any = {
            title: "提示/警示框组件的使用方法",
            subTitle: "查看提示/警示框框组件的使用详情在‘pages/demo/alarm/Index.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '实现代码',
                desc: `this.$lensyn.alarm.show('提示信息标题', '提示信息内容', 'success', 'success', true);`
            },
            {
                title: '参数说明',
                desc: `1.标题  2.类型  3.提示内容  4.是否自动消失  5.（只有当自动消失的时候可以传递一个时间值：毫秒）`
            },
            {
                title: '注意点',
                desc: `当设置为不自动消失的时候，第三个参数必传，自动第三、四、五不必传`
            }
        ] as any[];


        private mounted(): void {
            this.readFile('../demo/alarm/Index.vue');
        }


        /* 提示/警示框弹出方法 */
        private alarmEvent(type: string): void {
            if(type === 'type0') {
                this.$lensyn.alarm.show('提示信息标题', 'success', '提示信息内容', false);
                this.$lensyn.loading.show();
                setTimeout(() => {
                    this.$lensyn.loading.hide();
                }, 1600);
            } else {
                this.$lensyn.alarm.show('提示信息标题', 'danger', '提示信息内容', true, 2000);
            }
        }
    }
</script>