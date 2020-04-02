<template>
<main>
  <Home />

  <Cloud @openModal="toggleModal" />
  
  <Second />
  <PlansPricing />
  <Services @openModal="toggleModal" />
  

  <Contact @openModal="toggleModal"/>

  
  <Modal :modalState="modalState" @closeModal="toggleModal" />
</main>
</template>

<script>
import Modal from './Modal'
import Home from './sections/Home'
import Second from './sections/Second'
import PlansPricing from './sections/PlansPricing'
import Services from './sections/Services'
import Contact from './sections/Contact'

export default {
  data() {
    return {
      modalState: false
    }
  },
  components: {
    Modal,
    Home,
    Second,
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