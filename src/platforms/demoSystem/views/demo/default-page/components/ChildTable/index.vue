<template>
  <div class="pa-2">
    <sa-table
      ref="saSubTable"
      class="w-fit-content"
      header-cell-class-name="green--bg lighten-4 grey--text text--darken-2"
      :table-select-rows.sync="tableSelectRows"
      :table-name="tableName"
      :tb-data="tbDataComputed"
      :columns="columns"
      :height="getTableHeight"
      :page-sizes="[10, 20]"
      @tbChange="tbChange"
    >
      <!--操作处理 start--><!-- v-if="$permission.check('action')"-->
      <template #operation>
        <el-table-column label="操作" class-name="col-operate text-center" min-width="120px" width="200px">
          <template #default="{ row }">
            <div class="d-flex flex-row justify-center align-center">
              <sa-permission-button-group :row="row" :permission-list="permissionList" @handleButtonClick="handleActionBtnEvent" />
            </div>
          </template>
        </el-table-column>
      </template>
      <!--操作处理 end-->
    </sa-table>
  </div>
</template>

<script>
import SaTable from '@/components/SaTable/index.vue';
import columns from '../../config/subColumns';
import MiPage from '@/platforms/bupSystem/mixin/MiPage';
import saPermissionButtonGroup from '@/components/SaButtonGroup/SaPermissionButtonGroup/index.vue';

export default {
  name: 'ChildTable',
  components: {
    saPermissionButtonGroup,
    SaTable,
  },
  mixins: [MiPage],
  props: {
    rowData: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      tableName: 'subTable',
      tbData: {
        result: [], page: 1, page_size: 10, total: 1, page_total: 1,
      },
      columns,
      permissionList: [
        { key: 'action-edit', name: '编辑', bind: { type: 'primary', disabled: (row) => !this.isEdit(row) } },
        {
          key: 'action-delete', name: '删除', popover: true, bind: { type: 'danger', disabled: (row) => !this.isEdit(row) },
        },
        { key: 'action-active', name: '详情', bind: { type: 'info', disabled: (row) => !this.isEdit(row) } },
        {
          key: 'action-active',
          name: '启用',
          bind: { type: 'success', disabled: (row) => !this.isEdit(row) },
        },
        {
          key: 'action-pause',
          name: '暂停',
          bind: {
            className: 'pink--bg lighten-4 pink--border pink--hover hover--lighten-1 pink--text text--darken-3 pink--text--hover hover--text--lighten-5',
            type: 'primary',
            disabled: (row) => !this.isEdit(row),
          },
        },
        {
          key: 'action-retry',
          name: '重试',
          bind: {
            className: 'amber--bg lighten-5 amber--border amber--hover hover--darken-2 amber--text text--darken-4 amber--text--hover hover--text--lighten-5',
            type: 'primary',
            disabled: (row) => !this.isEdit(row),
          },
        },
      ],
      offsetHeight: 0,
      mock: [
        ...Array.from({ length: 50 }, (item, index) => (
          {
            name: `demoTable${index}`,
            update_time: '2023-03-23',
            create_time: '2023-03-23',
            boolean: true,
            object: { testSuccess: true, testFail: false },
            array: ['omega, Joe', 'Jerome, Stark', 'Targaryen March'],
          }
        )),
      ],
    };
  },
  computed: {
    tbDataComputed() {
      const {
        page, page_size, total, page_total,
      } = this.tbData;
      const { omega: data = [...this.mock] } = this.rowData || {};
      const startPage = ((page - 1) * page_size);
      return {
        result: data.slice(startPage, (page * page_size)) || [], page, page_size, total, page_total,
      };
    },
    getTableHeight() {
      const base = 37;
      return this.offsetHeight + base;
    },
  },
  created() {
    this.getList();
  },
  mounted() {
    this.refreshTableHeight();
  },
  methods: {
    getList() {
      const { omega: data = [...this.mock] } = this.rowData || {};
      const { page_size } = this.tbData;
      const total = data.length;
      const page_total = Math.ceil(total / page_size);
      Object.assign(this.tbData, { total, page_total });
    },
    handleActionEdit({ row }) {
      this.$emit('handleSubEvent', { funcName: 'handleSubEdit', row });
    },
    handleActionDelete({ row: { id } }) {
      this.$emit('handleSubEvent', { funcName: 'handleSubDelete', id });
    },
    tbChange(data) {
      const { pagination: { page, limit: page_size } } = data;
      Object.assign(this.tbData, { page, page_size });
      this.refreshTableHeight();
    },
    isEdit(row) {
      return !!row;
    },
    /**
     * 延遲取得table 高度
     */
    refreshTableHeight() {
      setTimeout(() => {
        this.offsetHeight = this.$refs.saSubTable?.$el?.querySelector('table.el-table__body tbody')?.offsetHeight || 100;
      }, 1); // timeout 時間必須比父層小 比子層大
    },
  },
};
</script>
