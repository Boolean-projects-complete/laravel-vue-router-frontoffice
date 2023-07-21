<script>

</script>

<template>
    <div>
        <input type="text" placeholder="GIN TONIC... SPRITZ...">
        <select name="" id="">
            <option value="">CATEGORIES</option>
        </select>
        <button class="mybtn1">SEARCH</button>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

div {

    @include dfc;
    width: 100%;
    background-color: $c-bg;
    padding-top: 1.5rem;
    padding-bottom: 1.4rem;
    gap: 2rem;
    flex-wrap: wrap;
}

.mybtn1 {
    border: none;
    height: 3.5rem;
    width: 12rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
    transition: all linear .2s;
}

select {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    width: 20rem;
    padding-inline: 2rem;
    border-radius: 10px;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
    transition: all linear .2s;
}

input {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    width: 22rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
    transition: all linear .2s;
}

input::placeholder {
    color: $c-bg-txt;
    transition: all linear .2s;
}

input:hover::placeholder {
    transition: all linear .2s;
    color: white;
}

.mybtn1:hover {
    color: white;
    transition: all linear .2s;
}

select:hover {
    transition: all linear .2s;
    color: white;
}
</style>