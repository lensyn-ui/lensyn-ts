import { VueConstructor } from "vue";
import ToastComponent from "./Toast.vue";
import ConfirmDialogComponent from "./ConfirmDialog.vue";
import { Directive, Filter } from "../util";

let Toast = {
    install(Vue: VueConstructor) {
        let Constructor = Vue.extend(ToastComponent),
            toast = null;

        toast = {
            _currentToast: null,
            _toastShowTime: 1200,

            show(msg: string, msgType: string) {
                if (!msgType) {
                    msgType = "success";
                }
                if (this._currentToast === null) {
                    let container = document.createElement("div");
                    document.body.appendChild(container);

                    this._currentToast = new Constructor({
                        el: container,
                        propsData: {
                            msg,
                            visible: true,
                            msgType
                        }
                    });
                } else {
                    this._currentToast.msg = msg;
                    this._currentToast.msgType = msgType;
                    this._currentToast.visible = true;
                }

                setTimeout(() => this._currentToast.visible = false, this._toastShowTime);
            }
        };
        Vue.prototype.$lensyn.toast = toast;
    }
};

let ConfirmDialog = {
    install(Vue: VueConstructor) {
        let Constructor = Vue.extend(ConfirmDialogComponent),
            dialog = null;

        dialog = {
            show(param: any) {
                let element = document.createElement("div");

                document.body.appendChild(element);

                this._currentDialog = new Constructor({
                    el: element,
                    propsData: {...param}
                });
            },


            hide() {
                this._currentDialog.$destroy();
                document.body.removeChild(this._currentDialog.$el);
            },

            getContainer() {
                if (this._currentDialog) {
                    return this._currentDialog.$el;
                }
                return null;
            }
        };

        Vue.prototype.$lensyn.confirmDialog =  dialog;
    }
};

let Dwh = {
    install(Vue: VueConstructor) {
        if (!Vue.prototype.$lensyn) {
            Vue.prototype.$lensyn = {};
        }
        this.registerDirective(Vue);
        this.registerFilter(Vue);
        Toast.install(Vue);
        ConfirmDialog.install(Vue);
    },

    registerDirective(Vue: VueConstructor) {
        Vue.directive("tooltip", Directive.TooltipDirective);
        Vue.directive("autofocus", Directive.Autofocus);
    },

    registerFilter(Vue: VueConstructor) {
        Vue.filter("byteFormat", Filter.byteFormat);
        Vue.filter("dateFormat", Filter.dateFormat);
        Vue.filter("timeFormat", Filter.timeFormat);
    }
};

export default Dwh;