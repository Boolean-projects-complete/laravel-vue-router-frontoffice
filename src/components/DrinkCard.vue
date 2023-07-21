<script>
export default {
    props: {
        objCocktail: Object,
    },
};
</script>

<template>
    <div class="card_drink d-flex flex-column justify-content-center " >
        <h1 class="text-center pt-3 pb-2">{{ objCocktail.nameDrink }}</h1>
        <img :src="objCocktail.imgURL" alt="objCocktail.nameDrink" class="img_drink mx-4" />
        <h4 class="text-center pt-2">Category:</h4>
        <h5 class="text-center p">"{{ objCocktail.category }}"</h5>
        <!-- <router-link :to="{ name: 'cocktails.show' }" class="nav-link active" aria-current="page">
            <i class="px-1 bi bi-book"></i>About Us
        </router-link> -->
    </div>
</template>

<style lang="scss" scoped>
.card_drink {
    background-color: #895128;
    color: white;

    width: 250px; 
    max-width: 30%; 
    aspect-ratio: .7;

}

.card_drink:hover {
    transition-duration: 0.5s;
    scale: 1.1;
}

.img_drink {
    border-radius: 100%;
    border: 4px solid white;
}
</style>
