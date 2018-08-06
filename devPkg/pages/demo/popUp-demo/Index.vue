<template>
    <div class="popup-demo">
        <ls-button text="hello" @buttonEvent="handleButtonEvent"></ls-button>
        <div ref="popup"
             class="popup"
             v-if="isShow">
            <h1>Hello world</h1>
            <ls-button text="关闭" @buttonEvent="close"></ls-button>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {Popup} from "lensyn-ui";

    @Component
    export default class Hello extends Popup {
        @Prop({type: String, default: 'windowCenter'})
        private popupPosition: string;

        private isShow: boolean = false;

        private handleButtonEvent() {
            this.isShow = true;
            this.$nextTick(() => {
                this.showPopup(this.$refs.popup as HTMLElement);
            });
        }

        private close() {
            this.isShow = false;
        }
    }
</script>
<style lang="less">
    .popup-demo {
        .popup {
            position: fixed;
            z-index: 10;
            background-color: #fff;
            border: 1px solid #dcdcdc;
            padding: 10px;
        }
    }
</style>