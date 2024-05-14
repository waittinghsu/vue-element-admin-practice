import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({}),
    listQ: {
      get() {
        return this.listQuery;
      },
    },
  },
  props: {
    listQuery: {
      required: true,
      type: Object,
      default: () => {},
    },
    choices: {
      type: Object,
      default: () => {},
    },
    height: {
      type: Number,
      default: 64,
    },
  },
  mounted() {
    this.$emit('update:height', this.$refs.comSearch?.offsetHeight || 0);
  },
  updated() {
    this.$emit('update:height', this.$refs.comSearch?.offsetHeight || 0);
  },
};
