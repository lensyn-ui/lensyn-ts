interface MenuItem {
    id: string;
    name: string;
    icon: string;
    link: string;
    children?: MenuItem[]
};

const MenuData: MenuItem = {
    id: "ID001",
    name: "菜单",
    icon: "",
    link: "/",

    children: [
        {
            id: "ID0011",
            name: "子菜单",
            icon: "",
            link: "/child"
        }
    ]
};

export default MenuData;