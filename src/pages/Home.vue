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
        <div class="container_filter">
            <DrinkFilter class="filter" />
        </div>

        <div class="big_container_cards">
            <DrinkCard />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container_filter {
    max-width: 1200px;
}

.filter {
    width: 100%;
}

.big_container_cards {
    max-width: 1200px;
    margin-top: 5rem;
}
</style>