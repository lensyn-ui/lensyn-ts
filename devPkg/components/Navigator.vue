/*********************************************************************
* Vue private navigator file
* Created by deming-su on 2017/12/30
*********************************************************************/

<template>
    <div class="navigator-container">
        <div class="container">
            <div class="logo">LENSYN-TS</div>
            <ul class="brand">
                <li class="iconfont icon-xiayi back" @click="navClickEvt('back')"></li>
                <li class="iconfont icon-xiayi forward" @click="navClickEvt('forward')"></li>
                <li class="iconfont icon-shuaxin" @click="navClickEvt('refresh')"></li>
            </ul>
            <ul class="nav">
                <li>lensyn@fet</li>
                <li class="nav-btn" @click="navClickEvt('logout')">退出</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class extends Vue {
        @Prop({type: Object})
        private navObj: any;
        @Emit("clickNav")
        private navClickEvt(type: string): void{};
    }
</script>