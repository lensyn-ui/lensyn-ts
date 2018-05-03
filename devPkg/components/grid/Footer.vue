<template>
    <div class="grid-footer">
        <table>
            <component :is="rowConstructor" :rowData="footerData" :columns="footerColumns" 
                cellType="footerCell" :selectorData="selectedAllCheckboxData" />
        </table>

        <pagination v-if="isEnablePagination" :total="totalRows" :initPage="initPage" :rows="perpageCount" @paginationEvt="onPaginationEvent" />
    </div>
</template>

<script>
    import EventBusMixin from "./mixins/EventBusMixin";

    import ColumnSetRow from "./ColumnSetRow.vue";
    import Row from "./Row.vue";
    import Pagination from "./Pagination.vue";

    export default {
        mixins: [EventBusMixin],

        props: {
            footerColumns: {
                type: Array,
                required: true
            },

            footerData: {
                type: Object,
                required: true
            },

            isColumnSetGrid: {
                type: Boolean,
                default: true
            },

            selectedAllCheckboxData: {
                type: Object,
                default: () => {}
            },

            isEnablePagination: {
                type: Boolean,
                default: false
            },

            totalRows: {
                type: Number,
                default: 0
            },

            perpageCount: {
                type: Number,
                default: 10
            },

            initPage: {
                type: Number,
                default: 1
            }
        },

        components: {
            "row": Row,
            "column-set-row": ColumnSetRow,
            "pagination": Pagination
        },
        inject: ["eventBus"],

        computed: {
            rowConstructor() {
                return this.isColumnSetGrid ? "column-set-row" : "row";
            }
        },

        methods: {
            onPaginationEvent(event) {
                this.triggerPagination(event);
            }
        }
    };
</script>

