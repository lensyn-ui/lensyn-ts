<script lang="ts">
    import { Prop, Component, Vue } from "vue-property-decorator";

    @Component
    export default class Widget extends Vue {
        @Prop({type: Boolean, default: false})
        protected disabled: boolean;
        @Prop({type: Boolean, default: true})
        protected visible: boolean;

        public isVisible(): boolean {
            return this.visible;
        }

        public isDisabled(): boolean {
            return this.disabled;
        }
    };
</script>
