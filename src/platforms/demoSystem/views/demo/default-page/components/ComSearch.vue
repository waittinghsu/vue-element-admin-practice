<template>
  <div ref="comSearch" class="filter-container">
    <el-row :gutter="10">
      <el-col :span="8" class="filter-item">
        <el-date-picker
          v-model="listQ.update_time"
          type="datetimerange"
          unlink-panels
          range-separator="-"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          class="w-100"
        />
      </el-col>
      <el-col :sm="8" :lg="4" class="filter-item-flex">
        <sa-select
          v-model="listQ.name" class="w-100"
          clearable filterable
          placeholder="请选择提示文字"
          :items="[ {id:1, name: '選項'} ]" @input="handleSubmit('search')"
        />
      </el-col>
      <el-col :sm="8" :lg="4" class="filter-item-flex">
        <el-select
          v-model="listQ.name" size="mini"
          filterable placeholder="搜尋提示文字"
          clearable
          class="item-value w-100" @change="handleSubmit('search')"
        >
          <el-option v-for="item in [ {id:1, name: '選項'} ]" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-col>
      <el-col :sm="8" :lg="4" class="filter-item-flex">
        <el-input v-model.trim="listQ.name" size="mini" class="w-100" placeholder="搜尋提示文字" @keyup.enter.native="handleSubmit('search')" />
      </el-col>
      <el-col :sm="8" :lg="4" class="filter-item-flex">
        <el-input v-model.trim="listQ.name" size="mini" class="w-100" placeholder="搜尋提示文字" @keyup.enter.native="handleSubmit('search')" />
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
import MiSearch from '@/platforms/demoSystem/mixin/MiSearch';
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
