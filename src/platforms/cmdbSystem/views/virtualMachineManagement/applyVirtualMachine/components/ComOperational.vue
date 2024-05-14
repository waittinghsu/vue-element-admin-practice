<template>
  <div ref="comOperational" class="operate-container">
    <el-row type="flex">
      <el-col :span="24">
        <div class="d-flex flex-row">
          <sa-permission-button-group
            :prefix-btn-list="prefixBtnList" use-permission
            default-plain :regex-rule="regexRule"
            @handleButtonClick="handleOperationalBtnEvent"
          />
          <sa-column-visible
            :columns="columns" :col-visible.sync="colVisible"
            :max-length="columns.length" clearable
            @handleClear="clearColumn" @hide="saveColumn"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import waves from '@/directive/waves'; // waves directive
import MiOperation from '@/platforms/cmdbSystem/mixin/MiOperation';
import SaPermissionButtonGroup from '@/components/SaButtonGroup/SaPermissionButtonGroup/index.vue';
import SaColumnVisible from '@/components/SaColumnControl.vue';

/**
 * 操作工作區域共用元件
 */
export default {
  name: 'ComOperational',
  components: { SaColumnVisible, SaPermissionButtonGroup },
  directives: { waves },
  mixins: [MiOperation],
  props: {/** 參考 MiOperation * */},
  data() {
    return {
      prefixBtnList: [
        { key: 'operational-insert', name: '申请虚拟机', bind: { icon: 'el-icon-plus' } },
        {
          key: 'operational-batch-approval', name: '批量审批', bind: { icon: '' },
        },
        // { key: 'operational-batch-edit', name: '批量编辑', bind: { icon: '' } },
        {
          key: 'operational-batch-cancel', name: '批量取消', bind: { type: 'danger', icon: '' },
        },
        // { key: 'operational-batch-delete', name: '批量删除', bind: { icon: 'el-icon-delete', type: 'danger' } },
      ],
    };
  },
  computed: {
    /** listQ 參考 MiSearch * */
  },
  methods: {
    /** handleAutoButtonClick 參考 MiOperation* */
    handleOperationalInsert() {
      this.$emit('handleOperationalBtnEvent', { event: 'handleInsertShow', param: { type: 'ADD', row: {} } });
    },
    handleOperationalBatchApproval() {
      this.$emit('handleOperationalBtnEvent', { event: 'handleBatchApproval', param: { type: 'ADD', row: {} } });
    },
    // handleOperationalBatchEdit() {
    //   this.$emit('handleOperationalBtnEvent', { event: 'handleBatchEdit', param: { type: 'ADD', row: {} } });
    // },
    handleOperationalBatchCancel() {
      this.$emit('handleOperationalBtnEvent', { event: 'handleBatchCancel', param: { type: 'ADD', row: {} } });
    },
    // handleOperationalBatchDelete() {
    //   this.$emit('handleOperationalBtnEvent', { event: 'handleBatchDelete', param: {} });
    // },
  },
};
</script>
