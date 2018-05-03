// 数据源-大类
export interface DATASOURCE_CATEGORY_MODEL {
    code: string;
    comments: string;
    createTime: string;
    createUser: string;
    key: number;
    value: string;
}

export interface DATASOURCE_CATEGORY_FULL_MODEL extends DATASOURCE_CATEGORY_MODEL {
    childs: DATASOURCE_TYPE_MODEL[];
}

// 数据源子类
export interface DATASOURCE_TYPE_MODEL {
    id: number;
    code: string;
    createTime: string;
    createUser: string;
    key: number;
    value: string;
}

// 数据源
export interface DATASOURCE_MODEL {
    id?: string;
    dsType: number | null;
    dsCode?: string;
    dsName: string;
    url: string;
    port?: number;
    username: string;
    password: string;
    inst: string;
    comments: string;
}

export interface DATASOURCE_EDIT_MODEL extends DATASOURCE_MODEL {
    pKey: number;
    cKey: number;
}

// 备份任务
export interface BACKUP_TASK_MODEL {
    bakId?: number;
    createUser?: string;
    cron: string;
    dsId: number | null;
    instName: number | null;
    jobId?: number | null;
    jobName?: string;
    jobType?: number;
    stadId: number | null;
    storePeriod: number | null;
}

// 建模任务
export interface MODELING_TASK_MODEL {
    id?: string;
}

// 迁移任务
export interface MIGRATE_TASK_MODEL {
    id?: string;
}

// 仓库域
export interface AREA_MODEL {
    areaName: string;
    createTime?: string;
    createUser?: string;
    id: number;
    namespace?: string;
    pAreaId?: number;
    spaceType?: string;
    updateTime?: string;
}

// 监控
export interface MONITOR_MODEL {
    id?: string;
}

export interface PROJECT_MODEL {
    id: string;
}

// 项目
export interface PROJECT_EDIT_MODEL {
    uuid?: string;
    name: string;
    description?: string;
   override_kylin_properties?: any
}

// 表格列
export interface  TABLE_COLUMN {
    datatype: string;
    name: string;
    id: string;
}

// 模型中表的扩展信息
export interface MODEL_TABLE_EXTEND {
    owner: string;
    skip_header_line_count: string;
    total_file_size: string;
    hive_inputFormat: string;
    hive_outputFormat: string;
    location: string;
    partition_column: string;
    total_file_number: string;
    last_access_time: string;
}

// 模型中的表格数据
export interface  MODEL_TABLE {
    database: string;
    name: string;
    uuid: string;
    owner: string;
    table_type: string;
    columns: TABLE_COLUMN[];
    exd: MODEL_TABLE_EXTEND;
}

// 模型中关联数据的关联
export interface MODEL_LOOKUP_JOIN {
    type: string;
    primary_key: string[];
    foreign_key: string[];
    isCompatible: boolean[];
    pk_type: string[];
    fk_type: string[];
}

// 模型中的关联数据
export interface MODEL_LOOKUP {
    table: string;
    alias: string;
    joinTable: string;
    kind: string;
    factTable?: string;
    join: MODEL_LOOKUP_JOIN;
}

// 模型管理中的模型
export interface DMDLMGMT_MODEL {
    uuid: string;
    name: string;
    owner: string;
    description: string;
    fact_table: string;
    lookups: MODEL_LOOKUP[];
    dimensions: MODEL_DIMENSION[];
    metrics: string[];
}

// 模型管理中的 dimesions
export interface MODEL_DIMENSION {
    table: string;
    columns: string[];
}

// cube 中的 dimensions
export interface CUBE_DIMENSION {
    id?: string;
    name: string;
    table: string;
    column: string;
    derived: string | null;
}
