<template>
    <ls-dialog class="confirm-dialog" @clickDialog="onClickCancel" :title="title">
        <div class="confirm-content">
            <div class="msg">
                <span class="icon" :class="msgIcon"></span>
                {{msg}}
            </div>
        </div>

        <div slot="footer">
            <ls-button :name="confirmLabel" @clickEvt="onClickConfirm" :objProps="{type: 'primary'}"></ls-button>
            <ls-button :name="cancelLabel" @clickEvt="onClickCancel" class="gray-btn"></ls-button>
        </div>
        
    </ls-dialog>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    
    import Dialog from "./Dialog.vue";

    @Component({
        components: {
            "ls-dialog": Dialog
        }
    })
    export default class ConfirmDialog extends Vue {
        @Prop({type: String, default: ""})
        private title: string;
        @Prop({type: String, default: "warning"})
        private msgType: string;
        @Prop({type: String, required: true})
        private msg: string;
        @Prop({type: String, default: "确认"})
        private confirmLabel: string;
        @Prop({type: String, default: "取消"})
        private cancelLabel: string;
        @Prop({type: Function, default: () => {}})
        private onClickCancel: () => void;
        @Prop({type: Function, default: () => {}})
        private onClickConfirm: () => void;

        private get msgIcon(): string {
            return `${this.msgType}-icon`;
        }
    };
</script>
