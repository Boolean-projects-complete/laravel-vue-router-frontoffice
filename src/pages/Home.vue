<script>
import DrinkFilter from "../components/DrinkFilter.vue";
import DrinkCard from "../components/DrinkCard.vue";
import axios from "axios";


export default {
    components: {
        DrinkFilter,
        DrinkCard,
    },
    data() {
        return {
            arrCocktails: [],
        };
    },
    methods: {
        getCocktails() {
            axios.get("http://localhost:8000/api/cocktails").then((response) => {
                this.arrCocktails = response.data.data;
            });
        },
    },
    created() {
        this.getCocktails();
    },
};
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <DrinkFilter class="filter" />

        <div class="big_container_cards">
            <div class="container_card d-flex justify-content-center">
                <DrinkCard v-for="cocktail in arrCocktails" :key="cocktail.id" :objCocktail="cocktail" />
            </div>
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
    margin-top: 3rem;
    padding-bottom: 3rem;
}

.container_card {
    display: flex;
    flex-wrap: wrap;
}
</style>
