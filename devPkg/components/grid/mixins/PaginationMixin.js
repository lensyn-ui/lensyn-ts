export default {
    props: {
        isEnablePagination: {
            type: Boolean,
            default: false
        },

        perpageCount: {
            type: Number,
            default: 10
        },

        page: {
            type: Number,
            default: 1
        },

        store: {
            type: Object
        },

        formatQueryData: {
            type: Function,
            default: (data) => ({datas: data.datas, total: data.total})
        },

        queryDataErrorMsg: {
            type: String,
            default: "请求数据失败，请稍候重试"
        },

        paginationQueryConditionMap: {
            type: Object
        }
    },

    data() {
        return {
            totalRows: 0,
            initPage: 1,
            queryCondition: {}
        }
    },

    mounted() {
        this.refreshPaginationCondition({
            page: this.page,
            rows: this.perpageCount
        });
    },

    methods: {
        handlePaginationEvent(event) {
            this.refreshPaginationCondition(event);
            this.updateGridData(this.queryCondition);
        },

        refreshPaginationCondition(data) {
            let map = this.paginationQueryConditionMap;

            if (map) {
                for (let key in map) {
                    if (map.hasOwnProperty(key)) {
                        this.queryCondition[map[key]] = data[key];
                    }
                }
            } else {
                this.queryCondition.page = data.page;
                this.queryCondition.rows = data.rows;
            }
        },


        getPaginationCondition(data) {
            let result = {},
                map = this.paginationQueryConditionMap;

            if (map) {
                for (let key in map) {
                    if (map.hasOwnProperty(key)) {
                        result[map[key]] = data[map[key]];
                    }
                }
            } else {
                result = {
                    page: data.page,
                    rows: data.rows
                }
            }

            return result;
        },

        updateGrid(condition, isOverride) {
            if (isOverride) {
                let paginationCondition = this.getPaginationCondition(this.queryCondition);

                this.queryCondition = Object.assign(condition, paginationCondition);
            } else if (condition) {
                this.queryCondition = Object.assign(this.queryCondition, condition);
            }
            this.updateGridData(this.queryCondition);
        },

        forceUpdateGrid(params) {
            this.initPage = 0;
            this.$nextTick(() => this.initPage = 1);

            this.refreshPaginationCondition({page: 1, rows: this.perpageCount});
            this.updateGrid(params, true);
        },

        refreshGrid() {
            this.updateGrid(this.queryCondition);
        },

        updateGridData(condition) {
            this.isShowNoticeMsg = false;
            this.noticeMsg = "";

            this.store.query(condition, (data) => {
                let result = this.formatQueryData(data);

                this.tableDatas = result.datas;
                this.totalRows = result.total;
            }, () => {
                this.isShowNoticeMsg = true;
                this.noticeMsg = this.queryDataErrorMsg;
            });
        },

        getQueryCondition() {
            return this.queryCondition;
        }
    }
};
