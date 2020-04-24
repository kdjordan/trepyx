<template>
  <div>
    <section class="services" id="services">
    <h2 class="center">ADDITIONAL SERVICES</h2>
    <div class="divider div-transparent"></div>

    <div class="services__container">
      <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Additional US Number
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Canadian Number
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            International Number
          </div>
      </div>
      
  
      <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Toll Free Number
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Toll Free Usage
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Call Recording (100)
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Call Recording (500)
          </div>
      </div>
    
        <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Voicemail Transcription
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Toll Free Number Port
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Toll Free NASC
          </div>
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
@import '../../scss/utils.scss';


.services-card__item:nth-child(even) {
    & img {
      transform: rotateX(-45deg);
    }
}
.services-card__item:nth-child(odd) {
    & img {
      transform: rotateX(30deg);
    }
}

.services {
  height: 23rem;
  background-image: url('../../assets/cloud-back.svg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  height: 30vh;

  @media(max-width: 735px) {
       height: 50vh;
      }

  & h2 {
    color: white;
    font-size: 1.7rem;
    padding-bottom: .75rem;
  }

  & .price {
    font-size: 60px;

    & span {
      font-size: 20px;
    }
  }

  &__container {
    display: flex;
    padding-top: 2rem;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    @media(max-width: 735px) {
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
      }
    
  }

  &-card {
    width: 80%;    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__item {
      text-align: left;
      margin: .2rem 0;
      font-size: 1.5vw;

      @media(max-width: 735px) {
        font-size: 3vw;
      }
    }
  }


}

.icon {
  width: 40px;
  margin-right: 10px;

   @media(max-width: 735px) {
     margin-right: .2rem;
        width: 2rem;
      }

}

</style>