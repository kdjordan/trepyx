<template>
  <div class="phones">
      <!-- <div class="phones__title">Partner Phone Systems</div>  -->
    <div class="img-container">
      <div class="img-container--top">
        <img src="../../assets/phones/cisco.png" alt="">
        <img src="../../assets/phones/fanvil.png" alt="">
        <img src="../../assets/phones/yealink.png" alt="">
        <img src="../../assets/phones/vtech.png" alt="">
      </div>
      <div class="img-container--bottom">
        <img src="../../assets/phones/gstream.png" alt="">
        <img src="../../assets/phones/polycom.png" alt="">
        <img src="../../assets/phones/panasonic.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/typography.scss';

.phones {
    margin-top: 2rem;
    
  &__title {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: grey;
  }
}

.img-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & img {
    max-width: 10rem;
    margin: 0 1rem;
    filter: opacity(40%);
  }

  &--top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  &--bottom {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}

</style>