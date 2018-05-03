<template>
    <div class="table-container edit-table">
        <!-- 表头-搜索条件部分 -->
        <div class="table-header" v-if="showQueryHeader" ref="queryForm">
			<div class="header-center">
				<div class="query-item">
					<div class="item" v-for="(it, index) in queryItems" :key="index">
							<span v-if="it.required">*</span>
							<template v-if="it.label">
								{{it.label}}：
							</template>
							<!-- 如果参数的对象类型为input，生成文本框元素 -->
							<input type="text" v-model="queryData[it.name]" :name="it.name" :placeholder="it.placeholder" :validType="it.validType" v-if="it.type === 'input'" />
							
							<!-- 如果参数的对象类型为select，生成下拉框元素 -->
							<select :name="it.name" v-model="queryData[it.name]" v-if="it.type === 'select'">
								<!--
								<option value="" disabled>-请选择-</option>
								-->
								<option :value="opt.val" v-for="opt in it.options" :key="opt.label">{{opt.label}}</option>
							</select>

					</div>
				</div>

				<div class="btn-container" v-if="isShowQueryBtn">
					<a href="javascript:;" class="btn" v-for="btn in queryBtns"
						:class="btn.cls"
						:key="btn.text"
						@click="onClickBtn(btn)">{{btn.text}}</a>
				</div>

			</div>

			<div class="header-right">
				<div class="btn-container">
					<a href="javascript:;" class="btn" v-for="btn in topRightBtns"
						:class="btn.cls"
						:key="btn.text"
						@click="onClickBtn(btn)">{{btn.text}}</a>
				</div>
			</div>
            <!-- 表格查询条件 -->
        </div>

        <!-- 表格内容 -->
		<div class="table-content" :style="[{'padding-top': showQueryHeader ? '45px' : 0}]">
			<!-- 表格操作按钮-->
			<div class="table-toolbar" v-if="title || toolbarBtns.length">
				<span class="table-title" v-if="title">{{title}}</span>
				<a href="javascript:;" class="btn" v-for="btn in toolbarBtns"
                    :key="btn.text"
                    :class="btn.cls"
                    @click="onClickBtn(btn)">{{btn.text}}</a>
			</div>

			<!-- 固定表头 -->
			<div class="table-fixedthead" v-if="fixedHead">
				<table :style="{'border-top-width': (title || toolbarBtns.length) ? '1px' : 0}">
					<thead>
						<!-- 表头部分 -->
						<tr>
							<!-- 复选框 -->
							<th style="width:40px;" v-if="showCheckbox">
								<div class="table-cell">
                                    <!--<input type="checkbox" :checked="isSelectedAll" @click="onClickSelectAll">-->
                                </div>
							</th>

							<th style="width:55px;" v-if="isShowRowNumber">
                                <div class="table-cell">行号</div>
                            </th>

							<th v-for="ceil in columns"
                                :key="ceil.title"
                                :class="ceil.cls"
                                :style="[{width: ceil.width ? ceil.width : 'auto'}]">
                                <div class="table-cell">
                                    {{ceil.title}}
                                </div>
                            </th>

							<th field="handle" :style="{width: operateColumnWidth + 'px'}" v-if="isHaveInlineBtn">
                                <div class="table-cell">操作</div>
                            </th>
						</tr>
					</thead>
				</table>
			</div>
			<!-- 表格内容 -->
			<div class="content">
				<table ref="tableElement">
					<thead>
						<!-- 表头部分 -->
						<tr>
							<!-- 复选框 -->
							<th style="width:40px;" v-if="showCheckbox">
                                <div class="table-cell">
								</div>
                            </th>
							
                            <th style="width:55px;" v-if="isShowRowNumber" >
                                <div class="table-cell">行号</div>
                            </th>

							<th v-for="ceil in columns"
                                :key="ceil.title"
                                :class="ceil.cls"
                                :style="[{width: ceil.width ? ceil.width : 'auto'}]">
                                <div class="table-cell">
                                    {{ceil.title}}
                                </div>
                            </th>
							
                            <th field="handle" :style="{width: operateColumnWidth + 'px'}" v-if="isHaveInlineBtn">
                                <div class="table-cell">操作</div>
                            </th>
						</tr>
					</thead>
					<tbody>
						<!-- 加载表格内容数据 -->
                        <tr v-for="(data, index) in showDatas" :key="data[idKey]" :class="{'row-editing': isRowBeEdit(data)}" @click="onClickRow(data)">
                            <td v-if="showCheckbox">
                                <div class="table-cell">
                                    <input type="checkbox" @click="onClickSelectCheckbox" :checked="isRowBeSelected(data)" />
                                </div>
                            </td>

                            <td v-if="isShowRowNumber">
                                <div class="table-cell">
                                    {{index + 1}}
                                </div>
                            </td>

                            <td v-for="column in columns"
                                :key="column.label"
                                :class="column.cls"
                                :style="[{width: column.width ? column.width : 'auto'}]">
                                <div class="table-cell">
									<input class="editor" v-if="isShowCellEditor(column, data)" v-model="data[column.field]"/>
									<span v-else-if="column.type==='checkbox'" class="status-cls"
										  :class="[{'disable-cls': data.status === 'D'}]"
										  @click="cellClickEvt(column, data)"></span>
									<span v-else
										  @click="cellClickEvt(column, data)"
										  v-html="column.isDropdown ? transformDropdownData(data[column.field],dropdownData[column.field]) : column.isDateTime ? dateFormatter(data[column.field],true) : data[column.field]"></span>
                                </div>
                            </td>

                            <td v-if="isHaveInlineBtn">
                                <div class="table-cell">
                                    <span class="span-btn" v-show="isShowInlineBtn(btn, data)" v-for="btn in inlineBtns"
                                         :key="btn.text"
                                         :class="[btn.cls, {disabled: !isBtnEnable(btn, data), 'icon-btn': btn.isOnlyIconBtn}]"
                                         @click="onClickBtn(btn, data)">
										 <i v-tooltip="btn.text" v-if="btn.isOnlyIconBtn" class="icon" :class="btn.icon" ></i>
										 <span v-else>{{btn.text}}</span>
                                    </span>
                                </div>
                            </td>
                        </tr>
						<!-- 无数据显示内容 -->
						<tr class="row-nodata" v-if="showDatas.length === 0">
							<td :colspan="columns.length + ((showCheckbox && isHaveInlineBtn) ? 3 : ((!showCheckbox && isHaveInlineBtn) || (showCheckbox && !isHaveInlineBtn)) ? 2 : 1)">
                                <div class="table-cell">没有数据！</div>
                            </td>
						</tr>

						<tr class="row-loadmore" v-if="isHaveMore">
							<td :colspan="columns.length + ((showCheckbox && isHaveInlineBtn) ? 3 : ((!showCheckbox && isHaveInlineBtn) || (showCheckbox && !isHaveInlineBtn)) ? 2 : 1)">
                                <div class="table-cell">
									<ls-button name="加载更多" @clickEvt="onClickLoadMore"></ls-button>
								</div>
                            </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	
	    <!-- 分页组件 -->
	    <div class="table-footer">
			<div class="btns">
				<input type="checkbox" :checked="isSelectedAll" @click="onClickSelectAll">
				<a href="javascript:;" class="btn" v-for="btn in batchBtns"
				   :key="btn.text"
				   :class="btn.cls"
				   @click="onClickBtn(btn)">{{btn.text}}</a>
			</div>
			<div class="paging">
				<ls-pagination
						v-if="pagination"
						:total="totalRows"
						:page="paginationPage"
						:rows="perpageCount"
						@paginationChange="paginationChange"></ls-pagination>
			</div>
		</div>
    </div>
</template>

<script>
    let defaultId = 1;
    import pagination from './Pagination.vue';

    export default {
        props: {
			isEnable: {
				type: Boolean,
				default: true
			},

            columns: {
                type: Array,
                required: true
            },

            datas: {
                type: Array,
                required: true
            },

            queryItems: {
                type: Array,
                default: () => []
            },

            dropdownParams: {
                type: String,
                default: ""
            },

            dropdownData: {
                type: Object,
                default: () => {}
            },

            showCheckbox: {
                type: Boolean,
                default: true
            },

            fixedHead: {
                type: Boolean,
                default: true
            },

            pagination: {
                type: Boolean,
                default: false
            },

            buttons: {
                type: Array,
                default: () => []
            },

            isShowRowNumber: {
                type: Boolean,
                default: true
            },

            idKey: {
                type: String,
                default: "id"
			},
			
			isHaveMore: {
				type: Boolean,
				default: false
			},

			title: {
				type: String,
				default: ''
			},

			isAllowOperate: {
				type: Function,
				default: () => true
			},

			isCustomBtnEnable: {
				type: Function
			},

			isCustomShowInlineBtn: {
				type: Function
			},

			isCustomShowEditor: {
			    type: Function
			},

			queryData: {
				type: Object,
				default: () => {}
			},

			paginationPage: {
				type: Number,
				default: 1
			},

			perpageCount: {
				type: Number,
				default: 10
			},

			totalRows: {
				type: Number,
				default: 0
			},
			
			operateColumnWidth: {
				type: Number,
				default: 80
			}
        },

        data() {
            return {
                showDatas: [],
				currentSelected: [],
				isSelectedAll: false,
                currentEditRow: null
            };
        },
	    
	    components: {
            'ls-pagination': pagination
	    },
	    
        computed: {
            queryBtns() {
                return this.buttons.filter((item) => item.position === "top");
			},
			
			topLeftBtns() {
				return this.buttons.filter((item) => item.position === "topLeft");
			},

			topRightBtns() {
				return this.buttons.filter((item) => item.position === "topRight");
			},

            toolbarBtns() {
                return this.buttons.filter((item) => item.position === "toolbar");
            },

            inlineBtns() {
                return this.buttons.filter((item) => item.position === "inline")
            },

            batchBtns() {
                return this.buttons.filter((item) => item.position === "bottom");
			},
			
			isShowTopLeftBtn() {
				return this.topLeftBtns.length > 0;
			},

			isShowTopRightBtn() {
				return this.topRightBtns.length > 0;
			},

            isShowQueryBtn() {
                return this.queryBtns.length > 0;
            },

            isShowToolbarBtn() {
                return this.toolbarBtns.length > 0;
            },

            isHaveInlineBtn() {
                return this.inlineBtns.length > 0;
            },

            hasRowBeEdit() {
                return this.currentEditRow !== null;
            },
	
	        showQueryHeader() {
            	return this.queryItems.length;
	        }
        },

		watch: {
			datas(currentValue) {
				this.isSelectedAll = false;
				this.currentSelected = [];
				this.updateShowDatas(currentValue);
			}
		},

		created() {
			this.updateShowDatas(this.datas);
		},

        methods: {
            getAllData() {
                let datas = JSON.parse(JSON.stringify(this.showDatas));

                datas.forEach((item) => delete item._frontIsEdit);

                return datas;
			},

            cellClickEvt(col, data) {
                this.$emit("buttonClick", {col, action: "cell", data});
			},
			updateShowDatas(datas) {
				let copyDatas = JSON.parse(JSON.stringify(datas)) || [];
				/*copyDatas.map(item => {
					this.setRowBeNotEdit(item);
				});*/
				copyDatas.forEach((item) => this.setRowBeNotEdit(item));
				this.showDatas = copyDatas;
			},

			onClickSelectAll() {
				if (this.isEnable) {
					this.isSelectedAll = !this.isSelectedAll;

					if (!this.isSelectedAll) {
						this.currentSelected = [];
					}
				}
			},

			onClickRow(data) {
				if (!this.isEnable) {
					return;
				}
				if (this.hasRowBeEdit && this.isRowBeEdit(data)) {
					return;
				}
				let dataId = this.getRowDataId(data);

				if (this.isSelectedAll) {
					this.currentSelected = this.showDatas.filter((item) => this.getRowDataId(item) !== dataId).
														  map((item) => this.getRowDataId(item));
				   this.isSelectedAll = false;
				   return;
				}

				if (this.isRowBeSelected(data)) {
					this.currentSelected = this.currentSelected.filter((item) => item !== dataId);
				} else {
					this.currentSelected.push(dataId);
				}
			},
			
			onClickSelectCheckbox(event) {
				event.preventDefault();
			},

            onClickBtn(btn, data) {
				if (!this.isEnable) {
					return;
				}
				
				if (btn.isEnableClick) {
					if (!btn.isEnableClick(btn, data)) {
						return;
					}
				}

				if (!this.isBtnEnable(btn, data)) {
					return;
				}

                switch (btn.type) {
                    case "new":
                        this.handleClickNewBtn(btn);
                        break;
                    case "save":
                        this.handleClickSaveBtn(btn);
                        break;
                    case "delete":
                        this.handleClickDeleteBtn(btn, data);
						break;
					case "edit":
					    this.handleClickEditBtn(btn, data);
					    break;
                    default:
					    this.defaultHandleClickBtn(btn, data);
                        break;
                }
			},
			
			defaultHandleClickBtn(btn, data) {
				if (btn.position === "inline") {
					this.$emit("buttonClick", {action: "default", btn, data});
				} else {
					this.$emit("buttonClick", {action: "default", btn, datas: this.getCurrentSelectedRows()})
				}
			},

            handleClickNewBtn(btn) {
				if (this.hasRowBeEdit) {
					let index = this.showDatas.indexOf(this.currentEditRow);
					this.$devops.toast.show(`第${index + 1}行数据正在编辑！`, "danger");
					return;
				}
                let data = this._buildEmptyData();

				this.setRowBeEdit(data);
                this.showDatas.unshift(data);
                this.currentEditRow = data;
                this.$emit("buttonClick", {action: "new", btn, data: this.currentEditRow});
			},
			
			handleClickEditBtn(btn, data) {
				if (this.hasRowBeEdit) {
					let index = this.showDatas.indexOf(this.currentEditRow);
					this.$devops.toast.show(`第${index + 1}行数据正在编辑！`, "danger");					
					return;
				}
				this.setRowBeEdit(data);
				this.currentEditRow = data;
			},

            handleClickSaveBtn(btn) {
				let editRow = this.currentEditRow;
				
				if (this.isAllowOperate("save", editRow)) {
					this.setRowBeNotEdit(editRow);
                    this.currentEditRow = null;
                    this.$emit("buttonClick", {action: "save", btn, data: editRow});
				}
            },

            handleClickDeleteBtn(btn, data) {
                let id = this.getRowDataId(data),
                    editId = null;

				if (this.hasRowBeEdit && 
				        (editId = this.getRowDataId(this.currentEditRow)) === id && 
						this.isCreatedRowData(this.currentEditRow)) {
					this.showDatas = this.showDatas.filter((item) => this.getRowDataId(item) !== editId);
					this.currentEditRow = null;
				} else {
					this.$emit("buttonClick", {btn, action: "delete", data});
				}
			},

			onClickLoadMore() {
				this.$emit("buttonClick", {action: "loadmore"});
			},
			
			isShowCellEditor(column, data) {
                if (this.isCustomShowEditor) {
                    let result = this.isCustomShowEditor(column, data);

                    if (result !== null) {
                        return result;
					}
				}
				return this.isRowBeEdit(data) ?
					(this.isCreatedRowData(data) ? column.isEditOn : column.isAllowUpdate) :
					false;
			},

			isRowBeSelected(data) {
				if (this.isSelectedAll) {
					return true;
				}
				let id = this.getRowDataId(data);

				return this.currentSelected.indexOf(id) !== -1;
			},

            isShowInlineBtn(btn, data) {
				if (this.isCustomShowInlineBtn) {
					let result = this.isCustomShowInlineBtn(btn, data);

					if (result !== null) {
						return result;
					}
				}
                if (btn.type === "edit") {
                    if (this.isRowBeEdit(data)) {
                        return false;                        
                    }
                    return true;
                }

                if (btn.type === "save") {
                    if (this.isRowBeEdit(data)) {
                        return true;
                    }
                    return false;
                }
                return true;
			},
			
			/**
			 * 判断行内按钮是否启用
			 * @param {object} btn
			 * @param {object} data
			 */
			isBtnEnable(btn, data) {
				if (this.isCustomBtnEnable) {
					let result = this.isCustomBtnEnable(btn, data);

					if (result !== null) {
						return result;
					}
				}
				return true;
			},

			isCreatedRowData(data) {
				let ids = this.datas.map((item) => this.getRowDataId(item)),
				    dataId = this.getRowDataId(data);

				return ids.indexOf(dataId) === -1;
			},

            isRowBeEdit(data) {
                return data._frontIsEdit === true; 
            },

            setRowBeNotEdit(data) {
                data._frontIsEdit = false;
            },

            setRowBeEdit(data) {
                data._frontIsEdit = true;
            },

			getCurrentSelectedRows() {
				return this.showDatas.filter((item) => this.isRowBeSelected(item));
			},

            getRowDataId(data) {
                return data[this.idKey];
            },

            _buildEmptyData() {
                let result = {
                    [this.idKey]: this._getDefaultId()
				};
				
				for (let i = 0, j = this.columns.length; i < j; ++i) {
					result[this.columns[i].field] = "";					
				}
                return result;
            },

            _getDefaultId() {
                return `_frontTableId_${defaultId++}`;
            },
	        transformDropdownData (value, datas) {
		        let label = '';
		        if (datas && datas.length) {
			        /* 遍历数据字典数据，得到相应的文本名称 */
			        datas.map(it => {
				        String(it.id) === String(value) && (label = it.text);
			        });
		        }
		        return label;
	        },
	        dateFormatter (date, flag) {
		        if (!date) {
			        return '';
		        }
		        /* 显示为日期时间格式传入flag，否则默认为日期格式 */
		        const curDate = (new Date(date)  == 'Invalid Date') ? new Date() : new Date(date);
		        const month = curDate.getMonth() < 9 ? ('0' + (curDate.getMonth() + 1)) : (curDate.getMonth() + 1);
		        const days = curDate.getDate() < 10 ? ('0' + curDate.getDate()) : curDate.getDate();
		        const hours = curDate.getHours() < 10 ? ('0' + curDate.getHours()) : curDate.getHours();
		        const minutes = curDate.getMinutes() < 10 ? ('0' + curDate.getMinutes()) : curDate.getMinutes();
		        const seconds = curDate.getSeconds() < 10 ? ('0' + curDate.getSeconds()) : curDate.getSeconds();
		
		        return (curDate.getFullYear() + '-' + month + '-' + days) + (flag ? (' ' + hours + ':' + minutes + ':' + seconds) : '');
	        },
	
	        paginationChange(data) {
				this.$emit('paginationChange',data);
	        },

			onClickTextRadioList(event) {
				this.$emit("toolbarEvent", {action: "radioTextList", checked: event.checked, data: event.data});
			}
        }

    };
</script>


<style lang="less">
  @border-color: #dcdcdc;
  @widget-horizontal-padding: 10px;
  @white: #fff;

	.touch() {
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
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
	.table-container {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid #dcdcdc;
		/*border-top: none;*/
		background: #fff;
		text-align: left;
		overflow: hidden;
		/* 带分页 */
		&.pagination {
			padding-bottom: 48px;
			table {
				tbody {
					tr {
						&:last-child {
							//border-bottom: none;
						}
					}
				}
			}
		}
		.table-header {
			position: absolute;
			width: 100%;
			height: 45px;
			padding: 10px 20px 6px;
			/*.border-radius-direction(@tl: 5px,@tr: 5px);*/
			background: #CDDBE8;
			color: #999;
			z-index: 2;
			&:after {
				display: table;
				content: '';
				clear: both;
			}
			.query-item {
				float: left;
				.item {
					display: inline-block;
					label {
						position: relative !important;
						margin-right: 30px;
						font-weight: 900;
						font-size: 14px;
						line-height: 1.5;
						span,i {
							margin-right: 5px;
							color: #FF0000;
						}
					}
					input,select {
						width: 120px;
					}
				}
			}
			/* 右侧刷新下拉框 */
			.refresh-container {
				float: right;
				select, .dropdown {
					width: 120px;
				}
			}
			/* 按钮组 */
			.btn-container {
				display: inline-block;
				.btn {
					width: 100px;
					height: 24px;
					line-height: 24px;
					font-weight: 900;
					color: #fff;
					&:not(:last-child) {
						margin-right: 60px;
					}
				}
			}
		}
		/* 操作按钮区域 */
		.table-toolbar {
			padding: 20px 0;
			min-height: 50px;
			background: #EDF2F8;
			.table-title {
				float: left;
				line-height: 30px;
				font-size: 14px;
			}
		}

		.icon {
			font-family: "iconfont" !important;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		.table-content {
			position: relative;
			height: 100%;
			border-top: none;
			.border-radius-direction(@bl: 4px,@br: 4px);
			background: #fff;
			/* 固定表头 */
			.table-fixedthead {
				position: absolute;
				width: 100%;
				z-index: 2;
				table {
					border-width: 1px 0 1px 0;
					thead {
						background: #F5F6FA;
						th {
							color: #999;
							font-weight: normal;
						}
					}
				}
			}
			.table-toolbar {
				padding: 10px 0 10px 20px;
				min-height: 50px;
				.btn {
					margin-right: 20px;
				}
			}
			.content {
				height: 100%;
				overflow-y: auto;
				table {
					border: none;
					&.table-header {
						.border-radius-direction(@tl: 4px,@tr: 4px);
						overflow: hidden;
						thead {
							background: #CDDBE8;
							color: #212E40;
						}
					}
					/* 表格行内容描述 */
					.content-description {
						position: relative;
						padding-left: 46px;
						color: #333;
						&:before {
							content: '一';
							display: inline-block;
							position: absolute;
							top: 12px;
							left: 20px;
							width: 16px;
							height: 16px;
							line-height: 16px;
							text-align: center;
							border-radius: 2px;
							color: #fff;
							font-weight: 900;
							background: #CDDBE8;
						}
						.color-warning {
							color: #FF8419;
						}
					}
					thead,.tbody {
						tr {
							td, th {
								div[contenteditable="true"] {
									background: #fff;
								}
								input[type=checkbox] {
									margin: 0 auto;
								}
							}
						}
					}
					thead {
						background: #F5F6FA;
						font-weight: 900;
						tr {
							th, td {
								color: #333;
							}
						}
					}
					tbody {
						tr {
							&.row-editing {
								background: #cce2ff;
								td {
									.table-cell {
										.editor {
											width: 90%;
											height: 35px;
											padding-left: 10px;
											line-height: 35px;
											border-width: 0;
											outline: none;
										    background: #fff;
										}

									}
								}
							}

							&.row-loadmore {
								.table-cell {
									text-align: center;
								}

								&:hover {
									background: transparent;
									text-align: center;
								}
							}
							
							td {
								.table-cell {
									.status-cls {
										display: block;
										width: 60px;
										height: 20px;
										margin-top: 10px;
										line-height: 20px;
										border: solid 1px #dcdcdc;
										padding: 2px;
									}
									.span-btn {
										color: #62a5ff;
										text-decoration: underline;
										cursor: pointer;
										&:not(:last-child) {
											margin-right: 5px;
										}

										&.disabled {
											text-decoration: none;
											color: #ddd;
										}

										&.icon-btn {
											color: #666;
											font-size: 16px;
											text-decoration: none;
											 
											 & + .icon-btn {
												 margin-left: 16px;
											 }
										}
									}

								}
							}
						}
					}
				}
			}
		}
	}
	.edit-table.table-container {
		@btn-primary-color: #62a5ff;
		@widget-height: 30px;

		.table-header {
			height: 45px;
			padding: 0;
			line-height: 45px;

			.header-right {
				position: absolute;
				right: 20px;
				top: 0;
				bottom: 0;
			}

			.header-left {
				position: absolute;
				left: 20px;
				top: 0;
				bottom: 0;
			}

			.header-center {
				height: 100%;
				text-align: center;

				.btn-container {
					margin-left: @widget-horizontal-padding;
				}
			}

			.widget-container {
				height: 100%;
			}

			.query-item {
				display: inline-block;
				height: 100%;
				float: none;

				.item {
					height: 100%;

					label {
						line-height: inherit;
					}
					.ls-input {
						display: inline-block;
						input {
							width: 160px;
						}
					}

					select {
						height: @widget-height;
						border-width: 0;
					}
					input[type="text"] {
						width: 160px;
						height: @widget-height;
						padding-left: 10px;
						border: none;
						-webkit-border-radius: 2px;
						border-radius: 2px;
						outline: none;
					}

					& + .item {
						margin-left: @widget-horizontal-padding;
					}
				}
			}

			.btn-container {
				.btn {
					height: @widget-height;
					line-height: @widget-height;
					margin-right: 0 !important;
					border-width: 0;
					&.mini {
						width: 60px;
					}
					& + .btn {
						margin-left: @widget-horizontal-padding;
					}
				}
			}
		}

		table {
			width: 100%;
			border-spacing: 0;
			border-collapse: collapse;
			background-color: transparent;
			border: 1px solid @border-color;
			table-layout: fixed;
			td,
			th {
				text-align: left !important;
				&[field=lineIndex] {
					width: 60px;
				}
				height: 40px;
				line-height: 40px;
				.table-cell {
					padding-left: 15px;
					width: 100%;
					height: 40px;
					line-height: 40px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					/* 表格中的按钮样式 */
					.table-btn {
						.touch;
						&:not(:last-child) {
							margin-right: 10px;
						}
						/* 修改按钮 */
						&.table-btn-edit {
							color: #53D3E0;
						}
						/* 删除按钮 */
						&.table-btn-delete {
							color: #F47564;
						}
					}
				}
			}
			thead {
				font-size: 14px;
				background: #CDDBE8;
				th {
					color: #3D5571;
				}
			}
			tbody {
				font-size: 12px;
				background: @white;
				tr {
					border-top: 1px solid #f5f5f5;
					&.selected-row {
						background: #cce2ff;
					}
					&:hover {
						background: #f1f7ff;
					}
					/* 无数据时的样式 */
					&.row-nodata {
						.table-cell {
							text-align: center;
							color: #F47564;
						}
					}
					td {
						color: #333;
						font-weight: 400;
						.warning {
							color: #FF8419
						}
					}
				}
			}
		}

		input[type="checkbox"] {
			position: relative;
			&:after {
				position: absolute;
				top: -1px;
				left: -1px;
				content: '';
				display: inline-block;
				width: 20px;
				height: 20px;
				border: 1px solid @border-color;
				background: @white;
				.border-radius(0);
				text-align: center;
			}
			&:checked{
				&:after {
					border-color: #407dd1;
				}
				&:before {
					position: absolute;
					content: '\e646';
					left: -1px;
					z-index: 100;
					width: 20px;
					height: 20px;
					line-height: 20px;
					font-size: 12px;
					font-weight: 900;
					color: #407dd1;
					text-align: center;
					font-family: "iconfont" !important;
					font-style: normal;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
			}

			&:checked,
			&:checked:hover {
				&:after {
					background: #407dd1;
				}
				&:before {
					color: @white;
				}
			}
			&:hover {
				&:after {
					border-color: #407dd1;
				}
				&:before {
					color: #407dd1;
				}
			}
		}
		.btn {
			display: inline-block;
			width: 120px;
			height: @widget-height;
			line-height: @widget-height;
			font-size: 1.2rem;
			text-align: center;
			.border-radius(2px);
			text-decoration: none;
			border: 1px solid @border-color;
			background: #F0F0F0;
			color: #666;
			.touch;
			/* 蓝色按钮 */
			&.active,
			&:hover {
				background: @btn-primary-color;
				border-color: @btn-primary-color;
				color: @white;
			}
			&.btn-search {
				background: @btn-primary-color;
				border-color: @btn-primary-color;
				color: @white;
			}
			&.btn-add {
				position: relative;
				background: @btn-primary-color;
				border-color: @btn-primary-color;
				color: @white;
			}

			&.btn-delete,
			&.btn-delete:hover {
				background: #F47564;
				border-color: #F47564;
				color: @white;
			}
		}
	}

	.table-footer {
		height: 48px;
		overflow: hidden;
		>.paging {
			position: relative;
			width: 50%;
			height: 48px;
			float: right;
			.pagination-container {
				height: 48px;
				line-height: 48px;

				.pagination-content {
					height: 48px;

					.pagination-msg,
					.pagination {
						height: 100%;
						line-height: 48px;
					}

					.pagination {
						padding-top: 8px;
					}
				}
			}
		}
		>.btns {
			float: left;
			width: 50%;
			padding: 4px 0 4px 15px;
			border-top: solid 1px #dcdcdc;
			height: 48px;
			line-height: 48px;
			background: #F5F6FA;
			>.btn {
				width: auto;
				margin-left: 15px;
				padding: 0 10px!important;
				color: #333!important;
				background-color: rgb(240, 240, 240);
				&:hover {
					color: #333!important;
				    background-color: rgb(240, 240, 240);
					border-color: #dcdcdc;
				}
			}
		}
	}
</style>