<template>
    <div>
        <header uk-sticky class="uk-navbar-container uk-active">
            <topbar/>
        </header>

        <aside v-if="$page.auth.user" ref="sidebar" id="sidebar" class="uk-background-default sidebar sidebar--expanded">
            <sidebar/>
        </aside>

        <div id="content" :class="`content ${$page.auth.user ? 'content--with-sidebar' : ''}`">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Topbar from "@js/shared/Layout/Topbar.vue";
    import Sidebar from "@js/shared/Layout/Sidebar.vue";

    @Component({
        components: {Sidebar, Topbar}
    })
    export default class Layout extends Vue {

        // Vue lifecycle events
        // ====================
        mounted() {

            // Inject flag to body as soon that main layout was mounted.
            // The flag 'body--loaded' can be use by CSS in order to know
            // when to trigger animations.
            document.body.classList.add('body--loaded');
        }

    }
</script>
