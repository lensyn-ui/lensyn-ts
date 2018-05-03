<script>
    import SelectorContainer from "./SelectorContainer.vue";
    import SubCellContainer from "./SubCellContainer.vue";
    import EventBusMixin from "./mixins/EventBusMixin";
    import CellStatusMixin from "./mixins/CellStatusMixin";
    
    export default {
        mixins: [EventBusMixin, CellStatusMixin],

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
            let column = this.column;
            
            return createElement("td", {
                attrs: {
                    "class": "footer-cell",
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                },
                style: {
                    width: column.width ? column.width : "auto"
                }
            }, [this.getCellContent(createElement)]);
        },

        methods: {
            getCellContent(createElement) {
                let column = this.column;

                if (column.type === "checkbox" && column.showInFooter) {
                    return this.renderSelectorCell(createElement);
                } else if (column.renderFooterCell) {
                    return column.renderFooterCell(createElement, this.rowData, column);
                } else if (column.footerSub) {
                    return this.renderSubCell(createElement);
                }
                return this.rowData[column.field];
            },

            renderSubCell(createElement) {
                let column = this.column;

                return createElement(SubCellContainer, {
                    props: {
                        widgets: column.footerSub,
                        rowData: this.rowData,
                        column: column,
                        disabled: this.isDisabled(column)
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
                        selectEvt: (event) => this.handleSelectorEvent(event)
                    }
                });
            },

            handleSelectorEvent(event) {
                this.triggerSelect({...event, action: "selectedAll"});
            },

            handleClickSubCell({event, widget}) {
                if (widget.onClick) {
                    widget.onClick(this.rowData, this.column, event);
                }
            }
        }
    };
</script>
