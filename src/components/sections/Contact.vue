<template>
  <div>
    <section class="contact mt-5 mb-5" id="contact">
        <h2 class="mb-5">Contact & Support</h2>
        <div class="pb-2">We get it, you're busy, and so are we. Let's set up a time to discuss your needs. <br>
            Choose you preferred method of contact and we'll help outline a solution that fits your needs.
        </div>
        <div class="contact__container">
            <button class="btn-lte">Phone</button>
            <button class="btn-lte" @click.prevent="toggleModal">Email</button>
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