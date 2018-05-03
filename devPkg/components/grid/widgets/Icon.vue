<template>
  <i :class="[iconClass, {'disabled': disabled}]" @click="onClickIcon" />
</template>

<script>
    export default {
        props: {
            iconClass: {
                type: String,
                required: true
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            onClickIcon() {
                if (!this.disabled) {
                    this.$emit("clickEvt");
                }
            }
        }
    };
</script>
