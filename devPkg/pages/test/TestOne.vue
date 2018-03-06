/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * 测试页面
 *********************************************************************/

<template>
    <div>
        <ul>
            <li>{{topState}}</li>
            <li>{{moduleState}}</li>           
            <li>{{computedProperty}}</li>
        </ul>       

        <hello msg="组件信息"></hello>
        
        <button @click="tryGetData">请求数据</button>

        <br />

        <router-link to="/test-two">跳转到 PageTwo</router-link>
    </div>
    
</template>

<script lang="ts">
    import { Component, Vue, Watch, Prop } from "vue-property-decorator";
    import { State, Getter, namespace } from "vuex-class";
    
    import { Hello } from "../../components";
    import { request } from "../../util";

    const ModuleGetter = namespace("common", Getter);

    @Component({
        components: {
            "hello": Hello
        }
    })
    export default class extends Vue {
        @Prop({type: String, default: "属性值"})
        private parentProp: string;

        @State("topState")
        private topState: string;

        @ModuleGetter("moduleState")
        private moduleState: string;

        @Watch("topState")
        private onHelloChange(currentValue: string): void {

        }

        private get computedProperty(): string {
            return "计算属性";
        }

        private created(): void {
            console.log("created");
        }

        private mounted(): void {
            console.log("mounted");
        }

        private tryGetData(): void {
            request.sendRequest({url: "/mokeData/test.json"}, () => {
                alert("请求成功");
            }, () => {
                alert("请求失败");                
            });
        }
    };
</script>

