export default {
    configureStructure(columns, headerColumns, headerData, contentColumns, isColumnSetGrid) {
        if (isColumnSetGrid) {
            this._configureColumnSetGrid(columns, headerColumns, headerData, contentColumns);
        } else {
            this._configureColumnGrid(columns, headerColumns, headerData, contentColumns);
        }
    },

    _configureColumnSetGrid(columns, headerColumns, headerData, contentColumns) {
        columns.forEach((item, index) => {
            headerColumns[index] = [];
            contentColumns[index] = [[]];

            this._processColumns(item, 0, true, headerColumns[index], headerData, contentColumns[index][0]);
        });
        let maxLevel = Math.max.apply(Math, headerColumns.map((item) => item.length));

        for (let i = 0, j = headerColumns.length; i < j; ++i) {
            let setColumns = headerColumns[i];
            this._resetHeaderColumnsRowSpan(maxLevel, setColumns);
        }
    },

    _configureColumnGrid(columns, headerColumns, headerData, contentColumns) {
        this._processColumns(columns, 0, true, headerColumns, headerData, contentColumns);
        this._resetHeaderColumnsRowSpan(headerColumns.length, headerColumns);
    },

    _resetHeaderColumnsRowSpan(totalLevel, headerColumns) {
        for (let i = 0; i < headerColumns.length; ++i) {
            let headerRow = headerColumns[i];

            for (let j = 0, k = headerRow.length; j < k; ++j) {
                if (headerRow[j].rowSpan <= 0) {
                    headerRow[j].rowSpan += totalLevel;
                }
            }
        }
    },

    _processColumns(columns, level, hasLabel, headerColumns, headerData, contentColumns) {
        return columns.reduce((previous, current) => {
            return this._processColumnItem({...current}, level, hasLabel, headerColumns, headerData, contentColumns) + previous;
        }, 0);
    },

    _processColumnItem(column, level, hasLabel, headerColumns, headerData, contentColumns) {
        let children = column.children,
            columnCount = 1,
            hasChildLabel = children && column.showChildLabel !== false;

        headerData[column.field] = column.label;

        if (!children) {
            column.colSpan = columnCount;
            contentColumns.push(column);
        } else {
            columnCount = column.colSpan = this._processColumns(children, level + 1, hasChildLabel, headerColumns, headerData, contentColumns);
        }

        if (hasChildLabel) {
            column.rowSpan = 1;
        } else {
            column.rowSpan = level === 0 ? 0 : -level;
        }

        if (hasLabel) {
            if (!headerColumns[level]) {
                headerColumns[level] = [];
            }
            headerColumns[level].push(column);
        }
        return columnCount;
    }
};