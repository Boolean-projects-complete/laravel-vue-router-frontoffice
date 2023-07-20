<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppFooter,
        AppHeader,
    }
};
</script>

<template>
    <div class="cont">

        <header>
            <AppHeader />
        </header>

        <div class="container_main d-flex justify-content-center py-4">
            <router-view></router-view>
        </div>

    </div>
    <AppFooter />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@use './assets/styles/general.scss' as *;
@import 'bootstrap/scss/bootstrap';
</style>
