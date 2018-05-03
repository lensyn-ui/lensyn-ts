<template>
    <ls-dialog class="project-edit-dialog edit-dialog" :title="title">
        <div class="form">
            <div class="form-control">
                <label>
                    <span class="required-tag">*</span>项目名称
                </label>
                <div class="widget">

                </div>
            </div>

            <div class="form-control no-required">
                <label> 备注 </label>
                <div class="widget">

                </div>
            </div>
        </div>

        <div slot="footer">
            <ls-button name="保存"></ls-button>
            <ls-button name="取消"></ls-button>
        </div>

    </ls-dialog>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {Dialog, PlainInput, RegValidateInput} from "../../components";
    import BaseView from "../BaseView.vue";

    @Component({
        components: {
            "ls-dialog": Dialog,
            "ls-plain-input": PlainInput,
            "ls-reg-input": RegValidateInput
        }
    })

    export default class ProjectEditDialog extends BaseView {
        @Prop({type: String, default: ''})
        private title:string;
    };

</script>