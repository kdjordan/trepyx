<template>
<main>
  <section class="home">
    <div class="home__container">
      <div class="home__container--left">
        <h1>SOLUTIONS ONLY</h1>
        <div>It's no secret - businesses run on communication. <br>
          If you aren't partnered with the right provider, it's going to <strong>co$t</strong> you... That's where we come in.<br>
          <br>
          <h2>TREPYX COMMUNICATIONS</h2>
          is a VOIP business telecom solution.<br>
          We privide a simple, reliable, and effective interface between you and your customers.<br>
          Leave it up to us - that's our business.
        </div>
      </div>
      <div class="home__container--right">
        <div class="contact-us">
          <div class="contact-us__title">
            <h2 class="pt-1 pb-1">LET'S TALK</h2>
          </div>
          <div class="contact-us__desc mt-2">
            <p>What's Best For You ?<br/>
            </p>
          </div>
          <div class="contact-us__button-container mt-2 mb-2">
            <div class="contaact-us__button-container--left">
              <button class="btn btn__contact">Phone</button>
            </div>
            <div class="contact-us__button-container--right">
              <button class="btn btn__contact" @click.prevent="toggleModal">Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cloud mt-5 mb-5">
    <h2 class="mb-5">Why the Cloud ?</h2>
    <div class="cloud__container">
      <div class="cloud__container--left">
        <h3 class="mb-2">Simple, Reliable, Scalable</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tenetur consectetur cupiditate a dolore eaque deleniti alias similique ipsam incidunt rem quaerat atque blanditiis exercitationem, recusandae asperiores omnis animi veritatis?</div>
      </div>
      <div class="cloud__container--right">
        <img src="../assets/cloud-desc.svg" alt="cloud services trepyx">
      </div>
    </div>
  </section>

  <section class="services pt-5 pb-5">
    <div class="services__container">
      <div class="services__container--left">
        <h2 class="mb-2 center">OUR SERVICES</h2>
        <div>Chances are you don't run a cookie-cutter business. Our plans are flexible and take into account where you are, and where you are going.<br>
        </div>
        <h4 class="mt-2">Plans Start at Just</h4>
        <div class="price">$10 <span>/ month</span></div>
      </div>
      <div class="services__container--right">
        <div class="services-card">
          <div class="services-card__icon">
          </div>
          <div>
            <div class="services-card__title">
              Service Offering Title
            </div>
            <div class="services-card__desc">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis debitis quas qui assumenda placeat adipisci. 
              </p>
            </div>
          </div>
        </div>

        <div class="services-card mt-2">
          <div class="services-card__icon">
          </div>
          <div>
            <div class="services-card__title">
              Service Offering Title
            </div>
            <div class="services-card__desc">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis debitis quas qui assumenda placeat adipisci. 
              </p>
            </div>
          </div>
        </div>

        <div class="services-card mt-2">
          <div class="services-card__icon">
          </div>
          <div>
            <div class="services-card__title">
              Service Offering Title
            </div>
            <div class="services-card__desc">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis debitis quas qui assumenda placeat adipisci. 
              </p>
            </div>
          </div>
        </div>

        <div class="services-card mt-2">
          <div class="services-card__icon">
          </div>
          <div>
            <div class="services-card__title">
              Service Offering Title
            </div>
            <div class="services-card__desc">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis debitis quas qui assumenda placeat adipisci. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section class="contact mt-5 mb-5">
    <h2 class="mb-5">Ready To Go ?</h2>
      <div class="pb-2">We get it, you're busy, and so are we. Let's set up a time to discuss your needs. <br>
        Choose you preferred method of contact and we'll help outline a solution that fits your needs.
      </div>
      <div class="contact__container">
        <button class="btn-lte">Phone</button>
        <button class="btn-lte" @click.prevent="toggleModal">Email</button>
      </div>
  </section>
  <Modal :modalState="modalState" @closeModal="toggleModal" />
</main>
</template>

<script>
import Modal from './Modal'
export default {
  data() {
    return {
      modalState: false
    }
  },
  components: {
    Modal
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
@import '../scss/components/contactUs.scss';

.home {
  background-image: url('../assets/back1.svg');
  background-position: center;
  background-size: cover;
  height: 80vh;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 90%;

    @media(max-width: 840px) {
        flex-direction: column;
      }

    
    & > * {
      padding: 30px;
      // border: 1px solid white;
      flex: 1 1 50%;

      @media(max-width: 1000px) {
        padding: 5px;
      }
    }
  }
}


.cloud {
  
  &__container {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;

    &--left {
      padding: 20px;
      flex: 1 1 50%;
    }

    &--right {
      flex: 1 1 50%;

      & img {
        max-width: 300px;
      }
    }
  }
}

.services {
  background: #276cf8;
  color: white;

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    &--left {
      text-align: left;
      flex: 1 1 33%;

      & h4 {
        text-align: center;
      }

      & .price {
        font-size: 60px;
        text-align: center;

        & span {
          font-size: 20px;
        }
      }
    }

    &--right {
      padding: 0 60px;
      flex: 1 1 66%;
    }
  }

  &-card {
    border: 1px solid white;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 12px -4px rgba(255, 255, 255, .3);

    &__title {
      font-size: 20px;
      font-weight: bold;
    }

  &__icon {
    color: $primary;
    
    font-size: 30px;
    background: white;
    border-right: 1px solid white;

  }
  }


}

.contact {
  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    margin: 0 auto;
    margin-top: 20px;
    padding-bottom: 20px;

    &--left {
      flex: 1 1 50%;
    }

    &--right {
      flex: 1 1 50%;
    }
  }
}
</style>