import { MenuDataType } from "dwh-component";

const MenuData: MenuDataType[] = [
    {
        id: "ID001",
        name: "首页",
        link: "/",
        icon: "menu-overview",
    }, {
        id: "ID002",
        name: "数据管控",
        icon: "menu-overview",
        link: "/warehouse",
        children: [
            {
                id: "ID0021",
                name: "仓库视图",
                link: "/warehouse"
            }, {
                id: "ID0022",
                name: "数据治理",
                link: "/data_control/data_manage"
            }, {

                id: "ID0023",
                name: "项目管理",
                link: "/data-modeling"
            }, {

                id: "ID00232",
                name: "模型管理",
                link: "/data-modeling/model-manager"
            }
        ]
    }, {
        id: "ID003",
        name: "智能分析",
        icon: "menu-overview",
        link: "/analysis",
        children: [
            {
                id: "ID0031",
                name: "我的数据",
                link: "/analysis"
            }
        ]
    }, {
        id: "ID004",
        name: "统一调度",
        icon: "menu-overview",
        link: "/scheduling",
        children: [
            {
                id: "ID0041",
                name: "任务调度",
                link: "/scheduling"
            },
            {
                id: "ID0042",
                name: "调度监控",
                link: "/scheduling/monitor"
            }
        ]
    }, {
        id: "ID005",
        name: "系统管理",
        icon: "menu-overview",
        link: "/system",
        children: [
            {
                id: "ID0051",
                name: "数据源管理",
                link: "/system"
            }
        ]
    }
];

export default MenuData;