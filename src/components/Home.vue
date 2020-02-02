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
              <button class="btn btn__contact">Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cloud">
    <h2 class="mb-5">Why the Cloud ?</h2>
    <div class="cloud__container">
      <div class="cloud__container--left">
        <h3>Simple, Reliable, Scalable</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tenetur consectetur cupiditate a dolore eaque deleniti alias similique ipsam incidunt rem quaerat atque blanditiis exercitationem, recusandae asperiores omnis animi veritatis?</div>
      </div>
      <div class="cloud__container--right">
        image
      </div>
    </div>

  </section>
</main>
</template>

<script>
export default {

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
  padding: 100px 0;

  & >  * {
    color: $black;
  }

  &__container {
    display: flex;
    justify-content: space-around;

    &--left {
      padding: 20px;
      flex: 1 1 50%;
    }

    &--right {
      flex: 1 1 50%;
    }
  }
}

</style>