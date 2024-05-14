<template>
  <div class="app-container">
    <com-search v-loading="loadingFlag.comSearch" :list-query="listQuery" :choices="choices" :height.sync="searchHeight" @search="handleSearch" />
    <com-operational
      :list-query="listQuery" :height.sync="operationHeight"
      :columns-visible.sync="columnsVisible" :save-column="saveColumn"
      :columns="columns" :clear-column="clearColumn"
      @handleOperationalBtnEvent="handleOperationalBtnEvent"
    />
    <sa-table
      class="mt-5"
      :check-selectable="checkSelectable"
      :table-select-rows.sync="tableSelectRows"
      :tb-data="tbData"
      :selection="true"
      :columns="columns"
      :visible-cols="columnsVisible"
      :table-name="tableName"
      :expand="false"
      :height="tbHeight"
      :columns-limit="columns.length"
      @tbChange="tbChange"
    >
      <!--      expand="true" 時使用-->
      <!--      <template #expand>-->
      <!--        <el-table-column type="expand">-->
      <!--          <template #default="{ row }">-->
      <!--            <sa-expand-row :columns="columns" :row="row" />-->
      <!--          </template>-->
      <!--        </el-table-column>-->
      <!--      </template>-->

      <!--結果 start-->
      <template #col-result="{col}">
        <el-table-column :label="col.label" v-bind="col">
          <template #default="{ row }">
            <el-popover v-if="row[col.prop] && row[col.prop].length > 0" trigger="hover" popper-class="sa-popper-darken">
              <div class="d-flex flex-column pa-2 overflow-y-scroll result-column">
                <div v-for="(item, index) in row[col.prop]" :key="`${row.id}_${index}`" class="d-flex flex-column border-sm grey--border rounded-lg pa-4">
                  <div v-for="(txt, txtIndex) in formatResult(item)" :key="`${row.id}_${index}_${txtIndex}`">
                    <label for="">{{ txt }}</label>
                    <el-divider v-if="txtIndex === 0" class="mt-1 mb-2" />
                  </div>
                </div>
              </div>
              <span slot="reference" class="light-blue--text text--accent-5">{{ row[col.prop].length }}项结果</span>
            </el-popover>
            <label v-else>--</label>
          </template>
        </el-table-column>
      </template>
      <!--例外外字段处理 end-->

      <!--操作处理 start-->
      <template #operation>
        <el-table-column label="操作" class-name="col-operate text-center" fixed="right" width="230px">
          <template #default="{ row }">
            <div class="d-flex flex-row justify-center align-center">
              <sa-permission-button-group :row="row" use-permission :permission-list="permissionList" @handleButtonClick="handleActionBtnEvent" />
            </div>
          </template>
        </el-table-column>
      </template>
      <!--操作处理 end-->
    </sa-table>
    <edit-dialog ref="editDialog" :choices="choices" @handleSubmit="handleSubmit" @getSettingChoices="handleOperationalBtnEvent" />
  </div>
</template>

<script>
import {
  getVirtualassetsApplyforvms, getVirtualassetsApplyforvmsGetChoices, getVirtualassetsApplyforvmsById,
  postVirtualassetsApplyforvmsAutoCalculate, postVirtualassetsApplyforvmsCancel, postVirtualassetsApplyforvmsApplyAffirm,
  postVirtualassetsApplyforvmsRegisterCobbler, postVirtualassetsApplyforvms, putVirtualassetsApplyforvmsById,
} from '@/platforms/cmdbSystem/apiService/virtualMachineManagement/applyVirtualMachine';
import ComSearch from './components/ComSearch.vue';
import ComOperational from './components/ComOperational.vue';
import EditDialog from './components/EditDialog.vue';
import columns from './config/columns';
import SaTable from '@/components/SaTable/index.vue'; // mark-table直接用这个
import saPermissionButtonGroup from '@/components/SaButtonGroup/SaPermissionButtonGroup/index.vue';
// import SaPopoverDialog from '@/components/SaPopoverDialog';
// import SaExpandRow from '@/components/SaExpandRow';
import MiPage from '@/platforms/cmdbSystem/mixin/MiPage';

export default {
  name: 'ApplyVirtualMachine',
  components: {
    ComSearch,
    ComOperational,
    EditDialog,
    SaTable,
    saPermissionButtonGroup,
    // SaPopoverDialog,
    // SaExpandRow,
  },
  mixins: [MiPage],
  data() {
    return {
      /** 注意有 MiPage mixins 變數 * */
      tableName: 'applyVirtualMachine',
      columns,
      tbData: {
        result: [],
      },
      initListQuery: {
        /** MiPage 已設定 */
        idc: undefined,
        env: undefined,
        config: undefined,
        status: undefined,
        search: undefined,
      },
      choices: {
        status: [],
        app: [],
        idc: [],
        env: [],
        subnets: [],
        os: [],
        flavor: [],
        initenv: [],
        datastore: [],
        settingChoices: {},
      },
      permissionList: [
        {
          key: 'action-create',
          name: '创建',
          popover: true,
          popBind: { title: '创建', popoverClass: 'sa-popper-dialog theme-blue' },
          bind: { type: 'success', plain: true, disabled: (row) => row.status !== 3 },
        },
        { key: 'action-edit', name: '编辑', bind: { type: 'primary', disabled: (row) => row.status !== 1 } },
        // {
        //   key: 'action-continue-create',
        //   name: '继续创建',
        //   popover: true,
        //   bind: {
        //     className: 'amber--bg lighten-5 amber--border amber--hover hover--darken-2 amber--text text--darken-4 amber--text--hover hover--text--lighten-5',
        //     type: 'primary',
        //     disabled: (row) => row.status === 999,
        //   },
        // },
        {
          key: 'action-approval',
          name: '审批',
          popover: true,
          popBind: { title: '审批', popoverClass: 'sa-popper-dialog theme-yellow' },
          bind: {
            // className: 'amber--bg lighten-5 amber--border amber--hover hover--darken-2 amber--text text--darken-4 amber--text--hover hover--text--lighten-5',
            type: 'warning',
            disabled: (row) => row.status !== 1,
          },
        },
        {
          key: 'action-cancel',
          name: '取消',
          popover: true,
          popBind: { title: '取消', popoverClass: 'sa-popper-dialog theme-red' },
          bind: { type: 'danger', disabled: (row) => ![1, 3].includes(row.status) },
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
    this.getColumn();
    this.getChoices();
    this.getList();
  },
  methods: {
    /** 注意有 MiPage mixins methods * */
    getList() {
      getVirtualassetsApplyforvms({ ...this.searchQuery }).then((res) => {
        this.tbData = res;
      });
    },
    getChoices() {
      this.loadingFlag.comSearch = true;
      getVirtualassetsApplyforvmsGetChoices({}, { nonLoading: true }).then((res) => {
        const { result, result: { idc: idcTemp } } = res;
        //
        const idc = idcTemp.filter((item) => item.type !== null);
        //
        Object.assign(this.choices, { ...result, idc });
      }).finally(() => {
        this.loadingFlag.comSearch = false;
      });
    },
    getSettingChoices({ param: { idc_id, app_id, env } }) {
      const key = `${idc_id}_${app_id}_${env}`;
      const { settingChoices } = this.choices;
      getVirtualassetsApplyforvmsGetChoices({ idc_id, app_id, env }).then((res) => {
        const {
          result: {
            initenv, os, flavor, datastore, subnets,
          } = {},
        } = res;
        this.choices.settingChoices = {
          ...settingChoices,
          [key]: {
            initenv, os, flavor, datastore, subnets,
          },
        };
      });
    },
    /** 注意 handleSearch 為 MiPage mixins  * */
    handleInsertShow() {
      this.$refs.editDialog.show({ type: 'ADD', row: {} });
    },
    handleActionEdit({ row: { id } }) {
      getVirtualassetsApplyforvmsById({ id }).then((res) => {
        const { result: row } = res;
        this.$refs.editDialog.show({ type: 'EDIT', row });
      });
    },
    handleActionCreate({ row: { id } }) {
      postVirtualassetsApplyforvmsAutoCalculate({ id }).then(() => {
        this.getList();
      });
    },
    handleActionContinueCreate({ row: { id } }) {
      this.$message.warning(id || 'Omega need ID');
      postVirtualassetsApplyforvmsRegisterCobbler({ id }).then(() => {
        this.getList();
      });
    },
    handleBatchApproval() {
      function batchApproval() {
        const data = {
          ids: this.getTableSelectedRows,
        };
        postVirtualassetsApplyforvmsApplyAffirm(data).then(() => {
          this.getList();
        });
      }
      this.selectorConfirmEvent({
        callback: batchApproval.bind(this),
        eventText: '批量审批',
      });
    },
    handleActionApproval({ row: { id } }) {
      postVirtualassetsApplyforvmsApplyAffirm({ ids: [id] }).then(() => {
        this.getList();
      });
    },
    handleActionCancel({ row: { id } }) {
      postVirtualassetsApplyforvmsCancel({ ids: [id] }).then(() => {
        this.getList();
      });
    },
    handleBatchCancel() {
      // getTableSelectedRows 參考mixins
      function batchCancel() {
        const data = {
          ids: this.getTableSelectedRows,
        };
        postVirtualassetsApplyforvmsCancel(data).then((res) => {
          this.getList();
        });
      }
      this.selectorConfirmEvent({
        callback: batchCancel.bind(this),
        eventText: '批量取消',
      });
    },
    handleSubmit({ data, type }) {
      switch (type) {
        case 'ADD':
          postVirtualassetsApplyforvms(data).then(() => {
            this.getList();
            this.$refs.editDialog.hide();
          });
          break;
        case 'EDIT':
          putVirtualassetsApplyforvmsById(data).then(() => {
            this.getList();
            this.$refs.editDialog.hide();
          });
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
    formatResult(item) {
      return Object.keys(item).map((key) => `${key}: ${item[key] || '--'}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .result-column {
    max-height: 350px;
  }
</style>
