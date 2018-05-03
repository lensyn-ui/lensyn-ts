import { formatDate, formatTimeReadable } from "./tool";

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

let dateFormat = (time: string | number, format: string): string => {
    if (time === "") {
        return "";
    }

    let timeValue = 0;

    if (typeof time === "string") {
        timeValue = parseInt(time, 10);
    } else {
        timeValue = time;
    }

    return formatDate(format, new Date(timeValue));
};

let timeFormat = (time: string | number): string => {
    if (time === "" || typeof time === "undefined") {
        return "";
    }
    let timeValue = 0;

    if (typeof time === "string") {
        timeValue = parseInt(time, 10);
    } else {
        timeValue = time;
    }

    return formatTimeReadable(timeValue);
};

export {
    byteFormat,
    dateFormat,
    timeFormat
};