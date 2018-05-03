const REQUEST_TIMEOUT: number = 5000;

/* 数据源分类的值，固定 */
const DATASOURCE_CATEGORY_MAP = {
    RELATION: 0,
    SEMI_STRUCTURE: 1,
    BIG_DATA: 2
};

/**
 * 数据源类型的值，固定
 */
const DATASOURCE_TYPE_MAP = {
    HIVE: 0,
    PHOENIX: 1,
    HBASE: 2
};

const RELATION_DATASOURCE_TYPE_MAP = {
    MYSQL: 0
};

const TASK_TYPE_MAP = {
    BACKUP: 0,
    MIGRATE: 1,
    MODELING: 2
};

const TASK_STATUS_MAP = {
    START: 0,
    PAUSE: 1,
    FINISH: 2
};

const COLUMN_TYPE_ENCODING_MAP: any = {
    numeric: [ "dict" ],
    bigint: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    char: [
        "dict",
        "boolean",
        "date",
        "time",
        "fixed_length",
        "fixed_length_hex",
        "integer"
    ],
    integer: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    int4: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    tinyint: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    double: [
        "dict"
    ],
    date: [
        "dict",
        "date",
        "time"
    ],
    float: [
      "dict"
    ],
    decimal: [
      "dict"
    ],
    timestamp: [
        "dict",
        "date",
        "time"
    ],
    real: [
      "dict"
    ],
    time: [
        "dict",
        "date",
        "time"
    ],
    long8: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    datetime: [
        "dict",
        "date",
        "time"
    ],
    smallint: [
        "dict",
        "boolean",
        "date",
        "time",
        "integer"
    ],
    varchar: [
        "dict",
        "boolean",
        "date",
        "time",
        "fixed_length",
        "fixed_length_hex",
        "integer"
    ]
};

const DATA_STRUCTURE_COLUMN_TYPES = [
    "tinyint",
    "smallint",
    "int",
    "bigint",
    "boolean",
    "float",
    "double",
    "string",
    "binary",
    "timestamp",
    "decimal",
    "char",
    "varchar"
];

const ENCODING_DISABLE_LENGTH = ["dict", "time", "date"];

const CUBE_ENGINE = [
    { name: "MapReduce", value: 4 },
    { name: "Spark", value: 2}
];

const CUBE_DICTIONARY_BUILDER_CLASS = {
    segement: "org.apache.kylin.dict.global.SegmentAppendTrieDictBuilder",
    global: "org.apache.kylin.dict.GlobalDictionaryBuilder"
};

export default {
    REQUEST_TIMEOUT,
    DATASOURCE_CATEGORY_MAP,
    DATASOURCE_TYPE_MAP,
    RELATION_DATASOURCE_TYPE_MAP,
    TASK_TYPE_MAP,
    TASK_STATUS_MAP,
    COLUMN_TYPE_ENCODING_MAP,
    ENCODING_DISABLE_LENGTH,
    CUBE_ENGINE,
    CUBE_DICTIONARY_BUILDER_CLASS,
    DATA_STRUCTURE_COLUMN_TYPES
};