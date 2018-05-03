import Util from "../helper/GridUtil";

export default {
    props: {
        rowData: {
            type: Object,
            required: true
        }
    },

    methods: {
        isVisible(column) {
            let visible = column.visible;

            if (!Util.isUndefined(visible)) {
                if (Util.isFunction(visible)) {
                    return visible(this.rowData, this.grid);
                } else {
                    return Util.getExpressionValue(this.rowData, visible);
                }
            }
            return true;
        },

        isDisabled(column) {
            let disabled = column.disabled;

            if (disabled) {
                if (Util.isFunction(disabled)) {
                    return disabled(this.rowData, this.grid);
                } else {
                    return Util.getExpressionValue(this.rowData, disabled);
                }
            }
            return false;
        }
    }
};