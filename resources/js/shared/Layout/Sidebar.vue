<template>

    <!-- Use inertia links -->
    <div class="left-nav-wrap">

        <ul data-uk-nav="" class="uk-nav uk-nav-default uk-nav-parent-icon">
            <li class="uk-nav-header">MAIN</li>
            <li>
                <a href="#">
                    Dashboard
                </a>
            </li>
        </ul>

        <ul data-uk-nav="" class="uk-nav uk-nav-default uk-nav-parent-icon">
            <li class="uk-nav-header">MENU 1</li>

            <li class="uk-parent"><a href="#">Item 1</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">List</a></li>
                    <li><a title="Schedules" href="#">New</a></li>
                </ul>
            </li>

            <li class="uk-parent"><a href="#">Item 2</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">List</a></li>
                    <li><a title="Schedules" href="#">New</a></li>
                </ul>
            </li>

            <li>
                <a href="#">
                    Item 3
                </a>
            </li>
        </ul>


    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Sidebar extends Vue {}
</script>

