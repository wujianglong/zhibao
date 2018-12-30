module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 基本路径
  baseUrl: "/zb/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"] // 通用选择器
          })
        ]
      }
    },
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  pluginOptions: {
    // ...
  }
};