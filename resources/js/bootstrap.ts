/**
 * Load UIkit
 */
(<any> window).UIkit = require('uikit');
(<any> window).UIkit.use(require("uikit/dist/js/uikit-icons"));


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
import Composition from '@vue/composition-api';
import { InertiaApp } from '@inertiajs/inertia-vue';
import VueAxios from "vue-axios";
import Axios from "axios";


// Libraries to inject
// ===================

// @ts-ignore
Vue.use(InertiaApp);
Vue.use(Composition);
Vue.use(VueAxios, Axios);



// Axios tweak
// ===========

// Set 'XMLHttpRequest' as requested with so the backend can distinguish between
// normal an AJAX request.
Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// Prototype mixins
// ================

// Inject route helper.
//
// @see https://github.com/tightenco/ziggy
// @see tsconfig.json
// @see route-shims.d.ts
Vue.mixin({ methods: { route: window['route'] } });


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
