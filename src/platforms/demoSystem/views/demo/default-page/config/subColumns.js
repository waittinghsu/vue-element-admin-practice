export default [
  {
    label: '欄位名稱',
    // renderHeader() {
    //   return (<span>{this.$t('g_btn_search')}</span>);
    // },
    prop: 'name',
    width: 240,
    className: 'text-center',
    sortable: 'custom', // 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
    // formatter() {
    //   return { omega: this.$t('g_btn_search') };
    // },
    render(h, scope, that) {
      const { row, column } = scope;
      return h(
        'div',
        { class: 'd-flex flex-column' },
        [
          h('el-button', { class: ['mb-3', 'mr-2'], props: { type: 'danger', plain: true } }, row[column.property]),
        ],
      );
    },
  },
  {
    label: '创建时间',
    prop: 'create_time',
    // formatter: (row, column) => dateTimeFormat(row[column.prop]),
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '最后更新时间',
    prop: 'update_time',
    // formatter: (row, column) => dateTimeFormat(row[column.prop]),
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '陣列',
    prop: 'array',
    // formatter: (row, column) => dateTimeFormat(row[column.prop]),
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '布林',
    prop: 'boolean',
    // formatter: (row, column) => dateTimeFormat(row[column.prop]),
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '物件',
    prop: 'object',
    // formatter: (row, column) => dateTimeFormat(row[column.prop]),
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '状态',
    prop: 'enable',
    // width: 200,
    className: 'text-center',
    sortable: false,
    columnDefine: true,
  },
];
