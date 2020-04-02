<template>
  <div class="header">
      <div class="header__left">
        <router-link to="/">
        <img src="../assets/logo4-comp.svg" alt="trepyx-logo" class="header__left-logo">  
        </router-link>
      </div>
      <div class="header__right">
        
          <router-link to="/" class="header__right--link">Products & Services</router-link>
          <router-link to="/" class="header__right--link">Request a Quote</router-link>
          <router-link to="/" class="header__right--link">Contact Us</router-link>
          <li><a href="https://login.ringlogix.com">Login</a></li>
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
      color: white;
      margin: 0 .7rem;
    }
  }

}

li a {
  color: white;
}

</style>