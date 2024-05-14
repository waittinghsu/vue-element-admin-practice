<template>
  <div class="menu-wrapper">
    <!--當目錄只有一個子項目－－－不使用展開元件-->
    <template v-if="level === 1 && item.childrenLength <= 1">
      <el-menu-item :index="item.id" @click="$router.push({name: item.key})">
        <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta && item.meta.icon" />
        <el-badge slot="title" :value="badgeProcess(item.key) || null" class="item tip2">
          <span class="">{{ item.name }}</span>
        </el-badge>
      </el-menu-item>
    </template>
    <!--子項目按鈕-->
    <template v-else-if="level === 2">
      <app-link :to="item.path">
        <el-menu-item :index="item.id" class="submenu-title-noDropdown">
          <el-badge :value="badgeProcess(item.key) || null" class="item tip">
            <item :title="item.name" />
          </el-badge>
        </el-menu-item>
      </app-link>
    </template>
    <!--建立展開元件 並遞迴 sidebar-item -->
    <el-submenu v-else-if="level < 3" ref="subMenu" :index="item.id" popper-append-to-body>
      <template slot="title">
        <item :icon="item.meta && item.meta.icon" :title="item.name" />
      </template>
      <sidebar-item
        v-for="child in appMenus.filter(menu => ((menu.pid === item.id) && !!menu.path && !menu.hidden))"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        :level="subLevel"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Item from './Item.vue';
import AppLink from './Link.vue';
import FixiOSBug from './FixiOSBug';

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  computed: {
    ...mapGetters({ tabsBadge: 'tabsBadge' }),
    ...mapGetters(['appMenus']),
    subLevel() {
      return this.level + 1;
    },
  },
  created() {

  },
  methods: {
    // tabsBadge 獲取 badge的數據 ( menuKey = 分页primary key
    badgeProcess(menuKey = 'demo') {
      const parentKey = this.$route.meta?.BadgeKey || 'demo';// badge 群组分类名称
      return this?.tabsBadge?.[parentKey]?.[menuKey] || 0;
    },
  },
};
</script>

<style lang="scss">
.tip{
  .el-badge__content.is-fixed{
    top: 50%;
    left: 88px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(-50%);
  }
  .el-badge__content{
    display: inline-table;
  }
}
.tip2{
  .el-badge__content.is-fixed{
    top: 50%;
    left: 88px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(-0%);
  }
  .el-badge__content{
    display: inline-table;
  }
}
</style>
