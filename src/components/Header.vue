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
        <input type="checkbox" class="mobile-navigation__checkbox" id="navi-toggle">
          <label for="navi-toggle" class="mobile-navigation__button">
              <span class="mobile-navigation__icon">&nbsp;</span>
          </label>
        <div  class="mobile-navigation__background"></div>
        
      
          <nav class="mobile-navigation__nav">
            <ul class="mobile-navigation__list">
              <li class="mobile-navigation__items"><a href="/#pricing" class="mobile-navigation__link">01&nbsp;&nbsp;Plans & Pricing</a></li>
              <li class="mobile-navigation__items"><a href="/quote" class="mobile-navigation__link">02&nbsp;&nbsp;Get a Quote</a></li>
              <li class="mobile-navigation__items"><a href="/#contact" class="mobile-navigation__link">03&nbsp;&nbsp;Contact Us</a></li>
              <li class="mobile-navigation__items"><a href="https://login.ringlogix.com" class="mobile-navigation__link">04&nbsp;&nbsp;Login</a></li>
            </ul>
        </nav>
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

.mobile-navigation {
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
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        // @include respond(tab-port) {
        //     top: 4.5rem;
        //     right: 4.5rem;
        // }

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
            font-size: 2rem;
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

// .link-container {
//   z-index: 2;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
  
//   & li {
//     display: block;
//   }

//   & .link {
//     font-size: 2rem;
//     margin: 1rem 0;
//     display: block;
//   }

//   & .link:hover {
//     color: $secondary;
//   }
// }

// .background {
  
//   &Links {
//     opacity: 1 !important;
//   }

//   &Active {
//     background-image: radial-gradient($primary, $secondary);
//     opacity: 1;
//     transform: scale(90) !important;
//     transition: all .8s cubic-bezier(0.86, 0, 0.07, 1) !important;
//   }

//   &Icon{

//     &:hover .top, &:hover .bot{
//       transition: all .4s;
//       background: $secondary !important;
//     }

//     &:hover .mid {
//       color: transparent;
//     }

//     & .top {
//       z-index: 2;
//       transform-origin: center;
//       transform: rotate(135deg) !important;
//       position: relative;
//       top: 1rem;
//     }

//      & .mid {
//        z-index: 2;
//        background: transparent !important;
//        transition: all .1s;

//     }
//     & .bot {
//       z-index: 2;
//       transform-origin: center;
//       transform: rotate(-135deg) !important;
//       position: relative;
//       bottom: .4rem;
//     }
//   }
// }

// .mobile-navigation {
//     @media(min-width: 735px) {
//         display: none;
//     }

//     &__checkbox {
//       z-index: 2;
//       display: none;
//     }

//     &__container {
//       cursor: pointer;
//       display: flex;
//       flex-direction: column;
//       height: 1.5rem;
//       justify-content: space-between;
//       z-index: 3;
//       overflow: hidden;
//     }

//     &__background {
//       z-index: 2;
//       display: block;
//       position: fixed;
//       top: 1rem;
//       right: 1rem;
//       height: 2rem;
//       width: 2rem;
//       border-radius: 50%;
//       transform: scale(1);
//       transition: all .8s cubic-bezier(0.86, 0, 0.07, 1) !important;
//     }

//     &__icon {
//       display: block;
//       height: 2px;
//       width: 40px;
//       background: white;
//     }

//     //FUNCTIONALITY
//     &__checkbox:checked ~ &__background {
//         transform: scale(80);
//     }

//     &__checkbox:checked ~ &__nav {
//         opacity: 1;
//         width: 100%;
//     }
// }


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