<template>
    <a :class="{'disabled': disabled}" :href="href" @click="onClickLink">{{label}}</a>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ""
            },

            href: {
                type: String,
                default: ""
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            onClickLink(event) {
                if (!this.disabled) {
                    this.$emit("clickEvt", event);
                }
            }
        }
    };
</script>
