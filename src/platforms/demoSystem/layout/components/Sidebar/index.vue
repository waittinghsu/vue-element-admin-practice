<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="menuItem in appMenus.filter(menu => (menu.level === 1) && !!menu.path && !menu.hidden)"
          :key="menuItem.id" :item="menuItem"
          :base-path="menuItem.path" :level="1"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
import variables from '@/styles/variables.scss';

export default {
  name: 'SideBar',
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['appMenus', 'settings', 'sidebar']),
    // 確認menu 誰被選取
    activeMenu() {
      // eslint-disable-next-line no-unused-vars
      const { name, meta } = this.$route;

      /**
       * 搜尋目前路由代號對照appMenus的哪一個
       * appMenus 資料源要確保 path 有值(且唯一) 不然toLowerCase會錯誤
       * 1. 獲取到相同 router key
       * 2. 路由meta 有設定 activeIndex （表示 參考activeIndex
       */
      const item = this.appMenus.find((menu) => (menu.key.toLowerCase() === name.toLowerCase()) || (menu.key === meta?.activeIndex));
      // this.$message.error(JSON.stringify(item));
      return item?.id || '0';
    },
    showLogo() {
      return this.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    // console.log(123, this.appMenus, this.appMenus.map((menu) => menu.id + menu.name));
  },
};
</script>
