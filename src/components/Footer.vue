<template>
  <div class="footer">
      <div class="footer__top">
          <div class="bottom-nav">
            <router-link to="/#pricing" class="bottom-nav__link" v-scroll-to="'#pricing'">Plans & Pricing</router-link>
            <router-link to="/quote" class="bottom-nav__link">Get a Quote</router-link>
            <router-link to="/#contact" class="bottom-nav__link" v-scroll-to="'#contact'">Contact Us</router-link>
            <router-link to="/tos" class="bottom-nav__link">Terms & Conditions</router-link>
            <a href="https://login.ringlogix.com" class="bottom-nav__link">Login</a>
          </div>
      </div>
      <div class="footer__bottom">
        <div>&copy;2020 Trepx Inc</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.footer {
  border-top: 1px solid black;
  color: white;
  background: $primary;
  padding: 1rem 0;

  &__top {
    & .bottom-nav {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
  
      &__link {
        font-size: 1.4rem;
        padding: .7rem .5rem;
        padding-top: .3rem;

        @media(max-width: 735px) {
          font-size: 1rem;
        }
      }
    }
  }

  &__bottom {
    margin-top: 1rem;
    text-align: center;
    font-size: 2vw;
    font-style: italic;
    background: $primary;
    

    @media(max-width: 735px) {
       font-size: 3vw;
    }
  }
}



</style>