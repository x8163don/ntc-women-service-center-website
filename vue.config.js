const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  publicPath: process.env.VUE_APP_BUILD_PATH,
  productionSourceMap: false,

  configureWebpack: config => {
    const plugins = []

    plugins.push(getCopyPlugin())

    config.plugins = [...config.plugins, ...plugins]
  }
}

function getCopyPlugin() {
  return new CopyPlugin([{ from: "CNAME", to: "" }])
}
