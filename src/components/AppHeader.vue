<script>
export default {

    components: {

    }
}

</script>

<template>
    <div>
        <div>
            <div class="big_container">
                <div class="jumbo">
                    <button class="mybtn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions">
                    </button>
                </div>
            </div>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about-us' }" class="nav-link active" aria-current="page">
                            About Us
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }" class="nav-link active" aria-current="page">
                            Contacs
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.mybtn {
    width: 40px;
    aspect-ratio: 1;
    background-color: black;
    border: none;
    opacity: 30%;
}

.mybtn:hover {
    opacity: 80%;

}

.big_container {
    @include dfc;
    background-color: $c-bg;
    padding-top: 1.5rem;
    padding-bottom: 1.4rem;
    width: 100%;

    .jumbo {
        display: flex;
        padding: 1.7rem;
        justify-content: flex-end;
        align-items: flex-start;
        background-image: url('../assets/img/jumbo.png');
        background-size: cover;
        width: 80%;

        aspect-ratio: 1.66;

    }

}
</style>