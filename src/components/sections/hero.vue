<template>
  <div>
    <section class="home">
        <div class="home__container">
            <h1 class="mb-2">Welcome to Trepyx</h1>
            <p :class="{hidden: getHidden}">{{getMssg}}</p>
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
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getMssg: 'getMssg',
            getHidden: 'getHidden'
        })
    },
    mounted() {
        if(this.$store.state.heroInterval == null) {
            this.$store.dispatch('startHeroInterval')
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/components/chevron.scss';


.hidden {
    opacity: 0;
    transition: all .8s ease;
}

.home {
    background-image: url('../../assets/1back.svg');
    background-position: center;
    background-size: cover;
    padding: 8rem 0;
    // height: 40vh;
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
            padding: 1rem 2rem;
            text-align: center;
            font-weight: lighter;
            font-size: 1.7rem;
            font-style: italic;
            // border: 1px solid white;
            border-radius: .5rem;
        }

    }
}
</style>