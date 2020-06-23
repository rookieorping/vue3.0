const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// production
const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL, // 定义项目的基本的路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包时不生成.map 文件
  devServer: {
    proxy: 'http://financedev.ekeban.com/'
  }
}
