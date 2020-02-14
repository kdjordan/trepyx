<template>
  <div>
    <section class="cloud" id="cloud">
    <h2>WHY USE THE CLOUD ?</h2>
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
           <p class="mb-2">Ready to take the next step ? All we need to know is a little bit about your current set up.
           <ul class="mb-1">
             <li>How many emplyees do you have ?</li>
             <li>Do you Have a current system ?</li>
             <li>When are looking to set up services ?</li>
             <li>Any other information you can provide will help us out.</li>
           </ul>
            <button class="btn" @click.prevent="toggleModal">Email</button>
           </p>
         </div>
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

.cloud {
  margin: 100px 0 200px 0;

  & h2 {
    font-size: 40px;
    margin-bottom: 100px;
    color: $primary;
  }
  &__container {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  }
}

.card {
  border: 1px solid #276bf9;
  border-radius: 10px;
  flex: 1 1 33%;
  margin: 0 15px;
  box-shadow: 3px 7px 13px -7px rgba(0, 0, 0, 0.75);
  transition: all .4s ease;

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

    & li {
      display: list-item;
      list-style-type: circle;
    }
  }

  & p {
    padding: 20px;
    line-height: 2;
  }

  &:hover {
    box-shadow: 14px 15px 20px -7px rgba(0, 0, 0, 0.75);
  }
}

</style>