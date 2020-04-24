<template>
  <div id="contact">
    <section class="contact">
        <h2>Contact & Support</h2>
        <div class="divider div-transparent"></div>
        <div class="contact__container">
          <div class="contact__container--left" @click="toggleModal('contact')">
            <div class="big-button">
            <img src="../../assets/icons/email-wht.svg" alt="trepyx mail icon">
            <div class="big-button__text">
              Send Us An Email
            </div>
            </div>
          </div>
          <div class="contact__container--right" @click="toggleModal('trouble')">
            <div class="big-button">
              <img src="../../assets/icons/caution-wht.svg" alt="trepyx trouble icon">
              <div class="big-button__text">
                Submit a Trouble Ticket
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal(type) {
      this.$store.commit('toggleModal', type)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/typography.scss';

.big-button {
  display: flex;
  align-items: center;
  justify-content: center;

  &__text {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5vw;
    color: white;
    letter-spacing: 1px;

    @media(max-width: 735px) {
       font-size: 4.5vw;
    }
  }
}

.contact {
  padding: 4rem;
  background-image: linear-gradient(360deg, $primary 0%, #00d4ff 100%);
  color: white;

  @media(max-width: 735px) {
       padding: 2rem 0 2rem 0;
    }

  & h2 {
    text-align: center;
    padding-top: 1rem;
    font-size: 4vw;
    margin-bottom: .7rem;
    text-transform: uppercase;

    @media(max-width: 735px) {
       font-size: 6vw;
    }
  }


  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
    padding-bottom: 20px;
    font-size: 1vw;

    @media(max-width: 735px) {
       flex-direction: column;
    }

    &--left {
      padding: 1.15rem;
      border: 2px solid white;
      border-radius: 1rem;
      transition: all .4s ease;
      cursor: pointer;

      & img {
        width: 4.5rem;
        margin-right: 1rem;
      }

      &:hover {
        background: $color2;
      }
    }

    &--right {
      padding: 1rem;
      border: 2px solid white;
      border-radius: 1rem;
      transition: all .4s ease;
      cursor: pointer;

      & img {
        width: 4rem;
        margin-right: 1rem;
      }

      &:hover {
        background: $color2;
      }

      @media(max-width: 735px) {
       margin-top: 1rem;
    }
    }
  }
}
</style>