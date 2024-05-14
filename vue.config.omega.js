const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const defaultSettings = require('./src/settings.js');
// const open = require('opn');//打开浏览器
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// 產生版本號檔案static/
const packageVersion = require('./package.json').version;

const gitRevisionPlugin = new GitRevisionPlugin();
let gitCommitHash = gitRevisionPlugin.commithash();
gitCommitHash = gitCommitHash && gitCommitHash.substring(0, 7);
// end //

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 为支撑多子系统，编译方式有所改变：
// 本地使用 npm run start:cicd
// 编译使用 npm run build:dev src/cicdSystem/main.js
//

/**
 * 获取环境变量 使用 npm_lifecycle_event 來判斷系統參數 systemKey
 * 1. 影響web meta title
 * 2. ４０１跳轉規則
 * 3. proxyUrl選用
 * 4. SYSTEM_KEY值
 * @type {string|string}
 */
console.log('npm_config_argv', process.env.npm_config_argv);
const code = `${process.env.npm_lifecycle_event}`.split(':')[1] || 'domain_dev';
let systemKey = `${code}`.split('_')[0] || 'domain';
Object.prototype.hasOwnProperty.call(defaultSettings.titleObject, systemKey) || (systemKey = 'demo');
const buildEnv = `${code}`.split('_')[1] || 'dev';
const proxyUrl = defaultSettings.titleObject[systemKey].proxyUrl[buildEnv.replace(/frontend/g, 'prod')] || 'http://domain.bagunai.com/';
console.log('It is running go', process.env.npm_lifecycle_event);
console.log(`systemKey: ${systemKey}`);
console.log(`proxyUrl: ${proxyUrl}`);
console.log(`ENV: ${process.env.NODE_ENV}`);
const name = defaultSettings.titleObject[systemKey].title || '域名系统'; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527; // dev port
const host = buildEnv === 'dev' ? 'local.bagunai.com' : 'local.bstops.com'; // 'localhost'; //

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // pages: {
  //   index: {
  //     entry: entryFile,
  //   }
  // },
  devServer: {
    port,
    open: true,
    disableHostCheck: true,
    host,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api/v1/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
        // logLevel: 'debug',
      },
      '/web/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
        // logLevel: 'debug',
      },
      '/common/cmdb/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
        // logLevel: 'debug',
      },
      '/common/rent/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
        // logLevel: 'debug',
      },
      '/common/server/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
        // logLevel: 'debug',
      },
      // "/api/v1/*":{
      //   target: 'http://127.0.0.1:8000',
      //   changeOrigin: true,
      //   secure: false,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: ''
      //   }
      // },
      // '/theme.css': {
      //   target: `http://domain.dev.bagunai.com`,
      //   changeOrigin: true,
      // },
      // '/common/*': {
      //   // "target": "http://devtest.pai9.net",
      //   // "target": "http://tcmdb.pai9.net",
      //   // "target": "http://cloud.dev.bagunai.com",
      //   // "target": "http://c.pai9.net",
      //   // "target": "http://stg-c.pai9.net",
      //   // 'target': 'http://cmdb.dev.bagunai.com',
      //   target: 'http://tool.pai9.net',
      //   changeOrigin: true,
      //   secure: false,
      // },
    },

    after(app, server) {
      // start chrome http://www.baidu.com
      // open("http://local.pai9.net:"+port);
      // require('./mock/mock-server.js');
    },

  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    // plugins: [ new CopyWebpackPlugin([ { from: './src/styles/theme.css' } ]) ],
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'));
    config.resolve.alias.set('@demoPage', resolve('src/platforms/demoSystem/views/demo/default-page'));
    config.resolve.alias.set('@demoSvgPage', resolve('src/platforms/demoSystem/views/demo/svg-demo'));
    config.resolve.alias.set('@demoColorPage', resolve('src/platforms/demoSystem/views/demo/color-demo'));
    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test

    // set svg-sprite-
    // loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(
        process.env.NODE_ENV === 'development',
        (config) => config.devtool('cheap-source-map'),
      );

    config
      .when(
        process.env.NODE_ENV !== 'development',
        (config) => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/,
            }])
            .end();
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true,
                },
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial', // only package third parties that are initially dependent
                },
                utilityVendor: {
                  name: 'utilityVendor',
                  test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
                  priority: 15,
                  enforce: true,
                  reuseExistingChunk: true,
                },
                utilityEChart: {
                  name: 'utilityEChart',
                  test: /[\\/]node_modules[\\/](echarts)[\\/]/,
                  priority: 16,
                  enforce: true,
                  reuseExistingChunk: true,
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                },
                styles: {
                  name: 'styles',
                  test: /\.s?css$/,
                  chunks: 'all',
                  priority: 30,
                  enforce: true,
                  reuseExistingChunk: true,
                },
              },
            });
          config.optimization.runtimeChunk('single');
        },
      );
    // 減少lodash的bundle size
    config.plugin('lodash-replace').use(new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }));
    // define 'VUE_APP_GIT_COMMIT_HASH', 'VUE_APP_PACKAGE_VERSION'
    config.plugin('define').tap((args) => {
      args[0]['process.env'].VUE_YAPI_BASE_PATH = JSON.stringify(defaultSettings.titleObject[systemKey].VUE_YAPI_BASE_PATH || '');
      args[0]['process.env'].VUE_APP_GIT_COMMIT_HASH = JSON.stringify(gitCommitHash);
      args[0]['process.env'].VUE_APP_PACKAGE_VERSION = JSON.stringify(packageVersion);
      args[0]['process.env'].SYSTEM_KEY = JSON.stringify(systemKey);
      args[0]['process.env'].SYSTEM_TITLE = JSON.stringify(name);
      return args;
    });
    // 在html加入版號
    config.plugin('html').tap((args) => {
      args[0].GIT_COMMIT_HASH = JSON.stringify(gitCommitHash);
      args[0].PACKAGE_VERSION = JSON.stringify(packageVersion);
      return args;
    });
    // 打包後 移除console
    config.optimization
      .minimizer('terser')
      .tap((args) => {
        if (process.env.NODE_ENV === 'production') {
          args[0].terserOptions.compress.drop_console = true;
          args[0].terserOptions.compress.drop_debugger = true;
        }
        return args;
      });

    // 添加 webpack config['copy'] 檔案搬移邏輯 注意 預設的public 會被覆寫 有需要的話要加回來
    config.when(
      process.env.NODE_ENV === 'production',
      (config) => {
        switch (systemKey) {
          case 'threeSec':
            config.plugin('copy').use(CopyWebpackPlugin, [[
              { from: 'public', to: '' },
              // { from: resolve(`src/static/${systemKey}System`), to: 'static' },
              { from: resolve(`src/platforms/${systemKey}System/static/js`), to: 'static/js' },
            ]]);
            break;
          default:
            break;
        }
      },
    );
  },
};
