<template>
  <div class="header">
      <div class="header__left">
        <img src="../assets/logo.svg" alt="" class="trepyx-logo">
      </div>
      <div class="header__right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cloud PBX</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
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
      width: 180px;
    }
  }

}

li a {
  color: white;
}

</style>