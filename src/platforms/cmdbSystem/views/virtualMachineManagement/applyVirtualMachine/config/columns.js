export default [
  {
    label: '数量',
    prop: 'num',
    width: 75,
    className: 'text-center',
    sortable: 'custom',
  },
  {
    label: 'IDC',
    prop: 'idc',
    width: 90,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '系统',
    prop: 'os',
    width: 150,
    className: 'text-center',
    sortable: 'custom',
  },
  {
    label: '环境',
    prop: 'env',
    width: 70,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '资源类型',
    prop: 'resource_type',
    width: 120,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '业务名称',
    prop: 'app',
    width: 150,
    className: 'text-center',
    sortable: false,
    // fixSimpleText: '查看详情',
    formatter(row, column) {
      return row[column.prop].map((item) => item.name);
    },
  },
  {
    label: '配置',
    prop: 'config',
    width: 180,
    className: 'text-center',
    sortable: false,
    render(h, scope, that) {
      const { row, column: { property } } = scope;
      let txt = 'CPU核数：cpu 核, 内存大小：memory GB, 硬盘大小：disks GB';
      if (!row[property] && Object.keys(row[property]).length !== 3) {
        return '--';
      }
      const { cpu, memory, disks } = row[property];
      Object.keys({ cpu, memory, disks }).forEach((key) => {
        txt = txt.replace(key, row[property][key]);
      });
      return h('div', { class: 'd-flex flex-column justify-center' }, [
        ...txt.split(',').map((labelTxt) => <span>{labelTxt}</span>),
      ]);
    },
  },
  {
    label: '结果',
    prop: 'result',
    width: 90,
    className: 'text-center',
    sortable: false,
    columnDefine: true,
    fixSimpleText: '查看详情',
    formatter(row, col) {
      const [first] = row[col.prop];
      return Object.keys(first).map((key) => `${key}: ${first[key]}`);
    },
  },
  {
    label: '状态',
    prop: 'status_display',
    width: 90,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '下一步处理',
    prop: 'next_dealStatus',
    width: 140,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '创建时间',
    prop: 'create_time',
    width: 140,
    className: 'text-center',
    sortable: 'custom',
  },
  {
    label: '更新时间',
    prop: 'update_time',
    width: 140,
    className: 'text-center',
    sortable: 'custom',
  },
  {
    label: '备注',
    prop: 'comment',
    className: 'text-center',
    sortable: 'custom',
  },
  {
    label: '申请人',
    prop: 'proposer',
    width: 120,
    className: 'text-center',
    sortable: false,
  },
  {
    label: '操作人',
    prop: 'operator',
    width: 120,
    className: 'text-center',
    sortable: false,
  },
];
