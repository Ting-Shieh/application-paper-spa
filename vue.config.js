module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/eClaim/" : "/",
  transpileDependencies: ["quasar"],
  devServer: {
    port: 8080, 
    host: "localhost", 
    https: false,
    open: true, 
    
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        ws: true, 

        changeOrigin: true, 
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  lintOnSave: false, 
  productionSourceMap: false, 
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'eClaim'
      return args
    })
  },
};
