const path = require('path');
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
    config.resolve.alias.set('@', path.join(__dirname, './src'));

  },
  
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.svg$/,
  //         loader: "vue-svg-loader",
  //       },
  //     ],
  //   },
  // },
};


function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}