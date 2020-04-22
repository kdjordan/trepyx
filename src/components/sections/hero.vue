<template>
  <div>
    <section class="home">
        <div class="home__container">
            <h1>Welcome to Trepyx</h1>
            <p :class="{hidden: getHidden}">{{getMssg}}</p>
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
    background-position: right;
    background-size: cover;
    color: white;
    height: 40vh;
    letter-spacing: 1px;

    @media(max-width: 710px) {
        height: 30vh;
    }

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        top: 6vh;
        right: 10vw; 

        @media(max-width: 710px) {
            text-align: center;
            top: 1vh;
            right: 0vw;
        }

        & h1 {
            font-size: 6vw;
            letter-spacing: 1px;

            @media(max-width: 710px) {
                font-size: 7vw;
            }
        }

        & p {
            text-align: center;
            font-weight: lighter;
            font-size: 3vw;
            font-style: italic;
            border-radius: .5rem;

             @media(max-width: 710px) {
                 font-size: 4vw;
                 padding: 0;
            }
        }

    }
}
</style>