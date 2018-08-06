<template>
    <div class="transfer-demo">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">transfer</div>
        <ls-row>
            <div class="transfer-box">
                <ls-column :col="24">
                    <ls-transfer :datas="transferDatas" :checkedData="2"></ls-transfer>
                </ls-column>
            </div>
        </ls-row>
        <div class="introduce-title">自定义transfer</div>
        <ls-row>
            <div class="transfer-box">
                <ls-column :col="24">
                    <ls-transfer :datas="transferDatas" style="margin-top: 30px;" :isEnableSourceFilter="false" :checkedData="2">
                        <div class="custom-header" slot-scope="header" slot="sourceHeader">
                            <span>剩余条数为 {{header.sourceList.length}}</span>
                        </div>
                        <ul class="custom__body" slot-scope="list" slot="sourceList">
                            <li v-for="item in list.showSourceList"
                                :key="item.id"
                                :class="{'checked': list.checkedData.indexOf(item.id) !== -1}"
                                @click="handleClickCustomTransferSourceItem(item, list.vm)">
                                <span>custom -<ls-tag size="mini">{{item.name}}</ls-tag></span>
                            </li>
                        </ul>
                    </ls-transfer>
                </ls-column>
            </div>
        </ls-row>
        <div class="introduce-info">
            <div class="item">
                <div class="title">参数说明</div>
                <div class="desc">
                    datas必须绑定一个数组，数组的每一项必须有id、name、value三个属性。<br/>
                    isEnableSourceFilter表示左边(源)列表是否支持搜索匹配；isEnableTargetFilter表示右边(目标)列表是否支持搜索匹配，两者默认值均为true。<br/>
                    可以绑定filterFn来设置搜索匹配的规则，filterFn需传入一个函数。
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component({})
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: 'transfer', link: '', id: 'breadcrumb002'}
        ];
        tipsInfo = {
            title: "transfer组件的使用方法",
            subTitle: "查看transfer组件的使用详情在‘pages/demo/transfer/Index.vue’",
            type: 'primary'
        } as any;

        private transferDatas: any[] = [] as any[];

        private randomList() {
            let temp: any[] = [] as any[];
            for (let i = 0; i < 20; i++) {
                temp.push({
                    id: (i + 1),
                    name: `测试主题${i + 1}`,
                    value: (i + 1)
                });
            }
            return temp;
        }

        private handleClickCustomTransferSourceItem(data: any, vm: any) {
            vm.toggleCheckSourceData(data);
        }
    }
</script>
<style lang="less">
    .transfer-demo {
        .transfer-box {
            /* stylelint-disable-next-line */
            .transfer__body {
                /* stylelint-disable-next-line */
                .custom__body {
                    li {
                        cursor: pointer;

                        &.checked {
                            background-color: #ddd;
                        }
                    }
                }
            }
        }
    }
</style>