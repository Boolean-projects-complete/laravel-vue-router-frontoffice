<script>
import DrinkFilter from '../components/DrinkFilter.vue';
import DrinkCard from '../components/DrinkCard.vue'


export default {
    components: {
        DrinkFilter, DrinkCard,
    }
};
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <DrinkFilter />
        <div class="">
            <DrinkCard />
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>