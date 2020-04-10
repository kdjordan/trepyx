<template>
  <div class="header">
      <div class="header__left">
        <router-link to="/">
        <img src="../assets/logo4-comp.svg" alt="trepyx-logo" class="header__left-logo">  
        </router-link>
      </div>
      <div class="header__right">
        
          <router-link to="/#pricing" class="header__right--link" v-scroll-to="'#pricing'">Plans & Pricing</router-link>
          <router-link to="/quote/empty" class="header__right--link">Get a Quote</router-link>
          <router-link to="/#contact" class="header__right--link" v-scroll-to="'#contact'">Contact Us</router-link>
          <a href="https://login.ringlogix.com" class="header__right--link">Login</a>
          <!-- <li><a href="#" v-scroll-to="'#services'">Services</a></li>
          <li><a href="#" v-scroll-to="'#contact'">Contact</a></li> -->
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.header {
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
    }
  }

}

a {
  color: white;
}

</style>