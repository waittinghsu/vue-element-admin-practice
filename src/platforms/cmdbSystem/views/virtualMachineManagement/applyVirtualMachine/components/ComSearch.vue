<template>
  <div ref="comSearch" class="filter-container">
    <el-row :gutter="10">
      <el-col :span="4" class="filter-item-flex">
        <sa-select
          v-model="listQ.idc" class="w-100"
          clearable filterable
          placeholder="请选择机房区域"
          :items="choices.idc || []" @input="handleSubmit('search')"
        />
      </el-col>
      <el-col :span="4" class="filter-item-flex">
        <sa-select
          v-model="listQ.env" class="w-100"
          clearable filterable
          placeholder="请选择环境"
          :items="choices.env || []" @input="handleSubmit('search')"
        />
      </el-col>
      <el-col :span="4" class="filter-item-flex">
        <sa-select
          v-model="listQ.config" class="w-100"
          clearable filterable
          placeholder="请选择配置"
          :items="choices.config || []" @input="handleSubmit('search')"
        />
      </el-col>
      <el-col :span="4" class="filter-item-flex">
        <sa-select
          v-model="listQ.status" class="w-100"
          clearable filterable
          placeholder="请选择状态"
          :items="choices.status || []" @input="handleSubmit('search')"
        />
      </el-col>
      <el-col :span="4" class="filter-item-flex">
        <el-input v-model.trim="listQ.search" class="w-100" placeholder="模糊检索" @keyup.enter.native="handleSubmit('search')" />
      </el-col>
      <!--表單送出區塊-->
      <el-col :span="24" class="filter-item">
        <div class="d-flex flex-row align-center justify-end">
          <!--          <el-checkbox v-model="listQ.like" class="item-like mr-3" @change="handleSubmit('search')">模糊匹配</el-checkbox>-->
          <el-button v-waves type="primary" icon="el-icon-search" @click="handleSubmit('search')">
            搜索
          </el-button>
          <el-button v-waves type="primary" plain icon="el-icon-refresh" @click="handleSubmit('reset')">
            重置
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import waves from '@/directive/waves';
import MiSearch from '@/platforms/cmdbSystem/mixin/MiSearch';
import saSelect from '@/components/SaSelect.vue';

export default {
  name: 'ComSearch',
  components: { saSelect },
  directives: { waves },
  mixins: [MiSearch],
  props: {/** 參考 MiSearch * */},
  data() {
    return {};
  },
  computed: {
    /** 參考 MiSearch * */
    listQ: {
      get() {
        return this.listQuery;
      },
    },
  },
  methods: {
    handleSubmit(type = 'search') {
      // 空實作
      this.$emit('search', type);
    },
  },
};
</script>

<style scoped>

</style>
