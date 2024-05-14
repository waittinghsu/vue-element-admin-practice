// import store from '@/store'
// eslint-disable-next-line no-unused-vars
const { body } = document;
// eslint-disable-next-line no-unused-vars
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        // eslint-disable-next-line no-undef
        // store.dispatch('app/closeSideBar', { withoutAnimation: false });
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    // const isMobile = this.$_isMobile()
    // if (isMobile) {
    //   store.dispatch('app/toggleDevice', 'mobile')
    //   store.dispatch('app/closeSideBar', { withoutAnimation: true })
    // }
  },
  methods: {
    $_resizeHandler() {
      if (!document.hidden) {
        // store.dispatch('app/setSize');
      }
    },
  },
};
