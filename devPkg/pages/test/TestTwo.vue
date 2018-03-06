/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * 测试页面
 *********************************************************************/

<template>
    <div>
        <h1>Page Two</h1>        
        <router-link to="/">跳转到 PageOne</router-link>        
    </div>
</template>

<script lang="ts">
     import { Component, Vue, Watch, Prop } from "vue-property-decorator";

     @Component
     export default class extends Vue {
         private test() {
             let a = 1;
             switch (a) {
                 case 1:

             }
         }
     };
</script>
