import { TreeData, TreeDataItem } from "dwh-component";

let times = (time: number, callback: (index: number) => void): any[] => {
    let result: any[] = [];
    for (let i = 0; i < time; ++i) {
        result.push(callback(i));
    }
    return result;
};

let covertToCron = (time: string[], date: string[]): string => {
    let hour = time.length > 0 ? time.join(",") : "*",
        week = date.length > 0  ? date.join(",") : "*";

    return `0 0 ${hour} ? * ${week}`;
};

let covertCronToMap = (cron?: string): {once: boolean, date?: string[], time?: string[]} => {
    if (typeof cron === "undefined" || cron === "") {
        return {once: true};
    }
    let strArray = cron.split(" "),
        timeArray = strArray[2].split(","),
        dateArray = strArray[5].split(",");

    return {once: false, date: dateArray, time: timeArray};
};

let covertCronReadable = (cron: string): string => {
    let format = covertCronToMap(cron),
        dateMap: {[key: number]: string} = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 7: "日" };

    if (format.once) {
        return "运行一次";
    }
    let result = "";

    if (format.date && format.date[0] !== "*" && format.date[0] !== "?") {
        result = `每周${format.date.map((item: string) => dateMap[Number(item)]).join("、")}`;
    }
    if (format.time && format.time[0] !== "*" && format.time[0] !== "?") {
        let formatTimes = format.time.map((item) => {
            if (item.length < 2) {
                return `0${item}:00`;
            } else {
                return `${item}:00`;
            }
        });
        result += formatTimes.join("、");
    }
    return result;
};

let formatDate = (format: string, date: Date): string => {
    let o: {[key: string]: number} = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (o.hasOwnProperty(k)) {
            if (new RegExp(`(${k})`).test(format)) {
                let replaceStr = RegExp.$1.length === 1 ? o[k] :
                                                          ("00" + o[k]).substring(("" + o[k]).length);
                format = format.replace(RegExp.$1, replaceStr as string);
            }
        }
    }
    return format;
};

let tree = {
    _forEachTreeItem(data: TreeDataItem, childKey = "children",
                     callback: (item: TreeDataItem, parent?: TreeDataItem) => void, parent?: TreeDataItem) {

        callback(data, parent);

        let child = data[childKey];

        if (child && child.length > 0) {
            for (let i = 0, j = child.length; i < j; ++i) {
                this._forEachTreeItem(child[i], childKey, callback, data);
            }
        }
    },

    forEachTree(data: TreeDataItem, callback: (item: TreeDataItem, parent?: TreeDataItem) => void,
                childKey: string = "children") {
        this._forEachTreeItem(data, childKey, callback);
        return data;
    },

    forEachArrayTree(datas: TreeData, callback: (item: TreeDataItem, parent?: TreeDataItem) => void,
                     childKey: string = "children") {
        for (let i = 0, j = datas.length; i < j; ++i) {
            this.forEachTree(datas[i], callback, childKey);
        }
    },

    isLeafNode(data: TreeDataItem, childKey: string = "children"): boolean {
        return !data[childKey];
    },

    removeTreeLeaf(datas: TreeData, match: (item: TreeDataItem) => boolean, childKey: string = "children") {
        /*
        this.forEachArrayTree(datas, (item: TreeDataItem, parent?: TreeDataItem) => {
            if (this.isLeafNode(item) && parent) {
            }
        });
        */
    },

    _deepTraveral(data: TreeDataItem, callback: (item: TreeDataItem, parent?: TreeDataItem) => void,
                  childKey: string = "children", parent?: TreeDataItem) {

        if (this.isLeafNode(data, childKey)) {
            callback(data, parent);
        } else {
            let child = data[childKey];

            for (let i = 0, j = child.length; i < j; ++i) {
                let item = child[i];
                this._deepTraveral(item, callback, childKey, data);
            }
            callback(data, parent);
        }

    },

    deepTraveral(data: TreeDataItem, callback: (item: TreeDataItem, parent?: TreeDataItem) => void,
                 childKey: string = "children") {

        this._deepTraveral(data, callback, childKey);
    },

    /**
     * 深度优先遍历树
     * @param {object[]} datas
     * @param {function} callback
     * @param {string} childKey
     */
    deepTraveralTrees(datas: TreeData, callback: (item: TreeDataItem, parent?: TreeDataItem) => void,
                      childKey: string = "children") {
        for (let i = 0, j = datas.length; i < j; ++i) {
            this.deepTraveral(datas[i], callback, childKey);
        }

    },

    /**
     * 过滤树型数据，并保留对应的结构
     * @param {object[]} datas - 需要过滤的数据
     * @param {function} match - 是否匹配的函数
     * @param {string} childKey - 子数据存在的 key
     * @param {string} idKey - 树型结构的主键
     * @returns {object[]} - 过滤后的数据
     */
    filterTree(datas: TreeData, match: (item: TreeDataItem) => boolean,
               childKey: string = "children", idKey: string = "id") {
        let matchIds: string[] = [],
            result: TreeData = [],
            dataMap: any = {};

        // 先深度优先遍历出所有需要保留的结点
        this.deepTraveralTrees(datas, (item: TreeDataItem, parent?: TreeDataItem) => {
            let itemId = item[idKey],
                parentId = "";

            if (parent) {
                parentId = parent[idKey];
            }

            if (matchIds.indexOf(itemId) !== -1) {
                if (parentId !== "" && matchIds.indexOf(parentId) === -1) {
                    matchIds.push(parentId);
                }
            } else {
                if (match(item)) {
                    matchIds.push(itemId);

                    if (parentId !== "" && matchIds.indexOf(parentId) === -1) {
                        matchIds.push(parentId);
                    }
                }
            }
        }, childKey);

        // 再广度优先把数据重组
        this.forEachArrayTree(datas, (item: TreeDataItem, parent?: TreeDataItem) => {
            let itemId = item[idKey],
                parentId = "",
                pushData: any = null;

            if (parent) {
                parentId = parent[idKey];
            }

            if (matchIds.indexOf(itemId) !== -1) {
                if (this.isLeafNode(item, childKey)) {
                    pushData = {...item};
                } else {
                    pushData = {...item, [childKey]: []};
                }

                if (parentId === "") {
                    result.push(pushData);
                } else {
                    dataMap[parentId][childKey].push(pushData);
                }
                dataMap[itemId] = pushData;
            }
        }, childKey);
        return result;
    },

    /**
     * 找出一个节点到根的路径
     * @param {object} root
     * @param {object} node
     * @param {string} childKey
     */
    _findNodeParentPath(root: TreeData, node: TreeData, paths: TreeData[], childKey = "children") {
        if (root === node) {
            paths.push(node);
            return true;
        }

        let childrens = root[childKey as any];

        if (childrens) {
            for (let i = 0, j = childrens.length;  i < j; ++i) {
                if (this._findNodeParentPath(childrens[i], node, paths, childKey)) {
                    paths.push(root);
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * 找出一个节点的父级路径
     * @param {object} root
     * @param {object} node
     * @param {string} childKey
     */
    findNodeParentPath(root: TreeData, node: TreeData, childKey = "children") {
        let paths: TreeData[] = [];

        this._findNodeParentPath(root, node, paths, childKey);
        return paths;
    },

    /**
     * 找出一个数组树中一个节点的次级路径
     * @param {object} roots
     * @param {object} node
     * @param {string} childKey
     */
    findArrayTreeParentPath(roots: TreeData[], node: TreeData, childKey = "children") {
        let paths: TreeData[] = [];

        for (let i = 0, j = roots.length; i < j; ++i) {
            paths = this.findNodeParentPath(roots[i], node, childKey);

            if (paths.length > 0) {
                break;
            }
        }

        return paths;
    }
};

let id = 1,
    idPrefix = "_front_id";

let generateId = () => {
    return `${idPrefix}_${id++}`;
};

let formatByteValue = (value: number, precision: number, unit: string): string => {
    return `${value.toFixed(precision)}${unit}`;
};

let formatByte = (originalValue: number | string, precision: number = 2, type = "KB"): string => {
    let value: number;
    if (typeof originalValue === "string") {
        value = parseFloat(originalValue);
    } else {
        value = originalValue;
    }
    if (value < 1024) {
        return formatByteValue(value, precision, "KB");
    }

    let mb = value / 1024;
    if (mb < 1024) {
        return formatByteValue(mb, precision, "MB");
    }

    let gb = mb / 1024;
    if (gb < 1024) {
        return formatByteValue(gb, precision, "GB");
    }

    let tb = gb / 1024;

    return formatByteValue(tb, precision, "TB");
};

let covertDayToMilliSeconds = (day: string | number): number => {
    if (typeof day === "string") {
        day = parseInt(day, 10);
    }
    return day * 24 * 60 * 60 * 1000;
};

let covertHourToMilliSeconds = (hour: string | number): number => {
    if (typeof hour === "string") {
        hour = parseFloat(hour);
    }
    return hour * 60 * 60 * 1000;
};

let covertMiliSecondsToHour = (seconds: number): number => {
    return seconds / (60 * 60 * 1000);
};

let covertMiliSecondsToDay = (second: number): number => {
    return second / (60 * 60 * 1000 * 24);
};

let formatTimeReadable = (time: number): string => {
    let second = time % 60;

    if (time < 60) {
        return `${time}秒`;
    }

    let min = Math.floor(time / 60);


    return `${min}分${second}秒`;
};

let moveInArrayByIndex = (datas: any[], newIndex: number, oldIndex: number): any[] => {
    let data = datas[oldIndex];

    datas.splice(oldIndex, 1);
    datas.splice(newIndex, 0, data);

    return datas;
};

let generateRandomNumber = (count: number): string => {
    let result = "";

    times(count, () => {
        result += Math.floor((Math.random() * 10));
    });

    return result;
};

let debounce = (idle: number, fn: any) => {
    let job: any = null;

    return function(this: any, ...args: any[]) {
        if (job !== null) {
            clearTimeout(job);
        }
        let self = this;

        job = setTimeout(() => {
            fn.apply(self, args);
        }, idle);
    };
};

export {
    times,
    covertToCron,
    covertCronToMap,
    covertCronReadable,
    formatDate,
    tree,
    generateId,
    formatByte,
    covertDayToMilliSeconds,
    covertHourToMilliSeconds,
    covertMiliSecondsToDay,
    covertMiliSecondsToHour,
    moveInArrayByIndex,
    generateRandomNumber,
    formatTimeReadable,
    debounce
};