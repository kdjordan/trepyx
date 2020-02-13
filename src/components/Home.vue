<template>
<main>
  <section class="home">
    <div class="home__container">
        <h1>Welcome to Trepyx</h1><br />
        <!-- <div class="divider div-transparent"></div> -->
        <h2>Cloud Based PBX Provider</h2>
       
    </div>
  </section>

  <section class="cloud mt-1" id="cloud">
    <h2 class="mb-5">Why Use the Cloud ?</h2>
    <div class="cloud__container">
     <div class="card">
       <div class="card__title">
         <h4 class="mb-2">What is Cloud PBX ?</h4>
         </div>
         <div class="card__description">
           <p>An IP PBX ("Internet Protocol private branch exchange") is a system that connects telephone extensions to the public switched telephone network (PSTN) and provides internal communication for a business. An IP PBX is a PBX system with IP connectivity and may provide additional audio, video, or instant messaging communication utilizing the TCP/IP protocol stack.
          </p>
         </div>
     </div>
     <div class="card">
       <div class="card__title">
         <h4 class="mb-2">Benefits of Cloud PBX</h4>
         </div>
         <div class="card__description">
           <p>Because a part of PBX functionality is provided in software, it is relatively inexpensive and makes it easy to add additional functionality, such as conference calling, XML-RPC control of live calls, interactive voice response (IVR), TTS/ASR (text to speech/automatic speech recognition), PSTN interconnectability supporting both analog and digital circuits, VoIP protocols including SIP, Inter-Asterisk eXchange, H.323, Jingle and others.</p>
         </div>
     </div>
     <div class="card">
       <div class="card__title">
         <h4 class="mb-2">Let's Get Started</h4>
         </div>
         <div class="card__description">
           <p class="mb-2">Ready to take the next step ? <br />
           All we need to know is a little bit about your current set up.<br />
           <ul>
             <li>How many emplyees do you have ?</li>
             <li>Do you Have a current system ?</li>
             <li>When are looking to set up services ?</li>
             <li>Any other information you can provide will help us out.</li>
           </ul>
            <button class="btn-lte mt-1" @click.prevent="toggleModal">Email</button>
           </p>
         </div>
     </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="services__container">
      <div class="services-card">
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            VoIP/Wi-Fi Calling</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Incoming Call Control</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Business Phone Number</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Call Transfers</div>
      </div>
      
        <div>
          <div>
            <h2 class="mb-2 center">OUR SERVICES</h2>
          </div>
          <div>Chances are you don't run a cookie-cutter business. Our plans are flexible and take into account where you are, and where you are going.<br>
          </div>
          <h4 class="mt-2">Plans Start at Just</h4>
          <div class="price">$29.99 <span>/ month</span></div>

        </div>
    

  

        <div class="services-card">
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Voicemail</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Call Forwarding</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Simultaneous Call Handling</div>
          <div class="services-card__item">
            <img src="../assets/airplane-comp.svg" alt="" class="icon">
            Custom Greetings</div>
        </div>  
      
    </div>

  </section>

  <section class="contact mt-5 mb-5" id="contact">
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
@import '../scss/components/divider.scss';
@import '../scss/components/contactUs.scss';

.card {
  border: 1px solid #276bf9;
  border-radius: 10px;
  flex: 1 1 33%;
  margin: 0 15px;
  box-shadow: 3px 7px 13px -7px rgba(0, 0, 0, 0.75);

  &__title {
    background: #276bf9;
    border-radius: 10px 10px 0 0;
    width: 100%;
    color: white;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 25px;
  }

  & ul {
    text-align: left;
    margin-left: 10%;
  }

  & p {
    padding: 20px;
    line-height: 2;
  }
}

.home {
  background-image: url('../assets/back3-5-comp.svg');
  background-position: center;
  background-size: cover;
  height: 80vh;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;

  &__container {
    // border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 100%;

    & h1 {
      font-size: 80px;
      letter-spacing: 3px;
    }

  }
}


.cloud {
  margin-bottom: 100px;

  & h2 {
    font-size: 40px;
  }
  &__container {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  }
}


.icon {
  width: 40px;
  margin-right: 10px;
}

.services {
  padding: 100px 0;
  background: #276cf8;
  color: white;

  & h2 {
    font-size: 40px;
  }

  & .price {
    font-size: 60px;

    & span {
      font-size: 20px;
    }
  }

  &__container {
    display: flex;

    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    
  }

  &-card {
    width: 80%;
    // border: 1px solid white;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // border-radius: 5px;
    // box-shadow: 0px 2px 12px -4px rgba(255, 255, 255, .3);

    &__item {
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