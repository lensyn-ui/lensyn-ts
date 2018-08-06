<template>
    <div class="dropDown-demo">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">popUp</div>
        <div>
            <ls-popup popupPosition="windowCenter"></ls-popup>
        </div>
        <div class="introduce-info">
            <div class="item">
                <div class="title">参数说明</div>
                <div class="desc">
                    注意: 由于popup并没有单独作为一个组件暴露在lensyn-ui上，所以需要单独建立一个vue文件用于编写popup组件。再通过引入编写好的组件，来使用popup。在父级，引入import Popup from '../popUp-demo/Index.vue';同时在@Component({components: {'ls-popup': Popup}})注册组件；Popup的具体写法参见以下代码。<br/><br/>
                    popupPosition用于设置弹窗位置，可传入字符串或者数组。共有windowTop、windowCenter、windowTopRight、windowTopLeft、windowBottomRight、windowBottomLeft。可通过popupPosition="windowCenter"传入。
                </div>
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
    import Popup from '../popUp-demo/Index.vue';

    @Component({
        components: {
            'ls-popup': Popup
        }
    })
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: 'popUp', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "popUp组件的使用方法",
            subTitle: "查看popUp组件的使用详情在‘pages/demo/popUp/Index.vue’",
            type: 'primary'
        } as any;

        /**
         * 页面参数定义
         */

        private mounted(): void {
            this.readFile('../demo/popUp-demo/Index.vue');
        }
    }
</script>