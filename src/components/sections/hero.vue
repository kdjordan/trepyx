<template>
  <div>
    <section class="home">
        <div class="home__container">
            <h1>Welcome to Trepyx</h1>
            <p>Flexible Telecom Solutions for the Modern Business Landscape.</p>
                <!-- <div class="container" v-scroll-to="'#second'">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div> -->
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../scss/components/chevron.scss';

    .home {
        background-image: url('../../assets/back2.svg');
        background-position: center;
        background-size: cover;
        height: 70vh;
        color: white;
        font-size: 2rem;
        letter-spacing: 1px;

        &__container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            position: relative;
            top: 20%;
            right: 20%; 

            & h1 {
                font-size: 4rem;
                letter-spacing: 1px;
            }

            & p {
                width: 40%;
                text-align: center;
            }

        }
    }
</style>