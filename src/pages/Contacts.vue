<script>

</script>

<template>
    <div>
        <h1>Contattaci</h1>
        <form action="">
            <label for="name">Nome</label>
            <input class="inpt" type="text" id="name">
            <label for="surname">Cognome</label>
            <input class="inpt" type="text" id="surname">
            <label for="email">Email</label>
            <input class="inpt" type="email" id="email">
            <label for="message">Corpo del messaggio</label>
            <textarea class="inpt" name="message" id="message" cols="30" rows="10"></textarea>
        </form>
        <button data-v-20ab8fd6="" class="mybtn1">INVIA</button>


    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

div {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: $c-bg;
    color: white;

    form {
        @include dfj;
        flex-direction: column;
        padding: 2rem;

        .inpt {
            background-color: rgba(242, 242, 242, 0);
            border: 2px solid $c-bg-txt;
            border-radius: 3px;
        }

        form {
            @include dfj;
            flex-direction: column;
            padding: 2rem;

            .inpt {
                background-color: rgba(242, 242, 242, 0);
                border: 2px solid $c-bg-txt;
                border-radius: 3px;
            }
        }
    }

    .mybtn1 {
        margin-left: 2rem;


    }
</style>