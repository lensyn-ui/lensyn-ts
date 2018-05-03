<script>
    import Input from "./widgets/Input.vue";
    import Util from "./helper/GridUtil";
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

            disabled: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            isControlVisibleEditor() {
                return this.column.editOn || this.column.editorVisible;
            }
        },

        inject: ["getItemId", "eventBus", "editorVisibleMap"],

        data() {
            return {
                editorIdentify: null
            };
        },

        render(createElement) {
            return createElement("div", {
                attrs: {
                    "class": `editor-container ${this.disabled ? 'disabled' : ''}`
                },
                on: this.getEditorContainerEventHandler()
            }, [this.getEditorContent(createElement)]);
        },

        methods: {
            getEditorContent(createElement) {
                if (this.isShowEditor()) {
                    let widget = null;

                    if (this.column.editor === "input") {
                        widget = Input;
                    } else {
                        widget = this.column.editor;
                    }

                    return this.createEditor(createElement, widget);
                } else {
                    return this.getTextContent();
                }
            },

            getTextContent() {
                return this.rowData[this.column.field];
            },

            isShowEditor() {
                let column = this.column;

                if (Util.isUndefined(column.editorVisible) && Util.isUndefined(column.editOn)) {
                    return true;
                }
                if (Util.isUndefined(column.editOn)) {
                    if (Util.isFunction(column.editorVisible)) {
                        return column.editorVisible(this.rowData);
                    }
                    return Util.getExpressionValue(this.rowData, column.editorVisible);
                }
                return this.editorVisibleMap && this.editorVisibleMap[this.getEditorIdentify()];
            },

            getEditorIdentify() {
                return `${this.getItemId(this.rowData)}-${this.column.field}`;
            },

            dispatchShowEditorEvent() {
                this.triggerEditorVisible({action: "show", id: this.getEditorIdentify()});
            },

            dispatchHideEditorEvent() {
                this.triggerEditorVisible({action: "hide", id: this.getEditorIdentify()});
            },

            getEditorContainerEventHandler() {
                let result = {};

                if (this.column.editOn) {
                    result[this.column.editOn] = (event) => this.onEditOnEvent(event)
                }
                return result;
            },

            createEditor(createElement, widget) {
                return createElement(widget, {
                    props: this.getEditorProps(),
                    on: {
                        ...this.column.on,
                        input: (value) =>  this.onEditorValueChange(value),
                        hideEditor: () => this.dispatchHideEditorEvent()
                    }
                });
            },

            getEditorProps() {
                let result = { ...this.column.props, disabled: this.disabled, value: this.rowData[this.column.field] },
                    propsMap = this.column.propsRowDataMap;

                if (propsMap) {
                    for (let key in propsMap) {
                        if (propsMap.hasOwnProperty(key)) {
                            if (Util.isFunction(propsMap[key])) {
                                result[key] = propsMap[key](this.rowData[this.column.field], this.rowData);
                            } else {
                                result[key] = this.rowData[propsMap[key]];
                            }
                        }
                    }
                }

                return result;
            },

            onEditOnEvent(event) {
                debugger;
                if (event.target === this.$el && this.isEditorVisible()) {
                    this.dispatchShowEditorEvent();
                }
            },

            isEditorVisible() {
                let visible = this.column.editorVisible;
                if (Util.isUndefined(visible)) {
                    return true;
                }
                return Util.getExpressionValue(this.rowData, visible);
            },

            onEditorValueChange(value) {
                this.$emit("valueChange", value);
                if (this.isControlVisibleEditor) {
                    this.dispatchHideEditorEvent();
                }
            }
        }
    };
</script>
