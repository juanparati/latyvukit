<template>
    <layout>
        <div class="uk-section uk-section-small  uk-flex uk-flex-center">
            <div class="uk-card uk-card-default uk-card-body uk-width-large">
                <h2 class="uk-card-title">Log In</h2>
                <form @submit.prevent="submit" class="uk-form-stacked">

                    <div class="uk-margin">
                        <label for="email" class="uk-form-label">
                            E-Mail Address
                        </label>
                        <div class="uk-form-control">
                            <input v-model="loginForm.email"
                                   :class="`uk-input ${$page.errors.hasOwnProperty('email') ? 'uk-form-danger' : ''}`"
                                   name="email"
                                   id="email"
                                   type="email"
                                   required
                                   autocomplete="email" autofocus>

                            <span v-if="$page.errors.hasOwnProperty('email')" class="uk-text-danger">{{ $page.errors.email[0] }}</span>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label for="password" class="uk-form-label">
                            Password
                        </label>
                        <div class="uk-form-control">
                            <input v-model="loginForm.password"
                                   id="password"
                                   type="password"
                                   class="uk-input"
                                   name="password"
                                   required
                                   autocomplete="current-password">

                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-form-control">
                            <input v-model="loginForm.remember"
                                   class="uk-checkbox"
                                   type="checkbox"
                                   name="remember"
                                   id="remember" >
                            <label for="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-form-control">
                            <button
                                type="submit"
                                class="uk-button uk-button-primary">
                                Log In
                            </button>

                            <a v-if="hasPasswordRequestRoute" class="uk-button uk-button-link uk-margin-left" :href="route('password.request').url()">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@js/shared/Layout/Layout.vue";

    interface LoginForm {
        email : string,
        password: string,
        remember: boolean
    }

    @Component({
        components: {Layout}
    })
    export default class Login extends Vue {

        // Mutable properties
        // ==================
        protected loginForm : LoginForm = {
            email :    '',
            password : '',
            remember : false
        };

        protected sending : boolean = false;


        // Methods
        // =======

        /**
         * Submit the form.
         */
        protected submit() : void {
            this.sending = true;

            this.$inertia.post(this.route('login').url(), this.loginForm)
                .then(() => this.sending = false);
        }


        /**
         * Check if password request is available
         */
        protected hasPasswordRequestRoute() : boolean {

            try {
                this.route('password.request');
            }
            catch (e) {
                return false;
            }

           return true;
        }

    }
</script>
