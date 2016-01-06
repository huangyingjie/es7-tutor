/*jshint node:true*/
var baseConfig = require('./webpack.config.js');
//指定publicPath
baseConfig.output.publicPath = "/static/";
//添加jsloader
baseConfig.module.loaders.push({
    test: /\.js?$/,
    exclude: /(node_modules|bower_components|static)/,
    loaders: ['babel']
});
module.exports = baseConfig;

