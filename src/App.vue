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
    <header>
        <AppHeader />
    </header>

    <div class="container_main d-flex justify-content-center py-4">
        <router-view></router-view>
    </div>

    <AppFooter />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@use './assets/styles/general.scss' as *;
</style>
