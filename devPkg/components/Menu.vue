/*********************************************************************
* Created by deming-su on 2017/12/30
*********************************************************************/

<template>
    <div class="menu-container" :class="{'menu-collapse': isMenuCollapse}" ref="menu">
        <div class="menu-body">
            <div class="menu-header">
                <!--收起按钮-->
                <span class="collapse-icon" @click="toggleMenu"
                      :class="{'collapse-icon-rotate': isMenuCollapse}"></span>
            </div>
            <ul class="container" ref="containerNode">
                <li class="block" v-for="item in menuData" :key="item.id">
                    <div class="txt"
                         :class="[item.icon, {'expand': item.checked}]"
                         now-type="menu"
                         @click="collapseMenuItem(item, $event)">{{item.name}}
                    </div>
                    <ul class="children" :class="[{'active': item.checked}]">
                        <li class="item" v-for="child in item.children" :key="child.id">
                            <router-link class="txt"
                                         :to="child.link"
                                         exact-active-class="active"
                                         :class="[{'active': child.checked}]">{{child.name}}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";
    import {MenuDataType} from "dwh-component";

    @Component
    export default class Menu extends Vue {
        @Prop({type: Array, required: true})
        private menuList: MenuDataType[];

        private menuData: MenuDataType[] = [];
        private isMenuCollapse: boolean = false;

        @Watch("menuList")
        private onMenuListChange(currentValue: MenuDataType[]) {
            this.refreshMenuList(currentValue);
        }

        private created() {
            this.refreshMenuList(this.menuList);
        }

        private mounted() {
            //window.onload = () => {
            //    this.setDefaultExpandMenu();
            //}
        }

        private toggleMenu() {
            this.isMenuCollapse = !this.isMenuCollapse;
            this.$emit("menuEvt", {action: "collapseMenu", collapse: this.isMenuCollapse});
        }

        private collapseMenuItem(item: MenuDataType, event: Event) {
            item.checked = !item.checked;

            this.toggleMenuItem(item, event.target as HTMLElement);
        }

        private toggleMenuItem(item: MenuDataType, element: HTMLElement) {
            if (element && element.parentElement !== null) {
                let childrenElement = element.parentElement.querySelector(".children");

                if (childrenElement !== null) {
                    if (item.checked) {
                        let childCount = item.children ? item.children.length : 0;
                        let height = element.offsetHeight * childCount;
                        childrenElement.setAttribute("style", `height: ${height}px`);
                    } else {
                        childrenElement.setAttribute("style", "height: 0px");
                    }
                }
            }
        }

        private refreshMenuList(datas: MenuDataType[]) {
            let menuDatas = JSON.parse(JSON.stringify(datas));
            this.menuData = menuDatas.map((item: MenuDataType) => {
                if (item.checked === undefined) {
                    item.checked = false;
                }
                return item;
            });
        }

        private setDefaultExpandMenu() {
            let path = this.$route.path;

            this.menuData = this.menuData.map((item) => {
                if (item.children && item.link === path) {
                    item.checked = true;
                }
                return item;
            });
        }

    };
</script>