<script>

</script>

<template>
    <div>
        <input type="text" placeholder="GIN TONIC... SPITZ...">
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

}

.mybtn1 {
    border: none;
    height: 3.5rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
}

select {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    padding-inline: 2rem;
    border-radius: 10px;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
}

input {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
}

input::placeholder {
    color: $c-bg-txt;
}

input:hover::placeholder {
    color: white;
}

.mybtn1:hover {
    color: white;
}

select:hover {
    color: white;
}
</style>