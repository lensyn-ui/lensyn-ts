/*************************************************
* Created by zhangtao on 2018/03/22
*************************************************/

<template>
    <div class="icon-btn" @click="handleClickBtn" :class="{active: active}">
        <i class="iconfont" :class="iconTypeClass"></i>
    </div>
</template>

<script>
    export default {
        props: {
            iconType: {
                type: String,
                required: true
            },

            active: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            iconTypeClass() {
                return this.iconType;
            }
        },

        methods: {
            handleClickBtn() {
                this.$emit("click", {name: this.name});
            }
        }
    };
</script>

