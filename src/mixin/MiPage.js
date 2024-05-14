import { mapGetters, mapActions } from 'vuex';
import { cloneDeep } from 'lodash';

export default {
  data() {
    return {
      // BD存放column 資訊的key
      tableName: this.$router.currentRoute.name,
      // table顯示欄位列表
      columnsVisible: [],
      // table欄位設定 json
      columns: [],
      // table欄位設定 json 暫存
      iniColumns: [],
      // table checkbox 值
      tableSelectRows: [],
      // permissions columns list Array(String)
      permissionColumnList: [],
      // table 展開元件用 存放已展開的id
      expandRowKeys: [],
      // 搜尋條件基本物件
      listQuery: {},
      // 搜尋條件基本物件 -- 初始化
      initListQuery: {
        page: 1,
        page_size: 20,
      },
      // 實際getList 要用的參數
      searchQuery: {},
      // 下拉選單資料
      choices: {},
      // 頁面表單資料
      tbData: {
        result: [],
        total: 0,
      },
      multiplePageSelect: false,
      searchHeight: 0, // 搜尋區域的高度
      operationHeight: 0, // 操作區域的高度
      hadColumnClear: false, // true: columns 執行清除, false columns 無執行清除動作
      // sa-permission-button 使用的過濾正規表示
      regexRule: {
        type: RegExp,
        default: () => /^action-/,
      },
      // 基本頁面可能會使用的 loading 旗標
      loadingFlag: {
        comSearch: true,
        comOperational: true,
        saTable: true,
      },
      // 快取判斷： 當配置keep-alive include 時頁面 created 與 activated 做區隔用
      isFirstVisit: true,
    };
  },
  created() {
    this.init();
  },
  activated() {
    if (this.isFirstVisit) {
      this.isFirstVisit = false;
    } else {
      Object.prototype.toString.call(this.handleActivated) === '[object Function]' && this.handleActivated();
    }
  },
  computed: {
    ...mapGetters({
      // 頁面高度
      appHeight: 'height',
    }),
    // 表格勾選 取得勾選的id
    getTableSelectedRows() {
      return this.tableSelectRows.map((item) => item.id);
    },
    // 表格顯示欄位 saTale (visible-cols)使用
    tabCols: {
      get() {
        return this.columns.filter((v) => (v.default)).map((v) => (v.prop));
      },
    },
    tbHeight() {
      // console.log(this.appHeight, this.searchHeight, this.operationHeight, this.appHeight - 95 - (this.searchHeight || 0) - (this.operationHeight || 0));
      if (this.searchHeight === 0 && this.operationHeight === 0) {
        return 0;
      }
      return this.appHeight - 95 - (this.searchHeight || 0) - (this.operationHeight || 0);
    },
  },
  watch: {
    multiplePageSelect: {
      handler() {
        this.resetSelect();
      },
    },
  },
  mounted() {
    window.onresize = () => {
      this.setAppSize();
    };
    this.iniColumns = cloneDeep(this.columns);
  },
  methods: {
    ...mapActions({
      setAppSize: 'app/setSize',
    }),
    init() {
      this.listQuery = cloneDeep(this.initListQuery);
      this.searchQuery = cloneDeep(this.listQuery);
    },
    // keep-alive 轉接 activated
    handleActivated() {
      // 這邊自己在各系統實作 行為
    },
    // 頁面的搜尋事件
    handleSearch(type) {
      if (type === 'reset') {
        this.init();
      } else if (type === 'search') {
        this.listQuery.page = 1;
      }
      this.searchQuery = { ...this.listQuery };
      // 想在獲取列表前執行的事件
      if (Object.prototype.toString.call(this.beforeGetList) === '[object Function]') {
        this.beforeGetList();
      }
      this.getList();
      // 想在獲取列表後執行的事件
      if (Object.prototype.toString.call(this.afterGetList) === '[object Function]') {
        this.afterGetList();
      }
    },
    afterGetList() {}, // 可自行在頁面實作
    /**
     * sa-table 的排序事件方法
     * 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序
     * @param data
     */
    tbChange(data) {
      const { pagination: { page = this.initListQuery.page, limit: page_size = this.initListQuery.page_size }, sort } = data;
      const desc = (sort && sort.order) ? (sort.order === 'descending') : '';
      const ordering = (sort && sort.order) ? sort.prop : '';
      Object.assign(this.listQuery, {
        page, page_size, desc, ordering,
      });
      Object.assign(this.searchQuery, {
        page, page_size, desc, ordering,
      });

      if (Object.prototype.toString.call(this.getList) === '[object Function]') {
        this.getList();
      }
    },
    // 透過api 取得使用者設定的 欄位自定義欄位寬度 並覆寫columns and 產生 可視欄位 columnsVisible todo 需在自己的系統下實作規則
    getColumn() {
      /** 可以參考 ssoSystem/mixin/MiPage getColumn * */
    },
    // 儲存可視欄位設定值 todo 需在自己的系統下實作規則
    saveColumn() {
      /** 可以參考 ssoSystem/mixin/MiPage saveColumn * */
    },
    // 清除欄位設定 todo 需在自己的系統下實作規則
    clearColumn() {
      /** 可以參考 ssoSystem/mixin/MiPage clearColumn * */
    },
    // 拖曳欄位寬度事件 儲存至api todo 需在自己的系統下實作規則
    headerDragend(newWidth, oldWidth, column, event) {
      /** 可以參考 ssoSystem/mixin/MiPage headerDragend * */
    },
    // table 權限控管 todo 需在自己的系統下實作規則
    permissionColumns() {
      /** 可以參考 ssoSystem/mixin/MiPage permissionColumns * */
    },
    /**
     * 操作區塊的按鈕事件 ComOperational 會根據permission 給的key 組合函式 EX: action-edit => handleActionEdit
     * @param {String} event
     * @param {any: Object} param
     * @param {Function} callback
     */
    handleOperationalBtnEvent({ event, param, callback }) {
      if (Object.prototype.toString.call(this[event]) === '[object Function]') {
        this[event]({ event, param, callback });
      } else {
        this.$message.error(`Function ${event} is not defined`);
      }
    },
    /**
     * 接收 <SaPermissionButtonGroup> handleButtonClick emit 事件
     * @param {String} funcName
     // * @param {Object} row
     * @param {Object} other 未知參數物件群
     */
    handleActionBtnEvent({ funcName, ...other }) {
      if (Object.prototype.toString.call(this[funcName]) === '[object Function]') {
        this[funcName]({ ...other });
      } else {
        this.$message.error(`Function ${funcName} is not defined`);
      }
    },
    /**
     * 通用版的 方法 不如直接 other （handleActionBtnEvent handleOperationalBtnEvent 這兩個可以移除的感覺）
     * @param {String} funcName
     // * @param {Object} row
     * @param {Object} other 未知參數物件群
     */
    handleEmitEvent({ funcName, ...other }) {
      if (Object.prototype.toString.call(this[funcName]) === '[object Function]') {
        this[funcName]({ ...other });
      } else {
        this.$message.error(`Function ${funcName} is not defined`);
      }
    },
    /**
     * 檢查勾選狀態
     * @param eventText
     * @returns {boolean} true 使用者未勾選 跳訊息
     * @returns {boolean} false 使用者有勾選  safe 往下走
     */
    checkSelectorIsEmpty(eventText) {
      if (this.getTableSelectedRows.length === 0) {
        this.$notify({
          title: '提示',
          message: `请先勾选想要${eventText}的数据！`,
          type: 'warning',
          duration: 2000,
        });
        return true;
      }
      return false;
    },
    /**
     * 批量勾選詢問事件
     * @param callback 确定後的回呼事件
     * @param eventText 文字控制項
     */
    selectorConfirmEvent({ callback, eventText }) {
      if (this.checkSelectorIsEmpty(eventText)) return false;
      // if (this.getTableSelectedRows.length === 0) {
      //   this.$notify({
      //     title: '提示',
      //     message: `请先勾选想要${eventText}的数据！`,
      //     type: 'warning',
      //     duration: 2000,
      //   });
      //   return;
      // }
      this.$confirm(`确定要${eventText}吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        callback();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: `已取消${eventText}`,
        });
      });
    },
    /**
     * saTable多頁勾選清除功能 由watch multiplePageSelect 參數來做觸發
     */
    resetSelect() {
      this.$refs?.saTable && this.$refs?.saTable.clearSelection();
    },
    resetTableHeight() {
      this.searchHeight += 1;
      setTimeout(() => {
        this.searchHeight -= 1;
      }, 500);
    },
  },
};
