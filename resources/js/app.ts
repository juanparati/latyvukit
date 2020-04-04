/**
 * Main script file entrypoint.
 */
require('./bootstrap');


// It forces the usage of scss preprocessor
// It's a workaround for https://github.com/JeffreyWay/laravel-mix/issues/2064
require('@scss/fake.scss');
