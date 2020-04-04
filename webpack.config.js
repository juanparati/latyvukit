// On PhpStorm, when using with laravel mix, for Alias path resolving in components you have to:
// - create a webpack.config.js file separately like:

const path = require('path');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    output: {
        publicPath: '/',
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    plugins: [
        new (require('webpack-clean-obsolete-chunks'))()
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
            '@uikit-util': path.resolve(__dirname, 'node_modules/uikit/src/js/util'),
            '@scss': path.resolve(__dirname, 'resources/sass'),
            '@js': path.resolve(__dirname, 'resources/js')
        }
    }
};

