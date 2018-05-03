<template>
    <ls-dropdown ref="dropdown" class="dropdown-btn" >
        <div slot="input">{{name}}</div>
        <ul slot="list">
            <li v-for="item in datas" :key="item.id" @click="onClickBtn(item.id)" >{{item.label}}</li>
        </ul>
    </ls-dropdown>
</template>

<script lang="ts">
    import { Component, Prop, Watch } from "vue-property-decorator";

    import { DropdownBtnData } from "dwh-component";
    import Widget from "./base/Widget.vue";
    import Dropdown from "./Dropdown.vue";

    @Component({
        components: {
            "ls-dropdown": Dropdown
        }
    })
    export default class DropdownButton extends Widget {
        @Prop({type: Array, default: () => []})
        private datas: DropdownBtnData[];
        @Prop({type: String, default: "操作"})
        private name: string;

        private onClickBtn(id: any) {
            let btn = this.findDataById(id),
                dropdown = this.$refs.dropdown as any;

            dropdown.collapse();
            this.$emit("clickEvt", {btn});
        }

        private findDataById(id: string|number): DropdownBtnData | null {
            for (let i = 0, j = this.datas.length; i < j; ++i) {
                if (this.datas[i].id + "" === id + "") {
                    return this.datas[i];
                }
            }
            return null;
        }
    };

</script>
