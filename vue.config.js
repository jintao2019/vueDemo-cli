const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "../" : "/",
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@api", resolve("src/api"))
      .set("@utils", resolve("src/utils"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.18.61.57:8081/api",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
