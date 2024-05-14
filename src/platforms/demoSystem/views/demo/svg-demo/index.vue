<template>
  <el-row class="flex-wrap" :gutter="20">
    <el-col v-for="fileName in svgFileList" :key="fileName" class="py-4" :span="4">
      <div class="d-flex flex-column justify-center">
        <svg-icon class="mx-auto" :icon-class="fileName" />
        <span class="pt-3 mx-auto">{{ fileName }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'SvgDemo',
  data() {
    return {
      svgFileList: [],
    };
  },
  computed: {
    find() {
      return 1;
    },
  },
  created() {
    require.context('@/icons/svg', true, /^.*\.svg$/).keys().forEach((fileName) => {
      this.svgFileList.push(fileName.replace('./', '').split('.')[0]);
    });
  },
};
</script>

<style scoped>

</style>
