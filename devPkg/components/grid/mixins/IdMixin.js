import Util from "../helper/GridUtil";

let idMixin = {
    props: {
        idProperty: {
            type: [String, Array],
            default: "id"
        }
    },

    methods: {
        getId(rowData) {
            if (Util.isArray(this.idProperty)) {
                return this.idProperty.reduce((previous, current) => `${previous}-${rowData[current]}`);
            }
            return rowData[this.idProperty];
        }
    }
};

export default idMixin;