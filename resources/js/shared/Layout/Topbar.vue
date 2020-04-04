<template>
    <div class="uk-container uk-background-primary uk-container-expand">
        <nav uk-navbar>
            <div class="uk-navbar-left uk-light">

                <button v-if="$page.auth.user"
                        @click="expandCollapse"
                        type="button"
                        class="uk-navbar-toggle uk-dark" uk-navbar-toggle-icon></button>

                <a href="#" class="uk-navbar-item uk-logo">
                    Admin {{ $page.app.name }}
                </a>
            </div>

            <div class="uk-navbar-right uk-light">
                <ul class="uk-navbar-nav">

                    <li v-if="$page.auth.user" class="uk-active">
                        <a href="#"> {{ $page.auth.user.name }} &nbsp; <span uk-icon="chevron-down"></span></a>
                        <div uk-dropdown="pos: bottom-right; mode: click; offset: -17;">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-nav-header">Options</li>
                                <li><a href="#">Edit Profile</a></li>
                                <li class="uk-nav-header">Actions</li>
                                <li><a href="#">Lock</a></li>
                                <li>
                                    <inertia-link :href="route('logout').url()" method="post">Logout</inertia-link>
                                </li>
                            </ul>
                        </div>

                    </li>

                </ul>
            </div>
        </nav>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {

        // Properties
        // ==========
        public expandCollapse() : void {

            const sidebar : HTMLElement | null = (<HTMLElement> this.$parent.$refs.sidebar) || null;

            if (!sidebar)
                return;

            sidebar!.classList.toggle('sidebar--collapsed');
            sidebar!.classList.toggle('sidebar--expanded');
        }


    }
</script>
