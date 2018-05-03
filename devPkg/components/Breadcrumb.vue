<template>
    <div class="breadcrumb" @click="onClickBreaddcrumb">
        <ul>
            <li v-for="(item, index) in paths" :key="item.id" :data-path-id="item.id">
                {{item.name}}
                <i v-if="index < paths.length - 1">/</i>
                <!--
                <i v-if="index < paths.length - 1" class="iconfont icon-mianbaoxie"></i>                
                -->
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { BreadcrumbData } from "dwh-component";


    @Component
    export default class extends Vue {
        @Prop({type: Array, required: true})
        private paths: BreadcrumbData[];

        private findById(id: string|number): BreadcrumbData | null {
            for (let i = 0, j = this.paths.length; i < j; ++i) {
                if (this.paths[i].id === id) {
                    return this.paths[i];
                }
            }
            return null;
        }

        private onClickBreaddcrumb(event: MouseEvent): void {
            let target = event.target as HTMLElement,
                id: string | null = target.getAttribute("data-path-id");

            if (id !== null) {
                let data = this.findById(id);
                this.$emit("click", data);
            }
        }
    };
</script>