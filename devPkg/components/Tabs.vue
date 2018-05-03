/****************************************************************************
* Created by huanghuaqiao on 2017/12/27                                     *
* tabs组件                                                                   *
*****************************************************************************/
<template>
	<!--tabs start-->
	<div class="ls-tabs" :class="{'border-tabs': isBorderTab}">
		<!-- 悬浮tab项-----start -->
		<div class="tab-item hover"
		     :class="[tabHoverContent.cls,tabHoverContent.position === 'left' ? 'hoverLeft' : 'hoverRight']"
		     :style="[{left: tabHoverContent.position === 'left' ? 0 : 'auto'},{right: tabHoverContent.position !== 'left' ? 0 : 'auto'},{width: containerWidth/maxLength + 'px'}]"
		     v-if="tabHoverContent.isShow && maxLength > 1">
			<div class="content" v-html="tabHoverContent.content"></div>
			<!-- tab项蒙层 -->
			<div class="layer" :now-index="tabHoverContent.index" :now-id="tabHoverContent.id" @click="tabEvent"></div>
		</div>
		<!-- 悬浮tab项-----end -->
		<!-- tabs项容器 -->
		<div class="item-container transform-container"
		     :style="[{width: tabsList.length > maxLength ? (containerWidth*tabsList.length/maxLength + 'px') : '100%'}]">
			<!-- tab项 -->
			<div class="tab-item"
			     @click="onClickCreateTab"
			     v-if="isEnableCreateTab">
				<span class="add-item"></span>
			</div>
			<div class="tab-item" v-for="(item, i) in tabsList"
			     :key="item.id"
			     :class="[item.cls,{'active': currentTabIndex === i},{'tab-one': tabsList.length === 1}]"
			     :style="[{'min-width': tabsList.length > maxLength ? (containerWidth/maxLength + 'px') : 0},{width: tabsList.length > maxLength ? (containerWidth/maxLength + 'px') : (100/(tabsList.length || 1) + '%')}]">
				<div class="content" v-html="item.content"></div>
				<span v-if="isEnableCloseTab" @click.stop="onClickClose(item.id)" class="close"></span>
				<!-- tab项蒙层 -->
				<div class="layer" :now-index="i" :now-id="item.id" @click="tabEvent"></div>
			</div>
		</div>
		<!-- 上一项按钮 -->
		<span class="prev" v-if="tabsList.length > maxLength" now-type="prev" @click="moveItem"></span>
		<!-- 下一项按钮 -->
		<span class="next" v-if="tabsList.length > maxLength" now-type="next" @click="moveItem"></span>
	</div>
	<!--tabs  end-->
</template>
<style lang="less">
	@primary-color: #2d8cf0;
	/*@import "../../styles/common.less";*/
	.border-radius(@size: 5px;) {
		-webkit-border-radius: @size;
		border-radius: @size;
	}
	/* 倒角函数-单个角 */
	.border-radius-direction(@tl: 0;@tr: 0;@bl: 0;@br: 0;) {
		-webkit-border-top-left-radius: @tl;
		-webkit-border-top-right-radius: @tr;
		-webkit-border-bottom-left-radius: @bl;
		-webkit-border-bottom-right-radius: @br;
		-moz-border-radius-topleft: @tl;
		-moz-border-radius-bottomleft: @bl;
		-moz-border-radius-topright: @tr;
		-moz-border-radius-bottomright: @br;
		border-top-left-radius: @tl;
		border-bottom-left-radius: @bl;
		border-top-right-radius: @tr;
		border-bottom-right-radius: @br;
	}
	.opacity (@size: 0.5;@size2: 50) {
		filter: alpha(opacity=@size2);
		-moz-opacity: @size;
		-khtml-opacity: @size;
		-webkit-opacity: @size;
		opacity: @size;
	}
	.transition(@type: all;@time: 0.3s;@status: linear) {
		-webkit-transition: @type @time @status;
		-o-transition: @type @time @status;
		transition: @type @time @status;
	}
	.ls-tabs {
		position: relative;
		width: 100%;
		height: 100%;
		line-height: 56px;
		overflow: hidden;
		color: #666;
		&:after {
			content: '';
			display: table;
			clear: both;
		}
		&:hover {
			.prev, .next {
				.opacity(1, 100);
			}
		}
		
		/* tab项容器 */
		.item-container {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			.transition;
		}
		/* tab项 */
		.tab-item {
			position: relative;
			float: left;
			height: 100%;
			border-top: 1px solid #dcdcdc;
			text-align: center;
			background: #F0F0F0;
			cursor: pointer;
			&:not(:first-child) {
				border-left: 1px solid #dcdcdc;
			}
			&:first-child {
				/*.border-radius-direction(@bl: 6px);*/
			}
			&:last-child {
				/*.border-radius-direction(@br: 6px);*/
			}

			/* 悬浮项样式 */
			&.hover {
				position: absolute;
				top: 0;
				z-index: 10;
				/*&.hoverLeft {
					.border-radius-direction(@bl: 6px);
				}
				&.hoverRight {
					.border-radius-direction(@br: 6px);
				}*/
			}
			&.active, &.hover {
				border-top: 2px solid fade(@primary-color, 90%) !important;
				background: #fff;
				color: #333;
			}

			/* tab内容 */
			.content {
				width: 100%;
				height: 100%;
				line-height: 40px;
				font-size: 14px;
				color: #666;
			}
			/* 蒙层元素 */
			.layer {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: transparent;
			}

			.close {
				position: absolute;
				z-index: 2;
				top: 5px;
				right: 5px;
				height: 12px;
				width: 12px;
				line-height: 12px;
				font-size: 12px;

				&::before {
				  content: '\e629';
				  font-weight: 900;
				  color: #ddd;
				  font-family: "iconfont" !important;
				  font-style: normal;
				  -webkit-font-smoothing: antialiased;
				}
			}

			.add-item {
				display: block;
				height: 40px;
				line-height: 40px;				
				&::before {
				  content: '\E66D';
				  font-weight: 900;
				  font-size: 20px;
				  font-weight: 900;
				  color: #ddd;
				  font-family: "iconfont" !important;
				  font-style: normal;
				  -webkit-font-smoothing: antialiased;
				}
			}
		}
		/* 上一页、下一页样式 */
		.prev, .next {
			position: absolute;
			top: 0;
			display: block;
			width: 30px;
			height: 100%;
			/*line-height: 100%;*/
			font-size: 20px;
			z-index: 100;
			border-top: 1px solid #DCDCDC;
			background: #F0F0F0;
			text-align: center;
			cursor: pointer;
			.transition;
			.opacity(0, 0);
			&:before {
				display: inline-block;
				content: '';
				border-top: 9px solid transparent;
				border-bottom: 9px solid transparent;
			}
		}
		.prev {
			left: 0;
			display: none;
			border-right: 1px solid #DCDCDC;
			&:before {
				border-right: 6px solid #666;
			}
		}
		.next {
			right: 0;
			border-left: 1px solid #DCDCDC;
			&:before {
				border-left: 6px solid #666;
			}
		}

		/* 如果是显示边框的 tab */
		&.border-tabs {
			.item-container {
				border-bottom: 1px solid #dcdcdc;
			}

			.tab-item {
				border: 1px solid #dcdcdc;
				border-bottom-width: 0;


				&.active {
					box-sizing: content-box;
					border-bottom: 1px solid #fff;
				}

				& + .tab-item {
					margin-left: 5px;
				}
			}

			.prev,
			.next {
				border: 1px solid #dcdcdc;
                border-bottom-width: 0;
			}
		}
	}
</style>
<script>
	import {mapGetters} from 'vuex'
	
	export default {
		props: {
			tabsList: {// tabs列表数据
				type: Array,
				default:
					
					() => []
				/**数据格式
				 *[
				 * {cls: '',type: '',content: ''}
				 * ]
				 */
			},

			maxLength: {// tabs列表最多显示的个数
				type: Number,
				default: 6
			},

			isEnableCloseTab: {
				type: Boolean,
				default: false
			},

			isEnableCreateTab: {
				type: Boolean,
				default: true
			},

			isBorderTab: {
				type: Boolean,
				default: false
			},

			defaultActiveTabIndex: {
			    type: Number
            }
		},
		computed: {
		
		},
		/**
		 * @returns {{containerWidth:Number,currentTabIndex:Number,tabHoverContent:Object}}
		 * containerWidth tabs容器的宽度
		 * currentTabIndex 当前tabs的index
		 * tabHoverContent 悬浮tab项内容
		 */
		data() {
			return {
				containerWidth: 0,
				currentTabIndex: 0,
				tabHoverContent: {}
			}
		},
		watch: {
			'tabsList': function (list) {
				let me = this;
				let defaultData = {
					index: 0,
					type: '',
					cls: '',
					content: '',
					position: 'left',
					isShow: false
				};
				/* 为悬浮tab项内容赋值 */
				const hoverData = list.length && list[0];
				me.tabHoverContent = Object.assign(defaultData,hoverData);
			}
		},
		/**
		 * @define {{tabEvent:Function,moveItem:Function}}
		 * tabEvent tab点击事件
		 * moveItem 左右移动tab项
		 */
		methods: {
			tabEvent(evt) {
				let me = this;
				const target = evt.target;
				const index = target.getAttribute('now-index')*1;
				const id = target.getAttribute('now-id');
				const containerEle = target.parentNode.parentNode.previousElementSibling;
				const prevEle = containerEle && containerEle.querySelector('.prev');
				const nextEle = containerEle && containerEle.querySelector('.next');
				/* 切换tabs时隐藏上一项按钮，显示下一项按钮 */
				prevEle && (prevEle.style.display = 'none');
				nextEle && (nextEle.style.display = 'block');
				/* 设置当前tab的index的值 */
				me.currentTabIndex = index;
				/* 隐藏悬浮tab项 */
				me.tabHoverContent.isShow = false;
				me.tabHoverContent.index = parseInt(index);
				/* 将当前tab内容赋值给悬浮tab内容变量 */
				me.tabHoverContent = Object.assign(me.tabHoverContent,me.tabsList[me.currentTabIndex]);
				/* 告诉父窗口点击的tab项信息 */
				me.$emit('tabsClick', {target: evt.target,index: index,id: id});
			},

			onClickClose(id) {
				this.$emit("tabsClick", {action: "close", id: id});
			},

			onClickCreateTab() {
				this.$emit("tabsClick", {action: "create"});
			},

			moveItem(evt) {
				let me = this;
				let target = evt.target;
				/* 获取当前元素的type属性判断是上一项还是下一项按钮  */
				const type = target.getAttribute('now-type');
				/* tab项总个数 */
				const totalLength = me.tabsList.length;
				/* 获取可移动次数 */
				const length = totalLength - me.maxLength;
				let itemWidth = Number((me.containerWidth/me.maxLength).toFixed(1));
				/* 要移动的元素，即当前元素的上一个元素（prev）和上上个元素（next）*/
				let itemContainerEle = type === 'prev' ? target.previousElementSibling : target.previousElementSibling.previousElementSibling;
				/* 移动容器当前的left值 */
				let transformLeft = itemContainerEle.style.left ? parseFloat(itemContainerEle.style.left) : 0;
				/* 上一页 */
				if (type === 'prev') {
					/* 如果left<0，向左移动一项的距离，显示下一个按钮 */
					if (transformLeft < 0) {
						itemContainerEle.style.left = (transformLeft + itemWidth) + 'px';
						let nextEle = target.nextElementSibling;
						nextEle.style.display = 'block';
					}
					/* 如果当前移动位置已经是第一项，则隐藏下一页按钮 */
					parseInt(itemContainerEle.style.left) === 0 && (target.style.display = 'none');
				} else {
					/* 下一页 */
					/* 如果满足判断条件，向右移动一项的距离，显示上一个按钮 */
					if (transformLeft > (-itemWidth*length).toFixed(1)) {
						itemContainerEle.style.left = (transformLeft - itemWidth) + 'px';
						let prevEle = target.previousElementSibling;
						prevEle.style.display = 'block';
					}
					/* 如果当前移动位置已经是最后一项，则隐藏下一页按钮 */
					parseInt(itemContainerEle.style.left) === Math.ceil(-itemWidth*length) && (target.style.display = 'none');
				}
				/* 获取移动个数 */
				let transNum = Math.ceil(parseFloat(itemContainerEle.style.left)*-1/itemWidth);
				/* tabs默认显示6个,如果当前tabindex和移动个数的差值大于等于6或小于0时显示悬浮tab项 */
				me.tabHoverContent.isShow = me.currentTabIndex - transNum >= me.maxLength || me.currentTabIndex - transNum < 0;
				/* 当前tabIndex大于最大显示个数或者移动个数大于最大显示个数时悬浮tab项显示在右侧 */
				me.tabHoverContent.position = (me.currentTabIndex > me.maxLength - 1 && me.currentTabIndex - transNum > me.maxLength - 1) ? 'right' : 'left';
				/* 为移动容器添加移动数量属性 */
				itemContainerEle.setAttribute('transform-index',Math.ceil(parseFloat(itemContainerEle.style.left)/itemWidth));
			},
		},
		mounted() {
			let me = this;
			let tabsContainer = document.querySelector('.ls-tabs');
			/* 获取tabs容器的宽度 */
			tabsContainer && (me.containerWidth = tabsContainer.offsetWidth);
		},
		created() {
		    if (typeof this.defaultActiveTabIndex !== "undefined") {
		        this.currentTabIndex = this.defaultActiveTabIndex;
            }
		}
	}
</script>