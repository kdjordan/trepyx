<template>
  <div class="footer">
      <div class="footer__top mt-2 pb-2">
        <div class="footer__top--left">
          <ul class="bottom-nav">
            <router-link to="/#pricing" class="header__right--link" v-scroll-to="'#pricing'">Plans & Pricing</router-link>
            <router-link to="/quote" class="header__right--link">Get a Quote</router-link>
            <router-link to="/#contact" class="header__right--link" v-scroll-to="'#contact'">Contact Us</router-link>
            <router-link to="/tos" class="bottom-nav__link">Terms & Conditions</router-link>
            <a href="https://login.ringlogix.com" class="header__right--link">Login</a>
          </ul>
        </div>
        <div class="footer__top--right">
          <p>Trepyx Communications : Cloud VOIP Solutions</p>
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
  height: 100px;
  color: white;
  background: $primary;

  &__top {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &--right {
      & p {
        margin: 0;
      }
    }

  }

  &__bottom {
    font-size: 13px;
    font-style: italic;
    background: $primary;
  }
}

.bottom-nav {
  &__link {
    color: white;
    margin: 0 .7rem;
  }
}

</style>