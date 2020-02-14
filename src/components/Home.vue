<template>
<main>
  <Home />

  <Cloud @openModal="toggleModal" />

  <Services @openModal="toggleModal" />

  <section class="pricing" id="pricing">
    <h2>PRICING PACKAGES</h2>
    <div class="pricing__container">

      <div class="pricing__container--card">
        <div class="pricing__container--card--title">STRATUS</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$29.99<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
        <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
      </div>


      <div class="pricing__container--card">
        <div class="pricing__container--card--title">CUMULUS</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$49.99<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
        <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
      </div>

     <div class="pricing__container--card">
        <div class="pricing__container--card--title">CIRRUS</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$99.99<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
        <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
      </div>
      
    </div>
  </section>

  <!-- <CTA @openModal="toggleModal"/> -->

  
  <Modal :modalState="modalState" @closeModal="toggleModal" />
</main>
</template>

<script>
import Modal from './Modal'
import Home from './sections/Home'
import Cloud from './sections/Cloud'
import Services from './sections/Services'
import CTA from './sections/CTA'

export default {
  data() {
    return {
      modalState: false
    }
  },
  components: {
    Modal,
    Home,
    Cloud,
    Services,
    CTA
  },
  methods: {
    toggleModal() {
      this.modalState = !this.modalState
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/utils.scss';
@import '../scss/typography.scss';
@import '../scss/components/buttons.scss';
@import '../scss/components/divider.scss';
@import '../scss/components/contactUs.scss';

.small {
  position: relative;
  width: 100%;
  left: 0;
}

.pricing {
  margin: 100px 0;

  & h2 {
    font-size: 40px;
    color: $primary;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    & > * {
      flex: 1 1 33%;
    }

  &--card {
    margin: 0 5px;
    max-width: 400px;
    padding: 20px 30px 30px 30px;
    border-radius: 10px;
    border-bottom-left-radius: 75px;
    border-bottom-right-radius: 75px;
    color: white;
    background-image: linear-gradient(360deg, rgba(0,212,255,1) 0%, rgba(10,56,253,1) 100%);
    transition: all .4s ease;

    &--title {
      font-size: 50px;
      letter-spacing: 2px;
    }

    &--price {
      font-size: 40px;

      & span {
        font-size: 25px;
      }
    }

    &--desc li{
      display: block;
    }

    &:hover {
      transform: translateY(-20px);
      background-image: linear-gradient(360deg, rgba(0,212,255,1) 0%, rgba(10,56,253,1) 50%);
    }
  }
  }
}

</style>