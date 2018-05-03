<template>
    <div class="pagination">
		<div class="pagination-msg">
			共有 {{total}} 条，每页显示 
			<select v-model="perpage" @change="onChangePerpage">
				<option v-for="item in pageSelections" :selected="perpage === item.value" 
				    :key="item.value" :value="item.value">{{item.text}}</option>
		    </select>条
		</div>

		<ul class="pagination-list">
			<li :class="{disabled: this.isDisabledPreviousPage}" @click="jumpToFirstPage">&lt;&lt;</li>
			<li :class="{disabled: this.isDisabledPreviousPage}" @click="jumpToPreviousPage">&lt;</li>

			<li v-for="item in showPages" :class="{active: item.value === currentPage}" 
			    :key="item.value" @click.stop="jumpToPage(item.value)">{{item.label}}</li>

			<li :class="{disabled: this.isDisableNextPage}" @click="jumpToNextPage">&gt;</li>
			<li :class="{disabled: this.isDisableNextPage}" @click="jumpToLastPage">&gt;&gt;</li>
		</ul>

		<div class="pagination-jump">
			<input v-model="jumpPage" />
			<span class="jump-btn" @click="onClickJumpBtn"></span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			total: {
				type: Number,
				default: 100
			},

			rows: {
				type: Number,
				default: 20
			},

			initPage: {
				type: Number,
				default: 1
			},

			pageSelections: {
				type: Array,
				default: () => {
					return [
						{ text: 10, value: 10 },
						{ text: 20, value: 20 },
						{ text: 30, value: 30 },
						{ text: 40, value: 40 },
						{ text: 50, value: 50 }
					];
				}
			},

			showPageCount: {
				type: Number,
				default: 4
			}
		},

		data() {
			return {
				perpage: 10,
				currentPage: 1,
				totalPage: 0,
				jumpPage: "",
				showPages: []
			};
		},

		computed: {
			isDisabledPreviousPage() {
				return this.currentPage === 1;
			},

			isDisableNextPage() {
				return this.currentPage === this.totalPage;
			}
		},

		watch: {
			total() {
				this.refreshTotalPage();
				this.refreshShowPages();
			},

			rows() {
				this.refreshTotalPage();
				this.refreshShowPages();
			},

			initPage() {
				this.currentPage = this.initPage;
				this.refreshTotalPage();
				this.refreshShowPages();
			}
		},

		created() {
			this.currentPage = this.initPage;
			this.refreshTotalPage();
			this.refreshShowPages();
		},

		methods: {
			refreshTotalPage() {
				this.totalPage = Math.ceil(this.total / this.perpage);
			},

			refreshShowPages() {
				let previousCount = Math.floor(this.showPageCount / 2),
					nextCount = this.showPageCount - previousCount,
					currentPage = this.currentPage,
					totalPage = this.totalPage,
					startPage = 0,
					endPage = 0,
					result = [];

				startPage = currentPage <= previousCount ? 1 : currentPage - previousCount;
				endPage = currentPage + nextCount >= totalPage ? totalPage : currentPage + nextCount;

				for (let i = startPage; i <= endPage; ++i) {
				    result.push({ value: i, label: i });
				}

				this.showPages = result;
			},

			jumpToFirstPage() {
				if (!this.isDisabledPreviousPage) {
				    this.jumpToPage(1);
				}
			},

			jumpToPreviousPage() {
				if (!this.isDisabledPreviousPage) {
				    this.jumpToPage(this.currentPage - 1);
				}
			},

			jumpToLastPage() {
				if (!this.isDisableNextPage) {
					this.jumpToPage(this.totalPage);
				}
			},

			jumpToNextPage() {
				if (!this.isDisableNextPage) {
					this.jumpToPage(this.currentPage + 1);
				}
			},

			jumpToPage(page) {
				this.currentPage = page;
				this.refreshShowPages();
				this.emitEvent("jump");
			},

			onChangePerpage() {
				this.currentPage = 1;
				this.refreshTotalPage();
				this.refreshShowPages();
				this.emitEvent("perpage");
			},

			onClickJumpBtn() {
				if (this.jumpPage) {
					let page = Number(this.jumpPage);

					if (page >= 1 && page <= this.totalPage && page !== this.currentPage) {
						this.jumpToPage(page);
						this.emitEvent("jump");
					}
				}
			},

			emitEvent(action) {
				this.$emit("paginationEvt", {action, page: this.currentPage, rows: this.perpage});
			}
		}
	}
</script>

