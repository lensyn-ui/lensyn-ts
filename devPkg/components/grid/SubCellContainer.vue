<script>
    import Util from "./helper/GridUtil";
    import CellStatusMixin from "./mixins/CellStatusMixin";

    import Icon from "./widgets/Icon.vue";
    import Link from "./widgets/Link.vue";

    export default {
        mixins: [CellStatusMixin],

        props: {
            widgets: {
                type: Array,
                required: true
            },

            rowData: {
                type: Object,
                required: true
            },

            column: {
                type: Object,
                required: true
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        render(createElement) {
            return createElement("div", {
                attrs: {
                    "class": `sub-cell-container ${this.disabled ? 'disabled' : ''}`
                }
            }, this.getSubCellContent(createElement));
        },

        methods: {
            getSubCellContent(createElement) {
                let result = [];

                for (let i = 0, j = this.widgets.length; i < j; ++i) {
                    let item = this.widgets[i];

                    if (this.isWidgetVisible(item)) {
                        switch (item.type) {
                            case "button":
                                result.push(this.createButtonWidget(createElement, item));
                                break;
                            default:
                                break;
                        }
                    }
                }

                return result;
            },

            getIconWidget(createElement, widget) {
                return createElement(Icon, {
                    "class": "sub-item",
                    props: {
                        iconClass: widget.iconClass,
                        disabled: this.isWidgetDisabled(widget)
                    },
                    directives: widget.directives,
                    on: {
                        clickEvt: (event) => this.onClickSub(event, widget) 
                    }
                });
            },

            getLinkWidget(createElement, widget) {
                return createElement(Link, {
                    "class": "sub-item",
                    props: {
                        label: widget.label,
                        href: widget.href,
                        disabled: this.isWidgetDisabled(widget)
                    },
                    directives: widget.directives,
                    on: {
                        clickEvt: (event) => this.onClickSub(event, widget)
                    }
                });
            },

            getCustomWidgetProps(widget) {
                let props = {...widget.props, disabled: this.isWidgetDisabled(widget)},
                    propsMap = widget.propsRowDataMap;

                if (propsMap) {
                    for (let key in propsMap) {
                        if (propsMap.hasOwnProperty(key)) {
                            if (Util.isFunction(propsMap[key])) {
                                props[key] = propsMap[key](this.rowData[this.column.field], this.rowData);
                            } else {
                                props[key] = this.rowData[propsMap[key]];
                            }
                        }
                    }
                }

                return props;
            },

            getCustomWidget(createElement, widget) {
                return createElement(widget.component, {
                    "class": `${widget.className ? widget.className : ''} sub-item`,
                    style: widget.style,
                    props: this.getCustomWidgetProps(widget),
                    directives: widget.directives,
                    on: {
                        clickEvt: (event) => this.onClickSub(event, widget)
                    }
                });
            },

            createButtonWidget(createElement, widget) {
                let result = null;
                
                switch (widget.subType) {
                    case "link":
                        result = this.getLinkWidget(createElement, widget);
                        break;
                    case "custom":
                        result = this.getCustomWidget(createElement, widget);
                        break;
                    default:
                        result = this.getIconWidget(createElement, widget);
                        break;
                }

                return result;
            },

            isWidgetVisible(widget) {
                return this.isVisible(widget);
            },

            isWidgetDisabled(widget) {
                return this.isDisabled(widget);
            },

            onClickSub(event, widget) {
                this.$emit("clickSub", {event, widget});
            }
        }
    };
</script>
