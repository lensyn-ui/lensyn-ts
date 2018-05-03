<template>
    <div class="vue-grid" :class="{'fixed-grid': isFixedHeight, 'footer-grid': isShowFooter}">
        <grid-header ref="header" :headerColumns="headerColumns" :headerData="headerData"
                     :isColumnSetGrid="isColumnSetGrid" :selectedAllCheckboxData="selectedAllCheckboxData" />
        <grid-body :datas="tableDatas" :columns="contentColumns" :isColumnSetGrid="isColumnSetGrid" 
            :idProperty="idProperty"
            :checkboxSelected="checkboxSelected"
            :activeRowIds="activeRowIds"
            :radioSelected="radioSelected"
            :rowClassNameFn="rowClassNameFn"
            :isShowNoticeMsg="isShowNoticeMsg"
            :noticeMsg="noticeMsg"
            @contentHorizontalScroll="handleContentHorizontalScroll"
            @contentScrollbarWidth="handleContentScrollbarWidth" />

        <grid-footer v-if="isShowFooter" :footerColumns="contentColumns" :footerData="footerData" 
            :isColumnSetGrid="isColumnSetGrid" :selectedAllCheckboxData="selectedAllCheckboxData"
            :totalRows="totalRows" :perpageCount="perpageCount" :isEnablePagination="isEnablePagination"
            :initPage="initPage" />
    </div>
</template>

<script>
    import Vue from "vue";
    
    import "./style/vue-grid.less";

    import Util from "./helper/GridUtil";
    import ColumnStructure from "./helper/ColumnStructure";

    import IdMixin from "./mixins/IdMixin";
    import EventBusMixin from "./mixins/EventBusMixin";
    import PaginationMixin from "./mixins/PaginationMixin";

    import Header from "./Header.vue";
    import Body from "./Body.vue";
    import Footer from "./Footer.vue";

    export default {
        mixins: [IdMixin, EventBusMixin, PaginationMixin],

        props: {
            columns: {
                type: Array,
                required: true
            },

            datas: {
                type: Array,
                default: () => []
            },

            isShowFooter: {
                type: Boolean,
                default: false
            },

            isAllowEditorChange: {
                type: Function
            },

            rowClassNameFn: {
                type: [String, Function]
            },

            isFixedHeight: {
                type: Boolean,
                default: true
            },

            isNotCopyData: {
                type: Boolean,
                default: false
            },

            isEnableActiveRow: {
                type: Boolean,
                default: false
            },

            activeRowMode: {
                type: String,
                default: "single"
            }
        },

        components: {
            "grid-header": Header,
            "grid-body": Body,
            "grid-footer": Footer
        },

        provide() {
            return {
                eventBus: this.eventBus,
                grid: this,
                getItemId: (item) => this.getId(item),
                editorVisibleMap: this.editorVisibleMap
            };
        },

        data() {
            return {
                tableDatas: [],
                isShowNoticeMsg: false,
                noticeMsg: "",
                headerColumns: [],
                contentColumns: [],
                headerData: {},
                footerData: {},
                checkboxSelected: {},
                activeRowIds: [],
                radioSelected: {},
                eventBus: new Vue(),
                editorVisibleMap: {}
            }
        },

        computed: {
            isColumnSetGrid() {
                return Util.isArray(this.columns[0]);
            },

            selectedAllCheckboxData() {
                let count = this.tableDatas.length,
                    result = {}; 

                if (count > 0) {
                    for (let key in this.checkboxSelected) {
                        if (this.checkboxSelected.hasOwnProperty(key) && 
                                this.checkboxSelected[key].length === count) {
                            result[key] = true;
                        }
                    }
                }

                return result;
            }
        },

        watch: {
            datas(currentValue) {
                this.refreshTableDatas(currentValue);
            },

            columns() {
                this.refreshTableColumns();
            }
        },

        created() {
            ColumnStructure.configureStructure(this.columns, this.headerColumns, 
                    this.headerData, this.contentColumns, this.isColumnSetGrid);
        },

        mounted() {
            this.refreshTableDatas(this.datas);
            this.bindEventListener();
        },

        methods: {
            refreshTableDatas(value) {
                if (this.isNotCopyData) {
                    this.tableDatas = value;
                } else {
                    this.tableDatas = JSON.parse(JSON.stringify(value));
                }
            },

            refreshTableColumns() {
                this.headerColumns = [];
                this.headerData = {};
                this.contentColumns = [];

                ColumnStructure.configureStructure(this.columns, this.headerColumns,
                    this.headerData, this.contentColumns, this.isColumnSetGrid);
            },

            getCheckboxSelected(field) {
                let selected = this.checkboxSelected[field];

                if (selected) {
                    return this.tableDatas.filter((item) => selected.indexOf(this.getId(item)) !== -1);
                } else {
                    return [];
                }
            },

            getRadioSelected(field) {
                if (!Util.isUndefined(this.radioSelected[field])) {
                    return this.findRowDataById(this.radioSelected[field]);
                }
                return null;
            },

            getGridData() {
                return this.tableDatas;
            },

            getActiveRow() {
                if (this.activeRowIds.length === 0) {
                    return [];
                }
                return this.tableDatas.filter((item) => this.activeRowIds.indexOf(this.getId(item)) !== -1);
            },

            setRowBeActive(data) {
                let id = this.getId(data),
                    index = this.activeRowIds.indexOf(id);

                if (index !== -1) {
                    this.activeRowIds.splice(index, 1);
                } else {
                    if (this.activeRowMode === "single") {
                        this.activeRowIds = [id];
                    } else {
                        this.activeRowIds.push(id);
                    }
                }
            },

            clearActiveRow() {
                this.activeRowIds.splice(0, this.activeRowIds.length);
            },

            findRowDataById(id) {
                for (let i = 0, j = this.datas.length; i < j; ++i) {
                    if (this.getId(this.datas[i]) === id) {
                        return this.datas[i];
                    }
                }
                return null;
            },

            bindEventListener() {
                this.listenSelect(this.handleSelectorEvent);
                if (this.isEnablePagination) {
                    this.listenPagination(this.handlePaginationEvent);
                }
                this.listenEditor(this.handleEditorEvent);
                this.listenEditorVisible(this.handleEditorVisibleEvent);
                this.listenClickRow(this.handleClickRow);
            },

            handleSelectorEvent(event) {
                if (event.type === "checkbox") {
                    if (event.action === "selectedAll") {
                        this.handleCheckboxSelectAllEvent(event);
                    } else {
                        this.handleCheckboxSelectEvent(event);
                    }
                } else {
                    this.handleRadioSelectEvent(event);
                }
            },

            handleCheckboxSelectEvent({field, checked, rowData}) {
                let id = this.getId(rowData);

                if (!this.checkboxSelected[field]) {
                    this.$set(this.checkboxSelected, field, []);
                }

                if (checked) {
                    this.checkboxSelected[field].push(id);
                } else {
                    this.checkboxSelected[field] = this.checkboxSelected[field].filter((item) => item !== id);
                }
            },

            handleCheckboxSelectAllEvent({field, checked}) {
                if (Util.isUndefined(this.checkboxSelected[field])) {
                    this.$set(this.checkboxSelected, field, []);
                }

                if (checked) {
                    this.checkboxSelected[field] = this.tableDatas.map((item) => this.getId(item));
                } else {
                    this.checkboxSelected[field] = [];
                }
            },

            handleRadioSelectEvent({field, checked, rowData}) {
                let id = this.getId(rowData);

                if (Util.isUndefined(this.radioSelected[field])) {
                    this.$set(this.radioSelected, field, id);
                } else {
                    this.radioSelected[field] = id;
                }
            },

            handleEditorEvent(event) {
                if (!this.isAllowEditorChange || this.isAllowEditorChange(event)) {
                    event.rowData[event.column.field] = event.newValue;
                }
            },

            handleEditorVisibleEvent({action, id}) {
                if (action === "show") {
                   if (Util.isUndefined(this.editorVisibleMap[id])) {
                       this.$set(this.editorVisibleMap, id, true);
                   } else {
                       this.editorVisibleMap[id] = true;
                   }
                } else {
                    this.editorVisibleMap[id] = false;
                }
            },

            handleContentHorizontalScroll(event) {
                this.$refs.header.setHeaderRowScrollLeft(event);
            },

            handleContentScrollbarWidth(event) {
                this.$refs.header.setHeaderPaddingByContentScrollbar(event);
            },

            handleClickRow(eventData) {
                if (this.isEnableActiveRow) {
                    this.handleActiveRow(eventData.rowData);
                }
                this.emitEvent("clickRow", eventData);
            },

            handleActiveRow(rowData) {
                this.setRowBeActive(rowData);
            },

            emitEvent(action, data) {
                this.$emit("gridEvent", {action, data});
            }
        }
    };
</script>

