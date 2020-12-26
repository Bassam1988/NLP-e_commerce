//import webpack from 'webpack';
var webpack = require('webpack');
module.exports = {
    resolve:{fallback: { "url": false }},
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            }
        ],

    }
}

new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
