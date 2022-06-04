const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  productionSourceMap: false,
  devServer: { port: 3000 },
  chainWebpack: (config) => config.optimization.minimize(false),
});
