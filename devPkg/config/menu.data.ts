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
        id: "query",
        name: "查询展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "query1",
                name: "查询",
                link: "/query",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "table",
        name: "表格展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "table0",
                name: "默认表格",
                link: "/table",
                icon: "&#xe61a;"
            },
            {
                id: "table1",
                name: "分页表格",
                link: "/pagingtable",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID002",
        name: "分页展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0021",
                name: "分页",
                link: "/pagination",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID003",
        name: "选择器展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0031",
                name: "单选",
                link: "/baseselect",
                icon: "&#xe61a;"
            },
            {
                id: "ID0032",
                name: "多选",
                link: "/multipleselect",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID004",
        name: "树展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0041",
                name: "树",
                link: "/tree",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID005",
        name: "日期选择器展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0051",
                name: "日期选择器",
                link: "/date",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID006",
        name: "按钮展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0061",
                name: "按钮",
                link: "/button",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID007",
        name: "输入框展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0071",
                name: "输入框",
                link: "/input",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID008",
        name: "选项卡展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0081",
                name: "选项卡",
                link: "/tab",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID009",
        name: "确认框展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID0091",
                name: "确认框",
                link: "/confirm",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID101",
        name: "弹框展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID1011",
                name: "弹框",
                link: "/modal",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID102",
        name: "提示/警示框展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID1021",
                name: "提示/警示框",
                link: "/alarm",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID103",
        name: "tooltip展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID1031",
                name: "tooltip",
                link: "/tooltip",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID104",
        name: "checkbox展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID1041",
                name: "checkbox",
                link: "/checkbox",
                icon: "&#xe61a;"
            }
        ]
    }, {
        id: "ID105",
        name: "侧滑弹出框展示",
        cls: "menu-overview",
        link: "",
        children: [
            {
                id: "ID1051",
                name: "sideslip",
                link: "/sideslip",
                icon: "&#xe61a;"
            }
        ]
    }
] as any[];

export default MenuData;