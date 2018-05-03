/*********************************************************************
* Created by deming-su on 2018/3/17                                
 *********************************************************************/


<template>
    <div class="common-step" :class="{vertical: isVertical, expand: isExpand}" v-if="stepList && stepList.length > 0">
        <div class="box-list">
            <span class="box" v-for="(item, i) in stepList" :key="i" @click="onClickItem(item)">
                <span class="line"
                      :class="item.type"
                      v-if="i !== 0"></span>
                <span class="item">
                    <span class="icon" :class="item.type">{{i + 1}}</span>
                    <span class="text">{{item.info}}</span>
                </span>
            </span>
        </div>

        <div class="modal-layer" v-if="isVertical">
            <i class="expand-icon" @click="onClickExpandBtn"></i>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        props: {
            params: {
                type: Array,
                default: () => []
            },

            isVertical: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                stepList: [],
                isExpand: false,
                isVisible: false
            }
        },
        watch: {
            params(val) {
                this.resetList(val);
            }
        },

        methods: {
            onClickExpandBtn() {
                this.isExpand = !this.isExpand;
            },

            resetList(val) {
                let me = this;
                let flag = true;
                me.stepList = [];
                if(val instanceof Array) {
                    val.map(it => {
                        if(flag && it.nowStep) {
                            flag = false;
                            it.type = 'active';
                        } else if(!flag) {
                            it.type = 'default';
                        } else {
                            it.type = it.type && it.type !== 'active' ? it.type : 'success';
                        }
                        me.stepList.push(it);
                    });
                }
            },

            onClickItem(item) {
                this.$emit("clickStep", {data: item});
            }
        },
        mounted() {
            this.resetList(this.params);
        }
    }
</script>
