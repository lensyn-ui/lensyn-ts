/*********************************************************************
 * page menu data file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

const MenuData: any[] = [
    {
        id: "ID001",
        name: "首页",
        link: "/home",
        cls: "menu-icon menu-home",
        icon: "&#xe622;"
    }, {
        id: "ID002",
        name: "数据管控",
        cls: "menu-overview",
        link: "/warehouse",
        children: [
            {
                id: "ID0021",
                name: "仓库视图",
                link: "/warehouse",
                icon: "&#xe61a;"
            }, {
                id: "ID0023",
                name: "项目管理",
                link: "/project-manager",
                icon: "&#xe61a;"
            }, {

                id: "ID00232",
                name: "模型管理",
                link: "/model-manager",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID003",
        name: "智能分析",
        cls: "menu-overview",
        link: "/analysis",
        children: [
            {
                id: "ID0031",
                name: "我的数据",
                link: "/analysis",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID004",
        name: "统一调度",
        cls: "menu-overview",
        link: "/scheduling",
        children: [
            {
                id: "ID0041",
                name: "任务调度",
                link: "/scheduling",
                icon: "&#xe61a;"
            },
            {
                id: "ID0042",
                name: "调度监控",
                link: "/scheduling/monitor",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID005",
        name: "系统管理",
        cls: "menu-overview",
        link: "/system",
        children: [
            {
                id: "ID0051",
                name: "数据源管理",
                link: "/system",
                icon: "&#xe61a;"
            },
            {
                id: "ID0052",
                name: "域管理",
                link: "/area",
                icon: "&#xe61a;"
            }
        ]
    }
] as any[];

export default MenuData;