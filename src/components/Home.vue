<template>
<main>
  <Hero />
  
  <Choose />
  <PlansPricing />

  <Services @openModal="toggleModal" />
  <Contact @openModal="toggleModal"/>

  <Modal :modalState="modalState" @closeModal="toggleModal" />
</main>
</template>

<script>
import Modal from './Modal'
import Hero from './sections/hero'
import Choose from './sections/chooseUs'
import PlansPricing from './sections/plansPricing'
import Services from './sections/services'
import Contact from './sections/contact'

export default {
  data() {
    return {
      modalState: false
    }
  },
  components: {
    Modal,
    Hero,
    Choose,
    PlansPricing,
    Services,
    Contact
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



</style>