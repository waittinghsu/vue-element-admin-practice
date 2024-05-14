import { mapGetters } from 'vuex';

/**
 * listQuery: 主頁的搜尋object
 * choices: 下拉選單
 * height: 高度暫存變數
 * columns: 表格欄位設定檔
 * columnsVisible: 可以顯示的欄位列表
 * saveColumn 當結束可是欄位時 觸發的事件
 * handleClear 按下欄位重置鈕的事件
 */
export default {
  data() {
    return {
      regexRule: /^operational-/,
    };
  },
  computed: {
    ...mapGetters({}),
    listQ: {
      get() {
        return this.listQuery;
      },
    },
    colVisible: {
      get() {
        return this.columnsVisible;
      },
      set(val) {
        this.$emit('update:columnsVisible', val);
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
    columns: {
      // required: true,
      type: Array,
      default: () => [],
    },
    columnsVisible: {
      // required: true,
      type: Array,
      default: () => [],
    },
    saveColumn: {
      type: Function,
      default: () => () => {},
    },
    clearColumn: {
      type: Function,
      default: () => () => {},
    },
  },
  mounted() {
    this.$emit('update:height', this.$refs.comOperational?.offsetHeight || 0);
  },
  updated() {
    this.$emit('update:height', this.$refs.comOperational?.offsetHeight || 0);
  },
  methods: {
    setFunctionName(key) {
      const mainKey = key.split('-').map((text) => `${text.slice(0, 1).toLocaleUpperCase()}${text.slice(1)}`).join('');
      return `handle${mainKey}`;
    },
    /**
     *
     * @param {Object} args required
     * @param {Function} args.funcName required 自動組成的函式名稱
     * @param {Object} args.row required 函式的可用參數－通常會是列表資訊的row
     * @param {Object} args.uploadObj 除了row以外 想要傳遞的參數
     */
    handleOperationalBtnEvent(args) {
      const { funcName, row, ...other } = args;
      // this.$emit('handleOperationalBtnEvent', { event: funcName });
      if (Object.prototype.toString.call(this[funcName]) === '[object Function]') {
        this[funcName]({ row, ...other });
      } else {
        this.$message.error(`Function ${funcName} is not defined`);
      }
    },
  },
};
