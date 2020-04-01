<template>
  <div class="footer">
      <div class="footer__top mt-2 mb-2">
        <div class="footer__top--left">
          <ul class="bottom-nav">
            <router-link to="/" class="bottom-nav__link">Home</router-link>
            <router-link to="/tos" class="bottom-nav__link">Cloud PBX</router-link>
            <router-link to="/tos" class="bottom-nav__link">Services</router-link>
            <router-link to="/tos" class="bottom-nav__link">Terms & Conditions</router-link>
            <router-link to="/tos" class="bottom-nav__link">Contact</router-link>
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
  border-top: 1px solid $primary;
  height: 100px;

  &__top {
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  &__bottom {
    font-size: 13px;
    font-style: italic;
  }
}

.bottom-nav {
  &__link {
    margin: 0 .7rem;
  }
}

</style>