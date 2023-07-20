<script>

</script>

<template>
    <footer>
        <div class="container_footer">
            <p>A project made by: AntonioNicolaci Paolo Falco Vincenzo Minardi, Cristian Lazzari, Gianluca Giardella e
                Renato
                Taccogna...
            </p>
        </div>

    </footer>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


.container_footer {
    max-width: 1200px
}

footer {
    @include dfc;
    background-color: $c-bg-f;
    color: white;
    padding: 1.5rem;
    text-align: center;
}
</style>
