<script lang="ts">
    import { Prop, Component } from "vue-property-decorator";

    import Widget from "./Widget.vue";

    @Component
    export default class FormWidget<T> extends Widget {
        @Prop({type: Boolean, default: false})
        protected widgetReadonly: boolean;
        @Prop()
        protected value: T;

        protected updateModel(value: T):void {
            this.$emit("input", value);
        }

        public isReadonly(): boolean {
            return this.widgetReadonly;
        }

        public getValue(): T {
            throw new Error("child must implements getValue");
        }
    }

</script>
