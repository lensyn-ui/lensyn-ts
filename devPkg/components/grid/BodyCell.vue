<script>
    import SubCellContainer from "./SubCellContainer.vue";
    import SelectorContainer from "./SelectorContainer.vue";
    import EditorContainer from "./EditorContainer.vue";

    import CellStatusMixin from "./mixins/CellStatusMixin";
    import EventBusMixin from "./mixins/EventBusMixin";

    export default {
        mixins: [CellStatusMixin, EventBusMixin],

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
            },

            rowNumber: {
                type: Number
            }
        },
        inject: ["eventBus", "grid"],

        render(createElement) {
            return createElement("td", {
                attrs: {
                    "class": `body-cell cell-${this.column.field} ${this.isDisabled(this.column) ? "disabled" : ""}`,
                    colspan: 1,
                    rowspan: 1
                },
                on: {
                    click: ($event) => this.onCellClick($event)
                },
                style: {
                    width: this.column.width ? this.column.width : "auto"
                }
            }, this.isVisible(this.column) ? [this.getCellConent(createElement)] : null);
        },

        methods: {
            onCellClick($event) {
                if (this.column.onCellClick) {
                    this.column.onCellClick($event, this.rowData);
                }
            },

            getCellConent(createElement) {
                let column = this.column,
                    formatValue = null;

                if (column.renderCell) {
                    return this.renderCustomCell(createElement);
                }

                if (column.type === "rowNumber") {
                    return this.rowNumber;
                }

                if (this.column.format) {
                    formatValue = this.column.format(this.rowData[this.column.field], this.rowData);
                }

                if (column.sub) {
                    return this.renderSubCell(createElement);
                }

                if (column.type === "checkbox" || column.type === "radio") {
                    return this.renderSelectorCell(createElement);
                }

                if (column.editor) {
                    return this.renderEditorCell(createElement);
                }
                return this.renderDefaultCell(formatValue);
            },

            renderCustomCell(createElement) {
                return this.column.renderCell(createElement, this.rowData, this.column);
            },

            renderSubCell(createElement) {
                return createElement(SubCellContainer, {
                    props: {
                        widgets: this.column.sub,
                        rowData: this.rowData,
                        column: this.column,
                        disabled: this.isDisabled(this.column)
                    },

                    on: {
                        clickSub: (event) => this.handleClickSubCell(event)
                    }
                });
            },

            renderSelectorCell(createElement) {
                return createElement(SelectorContainer, {
                    props: {
                        rowData: this.rowData,
                        column: this.column,
                        checked: this.checked
                    },

                    on: {
                        selectEvt: (event) => this.handleSelectedEvent(event)
                    }
                });
            },

            renderEditorCell(createElement) {
                return createElement(EditorContainer, {
                    props: {
                        column: this.column,
                        rowData: this.rowData,
                        value: this.rowData[this.column.field],
                        disabled: this.isDisabled(this.column)
                    },
                    on: {
                        valueChange: (value) => this.handleEditorValueChange(value)
                    }
                });
            },

            renderDefaultCell(formatValue) {
                if (formatValue !== null) {
                    return formatValue;
                }
                return this.rowData[this.column.field];
            },

            handleSelectedEvent(event) {
                this.triggerSelect({...event, rowData: this.rowData});
            },

            handleClickSubCell({event, widget}) {
                if (widget.onClick) {
                    widget.onClick(this.rowData, this.column, event);
                }
            },

            handleEditorValueChange(value) {
                this.triggerEditor({rowData: this.rowData, column: this.column, 
                    newValue: value, oldValue: this.rowData[this.column.field]})
            }
        }
    };
</script>
