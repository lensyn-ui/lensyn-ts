let ModelTableData = `[
    {
        "uuid": "2899ee48-1af8-4663-9f1b-e931b57b6d79",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "TEST1",
        "columns": [
            {
                "id": "1",
                "name": "A",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/test1",
            "partition_column": "",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {}
    },
    {
        "uuid": "884d5fec-6f0d-4558-998f-c403364cabf7",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "TEST2",
        "columns": [
            {
                "id": "1",
                "name": "A",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/test2",
            "partition_column": "",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {}
    },
    {
        "uuid": "d7f492ef-730b-4414-b556-34c6d30791ea",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "TEST5",
        "columns": [
            {
                "id": "1",
                "name": "A",
                "datatype": "varchar(256)"
            },
            {
                "id": "2",
                "name": "B",
                "datatype": "varchar(256)"
            },
            {
                "id": "3",
                "name": "C",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/test5",
            "partition_column": "",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {}
    },
    {
        "uuid": "4f9c38c2-9756-4371-bc7a-42e2cc5c25e9",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "TEST3",
        "columns": [
            {
                "id": "1",
                "name": "A",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/test3",
            "partition_column": "",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {}
    },
    {
        "uuid": "76d6dcca-30ac-4348-8ab2-97c621a7d32c",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "AM_ACCOUNTING_LEDGER_HIS",
        "columns": [
            {
                "id": "1",
                "name": "ID",
                "datatype": "bigint"
            },
            {
                "id": "2",
                "name": "ORGID",
                "datatype": "bigint"
            },
            {
                "id": "3",
                "name": "CONSID",
                "datatype": "bigint"
            },
            {
                "id": "4",
                "name": "PLANID",
                "datatype": "bigint"
            },
            {
                "id": "5",
                "name": "SECTCODE",
                "datatype": "varchar(256)"
            },
            {
                "id": "6",
                "name": "CALCYM",
                "datatype": "integer"
            },
            {
                "id": "7",
                "name": "CONSCODE",
                "datatype": "varchar(256)"
            },
            {
                "id": "8",
                "name": "CONSNAME",
                "datatype": "varchar(256)"
            },
            {
                "id": "9",
                "name": "CALCTYPE",
                "datatype": "varchar(256)"
            },
            {
                "id": "10",
                "name": "TOTALELEC",
                "datatype": "double"
            },
            {
                "id": "11",
                "name": "TOTALRECEIVABLE",
                "datatype": "double"
            },
            {
                "id": "12",
                "name": "LATEFEETIME",
                "datatype": "timestamp"
            },
            {
                "id": "13",
                "name": "CALCMANID",
                "datatype": "bigint"
            },
            {
                "id": "14",
                "name": "CALCTIME",
                "datatype": "timestamp"
            },
            {
                "id": "15",
                "name": "CALCPUBLISHERID",
                "datatype": "bigint"
            },
            {
                "id": "16",
                "name": "CALCPUBTIME",
                "datatype": "timestamp"
            },
            {
                "id": "17",
                "name": "CALCCYCLE",
                "datatype": "varchar(256)"
            },
            {
                "id": "18",
                "name": "CALCSTATUS",
                "datatype": "varchar(256)"
            },
            {
                "id": "19",
                "name": "AUDITORID",
                "datatype": "bigint"
            },
            {
                "id": "20",
                "name": "AUDITTIME",
                "datatype": "timestamp"
            },
            {
                "id": "21",
                "name": "ISPAY",
                "datatype": "varchar(256)"
            },
            {
                "id": "22",
                "name": "BASICFEE",
                "datatype": "double"
            },
            {
                "id": "23",
                "name": "ADDFEE",
                "datatype": "double"
            },
            {
                "id": "24",
                "name": "POWERFEE",
                "datatype": "double"
            },
            {
                "id": "25",
                "name": "PFEE",
                "datatype": "double"
            },
            {
                "id": "26",
                "name": "LINEELEC",
                "datatype": "double"
            },
            {
                "id": "27",
                "name": "TRANSELEC",
                "datatype": "double"
            },
            {
                "id": "28",
                "name": "CONSADDR",
                "datatype": "varchar(256)"
            },
            {
                "id": "29",
                "name": "POWERFACTOR",
                "datatype": "double"
            },
            {
                "id": "30",
                "name": "ADJUSTRATIO",
                "datatype": "double"
            },
            {
                "id": "31",
                "name": "USGAETYPE",
                "datatype": "varchar(256)"
            },
            {
                "id": "32",
                "name": "VOLTLEVEL",
                "datatype": "varchar(256)"
            },
            {
                "id": "33",
                "name": "UPDATETIME",
                "datatype": "timestamp"
            },
            {
                "id": "34",
                "name": "YM",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/am_accounting_ledger_his",
            "partition_column": "YM",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {
            "ADJUSTRATIO": 40,
            "UPDATETIME": 1,
            "CALCTIME": 1,
            "CALCCYCLE": 40,
            "ADDFEE": 2650,
            "POWERFACTOR": 44,
            "TOTALRECEIVABLE": 4031,
            "BASICFEE": 28,
            "SECTCODE": 182,
            "CALCSTATUS": 7,
            "YM": 1,
            "PLANID": 238,
            "CONSCODE": 86644,
            "TRANSELEC": 16,
            "ID": 91292,
            "LATEFEETIME": 1,
            "CALCPUBLISHERID": 5,
            "AUDITORID": 6,
            "CONSID": 87169,
            "TOTALELEC": 1552,
            "ORGID": 11,
            "CALCTYPE": 6,
            "CALCYM": 2,
            "CONSADDR": 5496,
            "AUDITTIME": 1,
            "CALCPUBTIME": 1,
            "POWERFEE": 111,
            "PFEE": 4953,
            "USGAETYPE": 7,
            "ISPAY": 3,
            "CONSNAME": 62240,
            "VOLTLEVEL": 7,
            "LINEELEC": 4,
            "CALCMANID": 6
        }
    },
    {
        "uuid": "dc59a049-6abf-4e19-9336-f8cfc8a73226",
        "last_modified": 0,
        "version": "2.3.0.20500",
        "name": "TEST4",
        "columns": [
            {
                "id": "1",
                "name": "A",
                "datatype": "varchar(256)"
            },
            {
                "id": "2",
                "name": "B",
                "datatype": "varchar(256)"
            }
        ],
        "source_type": 0,
        "table_type": "MANAGED_TABLE",
        "database": "DEFAULT",
        "exd": {
            "owner": "root",
            "skip_header_line_count": "0",
            "total_file_size": "0",
            "hive_inputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "hive_outputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "location": "hdfs://bigdataserver1:8020/user/hive/warehouse/test4",
            "partition_column": "",
            "total_file_number": "0",
            "last_access_time": "0"
        },
        "cardinality": {}
    }
]`;

const TreeData = [
    {
        id: 1,
        name: "数据仓库",
        checked: true,
        children: [
            {
                id: 2,
                name: "营销数据",
                checked: true,
                children: [
                    {id: 3, name: "T_user_onfo"},
                    {id: 4, name: "T_user_info"}
                ]
            }
        ]
    }
];

let DESC = `[{"uuid":"5aa0ee99-a1f7-46e9-8090-ddea8f74d01d","last_modified":1522316918130,"version":"2.3.0.20500",
"name":"ddad123_clone_clone","is_draft":false,"model_name":"test_hello1","description":"","null_string":null,
"dimensions":[{"name":"A","table":"TEST1","column":"A","derived":null},{"name":"A","table":"TEST2","column":null,
"derived":["A"]}],
"measures":[{"name":"_COUNT_","function":{"expression":"COUNT","parameter":{"type":"constant","value":"1"},
"returntype":"bigint"}}],
"dictionaries":[],"rowkey":{"rowkey_columns":[{"column":"TEST1.A","encoding":"dict","isShardBy":false}]},
"hbase_mapping":{"column_family":[{"name":"F1","columns":[{"qualifier":"M","measure_refs":["_COUNT_"]}]}]},
"aggregation_groups":[{"includes":["TEST1.A"],"select_rule":{"hierarchy_dims":[],"mandatory_dims":[],"joint_dims":[]}}],
"signature":"SxYqmxnZp+3LuZNhdrlYoA==","notify_list":[],"status_need_notify":["ERROR","DISCARDED","SUCCEED"],
"partition_date_start":0,"partition_date_end":3153600000000,"auto_merge_time_ranges":[604800000,2419200000],
"volatile_range":0,"retention_range":0,"engine_type":2,"storage_type":0,"override_kylin_properties":{},
"cuboid_black_list":[],"parent_forward":3,"mandatory_dimension_set_list":[]}]`;

let Models = `[{"uuid":"6783de73-ec3d-4a9d-80fc-271aabf243d7","last_modified":1522145000392,"version":"2.3.0.20500",
"name":"ppp","owner":"ADMIN","is_draft":false,"description":"","fact_table":"DEFAULT.TEST5","lookups":[],
"dimensions":[{"table":"TEST5","columns":["B"]}],"metrics":["TEST5.A","TEST5.C"],"filter_condition":"",
"partition_desc":{"partition_date_column":"TEST5.A","partition_time_column":null,"partition_date_start":0,
"partition_date_format":"yyyy-MM-dd","partition_time_format":"HH:mm:ss","partition_type":"APPEND",
"partition_condition_builder":"org.apache.kylin.metadata.model.PartitionDesc$DefaultPartitionConditionBuilder"},
"capacity":"MEDIUM"},{"uuid":"400b3a2c-a553-4a9b-95ab-22d9ab2e1825","last_modified":1522130009364,
"version":"2.3.0.20500","name":"hello_world","owner":"ADMIN","is_draft":false,"description":"",
"fact_table":"DEFAULT.TEST1","lookups":[{"table":"DEFAULT.TEST5","kind":"LOOKUP","alias":"TEST5",
"join":{"type":"inner","primary_key":["TEST5.B","TEST5.C"],"foreign_key":["TEST1.A","TEST1.A"]}}],
"dimensions":[{"table":"TEST1","columns":["A"]},{"table":"TEST5","columns":["A","B","C"]}],"metrics":[],
"filter_condition":"","partition_desc":{"partition_date_column":"TEST1.A","partition_time_column":null,
"partition_date_start":0,"partition_date_format":"yyyy-MM-dd","partition_time_format":"HH:mm:ss",
"partition_type":"APPEND",
"partition_condition_builder":"org.apache.kylin.metadata.model.PartitionDesc$DefaultPartitionConditionBuilder"},
"capacity":"MEDIUM"},{"uuid":"097e2fdf-bfe0-467c-85fd-0a30d44d0c47","last_modified":1522117450295,
"version":"2.3.0.20500","name":"asdasd123","owner":"ADMIN","is_draft":false,"description":null,
"fact_table":"DEFAULT.TEST1","lookups":[{"table":"DEFAULT.TEST2","kind":"LOOKUP","alias":"TEST2",
"join":{"type":"inner","primary_key":["TEST2.A"],"foreign_key":["TEST1.A"]}}],
"dimensions":[{"table":"TEST1","columns":["A"]},{"table":"TEST2","columns":["A"]}],
"metrics":[],"filter_condition":null,"partition_desc":{"partition_date_column":"","partition_time_column":null,
"partition_date_start":0,"partition_date_format":"yyyy-MM-dd","partition_time_format":"HH:mm:ss",
"partition_type":"APPEND",
"partition_condition_builder":"org.apache.kylin.metadata.model.PartitionDesc$DefaultPartitionConditionBuilder"},
"capacity":"MEDIUM"},{"uuid":"47488d64-287c-4077-b7c1-1cde058c6fc0","last_modified":1522114937048,
"version":"2.3.0.20500","name":"test_hello1","owner":"ADMIN","is_draft":false,"description":null,
"fact_table":"DEFAULT.TEST1","lookups":[{"table":"DEFAULT.TEST2","kind":"LOOKUP","alias":"TEST2",
"join":{"type":"inner","primary_key":["TEST2.A"],"foreign_key":["TEST1.A"]}}],
"dimensions":[{"table":"TEST1","columns":["A"]},{"table":"TEST2","columns":["A"]}],
"metrics":[],"filter_condition":null,"partition_desc":{"partition_date_column":"TEST1.A","partition_time_column":null,
"partition_date_start":0,"partition_date_format":"yyyy-MM-dd","partition_time_format":"HH:mm:ss",
"partition_type":"APPEND",
"partition_condition_builder":"org.apache.kylin.metadata.model.PartitionDesc$DefaultPartitionConditionBuilder"},
"capacity":"MEDIUM"}]`;

const WareHouse = `
{
  "createTime": "2018-03-06 16:59:51",
  "createUser": "liulin",
  "deleted": 0,
  "draftName": "数据迁移",
  "dsId": 0,
  "execute": true,
  "id": 0,
  "status": 0,
  "storePeriod": 1,
  "storePeriodUnit": 0,
  "tableNames": [
    "string"
  ],
  "tables": [
    {
      "areaId": 1,
      "areaName": "string",
      "createTime": "2018-03-06 16:59:51",
      "createUser": "liulin",
      "deleted": 0,
      "draftId": 1,
      "dsId": 1,
      "dsName": "testmysql",
      "dsTableName": "test",
      "id": 1,
      "opened": 1,
      "refTableName": "test",
      "storePeriod": 0,
      "storePeriodUnit": 0,
      "syncId": 1,
      "tableCols": [
        {
          "accuracy": 0,
          "colName": "string",
          "createTime": "2018-04-09T06:11:56.478Z",
          "dataFormat": "string",
          "deleted": 0,
          "enableEmpty": 0,
          "id": 0,
          "length": 0,
          "partitioned": 0,
          "refColName": "string",
          "remark": "string",
          "sort": 0,
          "tableId": 0,
          "typeName": "string",
          "updateTime": "2018-04-09T06:11:56.478Z"
        }
      ],
      "tableName": "test",
      "updateTime": "2018-03-06 16:59:51"
    }
  ],
  "updateTime": "2018-03-06 16:59:51"
}
`;

const ALL_TABLE_COLUMNS = `
[{"columns":[{"table_SCHEM":"DEFAULT","table_NAME":"AM_ACCOUNTING_LEDGER_HIS","column_NAME":"ORGID","scope_CATLOG":null,
"scope_SCHEMA":null,"scope_TABLE":null,"source_DATA_TYPE":-1,"is_AUTOINCREMENT":"","data_TYPE":-5,"column_SIZE":-1,
"buffer_LENGTH":-1,"decimal_DIGITS":0,"num_PREC_RADIX":10,"nullable":1,"column_DEF":null,"sql_DATA_TYPE":-1,
"sql_DATETIME_SUB":-1,"char_OCTET_LENGTH":-1,"ordinal_POSITION":1,"is_NULLABLE":"YES","table_CAT":"defaultCatalog",
"remarks":null,"type_NAME":"BIGINT"},{"table_SCHEM":"DEFAULT","table_NAME":"AM_ACCOUNTING_LEDGER_HIS",
"column_NAME":"CONSID","scope_CATLOG":null,"scope_SCHEMA":null,"scope_TABLE":null,"source_DATA_TYPE":-1,
"is_AUTOINCREMENT":"","data_TYPE":-5,"column_SIZE":-1,"buffer_LENGTH":-1,"decimal_DIGITS":0,"num_PREC_RADIX":10,
"nullable":1,"column_DEF":null,"sql_DATA_TYPE":-1,"sql_DATETIME_SUB":-1,"char_OCTET_LENGTH":-1,"ordinal_POSITION":2,
"is_NULLABLE":"YES","table_CAT":"defaultCatalog","remarks":null,"type_NAME":"BIGINT"},{"table_SCHEM":"DEFAULT",
"table_NAME":"AM_ACCOUNTING_LEDGER_HIS","column_NAME":"CALCYM","scope_CATLOG":null,"scope_SCHEMA":null,
"scope_TABLE":null,"source_DATA_TYPE":-1,"is_AUTOINCREMENT":"","data_TYPE":4,"column_SIZE":-1,"buffer_LENGTH":-1,
"decimal_DIGITS":0,"num_PREC_RADIX":10,"nullable":1,"column_DEF":null,"sql_DATA_TYPE":-1,"sql_DATETIME_SUB":-1,
"char_OCTET_LENGTH":-1,"ordinal_POSITION":3,"is_NULLABLE":"YES","table_CAT":"defaultCatalog","remarks":null,
"type_NAME":"INTEGER"},{"table_SCHEM":"DEFAULT","table_NAME":"AM_ACCOUNTING_LEDGER_HIS","column_NAME":"TOTALELEC",
"scope_CATLOG":null,"scope_SCHEMA":null,"scope_TABLE":null,"source_DATA_TYPE":-1,"is_AUTOINCREMENT":"","data_TYPE":8,
"column_SIZE":-1,"buffer_LENGTH":-1,"decimal_DIGITS":0,"num_PREC_RADIX":10,"nullable":1,"column_DEF":null,
"sql_DATA_TYPE":-1,"sql_DATETIME_SUB":-1,"char_OCTET_LENGTH":-1,"ordinal_POSITION":4,"is_NULLABLE":"YES",
"table_CAT":"defaultCatalog","remarks":null,"type_NAME":"DOUBLE"},{"table_SCHEM":"DEFAULT",
"table_NAME":"AM_ACCOUNTING_LEDGER_HIS","column_NAME":"TOTALRECEIVABLE","scope_CATLOG":null,"scope_SCHEMA":null,
"scope_TABLE":null,"source_DATA_TYPE":-1,"is_AUTOINCREMENT":"","data_TYPE":8,"column_SIZE":-1,"buffer_LENGTH":-1,
"decimal_DIGITS":0,"num_PREC_RADIX":10,"nullable":1,"column_DEF":null,"sql_DATA_TYPE":-1,"sql_DATETIME_SUB":-1,
"char_OCTET_LENGTH":-1,"ordinal_POSITION":5,"is_NULLABLE":"YES","table_CAT":"defaultCatalog","remarks":null,
"type_NAME":"DOUBLE"}],"table_SCHEM":"DEFAULT","table_NAME":"AM_ACCOUNTING_LEDGER_HIS","table_CAT":"defaultCatalog",
"table_TYPE":"TABLE","remarks":null,"type_CAT":null,"type_SCHEM":null,"type_NAME":null,
"self_REFERENCING_COL_NAME":null,"ref_GENERATION":null}]
`;

const ANALYSIS_DATA = `
{"columnMetas":[{"isNullable":1,"displaySize":19,"label":"ORGID","name":"ORGID","schemaName":"DEFAULT",
"catelogName":null,"tableName":"AM_ACCOUNTING_LEDGER_HIS","precision":19,"scale":0,"columnType":-5,
"columnTypeName":"BIGINT","autoIncrement":false,"caseSensitive":true,"searchable":false,"currency":false,
"definitelyWritable":false,"writable":false,"readOnly":true,"signed":true},{"isNullable":1,"displaySize":15,
"label":"EXPR$1","name":"EXPR$1","schemaName":null,"catelogName":null,"tableName":null,"precision":15,"scale":0,
"columnType":8,"columnTypeName":"DOUBLE","autoIncrement":false,"caseSensitive":true,"searchable":false,
"currency":false,"definitelyWritable":false,"writable":false,"readOnly":true,"signed":true}],
"results":[["1526007","2.94817650638E7"],[null,"0.0"],["1","48.0"],["1526006","4.0387794071E7"],
["1526005","4.73543933744E7"],["1526004","1.440494949961E8"],["1526003","1.11021054805E7"],
["1526002","1.94124352348E7"],["1526001","7.57289873087E7"],["1526000","1.0"],["10165449442459648","4.23282851367E7"],
["10165449455042560","424.27"],["10165449509568512","852.8"],["10165449517957120","5261.4"],
["1526011","8.23222631464E7"],["1526009","5321435.0151"],["1526008","9437806.4207"],["1526021","0.43"]],
"cube":"CUBE[name=am1]","affectedRowCount":0,"isException":false,"exceptionMessage":null,"duration":85,
"totalScanCount":97,"totalScanBytes":6734015,"hitExceptionCache":false,"storageCacheUsed":false,
"traceUrl":null,"partial":false,"pushDown":false}
`;

const CUBE_MONITOR = `
[{"uuid":"a32a1cda-bdf0-4d36-99e8-35412179b2f7","last_modified":1524118038067,"version":"2.3.1.0","name":"BUILD CUBE - 123 - FULL_BUILD - GMT+08:00 2018-04-13 09:39:51","type":"BUILD","duration":38,"related_cube":"123","related_segment":"5fc94660-51be-4c43-b491-c70911c27551","exec_start_time":1523583602391,"exec_end_time":1524118038064,"exec_interrupt_time":534397338,"mr_waiting":0,"steps":[{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1524118030055,"exec_end_time":1524118038052,"exec_wait_time":0,"step_status":"ERROR","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1524118030055","endTime":"1524118038052"},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename 123 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/fact_distinct_columns -segmentid 5fc94660-51be-4c43-b491-c70911c27551 -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_123_Step -cubingJobId a32a1cda-bdf0-4d36-99e8-35412179b2f7","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename 123 -segmentid 5fc94660-51be-4c43-b491-c70911c27551 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/dict","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename 123 -segmentid 5fc94660-51be-4c43-b491-c70911c27551 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename 123 -segmentid 5fc94660-51be-4c43-b491-c70911c27551 -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_123 -level 0 -cubingJobId a32a1cda-bdf0-4d36-99e8-35412179b2f7","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-07","name":"Build Cube In-Mem","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf_inmem.xml -cubename 123 -segmentid 5fc94660-51be-4c43-b491-c70911c27551 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/cuboid/ -jobname Kylin_Cube_Builder_123 -cubingJobId a32a1cda-bdf0-4d36-99e8-35412179b2f7","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-08","name":"Convert Cuboid Data to HFile","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename 123 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/hfile -htablename KYLIN_OYWSN9XVCT -jobname Kylin_HFile_Generator_123_Step","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-09","name":"Load HFile to HBase Table","sequence_id":9,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a32a1cda-bdf0-4d36-99e8-35412179b2f7/123/hfile -htablename KYLIN_OYWSN9XVCT -cubename 123","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-10","name":"Update Cube Info","sequence_id":10,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a32a1cda-bdf0-4d36-99e8-35412179b2f7-11","name":"Hive Cleanup","sequence_id":11,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false}],"submitter":"ADMIN","job_status":"ERROR","progress":0.0},{"uuid":"b8bea5c6-81c6-4911-b693-decbf17e192c","last_modified":1523957768093,"version":"2.3.1.0","name":"BUILD CUBE - cube01 - FULL_BUILD - GMT+08:00 2018-04-17 17:32:21","type":"BUILD","duration":208,"related_cube":"cube01","related_segment":"5293f891-bc51-4ef7-9535-78308ff5c63c","exec_start_time":1523957560050,"exec_end_time":1523957768091,"exec_interrupt_time":0,"mr_waiting":70,"steps":[{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957560055,"exec_end_time":1523957587368,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0231","mr_job_id":"job_1522633799921_0231","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0231/","hdfs_bytes_written":"888","startTime":"1523957560055","source_records_size":"32768","endTime":"1523957587368"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957587537,"exec_end_time":1523957615686,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0232","mr_job_id":"job_1522633799921_0232","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0232/","hdfs_bytes_written":"0","startTime":"1523957587537","source_records_size":"16446","endTime":"1523957615686"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/fact_distinct_columns -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_cube01_Step -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957615869,"exec_end_time":1523957637814,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0233","mr_job_id":"job_1522633799921_0233","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0233/","hdfs_bytes_written":"3292","sourceSizeBytes":"4130","startTime":"1523957615869","mapReduceWaitTime":"11885","source_records_count":"110","source_records_size":"4130","endTime":"1523957637814","sourceRecordCount":"110"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/dict","interrupt_cmd":null,"exec_start_time":1523957638002,"exec_end_time":1523957638992,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957638002","endTime":"1523957638992"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957639181,"exec_end_time":1523957639311,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957639181","endTime":"1523957639311"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523957639494,"exec_end_time":1523957640826,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957639494","endTime":"1523957640826"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_cube01 -level 0 -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957641015,"exec_end_time":1523957662698,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0234","mr_job_id":"job_1522633799921_0234","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0234/","hdfs_bytes_written":"521","startTime":"1523957641015","mapReduceWaitTime":"11623","source_records_count":"110","source_records_size":"0","endTime":"1523957662698"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-07","name":"Build N-Dimension Cuboid : level 1","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_base_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_1_cuboid -jobname Kylin_ND-Cuboid_Builder_cube01_Step -level 1 -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957662893,"exec_end_time":1523957684692,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0235","mr_job_id":"job_1522633799921_0235","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0235/","hdfs_bytes_written":"1022","startTime":"1523957662893","mapReduceWaitTime":"11743","source_records_count":"80","source_records_size":"0","endTime":"1523957684692"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-08","name":"Build N-Dimension Cuboid : level 2","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_1_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_2_cuboid -jobname Kylin_ND-Cuboid_Builder_cube01_Step -level 2 -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957684887,"exec_end_time":1523957706561,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0236","mr_job_id":"job_1522633799921_0236","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0236/","hdfs_bytes_written":"925","startTime":"1523957684887","mapReduceWaitTime":"11616","source_records_count":"210","source_records_size":"0","endTime":"1523957706561"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-09","name":"Build N-Dimension Cuboid : level 3","sequence_id":9,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_2_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/level_3_cuboid -jobname Kylin_ND-Cuboid_Builder_cube01_Step -level 3 -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957706759,"exec_end_time":1523957731808,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0237","mr_job_id":"job_1522633799921_0237","yarn_application_tracking_url":"http://bigdataserver1:19888/jobhistory/job/job_1522633799921_0237","hdfs_bytes_written":"393","startTime":"1523957706759","mapReduceWaitTime":"11740","source_records_count":"156","source_records_size":"0","endTime":"1523957731808"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-10","name":"Build Cube In-Mem","sequence_id":10,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename cube01 -segmentid 5293f891-bc51-4ef7-9535-78308ff5c63c -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/ -jobname Kylin_Cube_Builder_cube01 -cubingJobId b8bea5c6-81c6-4911-b693-decbf17e192c","interrupt_cmd":null,"exec_start_time":1523957732013,"exec_end_time":1523957732102,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957732013","endTime":"1523957732102"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-11","name":"Convert Cuboid Data to HFile","sequence_id":11,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube01 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/hfile -htablename KYLIN_OAD1H8U9XQ -jobname Kylin_HFile_Generator_cube01_Step","interrupt_cmd":null,"exec_start_time":1523957732291,"exec_end_time":1523957754660,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0238","byteSizeBytes":"6438","mr_job_id":"job_1522633799921_0238","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0238/","hdfs_bytes_written":"6438","startTime":"1523957732291","mapReduceWaitTime":"12314","source_records_count":"475","source_records_size":"0","endTime":"1523957754660"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-12","name":"Load HFile to HBase Table","sequence_id":12,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-b8bea5c6-81c6-4911-b693-decbf17e192c/cube01/hfile -htablename KYLIN_OAD1H8U9XQ -cubename cube01","interrupt_cmd":null,"exec_start_time":1523957754856,"exec_end_time":1523957760071,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957754856","endTime":"1523957760071"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-13","name":"Update Cube Info","sequence_id":13,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957760273,"exec_end_time":1523957760285,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957760273","endTime":"1523957760285"},"run_async":false},{"interruptCmd":null,"id":"b8bea5c6-81c6-4911-b693-decbf17e192c-14","name":"Hive Cleanup","sequence_id":14,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957760477,"exec_end_time":1523957768057,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957760477","endTime":"1523957768057"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7","last_modified":1523957101279,"version":"2.3.1.0","name":"BUILD CUBE - cube001 - FULL_BUILD - GMT+08:00 2018-04-17 17:22:56","type":"BUILD","duration":111,"related_cube":"cube001","related_segment":"20201c9f-1f6b-4e8c-bd23-514d8d18d020","exec_start_time":1523956989967,"exec_end_time":1523957101276,"exec_interrupt_time":0,"mr_waiting":35,"steps":[{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523956989972,"exec_end_time":1523957018403,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0225","mr_job_id":"job_1522633799921_0225","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0225/","hdfs_bytes_written":"260","startTime":"1523956989972","source_records_size":"31646","endTime":"1523957018403"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957018503,"exec_end_time":1523957018629,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957018503","endTime":"1523957018629"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/fact_distinct_columns -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_cube001_Step -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957018718,"exec_end_time":1523957040628,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0226","mr_job_id":"job_1522633799921_0226","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0226/","hdfs_bytes_written":"501","sourceSizeBytes":"0","startTime":"1523957018718","mapReduceWaitTime":"11849","source_records_count":"0","source_records_size":"0","endTime":"1523957040628","sourceRecordCount":"0"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/dict","interrupt_cmd":null,"exec_start_time":1523957040733,"exec_end_time":1523957041427,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957040733","endTime":"1523957041427"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957041522,"exec_end_time":1523957041653,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957041522","endTime":"1523957041653"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523957041745,"exec_end_time":1523957043082,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957041745","endTime":"1523957043082"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_cube001 -level 0 -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957043180,"exec_end_time":1523957043257,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957043180","endTime":"1523957043257"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-07","name":"Build N-Dimension Cuboid : level 1","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_base_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_1_cuboid -jobname Kylin_ND-Cuboid_Builder_cube001_Step -level 1 -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957043354,"exec_end_time":1523957043431,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957043354","endTime":"1523957043431"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-08","name":"Build N-Dimension Cuboid : level 2","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_1_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_2_cuboid -jobname Kylin_ND-Cuboid_Builder_cube001_Step -level 2 -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957043525,"exec_end_time":1523957043606,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957043525","endTime":"1523957043606"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-09","name":"Build N-Dimension Cuboid : level 3","sequence_id":9,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_2_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/level_3_cuboid -jobname Kylin_ND-Cuboid_Builder_cube001_Step -level 3 -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957043695,"exec_end_time":1523957043776,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957043695","endTime":"1523957043776"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-10","name":"Build Cube In-Mem","sequence_id":10,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename cube001 -segmentid 20201c9f-1f6b-4e8c-bd23-514d8d18d020 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/ -jobname Kylin_Cube_Builder_cube001 -cubingJobId 51d6bace-f1b0-48e3-9a0a-ae846a7376f7","interrupt_cmd":null,"exec_start_time":1523957043865,"exec_end_time":1523957065834,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0227","mr_job_id":"job_1522633799921_0227","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0227/","hdfs_bytes_written":"121","startTime":"1523957043865","mapReduceWaitTime":"11906","source_records_count":"0","source_records_size":"0","endTime":"1523957065834"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-11","name":"Convert Cuboid Data to HFile","sequence_id":11,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cube001 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/hfile -htablename KYLIN_M0J5L9XRCD -jobname Kylin_HFile_Generator_cube001_Step","interrupt_cmd":null,"exec_start_time":1523957065954,"exec_end_time":1523957088241,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0228","byteSizeBytes":"0","mr_job_id":"job_1522633799921_0228","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0228/","hdfs_bytes_written":"0","startTime":"1523957065954","mapReduceWaitTime":"12235","source_records_count":"0","source_records_size":"0","endTime":"1523957088241"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-12","name":"Load HFile to HBase Table","sequence_id":12,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-51d6bace-f1b0-48e3-9a0a-ae846a7376f7/cube001/hfile -htablename KYLIN_M0J5L9XRCD -cubename cube001","interrupt_cmd":null,"exec_start_time":1523957088355,"exec_end_time":1523957093476,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957088355","endTime":"1523957093476"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-13","name":"Update Cube Info","sequence_id":13,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957093600,"exec_end_time":1523957093613,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957093600","endTime":"1523957093613"},"run_async":false},{"interruptCmd":null,"id":"51d6bace-f1b0-48e3-9a0a-ae846a7376f7-14","name":"Hive Cleanup","sequence_id":14,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523957093786,"exec_end_time":1523957101243,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523957093786","endTime":"1523957101243"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"5c169e09-d2fa-4eb0-9ea4-331248869243","last_modified":1523955110105,"version":"2.3.1.0","name":"BUILD CUBE - 123e - FULL_BUILD - GMT+08:00 2018-04-17 16:49:22","type":"BUILD","duration":130,"related_cube":"123e","related_segment":"0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2","exec_start_time":1523954979977,"exec_end_time":1523955110102,"exec_interrupt_time":0,"mr_waiting":35,"steps":[{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954979982,"exec_end_time":1523955001423,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0220","mr_job_id":"job_1522633799921_0220","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0220/","hdfs_bytes_written":"591","startTime":"1523954979982","source_records_size":"14944","endTime":"1523955001423"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523955001515,"exec_end_time":1523955028788,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0221","mr_job_id":"job_1522633799921_0221","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0221/","hdfs_bytes_written":"0","startTime":"1523955001515","source_records_size":"8885","endTime":"1523955028788"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 123e -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/fact_distinct_columns -segmentid 0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2 -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_123e_Step -cubingJobId 5c169e09-d2fa-4eb0-9ea4-331248869243","interrupt_cmd":null,"exec_start_time":1523955028876,"exec_end_time":1523955050799,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0222","mr_job_id":"job_1522633799921_0222","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0222/","hdfs_bytes_written":"1589","sourceSizeBytes":"404","startTime":"1523955028876","mapReduceWaitTime":"11861","source_records_count":"110","source_records_size":"404","endTime":"1523955050799","sourceRecordCount":"110"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename 123e -segmentid 0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/dict","interrupt_cmd":null,"exec_start_time":1523955050906,"exec_end_time":1523955051032,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955050906","endTime":"1523955051032"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523955051139,"exec_end_time":1523955051268,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955051139","endTime":"1523955051268"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename 123e -segmentid 0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523955051375,"exec_end_time":1523955052716,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955051375","endTime":"1523955052716"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 123e -segmentid 0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2 -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_123e -level 0 -cubingJobId 5c169e09-d2fa-4eb0-9ea4-331248869243","interrupt_cmd":null,"exec_start_time":1523955052834,"exec_end_time":1523955074503,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0223","mr_job_id":"job_1522633799921_0223","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0223/","hdfs_bytes_written":"403","startTime":"1523955052834","mapReduceWaitTime":"11614","source_records_count":"110","source_records_size":"0","endTime":"1523955074503"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-07","name":"Build Cube In-Mem","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename 123e -segmentid 0cb48491-e9bb-4571-a8f1-2a1da9a9b3e2 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/cuboid/ -jobname Kylin_Cube_Builder_123e -cubingJobId 5c169e09-d2fa-4eb0-9ea4-331248869243","interrupt_cmd":null,"exec_start_time":1523955074600,"exec_end_time":1523955074679,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955074600","endTime":"1523955074679"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-08","name":"Convert Cuboid Data to HFile","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 123e -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/hfile -htablename KYLIN_7TXM4ARAK7 -jobname Kylin_HFile_Generator_123e_Step","interrupt_cmd":null,"exec_start_time":1523955074777,"exec_end_time":1523955096733,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0224","byteSizeBytes":"1593","mr_job_id":"job_1522633799921_0224","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0224/","hdfs_bytes_written":"1593","startTime":"1523955074777","mapReduceWaitTime":"11901","source_records_count":"110","source_records_size":"0","endTime":"1523955096733"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-09","name":"Load HFile to HBase Table","sequence_id":9,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-5c169e09-d2fa-4eb0-9ea4-331248869243/123e/hfile -htablename KYLIN_7TXM4ARAK7 -cubename 123e","interrupt_cmd":null,"exec_start_time":1523955096847,"exec_end_time":1523955102253,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955096847","endTime":"1523955102253"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-10","name":"Update Cube Info","sequence_id":10,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523955102378,"exec_end_time":1523955102390,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955102378","endTime":"1523955102390"},"run_async":false},{"interruptCmd":null,"id":"5c169e09-d2fa-4eb0-9ea4-331248869243-11","name":"Hive Cleanup","sequence_id":11,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523955102580,"exec_end_time":1523955110072,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523955102580","endTime":"1523955110072"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"3062a12a-41be-410c-9ae8-9c5b057dfb26","last_modified":1523954285906,"version":"2.3.1.0","name":"BUILD CUBE - 333333 - 20150404052500_20180404052500 - GMT+08:00 2018-04-17 16:34:14","type":"BUILD","duration":205,"related_cube":"333333","related_segment":"04e97b79-1e35-4f72-a715-088b17610235","exec_start_time":1523954079944,"exec_end_time":1523954285904,"exec_interrupt_time":0,"mr_waiting":71,"steps":[{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954079948,"exec_end_time":1523954106228,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0211","mr_job_id":"job_1522633799921_0211","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0211/","hdfs_bytes_written":"894","startTime":"1523954079948","source_records_size":"33472","endTime":"1523954106228"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954106306,"exec_end_time":1523954134435,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0212","mr_job_id":"job_1522633799921_0212","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0212/","hdfs_bytes_written":"0","startTime":"1523954106306","source_records_size":"16425","endTime":"1523954134435"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/fact_distinct_columns -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_333333_Step -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954134510,"exec_end_time":1523954156234,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0213","mr_job_id":"job_1522633799921_0213","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0213/","hdfs_bytes_written":"3320","sourceSizeBytes":"4286","startTime":"1523954134510","mapReduceWaitTime":"11664","source_records_count":"110","source_records_size":"4286","endTime":"1523954156234","sourceRecordCount":"110"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/dict","interrupt_cmd":null,"exec_start_time":1523954156308,"exec_end_time":1523954157374,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954156308","endTime":"1523954157374"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954157457,"exec_end_time":1523954157589,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954157457","endTime":"1523954157589"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523954157664,"exec_end_time":1523954158975,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954157664","endTime":"1523954158975"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_333333 -level 0 -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954159059,"exec_end_time":1523954180849,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0214","mr_job_id":"job_1522633799921_0214","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0214/","hdfs_bytes_written":"480","startTime":"1523954159059","mapReduceWaitTime":"11722","source_records_count":"110","source_records_size":"0","endTime":"1523954180849"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-07","name":"Build N-Dimension Cuboid : level 1","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_base_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_1_cuboid -jobname Kylin_ND-Cuboid_Builder_333333_Step -level 1 -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954180932,"exec_end_time":1523954202722,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0215","mr_job_id":"job_1522633799921_0215","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0215/","hdfs_bytes_written":"940","startTime":"1523954180932","mapReduceWaitTime":"11728","source_records_count":"80","source_records_size":"0","endTime":"1523954202722"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-08","name":"Build N-Dimension Cuboid : level 2","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_1_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_2_cuboid -jobname Kylin_ND-Cuboid_Builder_333333_Step -level 2 -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954202802,"exec_end_time":1523954227646,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0216","mr_job_id":"job_1522633799921_0216","yarn_application_tracking_url":"http://bigdataserver1:19888/jobhistory/job/job_1522633799921_0216","hdfs_bytes_written":"874","startTime":"1523954202802","mapReduceWaitTime":"11697","source_records_count":"210","source_records_size":"0","endTime":"1523954227646"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-09","name":"Build N-Dimension Cuboid : level 3","sequence_id":9,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_2_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/level_3_cuboid -jobname Kylin_ND-Cuboid_Builder_333333_Step -level 3 -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954227736,"exec_end_time":1523954249646,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0217","mr_job_id":"job_1522633799921_0217","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0217/","hdfs_bytes_written":"396","startTime":"1523954227736","mapReduceWaitTime":"11847","source_records_count":"156","source_records_size":"0","endTime":"1523954249646"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-10","name":"Build Cube In-Mem","sequence_id":10,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename 333333 -segmentid 04e97b79-1e35-4f72-a715-088b17610235 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/ -jobname Kylin_Cube_Builder_333333 -cubingJobId 3062a12a-41be-410c-9ae8-9c5b057dfb26","interrupt_cmd":null,"exec_start_time":1523954249746,"exec_end_time":1523954249836,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954249746","endTime":"1523954249836"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-11","name":"Convert Cuboid Data to HFile","sequence_id":11,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename 333333 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/hfile -htablename KYLIN_9V00RBG47B -jobname Kylin_HFile_Generator_333333_Step","interrupt_cmd":null,"exec_start_time":1523954249939,"exec_end_time":1523954272481,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0218","byteSizeBytes":"6485","mr_job_id":"job_1522633799921_0218","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0218/","hdfs_bytes_written":"6485","startTime":"1523954249939","mapReduceWaitTime":"12439","source_records_count":"475","source_records_size":"0","endTime":"1523954272481"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-12","name":"Load HFile to HBase Table","sequence_id":12,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-3062a12a-41be-410c-9ae8-9c5b057dfb26/333333/hfile -htablename KYLIN_9V00RBG47B -cubename 333333","interrupt_cmd":null,"exec_start_time":1523954272571,"exec_end_time":1523954277851,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954272571","endTime":"1523954277851"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-13","name":"Update Cube Info","sequence_id":13,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954277950,"exec_end_time":1523954277963,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954277950","endTime":"1523954277963"},"run_async":false},{"interruptCmd":null,"id":"3062a12a-41be-410c-9ae8-9c5b057dfb26-14","name":"Hive Cleanup","sequence_id":14,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523954278338,"exec_end_time":1523954285872,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523954278338","endTime":"1523954285872"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"217966e8-c50a-4b95-852e-b222bc9a452c","last_modified":1523862281356,"version":"2.3.1.0","name":"BUILD CUBE - cccc - FULL_BUILD - GMT+08:00 2018-04-16 15:02:04","type":"BUILD","duration":151,"related_cube":"cccc","related_segment":"413280ea-d1cc-4767-9313-c06f1b2105e2","exec_start_time":1523862129925,"exec_end_time":1523862281353,"exec_interrupt_time":0,"mr_waiting":46,"steps":[{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523862129930,"exec_end_time":1523862150941,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0110","mr_job_id":"job_1522633799921_0110","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0110/","hdfs_bytes_written":"435","startTime":"1523862129930","source_records_size":"11486","endTime":"1523862150941"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523862150986,"exec_end_time":1523862179045,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0111","mr_job_id":"job_1522633799921_0111","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0111/","hdfs_bytes_written":"0","startTime":"1523862150986","source_records_size":"9252","endTime":"1523862179045"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cccc -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/fact_distinct_columns -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_cccc_Step -cubingJobId 217966e8-c50a-4b95-852e-b222bc9a452c","interrupt_cmd":null,"exec_start_time":1523862179102,"exec_end_time":1523862200621,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0112","mr_job_id":"job_1522633799921_0112","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0112/","hdfs_bytes_written":"990","sourceSizeBytes":"75","startTime":"1523862179102","mapReduceWaitTime":"11454","source_records_count":"9","source_records_size":"75","endTime":"1523862200621","sourceRecordCount":"9"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename cccc -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/dict","interrupt_cmd":null,"exec_start_time":1523862200683,"exec_end_time":1523862200906,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862200683","endTime":"1523862200906"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523862200967,"exec_end_time":1523862201096,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862200967","endTime":"1523862201096"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename cccc -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523862201154,"exec_end_time":1523862202494,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862201154","endTime":"1523862202494"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cccc -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_cccc -level 0 -cubingJobId 217966e8-c50a-4b95-852e-b222bc9a452c","interrupt_cmd":null,"exec_start_time":1523862202561,"exec_end_time":1523862224172,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0113","mr_job_id":"job_1522633799921_0113","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0113/","hdfs_bytes_written":"221","startTime":"1523862202561","mapReduceWaitTime":"11543","source_records_count":"9","source_records_size":"0","endTime":"1523862224172"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-07","name":"Build N-Dimension Cuboid : level 1","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cccc -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/cuboid/level_base_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/cuboid/level_1_cuboid -jobname Kylin_ND-Cuboid_Builder_cccc_Step -level 1 -cubingJobId 217966e8-c50a-4b95-852e-b222bc9a452c","interrupt_cmd":null,"exec_start_time":1523862224243,"exec_end_time":1523862245669,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0114","mr_job_id":"job_1522633799921_0114","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0114/","hdfs_bytes_written":"232","startTime":"1523862224243","mapReduceWaitTime":"11347","source_records_count":"9","source_records_size":"0","endTime":"1523862245669"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-08","name":"Build Cube In-Mem","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename cccc -segmentid 413280ea-d1cc-4767-9313-c06f1b2105e2 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/cuboid/ -jobname Kylin_Cube_Builder_cccc -cubingJobId 217966e8-c50a-4b95-852e-b222bc9a452c","interrupt_cmd":null,"exec_start_time":1523862245742,"exec_end_time":1523862245826,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862245742","endTime":"1523862245826"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-09","name":"Convert Cuboid Data to HFile","sequence_id":9,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename cccc -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/hfile -htablename KYLIN_7BLOHNLD82 -jobname Kylin_HFile_Generator_cccc_Step","interrupt_cmd":null,"exec_start_time":1523862245891,"exec_end_time":1523862268135,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0115","byteSizeBytes":"1092","mr_job_id":"job_1522633799921_0115","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0115/","hdfs_bytes_written":"1092","startTime":"1523862245891","mapReduceWaitTime":"12180","source_records_count":"22","source_records_size":"0","endTime":"1523862268135"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-10","name":"Load HFile to HBase Table","sequence_id":10,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-217966e8-c50a-4b95-852e-b222bc9a452c/cccc/hfile -htablename KYLIN_7BLOHNLD82 -cubename cccc","interrupt_cmd":null,"exec_start_time":1523862268208,"exec_end_time":1523862273643,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862268208","endTime":"1523862273643"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-11","name":"Update Cube Info","sequence_id":11,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523862273718,"exec_end_time":1523862273739,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862273718","endTime":"1523862273739"},"run_async":false},{"interruptCmd":null,"id":"217966e8-c50a-4b95-852e-b222bc9a452c-12","name":"Hive Cleanup","sequence_id":12,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523862273866,"exec_end_time":1523862281321,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523862273866","endTime":"1523862281321"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"a214097f-3cc7-413c-a175-865315c61c5f","last_modified":1523844168003,"version":"2.3.1.0","name":"BUILD CUBE - ppl_01 - FULL_BUILD - GMT+08:00 2018-04-16 10:02:30","type":"BUILD","duration":8,"related_cube":"ppl_01","related_segment":"cd3c3afa-d106-40d2-809e-eddf8b9db1ef","exec_start_time":1523844159975,"exec_end_time":1523844168000,"exec_interrupt_time":0,"mr_waiting":0,"steps":[{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523844159982,"exec_end_time":1523844167986,"exec_wait_time":0,"step_status":"ERROR","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523844159982","endTime":"1523844167986"},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename ppl_01 -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/fact_distinct_columns -segmentid cd3c3afa-d106-40d2-809e-eddf8b9db1ef -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_ppl_01_Step -cubingJobId a214097f-3cc7-413c-a175-865315c61c5f","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename ppl_01 -segmentid cd3c3afa-d106-40d2-809e-eddf8b9db1ef -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/dict","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename ppl_01 -segmentid cd3c3afa-d106-40d2-809e-eddf8b9db1ef -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename ppl_01 -segmentid cd3c3afa-d106-40d2-809e-eddf8b9db1ef -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_ppl_01 -level 0 -cubingJobId a214097f-3cc7-413c-a175-865315c61c5f","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-07","name":"Build Cube In-Mem","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf_inmem.xml -cubename ppl_01 -segmentid cd3c3afa-d106-40d2-809e-eddf8b9db1ef -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/cuboid/ -jobname Kylin_Cube_Builder_ppl_01 -cubingJobId a214097f-3cc7-413c-a175-865315c61c5f","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-08","name":"Convert Cuboid Data to HFile","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.1-bin/conf/kylin_job_conf.xml -cubename ppl_01 -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/hfile -htablename KYLIN_M8PDKJQC9D -jobname Kylin_HFile_Generator_ppl_01_Step","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-09","name":"Load HFile to HBase Table","sequence_id":9,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a214097f-3cc7-413c-a175-865315c61c5f/ppl_01/hfile -htablename KYLIN_M8PDKJQC9D -cubename ppl_01","interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-10","name":"Update Cube Info","sequence_id":10,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false},{"interruptCmd":null,"id":"a214097f-3cc7-413c-a175-865315c61c5f-11","name":"Hive Cleanup","sequence_id":11,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":0,"exec_end_time":0,"exec_wait_time":0,"step_status":"PENDING","cmd_type":"SHELL_CMD_HADOOP","info":{},"run_async":false}],"submitter":"ADMIN","job_status":"ERROR","progress":0.0},{"uuid":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3","last_modified":1523583591222,"version":"2.3.1.0","name":"BUILD CUBE - test - 20180201000000_20180301000000 - GMT+08:00 2018-04-13 09:38:01","type":"BUILD","duration":108,"related_cube":"test","related_segment":"ff033776-5f76-49bb-a892-16242ea58adb","exec_start_time":1523583482403,"exec_end_time":1523583591218,"exec_interrupt_time":0,"mr_waiting":34,"steps":[{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583482406,"exec_end_time":1523583509822,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0091","mr_job_id":"job_1522633799921_0091","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0091/","hdfs_bytes_written":"130","startTime":"1523583482406","source_records_size":"17464","endTime":"1523583509822"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583509944,"exec_end_time":1523583510054,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583509944","endTime":"1523583510054"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename test -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/fact_distinct_columns -segmentid ff033776-5f76-49bb-a892-16242ea58adb -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_test_Step -cubingJobId a93a84d6-b1f3-40d1-8161-cf9769f78bd3","interrupt_cmd":null,"exec_start_time":1523583510172,"exec_end_time":1523583531641,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0093","mr_job_id":"job_1522633799921_0093","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0093/","hdfs_bytes_written":"1014","sourceSizeBytes":"0","startTime":"1523583510172","mapReduceWaitTime":"11418","source_records_count":"0","source_records_size":"0","endTime":"1523583531641","sourceRecordCount":"0"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/dict","interrupt_cmd":null,"exec_start_time":1523583531746,"exec_end_time":1523583532104,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583531746","endTime":"1523583532104"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583532201,"exec_end_time":1523583532346,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583532201","endTime":"1523583532346"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523583532428,"exec_end_time":1523583533779,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583532428","endTime":"1523583533779"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_test -level 0 -cubingJobId a93a84d6-b1f3-40d1-8161-cf9769f78bd3","interrupt_cmd":null,"exec_start_time":1523583533886,"exec_end_time":1523583533964,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583533886","endTime":"1523583533964"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-07","name":"Build N-Dimension Cuboid : level 1","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/level_base_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/level_1_cuboid -jobname Kylin_ND-Cuboid_Builder_test_Step -level 1 -cubingJobId a93a84d6-b1f3-40d1-8161-cf9769f78bd3","interrupt_cmd":null,"exec_start_time":1523583534069,"exec_end_time":1523583534145,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583534069","endTime":"1523583534145"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-08","name":"Build N-Dimension Cuboid : level 2","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/level_1_cuboid -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/level_2_cuboid -jobname Kylin_ND-Cuboid_Builder_test_Step -level 2 -cubingJobId a93a84d6-b1f3-40d1-8161-cf9769f78bd3","interrupt_cmd":null,"exec_start_time":1523583534246,"exec_end_time":1523583534323,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583534246","endTime":"1523583534323"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-09","name":"Build Cube In-Mem","sequence_id":9,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf_inmem.xml -cubename test -segmentid ff033776-5f76-49bb-a892-16242ea58adb -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/ -jobname Kylin_Cube_Builder_test -cubingJobId a93a84d6-b1f3-40d1-8161-cf9769f78bd3","interrupt_cmd":null,"exec_start_time":1523583534430,"exec_end_time":1523583555939,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0095","mr_job_id":"job_1522633799921_0095","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0095/","hdfs_bytes_written":"121","startTime":"1523583534430","mapReduceWaitTime":"11448","source_records_count":"0","source_records_size":"0","endTime":"1523583555939"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-10","name":"Convert Cuboid Data to HFile","sequence_id":10,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename test -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/hfile -htablename KYLIN_RM9DN2PSU0 -jobname Kylin_HFile_Generator_test_Step","interrupt_cmd":null,"exec_start_time":1523583556062,"exec_end_time":1523583578221,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0096","byteSizeBytes":"0","mr_job_id":"job_1522633799921_0096","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0096/","hdfs_bytes_written":"0","startTime":"1523583556062","mapReduceWaitTime":"12093","source_records_count":"0","source_records_size":"0","endTime":"1523583578221"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-11","name":"Load HFile to HBase Table","sequence_id":11,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a93a84d6-b1f3-40d1-8161-cf9769f78bd3/test/hfile -htablename KYLIN_RM9DN2PSU0 -cubename test","interrupt_cmd":null,"exec_start_time":1523583578343,"exec_end_time":1523583583481,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583578343","endTime":"1523583583481"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-12","name":"Update Cube Info","sequence_id":12,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583583618,"exec_end_time":1523583583630,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583583618","endTime":"1523583583630"},"run_async":false},{"interruptCmd":null,"id":"a93a84d6-b1f3-40d1-8161-cf9769f78bd3-13","name":"Hive Cleanup","sequence_id":13,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583583757,"exec_end_time":1523583591184,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583583757","endTime":"1523583591184"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0},{"uuid":"a3007f2f-9258-437a-a6df-c217f25565c6","last_modified":1523583554412,"version":"2.3.1.0","name":"BUILD CUBE - rrd - FULL_BUILD - GMT+08:00 2018-04-13 09:37:24","type":"BUILD","duration":107,"related_cube":"rrd","related_segment":"b8f63e43-d2cb-40ed-87d9-59c84e5bf31e","exec_start_time":1523583447004,"exec_end_time":1523583554409,"exec_interrupt_time":0,"mr_waiting":34,"steps":[{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-00","name":"Create Intermediate Flat Hive Table","sequence_id":0,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583447008,"exec_end_time":1523583473460,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0089","mr_job_id":"job_1522633799921_0089","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0089/","hdfs_bytes_written":"130","startTime":"1523583447008","source_records_size":"10083","endTime":"1523583473460"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-01","name":"Redistribute Flat Hive Table","sequence_id":1,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583473571,"exec_end_time":1523583473668,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583473571","endTime":"1523583473668"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-02","name":"Extract Fact Table Distinct Columns","sequence_id":2,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename rrd -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/fact_distinct_columns -segmentid b8f63e43-d2cb-40ed-87d9-59c84e5bf31e -statisticsoutput hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/fact_distinct_columns/statistics -statisticssamplingpercent 100 -jobname Kylin_Fact_Distinct_Columns_rrd_Step -cubingJobId a3007f2f-9258-437a-a6df-c217f25565c6","interrupt_cmd":null,"exec_start_time":1523583473782,"exec_end_time":1523583495212,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0090","mr_job_id":"job_1522633799921_0090","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0090/","hdfs_bytes_written":"408","sourceSizeBytes":"0","startTime":"1523583473782","mapReduceWaitTime":"11362","source_records_count":"0","source_records_size":"0","endTime":"1523583495212","sourceRecordCount":"0"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-03","name":"Build Dimension Dictionary","sequence_id":3,"exec_cmd":" -cubename rrd -segmentid b8f63e43-d2cb-40ed-87d9-59c84e5bf31e -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/fact_distinct_columns -dictPath hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/dict","interrupt_cmd":null,"exec_start_time":1523583495318,"exec_end_time":1523583495447,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583495318","endTime":"1523583495447"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-04","name":"Save Cuboid Statistics","sequence_id":4,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583495542,"exec_end_time":1523583495681,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583495542","endTime":"1523583495681"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-05","name":"Create HTable","sequence_id":5,"exec_cmd":" -cubename rrd -segmentid b8f63e43-d2cb-40ed-87d9-59c84e5bf31e -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/rowkey_stats/part-r-00000 -cuboidMode CURRENT","interrupt_cmd":null,"exec_start_time":1523583495776,"exec_end_time":1523583497460,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583495776","endTime":"1523583497460"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-06","name":"Build Base Cuboid","sequence_id":6,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename rrd -segmentid b8f63e43-d2cb-40ed-87d9-59c84e5bf31e -input FLAT_TABLE -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/cuboid/level_base_cuboid -jobname Kylin_Base_Cuboid_Builder_rrd -level 0 -cubingJobId a3007f2f-9258-437a-a6df-c217f25565c6","interrupt_cmd":null,"exec_start_time":1523583497566,"exec_end_time":1523583497631,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583497566","endTime":"1523583497631"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-07","name":"Build Cube In-Mem","sequence_id":7,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf_inmem.xml -cubename rrd -segmentid b8f63e43-d2cb-40ed-87d9-59c84e5bf31e -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/cuboid/ -jobname Kylin_Cube_Builder_rrd -cubingJobId a3007f2f-9258-437a-a6df-c217f25565c6","interrupt_cmd":null,"exec_start_time":1523583497732,"exec_end_time":1523583519127,"exec_wait_time":11,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0092","mr_job_id":"job_1522633799921_0092","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0092/","hdfs_bytes_written":"121","startTime":"1523583497732","mapReduceWaitTime":"11339","source_records_count":"0","source_records_size":"0","endTime":"1523583519127"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-08","name":"Convert Cuboid Data to HFile","sequence_id":8,"exec_cmd":" -conf /opt/apache-kylin-2.3.0-bin/conf/kylin_job_conf.xml -cubename rrd -partitions hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/rowkey_stats/part-r-00000_hfile -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/cuboid/* -output hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/hfile -htablename KYLIN_OXQQ05JB93 -jobname Kylin_HFile_Generator_rrd_Step","interrupt_cmd":null,"exec_start_time":1523583519238,"exec_end_time":1523583541410,"exec_wait_time":12,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"yarn_application_id":"application_1522633799921_0094","byteSizeBytes":"0","mr_job_id":"job_1522633799921_0094","yarn_application_tracking_url":"http://bigdataserver1:8088/proxy/application_1522633799921_0094/","hdfs_bytes_written":"0","startTime":"1523583519238","mapReduceWaitTime":"12108","source_records_count":"0","source_records_size":"0","endTime":"1523583541410"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-09","name":"Load HFile to HBase Table","sequence_id":9,"exec_cmd":" -input hdfs://bigdataserver1:8020/kylin/kylin_metadata/kylin-a3007f2f-9258-437a-a6df-c217f25565c6/rrd/hfile -htablename KYLIN_OXQQ05JB93 -cubename rrd","interrupt_cmd":null,"exec_start_time":1523583541526,"exec_end_time":1523583546692,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583541526","endTime":"1523583546692"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-10","name":"Update Cube Info","sequence_id":10,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583546803,"exec_end_time":1523583546814,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583546803","endTime":"1523583546814"},"run_async":false},{"interruptCmd":null,"id":"a3007f2f-9258-437a-a6df-c217f25565c6-11","name":"Hive Cleanup","sequence_id":11,"exec_cmd":null,"interrupt_cmd":null,"exec_start_time":1523583546928,"exec_end_time":1523583554383,"exec_wait_time":0,"step_status":"FINISHED","cmd_type":"SHELL_CMD_HADOOP","info":{"startTime":"1523583546928","endTime":"1523583554383"},"run_async":false}],"submitter":"ADMIN","job_status":"FINISHED","progress":100.0}]
`;

export default {
    ModelTableData: JSON.parse(ModelTableData),
    TreeData,
    Desc: JSON.parse(DESC),
    Models: JSON.parse(Models),
    WareHouse: JSON.parse(WareHouse),
    ALL_TABLE_AND_COLUMNS: JSON.parse(ALL_TABLE_COLUMNS),
    ANALYSIS_DATA: JSON.parse(ANALYSIS_DATA),
    CUBE_MONITOR: JSON.parse(CUBE_MONITOR)
};