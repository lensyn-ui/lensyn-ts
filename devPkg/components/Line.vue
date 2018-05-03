
<template>
    <div :class="wrapClasses">
        <div :class="outerClasses">
            <div :class="innerClasses">
                <div :class="bgClasses" :style="bgStyle"></div>
            </div>
        </div>
        <span v-if="!hideInfo" :class="textClasses">
            <slot>
                <span :class="textInnerClasses">
                    {{ percent }}%
                </span>
            </slot>
        </span>
    </div>

</template>
<script>


    const prefixCls = 'ls-line';

    export default {
        props: {
            percent: {
                type: Number,
                default: 0
            },
            status: {
                default: 'normal'
            },
            hideInfo: {
                type: Boolean,
                default: false
            },
            strokeWidth: {
                type: Number,
                default: 10
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentStatus: this.status
            };
        },
        computed: {
            bgStyle() {
                return this.vertical ? {
                    height: `${this.percent}%`,
                    width: `${this.strokeWidth}px`
                } : {
                    width: `${this.percent}%`,
                    height: `${this.strokeWidth}px`
                };
            },
            wrapClasses() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.currentStatus}`,
                    {
                        [`${prefixCls}-show-info`]: !this.hideInfo,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            },
            textClasses() {
                return `${prefixCls}-text`;
            },
            textInnerClasses() {
                return `${prefixCls}-text-inner`;
            },
            outerClasses() {
                return `${prefixCls}-outer`;
            },
            innerClasses() {
                return `${prefixCls}-inner`;
            },
            bgClasses() {
                return `${prefixCls}-bg`;
            }
        },
        created() {
            this.handleStatus();
        },
        methods: {
            oneOf(value, validList) {
                for (let i = 0; i < validList.length; i++) {
                    if (value === validList[i]) {
                        return true;
                    }
                }
                return false;
            },
            handleStatus(isDown) {
                if (isDown) {
                    this.currentStatus = 'normal';
                    this.$emit('on-status-change', 'normal');
                } else {
                    if (parseInt(this.percent, 10) === 100) {
                        this.currentStatus = 'success';
                        this.$emit('on-status-change', 'success');
                    }
                }
            }
        },
        watch: {
            percent(val, oldVal) {
                if (val < oldVal) {
                    this.handleStatus(true);
                } else {
                    this.handleStatus();
                }
            },
            status(val) {
                this.currentStatus = val;
            }
        }
    };
</script>
