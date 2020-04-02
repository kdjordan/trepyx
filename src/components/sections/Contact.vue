<template>
  <div>
    <section class="contact mt-5 mb-5">
      <a id="contact"></a>
        <h2 class="mb-3">Contact & Support</h2>
        <div class="contact__container">
          <div class="contact__container--left">
            <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">Need assistance finalizing you plan ?<br /> Fill out the form below and we'll get back quickly.</h3>

            <label for="user_name" class="mb-1">Name*</label>
            <input type="text" class="mb-1" name="user_name" required v-model="name">

            <label for="user_email" class="mb-1">Email*</label>
            <input type="email" class="mb-1" name="user_email" required v-model="email">

            <label for="message" class="mb-1" >Message</label>
            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Give us an idea of what you're interested in..."></textarea>
            <button class="btn full"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
          </form>
          </div>
          <div class="contact__container--right">
            <form @submit.prevent="sendMail" class="modal__card__input">
            <h3 class="mb-2">Have an issue or question about your existing service ?<br /> Use this form to submit a trouble ticket.</h3>

            <label for="user_name" class="mb-1">Name*</label>
            <input type="text" class="mb-1" name="user_name" required v-model="name">

            <label for="user_email" class="mb-1">Email*</label>
            <input type="email" class="mb-1" name="user_email" required v-model="email">

            <label for="message" class="mb-1" >Message</label>
            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Give us an idea of what you're interested in..."></textarea>
            <button class="btn full"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
          </form>
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
@import '../../scss/typography.scss';

h3 {
  color: $primary;
}

h2 {
  font-size: 2.5rem;
  color: $primary;
  text-transform: uppercase;
}

.contact {
  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
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