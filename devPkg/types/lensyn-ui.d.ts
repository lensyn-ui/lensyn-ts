import { PluginFunction } from "vue";

export = LensynUI;

declare class LensynUI {
    public static install: PluginFunction<never>;
}

interface Toast {
    show: (msg: string, type?: string) => void;
}

interface ConfirmDialog {
    show: (data: any) => void;
    hide: () => void;
}

declare module "vue/types/vue" {
    export interface Vue {
        $lensyn: {
            toast: Toast,
            confirmDialog: ConfirmDialog
        };
    }
}
