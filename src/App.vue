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

    <div class="container_main">
        <router-view></router-view>
    </div>

    <AppFooter />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
