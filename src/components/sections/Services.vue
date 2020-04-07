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
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Toll Free Number
          </div>
      </div>
      
  
      <div class="services-card">
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
            Call Recording (305)
          </div>
      </div>
    
        <div class="services-card">
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            Business CNAM
          </div>
          <div class="services-card__item">
            <img src="../../assets/airplane-comp.svg" alt="" class="icon">
            LNP Tier 2, 3, 4 +
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
  padding: 1rem 0 10rem 0;
  background-image: url('../../assets/cloud-back.svg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  & h2 {
    color: white;
    font-size: 1.7rem;
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
  }

  &-card {
    width: 80%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img:nth-child(even) {
      filter: opacity(50%);
    }

    &__item {
      text-align: left;
      margin: .2rem 0;
      font-size: 1.2rem;
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