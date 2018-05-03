/****************************************************************************
* Created by huanghuaqiao on 2017/10/26
* 分页公共组件
* 使用方法：在父组件中引入分页组件，传入page(number)、rows(number)、total(number)
	参数，绑定rowschange(rows改变)和pagechange(page改变)事件，在父组件执行自己的方法
*****************************************************************************/
<template>
	<div class="pagination-container">
		<!-- 批量操作按钮 -->
		<div class="batch-handle" v-if="batchBtns.length">
			<span class="pg-btn" position="bottom" :operate-table="item.operateTable" :class="item.cls" v-for="item in batchBtns" @click="btnHandle">{{item.text}}</span>
		</div>
		<!-- 分页内容 -->
		<div class="pagination-content">
			<!-- 分页展示信息(分页跳转) -->
			<div class="pagination-msg">
				<!-- 页码跳转输入框 -->
				<input type="text" ref="pageJump">
				<!-- 跳转按钮 -->
				<i class="icon icon-btn icon-tiaozhuan" @click="pageJump" />
			</div>
			<!-- 分页按钮 -->
			<ul class="pagination">
				<li :class="{'disabled': current == 1}">
					<a href="javascript:;" @click="setCurrent(1)">&lt;&lt;</a>
				</li>
				<li :class="{'disabled': current == 1}">
					<a href="javascript:;" @click="setCurrent(current - 1)">&lt;</a>
				</li>
				<li v-for="p in grouplist" :class="{'active': current == p.val}">
					<a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
				</li>
				<li :class="{'disabled': current == pages}">
					<a href="javascript:;" @click="setCurrent(current + 1)">&gt;</a>
				</li>
				<li :class="{'disabled': current == pages}">
					<a href="javascript:;" @click="setCurrent(pages)">&gt;&gt;</a>
				</li>
			</ul>
			<!-- 分页展示信息 -->
			<div class="pagination-msg">
				<span>共有{{total}}条，每页显示
					<select v-model="row">
						<option v-for="item in selections" :value="item.value" :selected="item.value === row">{{item.text}}</option>
					</select>条
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.pagination-container {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 40px;
		border-top: 1px solid #DCDCDC;
		background: #F5F6FA;
		&:after {
			content: '';
			display: table;
			clear: both;
		}
		/* 批量操作按钮 */
		.batch-handle {
			float: left;
			padding: 5px 0 0 10px;
			width: 25%;
			height: 40px;
			&:after {
				content: '';
				display: table;
				clear: both;
			}
			.pg-btn {
				float: left;
				padding: 0 5px;
				height: 30px;
				line-height: 30px;
				color: #333;
				border: 1px solid #dcdcdc;
				-webkit-border-radius: 2px;
				-moz-border-radius: 2px;
				-mz-border-radius: 2px;
				border-radius: 2px;
				cursor: pointer;
				&:not(:last-child) {
					margin-right: 10px;
				}
				&:hover {
					background: #407DD1;
					border-color: #407DD1;
					color: #fff;
				}
			}
		}

		.icon-btn {
			display: inline-block;
			width: 32px;
			height: 32px;
			line-height: 32px;
			text-align: center;
			font-size: 18px;
			vertical-align: middle;
			cursor: pointer;
			border: 1px solid #dcdcdc;
			background-color: #f0f0f0;
			color: #333;
			font-family: "iconfont" !important;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;

			&.icon-tiaozhuan {
				content: "\e708";
			}
		}
		/* 分页内容 */
		.pagination-content {
			float: right;
			width: 75%;
			height: 40px;
			&:after {
				content: '';
				display: table;
				clear: both;
			}
			/* 显示文字 */
			.pagination-msg {
				float: right;
				margin-right: 10px;
				height: 40px;
				line-height: 40px;
				color: #999;
				select {
					width: 45px;
					height: 32px;
					margin: 0 6px;
					padding-left: 1px;
					background: #fff;
					border: 1px solid #ddd;
				}
				input {
					&[type="text"],&[type="button"] {
						width: 30px;
						height: 32px;
						line-height: 24px;
						border: 1px solid #DCDCDC;
					}
					&[type="text"] {
						margin: 0 5px 0 10px;
					}
					&[type="button"] {
						position: relative;
						top: 2px;
						background: none;
					}
				}
			}
			/* 分页 */
			.pagination {
				float: right;
				overflow: hidden;
				display: table;
				margin: 0 auto;
				padding-top: 8px;
				height: 40px;
				li {
					float: left;
					height: 32px;
					line-height: 32px;
					color: #666;
					border: 1px solid #DCDCDC;
					border-left: none;
					&:first-child {
						border-left: 1px solid #DCDCDC;
					}
					&:hover,&.active {
						background: #407DD1;
						border-color: #407DD1;
						a {
							color: #fff;
						}
					}
					a {
						display: block;
						width: 30px;
						height: 32px;
						line-height: 32px;
						font-size: 12px;
						font-weight: 500;
						text-align: center;
						text-decoration: none;
						color: #3c3c3c;
					}
					
				}
			}
		}
	}
</style>

<script type="es6">
	export default{
		data(){
			return {
				current: this.page,
				row: 10,
				pages: 1,
				grouplist: [],
				selections: [
					{text: 10,value: 10},
					{text: 20,value: 20},
					{text: 30,value: 30},
					{text: 40,value: 40},
					{text: 50,value: 50}
				]
			}
		},
		props: {
			total: {// 数据总条数
				type: Number,
				default: 0
			},
			rows: {// 每页显示条数
				type: Number,
				default: 20
			},
			page: {// 当前页码
				type: Number,
				default: 1
			},
			pagegroup: {// 分页条数
				type: Number,
				default: 5,
				coerce: function (v) {
					v = v > 0 ? v : 5;
					return v % 2 === 1 ? v : v + 1;
				}
			},
			batchBtns: {// 分页条数
				type: Array,
				default: () => []
			}
		},
		computed: {
		
		},
		watch: {
			'total': function(val) {
				this.pages = Math.ceil(this.total / this.row);
				debugger;
				this.grouplist = this.getGroupLists();
			},
			'row': function(val) {
				this.pages = Math.ceil(this.total / val);
				this.grouplist = this.getGroupLists();
				/* 告诉父窗口改变rows数量 */
				this.$emit('paginationChange', {page: this.current,rows: val});
			}
		},
		/**
		 * @type {{setCurrent: Function,pageJump: Function,btnHandle: Function}}
		 * setCurrent 设置当前
		 * pageJump 分页调整事件
		 * btnHandle 按钮事件
		 */
		methods: {
			getGroupLists() { // 获取分页页码
				let len = this.pages, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
				if (len <= this.pagegroup) {
					while (len--) {
						temp.push({text: this.pages - len, val: this.pages - len});
					}
					return temp;
				}
				while (len--) {
					temp.push(this.pages - len);
				}
				let idx = temp.indexOf(center);
				(idx < count) && ( center = center + count - idx);
				(this.current > this.pages - count) && ( center = this.pages - count);
				temp = temp.splice(center - count - 1, this.pagegroup);
				do {
					let t = temp.shift();
					list.push({
						text: t,
						val: t
					});
				} while (temp.length);
				if (this.pages > this.pagegroup) {
					(this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
					(this.current < this.pages - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
				}
				return list;
			},
			setCurrent: function (idx) {
				if (this.current !== idx && idx > 0 && idx < this.pages + 1) {
					this.current = idx;
					this.$emit('paginationChange', {page: idx,rows: this.rows});
				}
			},
			pageJump() {
				let me = this;
				let curPage = Number(me.$refs.pageJump.value);
				if (curPage && me.current !== curPage && curPage > 0 && curPage < me.pages + 1) {
					me.current = curPage;
					/* 告诉父窗口改变页数 */
					this.$emit('paginationChange', {page: curPage,rows: this.rows});
				}
			},
			btnHandle(evt) {
				const me = this;
				const text = evt.target.innerHTML;
				const btns = me.batchBtns;
				/* 遍历批量操作按钮数据，找到当前按钮的信息并返回给父组件 */
				btns.map(item => {
					if (item.text === text) {
						let obj = {target: evt.target};
						me.$emit('batchHandle',Object.assign(obj,item));
					}
				});
			}
		},
		mounted() {
			this.row = this.rows;
			let timer = setTimeout(() => {
				this.pages = Math.ceil(this.total / this.row);
				this.grouplist = this.getGroupLists();
				clearTimeout(timer);
				timer = null;
			},500);
		},
		created() {
		
		}
	}
</script>