<template>
  <base-dialog ref="dialog" :title="title" height-fixed width="40%">
    <template #dialog-body>
      <el-form ref="dataForm" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm pr-3">
        <el-form-item label="名称" prop="name">
          <el-input v-model.trim="form.name" :placeholder="`请输入名称`" />
        </el-form-item>
        <el-form-item label="备注" prop="comment">
          <el-input v-model.trim="form.name" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="备注" prop="comment">
          <sa-select v-model="form.value" filterable :items="[ { id: 1, name: 'demo' } ]" class="w-100" placeholder="请选择xxxxxx" />
        </el-form-item>
      </el-form>
    </template>
    <div slot="dialog-footer" class="dialog-footer">
      <div class="d-flex flex-row justify-end">
        <el-button @click="handleCancel">
          取消
        </el-button>
        <el-button type="primary" @click="handleSubmit">
          确认
        </el-button>
      </div>
    </div>
  </base-dialog>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import BaseDialog from '@/components/Dialog/index.vue';
import saSelect from '@/components/SaSelect.vue';

export default {
  name: 'EditDialog',
  components: { BaseDialog, saSelect },
  props: {
    choices: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      type: 'ADD',
      titleDictionary: { ADD: '添加字典信息', EDIT: '编辑字典信息' },
      initForm: { name: undefined, comment: undefined },
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    title() {
      return this.titleDictionary[this.type];
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.form = cloneDeep(this.initForm);
    },
    show({ type, row }) {
      this.type = type;
      switch (type) {
        case 'ADD':
          this.init();
          break;
        case 'EDIT': {
          const { id } = row;
          Object.keys(this.form).forEach((formKey) => {
            this.form[formKey] = row[formKey];
          });
          Object.assign(this.form, { id });
          break;
        }
        default:
          break;
      }
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    handleCancel() {
      this.hide();
    },
    handleSubmit() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          const { type } = this;
          this.$emit('handleSubmit', { data: { ...this.form }, type });
          // this.handleCancel();
        } else {
          this.$message.warning('请按格式输入内容！');
        }
      });
    },
  },

};
</script>

<style scoped>

</style>
