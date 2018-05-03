<template>
    <div class="ls-select" :class="{'disabled': disabled}">
        <div :style="[showBoxCls]" selection-box="Y" ref="showBoxNode">
            <input :placeholder="placeholder" :style="showInputCls" @click="boxShowEvt" v-model="nowPickItem" readonly/>
            <i :style="showIconCls" @click="boxShowEvt"></i>
            <span :style="showEndTextCls" v-if="hasEndText" @mouseover="overEvt">{{listProp.et}}</span>
        </div>
        <div v-show="boxShow" date-calendar="Y" :style="pickBoxCls">
            <div :style="pickContentCls" ref="listBox">
                <span v-for="item in listObjD" :style="item.checked ? titleCellCls+checkedCls : item.hovered ? titleCellCls+hoverCls : titleCellCls" :now-id="item.id" @click="pickEvt">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        /* 传递过来的初始化日期 */
        props: ['listObj', 'listProp', 'value', 'disabled', 'placeholder'],
        data() {
            return {
                showBoxCls: {"display":"block","position":"relative","background-color":"#fff","padding-right":"38px","width":"100%","min-height":"28px","border":"solid 1px #dcdcdc"},
                showIconCls: {"position":"absolute","top":"0","right":"0","width":"36px","display":"block","height":"32px","background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABF0lEQVRYR+2VbW0CQRBAHw4qAQelDoqCFgegoMFBJeCgOKBV0KIAJOAAHEBecpuQ5j527ppcf+z8uT/MzJu3s8uEkWMycn8KQDFQDPxrA+/AJ3D8g7diC1jv9LtWm4Ef4BF4qksMQNn8FZhFAR4AIa7AHLgEmqafboC3aohak107IISJ5x4QS+ADWAFaqI0uAJNUp4lvYJFpQeU7YA1ooTFyAO4hLOpEbSGwsF+AFlojF8Aiz1VhdTZBTIEDsK8Wr6t/+N+w7VzdFyd3KGGzljZiIE3TBOGyCuERZDW3YB8A89L1cil9rNJdd/LQw9UXQAibvlQNbeyDFWo+xEA6Dp9Xm/v1qoZjiIFws7qEAlAMFAPFQDFwA+dXLyHNPUQzAAAAAElFTkSuQmCC) center no-repeat","background-size":"18px","cursor":"pointer","user-select":"none"},
                showInputCls: "display: block; width: 100%; height: 30px; line-height: 30px; font-size: 12px; text-indent: 8px; padding: 0; margin: 0; outline: none; border: none;",
                showEndTextCls: "cursor: pointer;position: absolute; top: 0; right: 0; width: 80px; height: 31px; line-height: 31px; text-align: center; background-color: #f0f0f0; font-size: 12px; color: #333; overflow: hidden; border-left: solid 1px #dcdcdc; border-bottom: solid 1px #dcdcdc;",
                pickBoxCls: "position: fixed; background-color: #fff; padding: 3px 0; border: solid 1px #dcdcdc; z-index: 9999;",
                pickContentCls: "max-height: 220px; overflow-x: hidden; overflow-y: auto;",
                titleCellCls: "display: block; height: 28px; min-width: 200px; padding-right: 5px; text-align: left; text-indent: 15px; line-height: 28px; cursor: pointer; user-select: none; color: #333; font-weight: 500; font-size: 14px; overflow: hidden;",
                checkedCls: "background-color: #1E90FF; color: #fff;",
                hoverCls: "background-color: #eee;",
                nowPickItem: "",
                hasEndText: false,
                itemHover: false,
                boxShow: false,
                listObjD:[],
                docClickListener: null,
            }
        },
        watch:{
            /*监听下拉框的数据变化*/
            'listObj' : function (val) {
                let that = this;
                that.$nextTick(()=>{
                    that.getNewListObj(val);
                });
            },

            'value': function () {
                this.nowPickItem = "";
                this.getNewListObj();
            }
        },

        methods: {
            getValue() {
                let lists = this.listObjD;

                for(let i = 0, j = lists.length; i < j; ++i) {
                    if (lists[i].checked) {
                        return lists[i];
                    }
                }
            },

            /* 用户显示框点击事件 */
            boxShowEvt() {
                if (this.disabled) {
                    return;
                }
                this.boxShow = !this.boxShow;
                /* 如果展示弹出框，重新计算框位置 */
                if(this.boxShow) {
                    this.calculatePos();
                }
            },
            /* 计算弹出框的位置 */
            calculatePos() {
                let me = this;
                /* 获取页面显示栏目的节点和相对与screen的位置 */
                let node = me.$refs.showBoxNode;
                let r = node.getBoundingClientRect();
                let t = r.top;
                let l = r.left;
                me.pickBoxCls = me.pickBoxCls + "top: "+(t+r.height+3)+"px; left: "+l+"px;";
            },
            /*下拉框点击事件*/
            pickEvt(evt) {
                let me = this;
                let id = evt.target.getAttribute('now-id');
                let obj = me.listObjD;
                let temp = [];
                obj.map(it => {
                    it.checked = (it.id +"" === id + "");
                    if(it.checked) {
                        me.$emit('onSelectEvt', it);
                        this.$emit("input", it.value);
                    }
                    temp.push(it);
                });
                me.listObjD = temp;
            },
            /*鼠标显示浮层*/
            overEvt(){
                this.$emit('onSelectEvt', {ele:'over'});
            },
            /*hover事件*/
            hoverEvt(type, evt) {
                let me = this;
                let id = evt.target.getAttribute('now-id');
                if(id) {
                    let obj = me.listObjD;
                    let temp = [];
                    obj.map(it => {
                        if(it.id === id) it.hovered = type;
                        temp.push(it);
                    });
                    me.listObjD = temp;
                }
            },
            onClickDoc(event) {

            },

            /*获取新列表数据*/
            getNewListObj(val){
                let that = this;
                let temp = [];
                let sum = 0; //默认变量
                let sumName = "";
                let obj = val || that.listObj;
                if(!obj || !obj.length) return false;

                temp = obj.map((item) => {
                    if (item.value + "" === this.value + "") {
                        item.checked = true;
                        this.nowPickItem = item.name;
                    } else {
                        item.checked = false;
                    }
                    return item;
                });
                that.listObjD = temp;
                that.$nextTick(() => {
                    that.$refs.listBox.addEventListener("mouseover", function (evt) {
                        that.hoverEvt(true, evt);
                    });
                    that.$refs.listBox.addEventListener("mouseout", function (evt) {
                        that.hoverEvt(false, evt);
                    });
                    /* 注册全局点击事件，如果存在打开未关闭的下拉弹出框 关闭掉 -last Modified:tianrong*/
                    /* 修改这个关闭下拉弹窗的事件 Modified by tangyue 2017/12/05*/
                    document.addEventListener("click", function (evt) {
                        /* 当前点击元素 */
                        let clickedNode = (evt || window.event).target;
                        /* 当前点击元素的父元素 */
                        let parentNode = clickedNode.parentNode;
                        /*
                        * 有以下属性则表示点击元素为下拉组件输入框的内部dom元素，
                        * 没有则表示点击的为页面其他区域或者是下拉组件的下拉弹窗
                        */
                        let attr = parentNode ? parentNode.getAttribute("selection-box") : null;
                        if(!attr && that.boxShow){
                            that.boxShow = false;
                        }

//                        //以前的写法 Last modified by tianrong
//                        let node = evt.target.parentNode;
//                        let attr = node.getAttribute("selection-box");
//                        if(!attr) {
//                            node = node.parentNode;
//                            if(node) {
//                                attr = node.getAttribute("selection-box");
//                                if(!attr && that.boxShow) that.boxShow = false;
//                            }
//                        }
                    });
                });
            },

            validate() {
                return true;
            }
        },

        mounted() {
            let me = this;
            me.hasEndText = me.listProp && me.listProp.et;
            if(me.hasEndText) {
                me.showBoxCls["padding-right"] = "118px";
                me.showIconCls["right"] = "80px";
            }
            me.getNewListObj();
            this.docClickListener = this.onClickDoc.bind(this);
            document.addEventListener("click", this.docClickListener);
        },
        
    }
</script>