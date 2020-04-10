/**
 * Load UIkit
 */
window['UIkit'] = require('uikit');
window['UIkit'].use(require("uikit/dist/js/uikit-icons"));


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// (<any> window).Pusher = require('pusher-js');

// (<any> window).Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });


/**
 * Load and initialize Vue with InertiaJS
 */
import Vue from 'vue';


// Vue composition
// ===============
import Composition from '@vue/composition-api';

// It provides compatibility with the new Vue 3.x composition library
Vue.use(Composition);

import Component from 'vue-class-component';

// Register additional component hooks
Component.registerHooks([
    'setup'
]);


// Initialize Axios
// ================
import VueAxios from "vue-axios";
import Axios from "axios";

// InertiaJS use also axios, so it's important initialize Axios before than InertiaJS is initialized
// in order to avoid some conflicts.
Vue.use(VueAxios, Axios);

// Set 'XMLHttpRequest' as requested with so the backend can distinguish between
// normal an AJAX request.
Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// User CSRF
Vue.axios.defaults.withCredentials = true;


// Inject InertiaJS
// ================
import { InertiaApp } from '@inertiajs/inertia-vue';

// @ts-ignore
Vue.use(InertiaApp);


// Prototype mixins
// ================

// Inject route and UIKit helpers.
//
// @see https://github.com/tightenco/ziggy
// @see tsconfig.json
// @see route-shims.d.ts
Vue.mixin({
    methods: {
        route: window['route'],
        uikit: window['UIkit'],
    }
});



// Initialize App
// ==============
const app : HTMLElement = document.getElementById('app');

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page!),
                resolveComponent: (name: string) => import(`./pages/${name}`).then((module) => {
                    const component = module;

                    console.log(component);

                    return component.default;
                }),
            },
        }),
}).$mount(app);
