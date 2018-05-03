/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="navigator-container">
        <div class="logo">
            共享平台
        </div>
        <ul class="brand">
            <li class="iconfont icon-xiayi back" @click="onClickBack"></li>
            <li class="iconfont icon-xiayi forward" @click="onClickForward"></li>
            <li class="iconfont icon-shuaxin" @click="onClickRefresh"></li>
            <li class="search">
                <ls-feature-search
                        :datas="searchDatas"
                        :isFeatureMatch="isFeatureMatch"
                        @featureEvent="onFeatureEvent"
                >
                </ls-feature-search>
                <!--
                <ls-plain-input v-model="featureName" placeholder="搜索功能名称"></ls-plain-input>
                <i class="iconfont icon-sousuo" @click="onClickSearchFeature"></i>
                -->
            </li>
        </ul>
        <ul class="nav">
            <li>{{userName}}</li>
            <li class="nav-btn" @click="onClickLoginOut">退出</li>
        </ul>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import PlainInput from "./form-widgets/PlainInput.vue";
    import FeatureSearch from "./FeatureSearch.vue";

    @Component({
        components: {
            "ls-plain-input": PlainInput,
            "ls-feature-search": FeatureSearch
        }
    })
    export default class Navitagor extends Vue {
        @Prop({type: String})
        private userName: string;
        @Prop({type: Array})
        private searchDatas: any[];
        @Prop({type: Function})
        private isFeatureMatch: (value: string, data: any) => boolean;

        private featureName: string = "";

        private onClickLoginOut() {
            this.$emit("clickNav", {action: "loginOut"});
        }

        private onClickSearchFeature() {
            this.$emit("clickNav", {action: "searchFeature", data: this.featureName});
        }

        private onClickRefresh() {
            this.$emit("clickNav", {action: "refresh"});
        }

        private onClickBack() {
            this.$emit("clickNav", {action: "back"});
        }

        private onClickForward() {
            this.$emit("clickNav", {action: "forward"});
        }

        private onFeatureEvent(event: any) {
            this.$emit("featureEvent", event);
        }
    }
</script>