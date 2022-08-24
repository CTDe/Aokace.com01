/* eslint-disable no-dupe-keys */
const { defineConfig } = require('@vue/cli-service')


  module.exports = defineConfig({
      transpileDependencies: true,
      //publicPath: process.env.NODE_ENV === 'production' ? './' : '/', 
      publicPath:"/",
      publicPath:"./",
      lintOnSave:false,
      productionSourceMap:false,
      outputDir: 'dist',
      assetsDir: 'static',


    
  })







