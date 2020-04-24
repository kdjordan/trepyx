<template>
  <div class="phones">
    <div class="img-container">
      <div class="img-container--top">
        <img src="../../assets/phones/cisco.jpg" alt="trepyx phone systems">
        <img src="../../assets/phones/fanvil.jpg" alt="trepyx phone systems">
        <img src="../../assets/phones/yealink.jpg" alt="trepyx phone systems">
        <img src="../../assets/phones/vtech.jpg" alt="trepyx phone systems">
      </div>
      <div class="img-container--bottom">
        <img src="../../assets/phones/gstream.jpg" alt="trepyx phone systems">
        <img src="../../assets/phones/polycom.jpg" alt="trepyx phone systems">
        <img src="../../assets/phones/panasonic.jpg" alt="trepyx phone systems">
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
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0 3rem 0;

}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media(max-width: 735px) {
       flex-direction: column;
    }


  & img {
    width: 100%;
    max-width: 10rem;
    min-width: 2rem;
    padding: 0 1rem;
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

    @media(max-width: 735px) {
       padding-top: 1rem;
    }
  }
}

</style>