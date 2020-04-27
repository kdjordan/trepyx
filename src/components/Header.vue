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

      <div class="mobile-navigation">
        <input type="checkbox" class="mobile-navigation__checkbox" id="navi-toggle" v-model="check">
          <label for="navi-toggle" class="mobile-navigation__button">
              <span class="mobile-navigation__icon">&nbsp;</span>
          </label>
        <div  class="mobile-navigation__background"></div>
        
      
          <nav class="mobile-navigation__nav">
            <ul class="mobile-navigation__list">
              <li class="mobile-navigation__items" @click.prevent="mobileNavClick('price')"><a href="/#pricing" class="mobile-navigation__link">01&nbsp;&nbsp;Plans & Pricing</a></li>
              <li class="mobile-navigation__items" @click.prevent="mobileNavClick('quote')"><a href="/quote" class="mobile-navigation__link">02&nbsp;&nbsp;Get a Quote</a></li>
              <li class="mobile-navigation__items" @click.prevent="mobileNavClick('contact')"><a href="/#contact" class="mobile-navigation__link">03&nbsp;&nbsp;Contact Us</a></li>
              <li class="mobile-navigation__items" @click.prevent="mobileNavClick('login')"><a href="https://login.ringlogix.com" class="mobile-navigation__link">04&nbsp;&nbsp;Login</a></li>
            </ul>
        </nav>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueScrollTo from 'vue-scrollto'

export default {
data() {
  return {
    check: null
  }
},
methods: {
  mobileNavClick(location) {
    this.check = false
    // const theScroller = scroller()

    if (location == 'price') {
      if (this.$route.path == '/') {
         setTimeout(() => {
          VueScrollTo.scrollTo('#pricing')
      }, 1000)
      } else {
        setTimeout(() => {
          this.$router.push('/')
          setTimeout(() => {
            VueScrollTo.scrollTo('#pricing')
          }, 1000)
        }, 1000)
      }
    } else if (location == 'quote') {
      setTimeout(() => {
        this.$router.push({path: '/quote'})
      }, 1000)
    } else if (location == 'contact') {
      if (this.$route.path == '/') {
         setTimeout(() => {
          VueScrollTo.scrollTo('#contact')
      }, 1000)
      } else {
        setTimeout(() => {
          this.$router.push('/')
          setTimeout(() => {
            VueScrollTo.scrollTo('#contact')
          }, 1000)
        }, 1000)
      }
    } else {
      setTimeout(() => {
        window.location.href = 'https://login.ringlogix.com'
      }, 1000)
    }
  }
}
}

</script>

<style lang="scss">
@import '../scss/variables.scss';

.mobile-navigation {

      @media(min-width: 735px) {
        display: none; 
      }

      &__checkbox {
        display: none;
    }

    &__button {
        background-color: white;
        height: 3rem;
        width: 3rem;
        position: fixed;
        top: .5rem;
        right: 1rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(black, .1);
        text-align: center;
        cursor: pointer;

        // @include respond(tab-port) {
        //     top: 4rem;
        //     right: 4rem;
        // }

        // @include respond(phone) {
        //     top: 3rem;
        //     right: 3rem;
        // }
    }

    &__background {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        position: fixed;
        top: 1rem;
        right: 1.5rem;
        background-image: radial-gradient($primary, $secondary);
        z-index: 1499;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

         @media(max-width: 500px) {
          
        }

        // @include respond(phone) {
        //     top: 3.5rem;
        //     right: 3.5rem;
        // }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;

        & li {
          display: block;
        }
    }

    &__item {
        margin: 1rem;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
            padding: 1rem 2rem;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }
        }
        
        &:hover,
        &:active {
            background-position: 100%;
            color: $primary;
            transform: translateX(1rem);
        }
    }


    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }


    //ICON
    &__icon {
        position: relative;
        margin-top: 1.5rem;

        &,
        &::before,
        &::after {
            width: 2rem;
            height: 2px;
            background-color: $secondary;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.4rem; }
        &::after { top: .4rem; }
    }

    &__button:hover &__icon::before {
        top: -.7rem;
    }

    &__button:hover &__icon::after {
        top: .7rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
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