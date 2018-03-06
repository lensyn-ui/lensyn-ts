/*********************************************************************
 * Created by zhangtao on 2018/3/5
 * filter
 *********************************************************************/

let defaultPrecision: number = 2;

function formatValue(value: number, precision: number, unit: string): string {
    return `${value.toFixed(precision)}${unit}`;
}

const byteFormat = (valueStr: string, precision: number): string => {
    if (typeof precision === "undefined") {
        precision = defaultPrecision;
    }

    let value = parseFloat(valueStr);

    if (value < 1024) {
        return formatValue(value, precision, "B");
    }

    let kb = value / 1024;

    if (kb < 1024) {
        return formatValue(kb, precision, "kB");
    }

    let mb = kb / 1024;

    if (mb < 1024) {
        return formatValue(mb, precision, "MB");
    }

    let gb = mb / 1024;

    if (gb < 1024) {
        return formatValue(gb, precision, "GB");
    }

    let tb = gb / 1024;

    return formatValue(tb, precision, "TB");
};

export {
    byteFormat
};