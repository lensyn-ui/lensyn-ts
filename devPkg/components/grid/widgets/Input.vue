<template>
    <div class="input-editor">
        <input v-model="editorValue" @change="onValueChange" :disabled="disabled" />
    </div>
</template>

<script>
    import Autofucs from "../directives/AutoFocus";
    export default {
        props: {
            value: {

            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        directives: {
          "grid-autofocus": Autofucs
        },

        data() {
            return {
                editorValue: ""
            };
        },


        watch: {
            value(currentValue) {
                this.editorValue = currentValue;
            }
        },

        created() {
            this.editorValue = this.value;
        },

        methods: {
            onValueChange() {
                this.$emit("input", this.editorValue);
            },

            focus() {
                this.$el.children[0].focus();
            }
        }
    };
</script>