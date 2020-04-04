
const mix           = require('laravel-mix');
const webpackConfig = require('./webpack.config.js');


/*
 |--------------------------------------------------------------------------
 | Webpack tunning.
 |--------------------------------------------------------------------------
 |
 | Use the file webpack.config.js, so IDE can recognize the alias paths.
 |--------------------------------------------------------------------------
 */
mix.webpackConfig(webpackConfig);


/*
 |--------------------------------------------------------------------------
 | Babel config
 |--------------------------------------------------------------------------
 |
 | Override .babelrc
 |--------------------------------------------------------------------------
 */
mix.babelConfig({
    plugins: [
        '@babel/plugin-syntax-dynamic-import'
    ]
});


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');


/*
 |--------------------------------------------------------------------------
 | Localization
 |--------------------------------------------------------------------------
 |
 | Uncomment the following line if you require localization.
 | It requires laravel-vue-lang/mix.
 */
//mix.lang();



/*
 |--------------------------------------------------------------------------
 | Environment behaviour
 |--------------------------------------------------------------------------
 |
 | Depending of the environment you may require a different behaviour.
 */
if (mix.inProduction()) {
    mix.version()
       .disableNotifications();
}
else {
    console.log('📃 Source maps produced!');
    mix.sourceMaps();
}
