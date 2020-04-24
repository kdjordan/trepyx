<template>
<div class="header">
    <div class="header__left">
      <router-link to="/">
        <img src="../assets/logo4-comp.svg" alt="trepyx-logo" class="header__left-logo">  
      </router-link>
    </div>
    <div class="header__right">
      <router-link to="/#pricing" class="header__right--link" v-scroll-to="'#pricing'">Plans & Pricing</router-link>
      <router-link to="/quote" class="header__right--link">Get a Quote</router-link>
      <router-link to="/#contact" class="header__right--link" v-scroll-to="'#contact'">Contact Us</router-link>
      <a href="https://login.ringlogix.com" class="header__right--link">Login</a>    

      <div class="mobile-navigation"  @click.prevent="toggleNavigation">
          <div class="mobile-navigation__container" :class="{backgroundIcon: getMobileActive}" >
            <div class="mobile-navigation__icon top"></div>
            <div class="mobile-navigation__icon mid"></div>
            <div class="mobile-navigation__icon bot"></div>
          </div>
        
        <div  class="mobile-navigation__background" :class="{backgroundActive: getMobileActive}"></div>

          <div v-if="getDisplayLinks" class="link-container">
            <a href="/#pricing" class="link"  @click.stop="toggleNavigation">Plans & Pricing</a>
            <a href="/quote" class="link" @click.stop="toggleNavigation">Get a Quote</a>
            <a href="/#contact" class="link"  @click.stop="toggleNavigation">Contact Us</a>
            <a href="https://login.ringlogix.com" class="link" @click.stop="toggleNavigation">Login</a>    
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
computed: {
  ...mapGetters({
      getMobileActive: 'getMobileActive',
      getDisplayLinks: 'getDisplayLinks'
  })
},
methods: {
  mobileNavClick() {
    this.$store.commit('toggleNavigation')
  },
  toggleNavigation(){
    console.log('clicked')
    if (this.getMobileActive) {
      this.$store.commit('toggleDisplayLinks')
      this.$store.commit('toggleNavigation')
    } else {
      window.scrollTo(0,0)
      this.$store.commit('toggleNavigation')
      setTimeout(() => {
        this.$store.commit('toggleDisplayLinks')
      }, 500)
    }

  }
}
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.link-container {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  z-index: 2;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  & .link:hover {
    color: $secondary;
  }
}

.background {
  
  &Links {
    opacity: 1 !important;
  }

  &Active {
    z-index: 1 !important;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: relative;
    top: 1.5rem;
    right: 2rem;
    background-image: radial-gradient($primary, $secondary);
    opacity: 1;
    transform: scale(600) !important;
  }

  &Icon{

    &:hover .top, &:hover .bot{
      transition: all .4s;
      background: $secondary !important;
    }

    &:hover .mid {
      color: transparent;
    }

    & .top {
      z-index: 2;
      transform-origin: center;
      transform: rotate(135deg) !important;
      position: relative;
      top: 1rem;
    }

     & .mid {
       z-index: 2;
       background: transparent !important;
       transition: all .1s;

    }
    & .bot {
      z-index: 2;
      transform-origin: center;
      transform: rotate(-135deg) !important;
      position: relative;
      bottom: .4rem;
    }
  }
}

.mobile-navigation {
    @media(min-width: 735px) {
        display: none;
    }

    &__container {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 1.5rem;
      justify-content: space-between;
      z-index: 3;
    }

    &__background {
      position: relative;
      top: -1rem;
      right: 0rem;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      transform: scale(1);
      transition: all .8s cubic-bezier(0.86, 0, 0.07, 1) !important;
    }

    &__icon {
      display: block;
      height: 2px;
      width: 40px;
      background: white;
    }
}


.header {
  background: $primary-lte;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid $primary-drk;

  &__left {
    padding-left: 1rem;
    
    &-logo {
      width: 25%;
      min-width: 10rem;
      max-width: 20rem;
    }
  }

  &__right {
    padding-right: 1rem;

    &--link {
      cursor: pointer;
      color: white;
      margin: 0 .7rem;

      @media(max-width: 735px) {
        display: none;
      }
    }
  }
}

a {
  color: white;
}

</style>