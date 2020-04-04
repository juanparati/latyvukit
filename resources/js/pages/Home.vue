<template>
    <layout>
        <div class="uk-section uk-section-small uk-section-muted">

            <div class="uk-container uk-container-expand">

                <h1>You are logged in</h1>
            </div>
        </div>
    </layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@js/shared/Layout/Layout.vue";

    @Component({
        components: {Layout}
    })
    export default class Home extends Vue {}
</script>
