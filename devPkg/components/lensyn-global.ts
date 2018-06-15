/*********************************************************************
 * Vue directive & filter register file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import { VueConstructor } from "vue";
import * as Filter from "./filter";
import * as Directive from "./directive";

let Lensyn = {
    install(Vue: VueConstructor) {
        this.registerFilter(Vue);
        this.registerDirective(Vue);
    },

    registerFilter(Vue: VueConstructor) {
        Vue.filter("dateFormat", Filter.dateFormat);
        Vue.filter("hexToRgba", Filter.hexToRgba);
        Vue.filter("hexToRgba", Filter.fixNumber);
    },

    registerDirective(Vue: VueConstructor) {
        Vue.directive("ls-autofocus", Directive.Autofocus);
    }
};

export default Lensyn;