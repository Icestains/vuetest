const webpack = require("webpack");

module.exports = {
    css: {
        sourceMap: false,
    },
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuetest/'
        : '/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
}