<script>
    import SelectorContainer from "./SelectorContainer.vue";
    import EventBusMixin from "./mixins/EventBusMixin";

    export default {
        mixins: [EventBusMixin],

        props: {
            column: {
                type: Object,
                required: true
            },

            rowData: {
                type: Object,
                required: true
            },

            checked: {
                type: Boolean,
                default: false
            }
        },

        inject: ["eventBus"],

        render(createElement) {
            return createElement("th", {
                attrs: {
                    "class": "header-cell",
                    colspan: this.column.colSpan,
                    rowspan: this.column.rowSpan
                },
                style: {
                    width: this.column.width ? this.column.width : "auto"
                }
            }, [this.getCellContent(createElement)]);
        },

        methods: {
            getCellContent(createElement) {
                let column = this.column;

                if (column.type === "checkbox" && column.showInHeader) {
                    return this.renderSelectorCell(createElement);
                } else if (column.renderHeaderCell) {
                    return column.renderHeaderCell(createElement, this.rowData, column);
                }

                return this.rowData[column.field];
            },

            renderSelectorCell(createElement) {
                return createElement(SelectorContainer, {
                    props: {
                        rowData: this.rowData,
                        column: this.column,
                        checked: this.checked
                    },
                    on: {
                        selectEvt: (event) => this.handleSelectorEvent(event)
                    }
                });
            },

            handleSelectorEvent(event) {
                this.triggerSelect({...event, action: "selectedAll"});
            }
        }
    };
</script>
