/*********************************************************************
 * common util function file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 16进制颜色转rgba */
let hexToRgba = (val: string, opacity = 1) => {
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(val)) {
        /* 自动补全3位16进制字符串 */
        if (val.length === 4) {
            let str = "#";
            for (let i = 1; i < 4; i ++) {
                let char = val.slice(i, i + 1);
                str += char.concat(char);
            }
            val = str;
        }
        let res = [];
        /* 遍历字符串转为十进制rgb */
        for (let i = 1; i < 7; i += 2) {
            /* 两个方法都可以转 */
            res.push(parseInt(val.slice(i, i + 2), 16));
        }
        res.push(opacity);
        val = `rgba(${res.join(',')})`;
    }
    return val;
};

/**
 *  日期转换方法
 *  @param YYYY-MM-DD hh:mm:ss
 */
let dateFormat = (type: string, val?: any) => {
    let date: Date = val ? new Date(/^[0-9]*$/g.test(val) ? val * 1 : val) : new Date();
    let YYYY: string = date.getFullYear() + '';
    let m: number = date.getMonth() + 1;
    let MM: string = m > 9 ? m + '' : '0' + m;
    let d: number = date.getDate();
    let DD: string = d > 9 ? d + '' : '0' + d;
    let h: number = date.getHours();
    let hh: string = h > 9 ? h + '' : '0' + h;
    let $m: number = date.getMinutes();
    let mm: string = $m > 9 ? $m + '' : '0' + $m;
    let s: number = date.getSeconds();
    let ss: string = s > 9 ? s + '' : '0' + s;
    let obj: any = { YYYY, MM, DD, hh, mm, ss} as any;

    return type.replace(/(YYYY)|(MM)|(DD)|(hh)|(mm)|(ss)/g, (key: string): string => obj[key]);
};

/**
 * 移动数组中数据位置
 * @param datas 原始数据对象
 * @param newIndex 新位置
 * @param oldIndex 老位置
 * @returns {any[]} 返回新数据对象
 */
let moveInArrayByIndex = (datas: any[], newIndex: number, oldIndex: number): any[] => {
    let data = datas[oldIndex];

    datas.splice(oldIndex, 1);
    datas.splice(newIndex, 0, data);

    return datas;
};



export {
    dateFormat,
    hexToRgba,
    moveInArrayByIndex
};