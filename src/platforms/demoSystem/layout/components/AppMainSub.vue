<template>
  <div class="app-container">
    <el-tabs v-model="pageId" class="tabs-nopadding" @tab-click="onTabClick">
      <el-tab-pane v-for="(option, index) in menus" :key="index" :label="option.name" :name="option.id">
        <el-badge slot="label" class="item" :hidden="badgeProcess(option.key) === 0" :value="badgeProcess(option.key)" :max="99">
          {{ option.name }}
        </el-badge>
      </el-tab-pane>
    </el-tabs>
    <div>
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppMainSub',
  data() {
    //   key: v.key,
    //   name: v.name,
    //   sort: v.sort,
    //   id: nId, // 结点ID
    //   pid: id, // 父结点ID
    //   level, //层次
    //   path,
    return {
      pageId: undefined,
    };
  },
  computed: {
    ...mapGetters({ appMenus: 'menus', tabsBadge: 'tabsBadge' }),
    menus() {
      const item = this.appMenus.find((it) => it.path === this.$route.path);
      const menus = this.appMenus.filter((it) => it.pid === item.pid);
      this.setPathId(item && item.id);
      return menus || [];
    },
    cachedViews() {
      // 要做cache的清單
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
  created() {
    // tab 初始值設定
    const item = this.appMenus.find((it) => it.path === this.$route.path);
    this.setPathId(item && item.id);
  },
  methods: {
    ...mapActions({ setAppMainSubBadge: 'app/setAppMainSubBadge' }),
    // tabsBadge 獲取 badge的數據 ( menuKey = 分页primary key
    badgeProcess(menuKey = 'demo') {
      const parentKey = this.$route.meta?.BadgeKey || 'demo';// badge 群组分类名称
      return this?.tabsBadge?.[parentKey]?.[menuKey] || 0;
    },
    onTabClick() {
      const item = this.appMenus.find((it) => it.id === this.pageId);
      this.$router.push(item.path);
    },
    setPathId(id) {
      this.pageId = id;
    },
  },
};
</script>

<style lang="scss">
.el-tabs__nav {
  float: none;
}

.el-tabs__nav-scroll {
  overflow: inherit;
}

.el-tabs__nav-wrap {
  overflow: inherit;
}
</style>
