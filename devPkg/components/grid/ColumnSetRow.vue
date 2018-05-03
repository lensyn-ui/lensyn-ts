<template>
    <tr :class="getRowClassName()" @click="handleClickRow($event)">
        <td v-for="(set, setIndex) in columns" :key="setIndex" :class="getSetColumnsClassName(setIndex)" >
            <table>
                <row v-if="cellType === 'headerCell'" defaultClassName="layout-row" 
                        :columns="getLayoutColumns(set)" :rowData="{}" :cellType="cellType" />

                <row v-for="(columns, index) in set" :key="index" :columns="columns" :rowData="rowData" 
                        :cellType="cellType" :defaultClassName="''" :selectorData="selectorData" :rowNumber="rowNumber" />
            </table>
        </td>
    </tr>
</template>

<script>
    import Util from "./helper/GridUtil";
    import Row from "./Row.vue";

    export default {
        props: {
            columns: {
                type: Array,
                required: true
            },

            rowData: {
                type: Object,
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

            selectorData: {
                type: Object,
                default: () => {}
            },

            rowClassNameFn: {
                type: [String, Function]
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
            "row": Row
        },

        methods: {
            handleClickRow($event) {
                this.$emit("clickRow", {rowData: this.rowData, rowNumber: this.rowNumber, $event});
            },

            getRowClassName() {
                let str = this.defaultClassName;

                if (this.rowClassNameFn) {
                    let extra = "";
                    if (Util.isFunction(this.rowClassNameFn)) {
                        extra = this.rowClassNameFn(this.rowData);
                    } else {
                        extra = Util.getExpressionValue(this.rowData, this.rowClassNameFn);
                    }
                    str = `${str} ${extra}`;
                }

                if (this.isActive) {
                    str = `${str} active`;
                }
                return str;
            },

            getSetColumnsClassName(index) {
                return `column-set column-set-${index}`;
            },

            getLayoutColumns(sets) {
                let results = [];

                for (let i = 0, j = sets.length; i < j; ++i) {
                    let columns = sets[i];

                    for (let k = 0, p = columns.length; k < p; ++k) {
                        let column = columns[k];

                        if (!column.children) {
                            results.push({...column, rowSpan: 1, colSpan: 1});
                        }
                    }
                }

                return results;
            }
        }
    };
</script>

