/* event --- start --- */
export interface WidgetEvent {
    action: string;
    [key: string]: any;
}

export interface CheckboxEvent extends WidgetEvent {
    name: string;
    value: boolean;
}

export interface RadioEvent extends WidgetEvent {
    name: string;
    value: boolean;
}

export interface EditDialogEvent extends WidgetEvent {
    status?: string;
}

export interface MenuEvent extends WidgetEvent {
    collapse: boolean;
}

/* event --- end --- */

/* data --- start --- */
export interface MenuDataType {
    id: string;
    name: string;
    link: string;
    icon?: string;
    checked?: boolean;
    children?: MenuDataType[];
}

export interface BreadcrumbData {
    id: number;
    name: string;
}

export interface TableQueryItem {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    options?: any;
    cls?: string;
}

export interface TextRadioData {
    label: string;
    value: string | number;
    checked?: boolean;
}

export interface PaginationData {
    page: number;
    perpageCount: number;
    total: number;
}

export interface TableQueryData {
    keyword: string;
    type: string;
    [key: string]: string;
}

export interface SelectData {
    id: number | string;
    name: string;
    value: string | number;
    [key: string]: any;
}

// 表单验证结果
export interface FormValidateResult {
    status: boolean;
    msg?: string;
}
/* data --- end --- */

/* widget --- start --- */

// 输入框
export interface InputWidget {
    validate: () => boolean;
}

// Checkbox 列表
export interface CheckboxListData {
    name: string;
    value: string | number;
}

export interface CheckboxListEvent extends WidgetEvent {
    title: string;
    value: any[];
}

// 分类下拉
export interface CategoryCheckboxListData {
    title: string;
    datas: CheckboxListData[];
}

export interface CategorySelectedData {
    [key: string]: any[];
}

// Radio
export interface RadioData {
    name: string;
    label: string;
}

// 表格 --- start ---
export interface Column {
    label: string;
    field: string;
}

export type Columns = Column[];
// 表格 --- end ---

// tabs
export interface TabData {
    id: number | string;
    content: string;
    [key: string]: string | number;
}

export interface  TabEvent  extends WidgetEvent {
    id?: string | number;
}

// 树型组件
export interface TreeDataItem {
    name: string;
    children?: TreeDataItem[];
    checked?: boolean;
    check?: boolean;
    [key: string]: any;
}
export type TreeData = TreeDataItem[];

export interface TreeEvent {
    action: string;
    obj: TreeData;
    curObj: TreeDataItem;
}

// 树型下拉


// Grid
export interface Grid {
    updateGrid: (params: any, isOverride?: boolean) => void;
    refreshGrid: () => void;
    getCheckboxSelected: (field: string) => any[];
    getQueryCondition: () => any;
    forceUpdateGrid: (params: any) => void;
    getGridData: () => any[];
    getActiveRow: () => any[];
    setRowBeActive: (data: any) => void;
    clearActiveRow: () => void;
}

// 下拉按钮
export interface DropdownBtnData {
    id: string | number;
    label: string;
    [key: string]: any;
}

// step
export interface StepEvent {
   action: string;
   data?: any;
}

export interface StepData {
    index: number;
    info: string;
    nowStep: boolean;
    type?: string;
}

//
/* widget --- end --- */

/* prop --- start --- */
export interface FormValidateRule {
    required?: boolean;
    requiredMsg?: string;
    invalidMsg?: string;
    [key: string]: any;
}
/* prop --- end --- */