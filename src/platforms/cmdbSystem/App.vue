<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {};
  },
  watch: {
    $route: {
      handler(route) {
      },
      deep: true,
    },
  },
  mounted() {
    window.myVue = this;
  },
  methods: {},
};
</script>
