<template>
  <base-dialog ref="dialog" :title="title" height-fixed width="40%">
    <template #dialog-body>
      <el-form ref="dataForm" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm pr-3">
        <el-row :gutter="10">
          <el-col :span="12" class="filter-item-flex">
            <el-form-item label="数量(台)" prop="num">
              <el-input-number v-model="form.num" class="w-100" :min="1" placeholder="请输入数量！" />
            </el-form-item>
          </el-col>
          <el-col :span="12" class="filter-item-flex">
            <el-form-item label="业务名称" prop="app_id">
              <sa-infinity-select
                v-model="form.app_id" filterable
                :items="choices.app || []" class="w-100"
                placeholder="请选择业务名称！"
                @change="cleanSettingParams"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="机房區域" prop="idc_id">
              <sa-select
                v-model="form.idc_id" filterable
                :items="choices.idc || []" class="w-100"
                placeholder="请选择机房區域！"
                @change="cleanSettingParams"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="环境" prop="env">
              <sa-select
                v-model="form.env" filterable
                :items="choices.env || []" class="w-100"
                placeholder="请选择环境！"
                @change="cleanSettingParams"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="初始化程序" prop="initenv_id">
              <sa-select
                v-model="form.initenv_id" filterable
                :items="settingChoices.initenv" class="w-100"
                placeholder="请选择初始化程序！" clearable
                :disabled="isIdcEmpty"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="系统" prop="image_id">
              <sa-select
                v-model="form.image_id" filterable
                :items="settingChoices.os || []" class="w-100"
                placeholder="请选择操作系统！"
                :disabled="isIdcEmpty"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="套餐选择" prop="flavor_id">
              <sa-select
                v-model="form.flavor_id" filterable
                :items="settingChoices.flavor || []" class="w-100"
                placeholder="请选择套餐！"
                :disabled="isIdcEmpty"
              />
            </el-form-item>
          </el-col>
          <el-col v-if="isVCenter" :span="24" class="filter-item-flex">
            <el-form-item label="Datastore" prop="datastore">
              <sa-select
                v-model="form.datastore" filterable
                :items="settingChoices.datastore || []" class="w-100"
                placeholder="请选择Datastore！"
                :disabled="isIdcEmpty"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24" class="filter-item-flex">
            <el-form-item label="子网选择" prop="subnet_id">
              <sa-select
                v-model="form.subnet_id" filterable
                :items="settingChoices.subnets || []" class="w-100"
                placeholder="请选择子网！"
                :disabled="isIdcEmpty"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="comment">
              <el-input v-model="form.comment" type="textarea" :rows="4" placeholder="备注不能超过64个字符！" />
            </el-form-item>
          </el-col>
        </el-row>
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
import { omit } from 'lodash';
import BaseDialog from '@/components/Dialog/index.vue';
import saSelect from '@/components/SaSelect.vue';
import SaInfinitySelect from '@/components/SaComponent/SaSelect';

export default {
  name: 'EditDialog',
  components: { BaseDialog, saSelect, SaInfinitySelect },
  props: {
    choices: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      type: 'ADD',
      titleDictionary: { ADD: '添加虚拟机申请信息', EDIT: '编辑虚拟机申请信息' },
      initForm: {
        num: 1,
        idc_id: undefined,
        app_id: undefined,
        env: undefined,
        initenv_id: undefined,
        image_id: undefined, // os image
        flavor_id: undefined, // flavor cpu memory disks
        datastore: undefined,
        subnet_id: undefined, // subnet
        comment: undefined,
      },
      form: {},
      rules: {
        num: [{ required: true, message: '请输入数量！', trigger: 'blur' }],
        idc_id: [{ required: true, message: '请选择机房區域！', trigger: 'blur' }],
        app_id: [{ required: true, message: '请选择业务名称！', trigger: 'blur' }],
        env: [{ required: true, message: '请选择环境！', trigger: 'blur' }],
        // initenv_id: [{ required: true, message: '请选择初始化程序！', trigger: 'blur' }],
        image_id: [{ required: true, message: '请选择操作系统！', trigger: 'blur' }],
        flavor_id: [{ required: true, message: '请选择套餐！', trigger: 'blur' }],
        datastore: [{ required: true, message: '请选择Datastore！', trigger: 'blur' }],
        subnet_id: [{ required: true, message: '请选择子网！', trigger: 'blur' }],
        comment: [{ max: 64, message: '备注不能超过64个字符！', trigger: 'blur' }],
      },
    };
  },
  computed: {
    title() {
      return this.titleDictionary[this.type];
    },
    // 檢測 機房區域 環境 業務， 是否有任意值為空
    isIdcEmpty() {
      const { idc_id, app_id, env } = this.form;
      return !idc_id || !app_id || !env;
    },
    isVCenter() {
      if (this.isIdcEmpty) {
        return false;
      }
      const { idc_id } = this.form;
      const { type } = this.choices.idc.find((item) => item.id === idc_id) || {};
      return [1, 2].includes(type); //  1 is vmware or vcenter 2 is nutanix
    },
    settingChoices() {
      const initChoice = {
        initenv: [], os: [], flavor: [], datastore: [], subnets: [],
      };
      if (this.isIdcEmpty) {
        return initChoice;
      }
      const { idc_id, app_id, env } = this.form;
      const key = `${idc_id}_${app_id}_${env}`;
      if (this.choices.settingChoices[key]) {
        return this.choices.settingChoices[key];
      }
      this.$emit('getSettingChoices', { event: 'getSettingChoices', param: { idc_id, app_id, env } });
      return initChoice;
    },
    getVmPackageInfo() {
      if (this.isIdcEmpty) {
        return {};
      }
      const { flavor_id } = this.form;
      const {
        name: flavor, cpu, memory, disks,
      } = this.settingChoices.flavor.find((item) => item.id === flavor_id);
      return {
        flavor_id, flavor, cpu, memory, disks,
      };
    },
    getOsInfo() {
      if (this.isIdcEmpty) {
        return {};
      }
      const { image_id } = this.form;
      const { name: image } = this.settingChoices.os.find((item) => item.id === image_id);
      return { image_id, image, os: image };
    },
    getSubnetInfo() {
      if (this.isIdcEmpty) {
        return {};
      }
      const { subnet_id } = this.form;
      const { name: subnet } = this.settingChoices.subnets.find((item) => item.id === subnet_id);
      return { subnet_id, subnet };
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
          const omitArr = [];
          !this.form.initenv_id && omitArr.push('initenv_id');
          !this.isVCenter && omitArr.push('datastore');
          const data = {
            ...this.form, ...this.getSubnetInfo, ...this.getVmPackageInfo, ...this.getOsInfo,
          };
          this.$emit('handleSubmit', { data: omit(data, omitArr), type });
          // console.log(omit(data, omitArr));
        } else {
          this.$message.warning('请按格式输入内容！');
        }
      });
    },
    cleanSettingParams() {
      const {
        initenv_id, image_id, flavor_id, datastore, subnet_id,
      } = this.initForm;
      Object.assign(this.form, {
        initenv_id, image_id, flavor_id, datastore, subnet_id,
      });
    },
  },

};
</script>

<style scoped>

</style>
