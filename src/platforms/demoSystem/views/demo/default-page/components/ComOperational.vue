<template>
  <div ref="comOperational" class="operate-container">
    <el-row type="flex">
      <el-col :span="24">
        <div class="d-flex flex-row">
          <sa-permission-button-group :prefix-btn-list="prefixBtnList" default-plain :regex-rule="regexRule" @handleButtonClick="handleOperationalBtnEvent" />
          <!--          <el-button class="px-6" type="primary" plain icon="el-icon-plus" @click="handleInsert('ADD', {})">新增</el-button>-->
          <!--          <el-button type="danger" plain icon="el-icon-delete" @click="handleBatchDelete">批量删除</el-button>-->
          <!--          <span class="pl-3">{{ $t('g_btn_search') }}</span>-->
          <!--          <sa-column-visible :columns="columns" :col-visible.sync="colVisible" :max-length="columns.length" clearable @handleClear="clearColumn" @hide="saveColumn"/>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import waves from '@/directive/waves'; // waves directive
import MiOperation from '@/platforms/demoSystem/mixin/MiOperation';
import SaPermissionButtonGroup from '@/components/SaButtonGroup/SaPermissionButtonGroup/index.vue';
// import SaColumnVisible from '@/components/SaColumnControl.vue';

/**
 * 操作工作區域共用元件
 */
export default {
  name: 'ComOperational',
  components: { SaPermissionButtonGroup },
  directives: { waves },
  mixins: [MiOperation],
  props: {/** 參考 MiOperation * */},
  data() {
    return {
      prefixBtnList: [
        { key: 'operational-insert', name: '新增', bind: { icon: 'el-icon-plus' } }, { key: 'operational-batch-delete', name: '批量删除', bind: { icon: 'el-icon-delete', type: 'danger' } },
        {
          key: 'operational-test',
          name: 'origin',
          popover: true,
          popBind: { // , confirmText: ''
            commentEnable: true, inputDescription: '請輸入OTP驗證', popoverClass: 'sa-popper-dialog',
          },
          bind: { icon: 'el-icon-download' },
        },
        {
          key: 'operational-test',
          name: 'blue',
          popover: true,
          popBind: {
            commentEnable: true, title: '請輸入OTP驗證', inputDescription: '123', popoverClass: 'sa-popper-dialog theme-blue',
          },
          bind: { icon: 'el-icon-download' },
        },
        {
          key: 'operational-test',
          name: 'teal',
          popover: true,
          popBind: {
            commentEnable: true, title: '請輸入OTP驗證', inputDescription: '123', popoverClass: 'sa-popper-dialog theme-teal',
          },
          bind: { icon: 'el-icon-download' },
        },
        {
          key: 'operational-test',
          name: 'yellow',
          popover: true,
          popBind: {
            commentEnable: true, title: '請輸入OTP驗證', inputDescription: '123', popoverClass: 'sa-popper-dialog theme-yellow',
          },
          bind: { icon: 'el-icon-download' },
        },
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
    handleOperationalBatchDelete() {
      this.$emit('handleOperationalBtnEvent', { event: 'handleBatchDelete', param: {} });
    },
  },
};
</script>
