<template>
  <div class="footer">
      <div class="footer__top mt-2 mb-2">
        <div class="footer__top--left">
          <ul>
            <li>Home</li>
            <li>Cloud PBX</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="footer__top--right">
          <p>Trpeyx Communications : Cloud VOIP Solutions for growing businesses</p>
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

  }
}

</style>