<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            isHover: false,
            iconButton: "",
        }
    },
    methods: {
        randomIcon () {
            const icon = ["wine-bottle", "wine-glass", "whiskey-glass", "martini-glass-empty", "martini-glass-citrus", "martini-glass", "champagne-glasses", "beer-mug-empty"]
            let rndIcon = Math.floor(Math.random() * 8);
            this.iconButton = icon[rndIcon];
        }
    },
    created() {
        this.randomIcon()
    },
}

</script>

<template>
    <div>
        <div>
            <div class="big_container">
                <div class="jumbo">
                    <button class="mybtn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions">
                        <template v-if="isHover">
                            <fa :icon="iconButton" shake size="2xl" style="color: #fff" id="buttonDrink" @mouseover="isHover = false" @mouseout="isHover = true"/>
                        </template>
                        <template v-else>
                            <fa :icon="iconButton" size="2xl" style="color: #fff" id="buttonDrink" @mouseover="isHover = false" @mouseout="isHover = true"/>
                        </template>
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
    background-color: rgba($color: #000000, $alpha: 1);
    border: none;
    opacity: 100%;
    position: fixed;
}

.mybtn:hover {
    opacity: 80%;

}

.big_container {
    @include dfc;
    background-color: $c-bg;
    padding-top: 1.5rem;
    padding-bottom: 1.4rem;
    max-width: 100%;

    .jumbo {
        display: flex;
        margin: 2rem;
        padding: 1.7rem;
        justify-content: flex-end;
        align-items: flex-start;
        background-image: url('../assets/img/jumbo.png');
        background-size: cover;
        width: 1200px;

        aspect-ratio: 1.66;

    }

}
</style>