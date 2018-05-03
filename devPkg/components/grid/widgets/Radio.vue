<template>
    <div class="vue-grid-radio" :class="{'checked': checked}" @click="onClick"></div>
</template>

<script>
    export default {
        props: {
            checked: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            onClick(event) {
                this.$emit("checkEvt", {event, checked: !this.checked});
            }
        }
    };
</script>

