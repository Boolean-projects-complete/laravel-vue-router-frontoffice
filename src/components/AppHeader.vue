<script>
import AppNav from './AppNav.vue';
export default {

    components: {
        
    }
}

</script>

<template>
    <div class="big_container">
        <div class="c_ontainer">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <ul>
                <li >
                    <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                        Home
                    </router-link>
                </li>
                <li >
                    <router-link :to="{ name: 'about-us' }" class="nav-link active" aria-current="page">
                        About
                    </router-link>
                </li>
                <li >
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
    .c_ontainer{
        background-image: url('../assets/img/jumbo.png');
        background-size: cover;
        height: 400px;
        object-fit: contain;
    }
</style>