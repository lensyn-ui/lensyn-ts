/*************************************************
* Created by zhangtao on 2018/04/10
*************************************************/
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class CommonMixin extends Vue {
        @Prop({type: String, default: "id"})
        protected idProperty: string;
        @Prop({type: String, default: "name"})
        protected labelProperty: string;
        @Prop({type: String, default: "children"})
        protected childProperty: string;
        @Prop({type: Number, default: 18})
        protected indent: number;
        @Prop({type: Boolean, default: false})
        protected isEnableChecked: boolean;
        @Prop({type: String, default: "multiple"})
        protected checkMode: string;

        protected getItemId(data: any): string | number {
            return data[this.idProperty];
        }

        protected getItemLabel(data: any): string {
            return data[this.labelProperty];
        }

        protected getItemChildren(data: any): any[] {
            return data[this.childProperty];
        }

        protected isBranchNode(data: any): boolean {
            return typeof data[this.childProperty] !== "undefined";
        }

        protected isLeafNode(data: any): boolean {
            return !this.isBranchNode(data);
        }
    };
</script>