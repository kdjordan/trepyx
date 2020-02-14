<template>
  <div>
    <section class="home">
        <div class="home__container">
            <h1>Welcome to Trepyx</h1><br />
            <h2>Cloud Based PBX Provider</h2>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .home {
        background-image: url('../../assets/back3-5-comp.svg');
        background-position: center;
        background-size: cover;
        height: 80vh;
        color: white;
        font-size: 18px;
        letter-spacing: 1px;

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%); 
        width: 100%;

        & h1 {
            font-size: 80px;
            letter-spacing: 3px;
        }

    }
    }
</style>