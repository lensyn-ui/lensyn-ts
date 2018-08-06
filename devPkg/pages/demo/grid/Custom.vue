<template>
    <div class="grid-table-demo">
        <ls-breadcrumb :breadcrumbList="breadList"></ls-breadcrumb>
        <ls-pagetips :pagetips="tipsInfo"></ls-pagetips>
        <div class="introduce-title">栅格实现表格</div>
        <div class="grid-table">
            <div class="grid-table-header">
                <ls-row :guttter="0">
                    <ls-column :col="4">主题名</ls-column>
                    <ls-column :col="4">ip</ls-column>
                    <ls-column :col="4">端口</ls-column>
                    <ls-column :col="4">状态</ls-column>
                    <ls-column :col="4">描述</ls-column>
                    <ls-column :col="4">操作</ls-column>
                </ls-row>
            </div>
            <div class="grid-table-body">
                <ls-row :guttter="0" v-for="(item,index) in tableList" :key="index">
                    <ls-column :col="4">
                        <span class="table-cell">{{item.issueName}}</span>
                    </ls-column>
                    <ls-column :col="4">
                        <span class="table-cell">{{item.ip}}</span>
                    </ls-column>
                    <ls-column :col="4">
                        <span class="table-cell">{{item.port}}</span>
                    </ls-column>
                    <ls-column :col="4">
                        <div class="table-cell">
                            <ls-radio :checked="item.state" name="test" :value="item.issueName" label="是否开启"></ls-radio>
                        </div>
                    </ls-column>
                    <ls-column :col="4">
                        <ls-input v-model="item.des"></ls-input>
                    </ls-column>
                    <ls-column :col="4">
                        <div class="table-cell little">
                            <ls-button type="danger" text="删除" size="mini"></ls-button>
                        </div>
                    </ls-column>
                </ls-row>
            </div>
        </div>
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
    import {Vue, Component} from "vue-property-decorator";
    import Template from "../Template.vue";

    @Component
    export default class extends Template {
        /* 重写面包屑、提示、使用说明参数 */
        breadList = [
            {name: '首页', link: '/home', id: 'breadcrumb001'},
            {name: '自定义栅格', link: '', id: 'breadcrumb002'}
        ] as any[];
        tipsInfo: any = {
            title: "自定义栅格组件的使用方法",
            subTitle: "自定义栅格组件的使用详情在‘pages/demo/grid/Custom.vue’",
            type: 'primary'
        } as any;
        introduceInfo = [
            {
                title: '参数说明',
                desc: `对于某些觉得表格的createElement麻烦或者表格不好实现的效果，可以采用栅格来伪造一个表格样式实现。`
            }
        ] as any[];

        private tableList: any[] = [
            {issueName: '测试主题1', ip: '192.168.0.10', port: '80800', state: true, des: '这是一个测试主题1'},
            {issueName: '测试主题2', ip: '192.168.11.10', port: '5060', state: false, des: '这是一个测试主题2'},
            {issueName: '测试主题3', ip: '192.168.12.10', port: '3020', state: true, des: '这是一个测试主题3'}
        ] as any[];

        private mounted(): void {
            this.readFile('../demo/grid/Custom.vue');
        }
    }
</script>
<style lang="less">
    .grid-table-demo {
        .grid-table {
            overflow: hidden;
            font-size: 10px;
            .rows-container {
                .columns-container {
                    margin-top: 0;
                    .contaier {
                        padding: 5px 10px;
                    }
                }
            }
            .grid-table-header {
                border: 1px solid #dcdcdc;
                background-color: #f5f6fa;
                color: #999;
                font-weight: bold;
                .rows-container {
                    .columns-container {
                        .contaier {
                            padding: 12px 10px;
                        }
                    }
                }
            }
            .grid-table-body {
                border: 1px solid #dcdcdc;
                border-bottom: none;
                border-top: none;
                .rows-container {
                    border: 1px solid #dcdcdc;
                    border-top: none;
                    .contaier {
                        .table-cell{
                            position: relative;
                            top: 10px;
                            &.little{
                                top: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>