interface RequestData {
    url: string;
    method?: string;
    data?: object;
    params?: object;
    contentType?: string;
}

/* 数据源 --- start --- */
interface DataSourceListRequest {
    pageNum: number;
    pageSize: number;
    dsName?: string;
    dsType?: string;
}

/* 数据源 --- end --- */

/* 任务 --- start --- */
interface JobListRequest {
    pageNum: number;
    pageSize: number;
    startTime?: string;
    endTime?: string;
    status?: number;
    searchUser?: string;
    searchType?: string;
    searchId?: string;
}
/* 任务 --- end --- */

/* 查询监控列表 --- start --- */
interface MonitorListRequest {
    pageNum: number;
    pageSize: number;
    startTime?: string;
    endTime?: string;
    searchType?: string;
    searchValue?: string;
    status?: number;
}
/* 查询监控列表 --- end --- */

/* 查询项目列表 --- start --- */
interface ProjectListRequest {
    pageNum: number;
    pageSize: number;
    searchType?: string;
    searchValue?: string;
}
/* 查询项目列表 --- end --- */

type SuccessCallback = (data: any) => void;
type ErrorCallback = (errorMsg: any) => void;


export {
    DataSourceListRequest,
    SuccessCallback,
    ErrorCallback,
    RequestData,
    JobListRequest,
    MonitorListRequest,
    ProjectListRequest
};
