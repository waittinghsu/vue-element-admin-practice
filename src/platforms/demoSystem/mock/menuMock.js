const menuMock = [
  {
    id: 24,
    name: '字典模块管理',
    key1: 'setting-manage',
    key2: '',
    sort: 8,
    type: 1,
    parent: null,
    children:
      [{
        id: 27, name: '配置管理-字典模块管理', key1: 'dictionaries-manage', key2: '', sort: 1, type: 1, parent: 24, children: [],
      },
      ],
  },
  {
    id: 1,
    name: '平台管理',
    key1: 'platform-manage',
    key2: '',
    sort: 9,
    parent: null,
    children: [
      {
        id: 3, name: '菜单管理', key1: 'platform-menus', key2: '', sort: 2, parent: 1, children: [],
      },
      {
        id: 9,
        name: '权限管理',
        key1: 'platform-authority',
        key2: '',
        sort: 1,
        parent: 1,
        children: [
          {
            id: 14,
            name: '角色管理',
            key1: 'authority-roles',
            key2: '',
            sort: 1,
            parent: 9,
            children: [
              {
                id: 16, name: '新增', key1: 'operational-insert', key2: '', sort: 1, parent: 14, children: [],
              },
              {
                id: 17, name: '批量删除', key1: 'operational-batch-delete', key2: '', sort: 2, parent: 14, children: [],
              },
              {
                id: 18, name: '编辑', key1: 'action-edit', key2: '', sort: 3, parent: 14, children: [],
              },
              {
                id: 19, name: '删除', key1: 'action-delete', key2: '', sort: 3, parent: 14, children: [],
              }],
          },
          {
            id: 15,
            name: '权限分配',
            key1: 'authority-permissions',
            key2: '',
            sort: 2,
            parent: 9,
            children: [
              {
                id: 28, name: '新增', key1: 'operational-insert', key2: '', sort: 1, parent: 15, children: [],
              },
              {
                id: 29, name: '批量删除', key1: 'operational-batch-delete', key2: '', sort: 2, parent: 15, children: [],
              },
              {
                id: 34, name: '编辑', key1: 'action-edit', key2: '', sort: 3, parent: 15, children: [],
              },
              {
                id: 35, name: '删除', key1: 'action-delete', key2: '', sort: 3, parent: 15, children: [],
              }],
          },
        ],
      }],
  },
  {
    id: 36,
    key1: 'demo-tools',
    name: '工具展示 (菜单)',
    parent: null,
    children:
      [
        {
          id: 37, key1: 'svg-demo', name: 'icon查看 (菜单)', parent: 36, children: [],
        },
        {
          id: 38, key1: 'default-page', name: '基本页面展示 (菜单)', parent: 36, children: [],
        },
        {
          id: 39, key1: 'color-demo', name: '色碼查看 (菜单)', parent: 36, children: [],
        },
        {
          id: 40, key1: 'typography-demo', name: '樣式查看 (菜单)', parent: 36, children: [],
        },
        {
          id: 124,
          key1: 'tab-demo',
          name: 'TAB展示 (菜单)',
          parent: 36,
          children:
            [
              { key: 'tab1', name: 'tab1' },
              { key: 'tab2', name: 'tab2' },
              { key: 'tab3', name: 'tab3' },
              { key: 'tab4', name: 'tab4' },
            ],
        },
      ],
  },
];
// eslint-disable-next-line
// eslint-disable-next-line
const flattenData = [
  {
    id: 24, name: '字典模块管理', key1: 'setting-manage', key2: '', sort: 8, type: 1, parent: null, children: [],
  },
  {
    id: 27, name: '配置管理-字典模块管理', key1: 'dictionaries-manage', key2: '', sort: 1, type: 1, parent: 24, children: [],
  },
  {
    id: 125, key1: 'setting-anager', name: '配置管理 (菜单)', parent: null,
  },
  {
    id: 126, key1: 'setting-module', name: '模塊管理 (菜单)', parent: 125, children: [],
  },
  {
    id: 127, key1: 'setting-dictionary', name: '字典管理 (菜单)', parent: 127, children: [],
  },
  {
    id: 5, key1: 'platform-manage', name: '平台管理 (菜单)', parent: null,
  },
  {
    id: 16, key1: 'platform-authority', name: '权限管理 (菜单)', parent: 5,
  },
  {
    id: 28, key1: 'authority-roles', name: '角色管理 (菜单)', parent: 16,
  },
  {
    id: 75, key1: 'operation', name: '操作 (栏位)', parent: 28, children: [],
  },
  {
    id: 76, key1: 'operational-insert', name: '新增按钮 (按钮)', parent: 28, children: [],
  },
  {
    id: 77, key1: 'editButton', name: '编辑按钮 (按钮)', parent: 28, children: [],
  },
  {
    id: 78, key1: 'deleteButton', name: '刪除按鈕 (按钮)', parent: 28, children: [],
  },
  {
    id: 79, key1: 'operational-batch-delete', name: '批量刪除按鈕 (按钮)', parent: 28, children: [],
  },
  {
    id: 29, key1: 'authority-permissions', name: '权限分配 (菜单)', parent: 16,
  },
  {
    id: 80, key1: 'operation', name: '操作 (栏位)', parent: 29, children: [],
  },
  {
    id: 82, key1: 'operational-insert', name: '新增按钮 (按钮)', parent: 29, children: [],
  },
  {
    id: 83, key1: 'action-edit', name: '编辑按钮 (按钮)', parent: 29, children: [],
  },
  {
    id: 84, key1: 'action-delete', name: '刪除按鈕 (按钮)', parent: 29, children: [],
  },
  {
    id: 85, key1: 'operational-batch-delete', name: '批量刪除按鈕 (按钮)', parent: 29, children: [],
  },
  {
    id: 17, key1: 'platform-menus', name: '菜单管理 (菜单)', parent: 5, children: [],
  },
  {
    id: 20, key1: 'platform-audits', name: '操作审计 (菜单)', parent: 5, children: [],
  },
  {
    id: 36, key1: 'demo-tools', name: '工具展示 (菜单)', parent: null,
  },
  {
    id: 37, key1: 'svg-demo', name: 'icon查看 (菜单)', parent: 36, children: [],
  },
  {
    id: 38, key1: 'default-page', name: '基本页面展示 (菜单)', parent: 36, children: [],
  },
  {
    id: 124, key1: 'tab-demo', name: 'TAB展示 (菜单)', parent: 36,
  },
  { key: 'tab1', name: 'Arthur' },
  { key: 'tab2', name: 'Jerome' },
  { key: 'tab3', name: 'Frank' },
  { key: 'tab4', name: 'Omega' },
];
export { flattenData };
export default menuMock;
