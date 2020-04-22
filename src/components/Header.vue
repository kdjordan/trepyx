<template>
<div>
  <!-- <div class="mobile-navigation">
    <div class="mobile-navigation__container" @click.prevent="toggleNavigation">
      <div class="mobile-navigation__icon" :class="{backgroundIcon: getMobileActive}" >&nbsp;</div>
    </div>
    <div  class="mobile-navigation__background" :class="{backgroundActive: getMobileActive}"></div>
      <div v-if="getDisplayLinks" class="link-container">
        <a href="/#pricing" class="link"  @click="toggleNavigation">Plans & Pricing</a>
        <router-link to="/quote" class="link" @click.prevent="toggleNavigation">Get a Quote</router-link>
        <router-link to="/#contact" class="link" v-scroll-to="'#contact'" @click.prevent="toggleNavigation">Contact Us</router-link>
        <a href="https://login.ringlogix.com" class="link" @click.prevent="toggleNavigation">Login</a>    
    </div>
  </div> -->
  <div class="header">
      <div class="header__left">
        <router-link to="/">
        <img src="../assets/logo4-comp.svg" alt="trepyx-logo" class="header__left-logo">  
        </router-link>
      </div>
      <div class="header__right">
          <router-link to="/#pricing" class="header__right--link">Plans & Pricing</router-link>
          <router-link to="/quote" class="header__right--link">Get a Quote</router-link>
          <router-link to="/#contact" class="header__right--link" v-scroll-to="'#contact'">Contact Us</router-link>
          <a href="https://login.ringlogix.com" class="header__right--link">Login</a>    

    <div class="mobile-navigation">
      
        <div class="mobile-navigation__container" @click.prevent="toggleNavigation" :class="{backgroundIcon: getMobileActive}" >
          <div class="mobile-navigation__icon top"></div>
          <div class="mobile-navigation__icon mid"></div>
          <div class="mobile-navigation__icon bot"></div>
        </div>
      
      <div  class="mobile-navigation__background" :class="{backgroundActive: getMobileActive}"></div>

        <div v-if="getDisplayLinks" class="link-container">
          <a href="/#pricing" class="link"  @click="toggleNavigation">Plans & Pricing</a>
          <a href="/quote" class="link" @click="toggleNavigation">Get a Quote</a>
          <a href="/#contact" class="link"  @click="toggleNavigation">Contact Us</a>
          <a href="https://login.ringlogix.com" class="link" @click="toggleNavigation">Login</a>    
      </div>
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
      }, 300)
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
}

.background {
  
  &Links {
    opacity: 1 !important;
  }

  &Active {
    z-index: 1 !important;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: relative;
    top: 1.5rem;
    right: 2rem;
    background-image: radial-gradient($primary, $secondary);
    opacity: 1;
    transform: scale(220) !important;
    transition: transform .6s cubic-bezier(0.86, 0, 0.07, 1) !important;
  }

  &Icon{
    margin-top: 2rem;

    &:hover {
      height: 1.5rem !important;
    }

    &:hover .top, &:hover .bot{
        background: $color2 !important;
      }

    & .top {
      z-index: 2;
      transform: rotate(135deg) !important;
      position: relative;
      top: 1rem;
    }

     & .mid {
       z-index: 2;
       background: transparent;

    }
    & .bot {
      z-index: 2;
      transform: rotate(-135deg) !important;
      position: relative;
      bottom: .3rem;
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
      z-index: 2;
      transition: all .2s;

      &:hover  {
        height: 1.8rem;


      }
    }

    &__background {
      transform: scale(0);
      transition: transform .6s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &__icon {
      display: block;
      height: .2rem;
      width: 2rem;
      background: white;
      transition: all .3s cubic-bezier(0.86, 0, 0.07, 1);

      & .top {
        transition: all .2s;
      }

      & .bot {
        transition: all .2s;
      }
    }
}


.header {
  width: 100%;
  background: $primary-lte;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 65px;
  padding: 0 50px;
  border-bottom: 1px solid $primary-drk;

  &__left {

    &-logo { 
      margin-top: 10px;
      width: 160px;
    }
  }

  &__right {

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