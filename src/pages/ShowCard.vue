<script>
import axios from "axios";
import { store } from '../store';
export default {
    data() {
        return {
            store,
            cocktail: [],
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
}

</script>


<template>
    <h1>{{ cocktail.nameDrink }}</h1>
    <h2>{{ cocktail.category }}</h2>
</template>


<style lang="scss" scoped></style>