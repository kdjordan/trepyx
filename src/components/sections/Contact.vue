<template>
  <div id="contact">
    <section class="contact mt-5">
        <h2>Contact & Support</h2>
        <div class="divider div-transparent"></div>
        <div class="contact__container">
          
          <div class="contact__container--left" @click="toggleModal('contact')">
            <div class="big-button">
            <img src="../../assets/icons/email-wht.svg" alt="">
            <div class="big-button__text">
              Send Us An Email
            </div>
            </div>
            <!-- <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">General Inquiry</h3>e

            <input type="text" class="mb-1" name="firstName" required v-model="firstName" placeholder="First Name">
            <input type="text" class="mb-1" name="lastName" required v-model="lastName" placeholder="Last Name">
            <input type="text" class="mb-1" name="title" required v-model="title" placeholder="Title">
            <input type="text" class="mb-1" name="companyName" required v-model="companyName" placeholder="Company Name">

            <input type="email" class="mb-1" name="user_email" required v-model="email" placeholder="Email">

            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Message"></textarea>
            <div>
              <button class="btn"  :disabled="!formCheck" >Send</button>
              <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
          </form> -->
          </div>
          <div class="contact__container--right" @click="toggleModal('trouble')">
            <div class="big-button">
            <img src="../../assets/icons/caution-wht.svg">
            <div class="big-button__text">
              Submit a Trouble Ticket
            </div>
            </div>
            <!-- <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">Submit a Trouble Ticket</h3>
            <input type="text" class="mb-1" name="user_name" required v-model="name" placeholder="Name">

            <input type="email" class="mb-1" name="user_email" required v-model="email" placeholder="Email">

            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Message"></textarea>
            <div>
              <button class="btn"  :disabled="!formCheck" >Send</button>
              <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
          </form> -->
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      mssg: null
    }
  },
  methods: {
    toggleModal(type) {
      this.$store.commit('toggleModal', type)
  },
    formCheck() {
      console.log('checking form')
    }
  },
  computed: {
    doResponse() {
      return false
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
  

  & img {
    width: 3rem;
    margin-right: 1rem;
  }

  &__text {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 1px;
  }
}

.w-50 {
  width: 20% !important;
  border-radius: 3rem !important;
}



.modal-card__input {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact {
  padding: 4rem;
  background-image: linear-gradient(360deg, $primary 0%, #00d4ff 100%);
  color: white;

  & h2 {
    padding-top: 1rem;
    font-size: 3rem;
    text-transform: uppercase;
  }


  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
    padding-bottom: 20px;
    // border: 1px solid red;

    &--left {
      border: 2px solid white;
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      cursor: pointer;
      transition: all .4s ease;

      &:hover {
        background: $color2;
      }
      
      // flex: 1 1 100%;
      // border: 1px solid red;
    }

    &--right {
      border: 2px solid white;
      cursor: pointer;
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      transition: all .4s ease;

      &:hover {
        background: $color2;
      }
      
      
      // flex: 1 1 100%;
      // border: 1px solid red;
    }
  }
}
</style>