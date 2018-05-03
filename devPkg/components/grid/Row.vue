<template>
    <tr @click="handleClickRow($event)" :class="getRowClassName()">
        <component :is="cellType" v-for="(column, index) in columns" :column="column" :key="index"
            :rowData="rowData" :checked="isColumnChecked(column)" :rowNumber="rowNumber" />
    </tr>
</template>

<script>
    import Util from "./helper/GridUtil";
    
    import BodyCell from "./BodyCell.vue";
    import HeaderCell from "./HeaderCell.vue";
    import FooterCell from "./FooterCell.vue";

    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },

            columns: {
                type: Array,
                required: true
            },

            cellType: {
                type: String,
                required: true
            },

            defaultClassName: {
                type: String,
                default: "grid-row"
            },

            rowClassNameFn: {
                type: [Function, String]
            },

            selectorData: {
                type: Object,
                default: () => {}
            },

            rowNumber: {
                type: Number
            },

            isActive: {
                type: Boolean,
                default: false
            }
        },

        components: {
            "headerCell": HeaderCell,
            "bodyCell": BodyCell,
            "footerCell": FooterCell
        },

        methods: {
            handleClickRow($event) {
                this.$emit("clickRow", {rowData: this.rowData, rowNumber: this.rowNumber, $event});
            },

            getRowClassName() {
                let result = this.defaultClassName;

                if (this.rowClassNameFn) {
                    let extra = "";
                    if (Util.isFunction(this.rowClassNameFn)) {
                        extra = this.rowClassNameFn(this.rowData);
                    } else {
                        extra = Util.getExpressionValue(this.rowData, this.rowClassNameFn);
                    }
                    result = `${result} ${extra}`;
                }

                if (this.isActive) {
                    result = `${result} active`;
                }
                return result;
            },

            isColumnChecked(column) {
                if (this.selectorData) {
                    return this.selectorData[column.field];
                }
                return false;
            }
        }
    };
</script>

