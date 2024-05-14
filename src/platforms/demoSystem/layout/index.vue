<template>
  <div v-if="!!user.name" :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RightPanel from '@/components/RightPanel/index.vue';
import {
  // eslint-disable-next-line no-unused-vars
  AppMain, Navbar, Settings, Sidebar, TagsView,
} from './components';
import ResizeMixin from './mixin/ResizeHandler';

// eslint-disable-next-line no-unused-vars
let loading;

export default {
  name: 'LayOut',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    // TagsView,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      user: (state) => state.user,
      showSettings: (state) => state.settings.showSettings,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      };
    },
  },
  mounted() {
    this.$store.dispatch('user/getInfo');
  },
  methods: {
    handleClose(index) {},
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
