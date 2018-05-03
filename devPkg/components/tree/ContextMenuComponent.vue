/*************************************************
* Created by zhangtao on 2018/04/16
*************************************************/
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class ContextMenu extends Vue {
        @Prop({type: Object})
        private data: any;
        @Prop({type: Function})
        private scopedSlot: any;

        private render() {
            return this.scopedSlot(this.data);
        }
    };
</script>