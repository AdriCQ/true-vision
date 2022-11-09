const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  /**
   * When deploy uncommented
   */
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/true-vision/'
  //   : '/'
})

