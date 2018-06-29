/*********************************************************************
 * validate rule file
 * name和validator是固定的，name 为全局唯一名字，validator (value: string | number, rule: any) => {status: string, msg: string}
 * value 为当前值，rule 为当前对象检验规则，status 为校验状态，msg 为校验错误提示信息
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 校验输入框中的字段长度 */
const strLength = (value: string, rule: any): any => {
    let status: boolean = `${value}`.length <= (rule.length || 20);
    return {status, msg: rule.msg || `文字输入长度不能超过${rule.length || 20}`} as any;
};

/* 校验规则集合 */
const ruleMap: any[] = [
    {name: "stringMaxLength", validate : strLength}
] as any[];

/* 注册所有验证规则到验证集合中 */
export default (LensynUI: any): void => {
    ruleMap.map((it: any) => {
        LensynUI.registerValidator(it.name, {validate: it.validate});
    });
};