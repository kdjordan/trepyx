<template>
  <div id="contact">
    <section class="contact mt-5">
        <h2>Contact & Support</h2>
        <div class="divider div-transparent"></div>
        <div class="contact__container">
          <div class="contact__container--left">
            <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">General Inquiry</h3>

            <label for="user_name" class="mb-1">Name*</label>
            <input type="text" class="mb-1" name="user_name" required v-model="name">

            <label for="user_email" class="mb-1">Email*</label>
            <input type="email" class="mb-1" name="user_email" required v-model="email">

            <label for="message" class="mb-1" >Message</label>
            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Give us an idea of what you're interested in..."></textarea>
            <button class="btn"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
          </form>
          </div>
          <div class="contact__container--right">
            <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">Submit a Trouble Ticket</h3>

            <label for="user_name" class="mb-1">Name*</label>
            <input type="text" class="mb-1" name="user_name" required v-model="name">

            <label for="user_email" class="mb-1">Email*</label>
            <input type="email" class="mb-1" name="user_email" required v-model="email">

            <label for="message" class="mb-1" >Message</label>
            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Give us an idea of what you're interested in..."></textarea>
            <button class="btn"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
          </form>
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
    toggleModal() {
      this.$emit('openModal');
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

.w-50 {
  width: 20% !important;
  border-radius: 3rem !important;

}


h2 {
  padding-top: 1rem;
  font-size: 2.5rem;
  text-transform: uppercase;
}

.contact {
  padding: 4rem;
  background-image: linear-gradient(360deg, $primary 0%, #00d4ff 100%);
  color: white;

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
    padding-bottom: 20px;

    &--left {
      flex: 1 1 100%;
    }

    &--right {
      flex: 1 1 100%;
    }
  }
}
</style>