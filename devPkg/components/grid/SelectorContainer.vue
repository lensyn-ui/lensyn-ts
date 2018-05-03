<script>
    import CellStatusMixin from "./mixins/CellStatusMixin";
    import Checkbox from "./widgets/Checkbox.vue";
    import Radio from "./widgets/Radio.vue";

    export default {
        mixins: [CellStatusMixin],

        props: {
            column: {
                type: Object,
                required: true
            },

            checked: {
                type: Boolean,
                default: false
            }
        },

        render(createElement) {
            return createElement("div", {
                attrs: {
                    "class": `selector-container ${this.isDisabled(this.column) ? 'disabled' : ''}`
                }
            }, [this.getSelectorContent(createElement)]);
        },

        methods: {
            getSelectorContent(createElement) {
                if (this.column.type === "checkbox") {
                    return this.getCheckboxSelector(createElement);
                } else if (this.column.type === "radio") {
                    return this.getRadioSelector(createElement);
                }
            },

            getCheckboxSelector(createElement) {
                return createElement(Checkbox, {
                    props: {
                        disabled: this.isDisabled(this.column),
                        checked: this.checked 
                    },

                    on: {
                        checkEvt: (event) => this.onSelectorCheckEvent(event)
                    }
                })
            },

            getRadioSelector(createElement) {
                return createElement(Radio, {
                    props: {
                        disabled: this.isDisabled(this.column),
                        checked: this.checked
                    },

                    on: {
                        checkEvt: (event) => this.onSelectorCheckEvent(event)
                    }
                });
            },

            onSelectorCheckEvent(event) {
                this.$emit("selectEvt", {
                    field: this.column.field,
                    type: this.column.type,
                    checked: event.checked
                });
            }
        }
    };
</script>

