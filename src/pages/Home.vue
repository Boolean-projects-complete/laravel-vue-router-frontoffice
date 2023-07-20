<script>
import DrinkFilter from '../components/DrinkFilter.vue';


export default {
    components: {
        DrinkFilter,
    }
};
</script>

<template>
    <DrinkFilter class="filter" />

</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
*{
    padding: 0;
}
</style>