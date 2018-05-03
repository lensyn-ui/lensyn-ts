<script lang="ts">
    import { Component } from "vue-property-decorator";

    import { Grid } from "dwh-component";
    import BaseView from "./BaseView.vue";
    import {WidgetEvent} from "../types/dwh-component";

    @Component
    export default class BaseGridView extends BaseView {
        protected data() {
            return {
                paginationPageMap: {
                    page: "pageNum",
                    rows: "pageSize"
                },
                perpageCount: 10
            };
        }

        protected getGrid(ref: string = "grid"): Grid {
            return this.$refs[ref] as any as Grid;
        }

        protected refreshGrid() {
            let grid = this.getGrid();

            grid.refreshGrid();
        }

        protected getQueryParams(): any {
            throw new Error("child must implements getQueryParams");
        }

        protected updateGrid() {
            let grid = this.getGrid(),
                params = this.getQueryParams();

            grid.updateGrid(params);
        }

        protected manualUpdateGrid(params: any, isOverride: boolean) {
            let grid = this.getGrid();

            grid.updateGrid(params, isOverride);
        }

        protected getGridQueryCondition(): any {
            return this.getGrid().getQueryCondition();
        }

        protected forceUpdateGrid() {
            let grid = this.getGrid(),
                params = this.getQueryParams();

            grid.forceUpdateGrid(params);
        }

        protected getGridSelected(field: string, gridName?: string): any[] {
            let grid = this.getGrid(gridName);

            return grid.getCheckboxSelected(field);
        }

        protected getGridActiveRow(gridName = "grid"): any {
            let grid = this.getGrid(gridName);

            return grid.getActiveRow();
        }

        protected getGridData(ref: string = "grid"): any[] {
            let grid = this.getGrid(ref);
            return grid.getGridData();
        }

        protected resizeSeletDropdownPosition() {
            let selector = this.$el.querySelectorAll(".vue-grid .multiselect");

            for (let i = 0, j = selector.length; i < j; ++i) {
                let element = selector[i] as HTMLElement;
                if (this.isGridDropdownExpand(element)) {
                    let child = element.querySelector(".multiselect__content-wrapper") as HTMLElement,
                        position = element.getBoundingClientRect();

                    child!.style.left = position.left + "px";
                    child!.style.width = position.width + "px";
                    child!.style.top = position.top + element.offsetHeight + "px";
                }
            }
        }

        protected isGridDropdownExpand(element: HTMLElement): boolean {
            return element.getAttribute("class")!.indexOf("multiselect--active") !== -1;
        }

        protected handleGridError(event: WidgetEvent) {
            if (event.action === "loadData") {
                this.handleRequestError(event.error);
            }
        }
    };
</script>
