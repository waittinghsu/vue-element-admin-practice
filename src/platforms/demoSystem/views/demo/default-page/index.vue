<template>
  <div class="app-container">
    <com-search :list-query="listQuery" :choices="choices" :height.sync="searchHeight" @search="handleSearch" />
    <com-operational :list-query="listQuery" :height.sync="operationHeight" @handleOperationalBtnEvent="handleOperationalBtnEvent" />
    <sa-table
      class="mt-5"
      :check-selectable="checkSelectable"
      :table-select-rows.sync="tableSelectRows"
      :tb-data="tbData"
      :selection="true"
      :columns="columns"
      :table-name="tableName"
      :expand="true"
      :height="tbHeight"
      @tbChange="tbChange"
    >
      <!--      expand="true" 時使用-->
      <template #expand>
        <el-table-column type="expand">
          <template #default="{ row }">
            <child-table :row-data="row" />
          </template>
        </el-table-column>
      </template>
      <!--      <template slot="expand">-->
      <!--        <el-table-column type="expand">-->
      <!--          <template #default="{ row }">-->
      <!--            <sa-expand-row :columns="columns" :row="row" />-->
      <!--          </template>-->
      <!--        </el-table-column>-->
      <!--      </template>-->

      <!--例外外字段处理 start-->
      <template #col-enable="{col}">
        <el-table-column :label="col.label" v-bind="col">
          <template #default="{ row }">
            <span>{{ row[col.prop] }}例外外字段处理</span>
          </template>
        </el-table-column>
      </template>
      <!--例外外字段处理 end-->

      <!--操作处理 start--><!-- v-if="$permission.check('action')"-->
      <template #operation>
        <el-table-column label="操作" class-name="col-operate text-center" min-width="120px" width="200px">
          <template #default="{ row }">
            <div class="d-flex flex-row justify-center align-center">
              <sa-permission-button-group :row="row" :permission-list="permissionList" @handleButtonClick="handleActionBtnEvent" />
              <!--              <el-button type="primary" size="mini" @click="handleEdit(row.id)">编辑</el-button>-->
              <!--              <sa-popover-dialog :disabled="!isEdit(row)" @confirm="handleDelete(row.id)">-->
              <!--                <template slot="reference">-->
              <!--                  <el-button size="mini" type="danger" :disabled="!isEdit(row)">删除</el-button>-->
              <!--                </template>-->
              <!--              </sa-popover-dialog>-->
            </div>
          </template>
        </el-table-column>
      </template>
      <!--操作处理 end-->
    </sa-table>
    <edit-dialog ref="editDialog" :choices="choices" @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import ComSearch from './components/ComSearch.vue';
import ComOperational from './components/ComOperational.vue';
import EditDialog from './components/EditDialog.vue';
import ChildTable from './components/ChildTable';
import columns from './config/columns';
import SaTable from '@/components/SaTable/index.vue'; // mark-table直接用这个
import saPermissionButtonGroup from '@/components/SaButtonGroup/SaPermissionButtonGroup/index.vue';
// import SaPopoverDialog from '@/components/SaPopoverDialog';
// import SaExpandRow from '@/components/SaExpandRow';
import MiPage from '@/platforms/demoSystem/mixin/MiPage';

export default {
  name: 'DefaultPage',
  components: {
    ComSearch,
    ComOperational,
    EditDialog,
    ChildTable,
    SaTable,
    saPermissionButtonGroup,
    // SaPopoverDialog,
    // SaExpandRow,
  },
  mixins: [MiPage],
  data() {
    return {
      /** 注意有 MiPage mixins 變數 * */
      tableName: 'demoTable',
      columns,
      tbData: {
        result: [
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
      },
      initListQuery: {
        /** MiPage 已設定 */
      },
      choices: {},
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
    };
  },
  computed: {
    /** 注意有 MiPage mixins computed * */
    tabCols() {
      return this.columns;
    },
  },
  created() {
    this.getChoices();
    this.getList();
  },
  methods: {
    /** 注意有 MiPage mixins methods * */
    getList() {},
    getChoices() {},
    /** 注意 handleSearch 為 MiPage mixins  * */
    handleInsertShow() {
      this.$refs.editDialog.show({ type: 'ADD', row: {} });
    },
    handleActionEdit({ row: { id } }) {
      this.$refs.editDialog.show({ type: 'EDIT', row: {} });
    },
    handleActionDelete({ row: { id } }) {},
    handleBatchDelete() {
      // getTableSelectedRows 參考mixins
      function batchDelete() {
        // const data = {
        //   id: this.getTableSelectedRows,
        // };
        // deleteAccountUsersBatch(data).then(() => {
        //   this.getList();
        // });
      }
      this.selectorConfirmEvent({
        callback: batchDelete.bind(this),
        eventText: '删除',
      });
    },
    handleSubmit({ data, type }) {
      console.log(type, data);
      switch (type) {
        case 'ADD':
          this.getList();
          this.$refs.editDialog.hide();
          break;
        case 'EDIT':
          this.getList();
          this.$refs.editDialog.hide();
          break;
        default:
          break;
      }
    },
    checkSelectable(row) {
      return this.isEdit(row);
    },
    isEdit(row) {
      return !!row;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
