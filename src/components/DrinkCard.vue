<script>
export default {
    props: {
        objCocktail: Object,
    },
};
</script>

<template>
    <div type="button" data-bs-toggle="modal" :data-bs-target="'#' + objCocktail.id" class="card_drink d-flex flex-column justify-content-center my-3 mx-3" style="width: 350px; height: 500px">
        <h1 class="text-center pt-3 pb-2">{{ objCocktail.nameDrink }}</h1>
        <img :src="objCocktail.imgURL" alt="objCocktail.nameDrink" class="img_drink mx-4" />
        <h4 class="text-center pt-2">Category:</h4>
        <h5 class="text-center p">"{{ objCocktail.category }}"</h5>
    </div>

    <!-- <button  class="btn btn-primary" >
        Launch demo modal
    </button> -->

    <div class="modal fade" :id="objCocktail.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_drink {
    background-color: #895128;
    color: white;
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
