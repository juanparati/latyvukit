import Vue from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Page from '@js/types/Page';

declare module 'vue/types/vue' {
    interface Vue {
        readonly $inertia: Inertia;
        readonly $page: Page;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        layout?: any;
    }
}

export default Vue;
