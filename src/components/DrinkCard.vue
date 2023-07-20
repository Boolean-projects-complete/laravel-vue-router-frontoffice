<script>
export default {
  props: {
    objCocktail: Object,
  },
};
</script>

<template>
  <div
    class="card_drink d-flex flex-column justify-content-center my-3 mx-3"
    style="width: 350px; height: 500px"
  >
    <h1 class="text-center pt-3 pb-2">{{ objCocktail.nameDrink }}</h1>
    <img
      :src="objCocktail.imgURL"
      alt="objCocktail.nameDrink"
      class="img_drink mx-4"
    />
    <h4 class="text-center pt-2">Category:</h4>
    <h5 class="text-center p">"{{ objCocktail.category }}"</h5>
  </div>
</template>

<style lang="scss" scoped>
.card_drink {
  background-color: #895128;
  color: white;
}

.img_drink {
  border-radius: 100%;
  border: 4px solid white;
}
</style>
