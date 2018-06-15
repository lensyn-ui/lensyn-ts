/*********************************************************************
 * Vue filter file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import { hexToRgba, dateFormat as $df } from "../util/tool";

/**
 * 数字取精度方法
 * @param val 原始值
 * @param precision 精度（默认两位）
 * @returns {number} 返回值
 */
let fixNumber = (val: string, precision: number = 2): number => {
    let $nv: number = parseFloat(val);
    if (!isNaN($nv)) {
        return parseFloat($nv.toFixed(precision));
    } else {
        return $nv;
    }
};

let dateFormat = (val: any, format: string) => {
    return $df(format, val);
};

export {
    fixNumber,
    hexToRgba,
    dateFormat
};