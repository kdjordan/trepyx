<template>
  <div v-if="modalState" class="modal" @click.prevent="closeModal">
      <div class="modal__card" @click.stop>
          <h2 class="modal__card--title">Contact Us</h2>
          <form @submit.prevent="sendMail" class="modal__card__input">
            <div class="mb-1">Got a question ? We'd love to help you out. Send us a quick mesage and we'll get back to you ASAP</div>

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
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    props: ['modalState'],
    data() {
        return {
            modal: true,
            name: '',
            email: '',
            mssg: '',
            doResponse: false,
            responseStatus: false,
            response: ''
        }
    },
    methods: {
         sendMail() {
            let templateParams = {
                "from_name": this.name,
                "reply_to": this.email,
                "message_html": this.mssg
            } 
            emailjs.send('smtp_server', 'template_Noy0SjKH_clone', templateParams, process.env.VUE_APP_EMAIL_ID)
                .then((result) => {
                    if(result.status == 200) {
                        this.doResponse = true
                        this.responseStatus = true
                        this.response = 'Success. We will be in touch shortly'
                        setTimeout(() => {
                            this.closeModal()
                        }, 2000)
                    }
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    this.doResponse = true
                    this.responseStatus = false
                    this.response = 'Something went wrong. You can email us directly : steve@trepyx.com'
                    console.log('FAILED...', error);
                });
        },
        closeModal() {
            this.$emit('closeModal', true)
        }
    },
    computed: {
        formCheck() {
            return  !(this.name  == '' || this.email == '')
        }
    }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/utils.scss';

input {
    width: 80%;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 5px 10px;

    &:focus {
        outline: none;
        background:rgba(0,0,0, .1)
    }
}

label {
    width: 80%;
    text-align: left;
    font-size: 12px;
}

textarea {
    width: 80%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;

    &:focus {
        outline: none;
        background:rgba(0,0,0, .1)
    }
}

button:disabled {
    background: grey;
}

.success {
    color: green;
}

.fail {
    color: red;
}

.full {
    width: 80%;
    border-radius: 5px;
    background: $primary;
    color: white;
    outline: none;

    &:hover {
        color: $primary;
        box-shadow: inset 0 0 0 1px #0000ff;
    }
}
.modal {
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0, .5);
    height: 100vh;
    width: 100vw;
    
    &__card {
        padding: 20px 20px 30px 20px;
        width: 40%;
        background: white;
        border-radius: 5px;
        position: relative;
        top: 45%;
        left: 50%;
        max-width: 750px;
        transform: translate(-50%, -50%);


        &--title {
            
            color: blue;
        }

        &__input {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            & div {
                width: 80%;
            }
        }
        

    }
}
</style>