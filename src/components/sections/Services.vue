<template>
  <div>
    <section class="services" id="services">
    <div class="services__container">
      <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            <span class="test">Wi-Fi Calling</span></div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Incoming Call Control</div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Business Phone Number</div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Call Transfers</div>
      </div>
      
        <div>
          <div>
            <h2 class="center">OUR SERVICES</h2>
            <div class="divider div-transparent"></div>
          </div>
          <div  class="mt-1">Chances are you don't run a cookie-cutter business. Our plans are flexible and take into account where you are, and where you are going.<br>
          </div>
          <h4 class="mt-2">Plans Start at Just</h4>
          <div class="price mb-1">$29.99 <span>/ month</span></div>
           <button class="btn-lte" @click.prevent="toggleModal">Let's GO</button>
        </div>
    

  

        <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Voicemail</div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Call Forwarding</div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Simultaneous Call Handling</div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Custom Greetings</div>
        </div>  
      
    </div>

  </section>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal() {
      this.$emit('openModal');
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/components/buttons.scss';

.services {
  padding: 150px 0 225px 0;
  background-image: url('../../assets/back-services.svg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  & h2 {
    font-size: 40px;
  }

  & .price {
    font-size: 60px;

    & span {
      font-size: 20px;
    }
  }

  &__container {
    display: flex;

    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    
  }

  &-card {
    width: 80%;
    // border: 1px solid white;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // border-radius: 5px;
    // box-shadow: 0px 2px 12px -4px rgba(255, 255, 255, .3);

    &__item {
      font-size: 20px;
      font-weight: bold;
    }
  }


}

.icon {
  width: 40px;
  margin-right: 10px;

  &:hover {
        transform: rotateX(45deg);
    }
}

.test {
    transform: rotateX(45deg);
}

</style>