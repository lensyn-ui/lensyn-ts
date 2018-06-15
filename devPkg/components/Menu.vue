/*********************************************************************
* Vue private menu file
* Created by deming-su on 2017/12/30
*********************************************************************/


<template>
    <div class="menu-container" :class="[{'menu-collapse': isMenuCollapse}]" ref="menu">
        <div class="menu-body">
            <div class="menu-header">
                <!--收起按钮-->
                <span class="collapse-icon" :class="[{'collapse': isMenuCollapse}]" @click="toggleMenu"></span>
            </div>
            <ul class="container" ref="containerNode">
                <li class="block" v-for="item in menuData" :key="item.id">
                    <template v-if="item.children">
                        <div class="txt"
                             :class="[item.cls, {'expand': item.checked}]"
                             now-type="menu"
                             @click="collapseMenuItem(item, $event)">{{item.name}}</div>
                        <ul class="children" :class="[{'active': item.checked}]">
                            <li class="item" v-for="child in item.children" :key="child.id">
                                <router-link v-if="isMenuCollapse" v-tooltip.right="child.name"  class="txt"
                                             :to="child.link"
                                             exact-active-class="active"><i class="icon" v-html="child.icon"></i>{{child.name}}
                                </router-link>
                                <router-link v-else class="txt"
                                             :to="child.link"
                                             exact-active-class="active"><i class="icon" v-html="child.icon"></i>{{child.name}}
                                </router-link>
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <router-link v-if="isMenuCollapse" v-tooltip.right="item.name" class="txt"
                                     :to="item.link"
                                     exact-active-class="active"
                                     :class="[item.cls]">
                            <i class="icon" v-html="item.icon"></i>
                            {{item.name}}
                        </router-link>
                        <router-link v-else class="txt"
                                     :to="item.link"
                                     exact-active-class="active"
                                     :class="[item.cls]">
                            <i class="icon" v-html="item.icon"></i>
                            {{item.name}}
                        </router-link>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator";

    @Component
    export default class Menu extends Vue {
        @Prop({type: String, required: true})
        private menuList: string;
        @Watch("menuList")
        private onMenuListChange(currentValue: string) {
            this.refreshMenuList(currentValue);
        }

        /**
         * 页面参数定义
         * @define menuData 页面树菜单
         * @define isMenuCollapse 左侧树是否收起
         */
        private menuData: any[] = [];
        private isMenuCollapse: boolean = false;

        private created() {
            this.refreshMenuList(this.menuList);
        }

        /* 左右展开/收起菜单栏 */
        private toggleMenu() {
            this.isMenuCollapse = !this.isMenuCollapse;
            this.$emit("collapseEvt", {action: "collapseMenu", collapse: this.isMenuCollapse});
        }

        /* 展开/收起菜单项 */
        private collapseMenuItem(item: any, event: Event) {
            item.checked = !item.checked;

            let element: HTMLElement = event.target as HTMLElement;
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

        /* 刷新菜单 */
        private refreshMenuList(datas: string) {
            let menuDatas = JSON.parse(datas);
            this.menuData = menuDatas.map((item: any) => {
                if (item.checked === undefined) {
                    item.checked = false;
                }
                return item;
            });
        }
    };
</script>