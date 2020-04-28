<template>
<div>
  <div v-if="getModalType == 'contact' && getModalState" class="modal" @click.prevent="closeModal">
        <div class="modal__card" @click.stop>
          <h2 class="modal__card--title">Contact Us</h2>
          <div class="divider div-transparent--blu mb-2"></div>
          <form @submit.prevent="sendMail" class="modal__card__input">

            <input type="text" class="mb-1" name="firstName" required v-model="form.firstName" placeholder="First Name">
            <input type="text" class="mb-1" name="lastName" required v-model="form.lastName" placeholder="Last Name">
            <input type="text" class="mb-1" name="title"  v-model="form.title" placeholder="Title">
            <input type="text" class="mb-1" name="companyName"  required v-model="form.companyName" placeholder="Company Name">

            <input type="text" class="mb-1" name="phoneNumber"  required v-model="form.phoneNumber" placeholder="Phone Number">
            <input type="email" class="mb-1" name="email" required v-model="form.email" placeholder="Email">

            <textarea name="message" rows="6" class="mb-1" v-model="form.mssg" placeholder="Message"></textarea>
            <div class="center">
              <div  v-if="getDoResponse" class="mt-1" :class="{success : getResponseStatus, fail : !getResponseStatus}">{{getResponseMssg}}</div>
              <button class="btn-solid mt-1" >SEND</button>
            </div>
          </form>

        </div>
    </div>

  <div v-if="getModalType == 'trouble' && getModalState" class="modal" @click.prevent="closeModal">
      <div class="modal__card" @click.stop>
          <h2 class="modal__card--title">Submit A Ticket</h2>
          <div class="divider div-transparent--blu"></div>
          <div class="modal__card--danger mb-1">Is this is an emergency please dial 911</div>
          <form @submit.prevent="sendMail" class="modal__card__input">

            <input type="text" class="mb-1" name="firstName" required v-model="form.firstName" placeholder="First Name">
            <input type="text" class="mb-1" name="lastName" required v-model="form.lastName" placeholder="Last Name">
            <input type="text" class="mb-1" name="title"  v-model="form.title" placeholder="Title">
            <input type="text" class="mb-1" name="companyName" required v-model="form.companyName" placeholder="Company Name">

            <input type="text" class="mb-1" name="phoneNumber" required v-model="form.phoneNumber" placeholder="Phone">
            <input type="email" class="mb-1" name="user_email" required v-model="form.email" placeholder="Email">
            <div class="flex-row mt-1 mb-1">
                <div class="flex-row__item">
                    <label>Billing Issue
                        <input type="radio" id="billing" name="type" value="billing" checked v-model="form.ticketType">
                    </label>
                </div>
                <div class="flex-row__item">
                    <label>Technical Issue
                        <input type="radio" id="trouble" name="type" value="trouble" v-model="form.ticketType">
                    </label>
                </div>
            </div>
            <div v-if="getTicketType" class="mb-4 mt-2">
                <label for="">Severity of Case
                    <select name="severity" id="" class="trouble__slect mb-2" v-model="form.severity">
                        <option value="0">Level 0 - Ticket will be reviewed within 48 hours</option>
                        <option value="1">Level 1 - Ticket will be reviewed within 24 hours</option>
                        <option value="2">Level 2 - Ticket will be reviewed within 4 hours and escalated to Tier 2 Support </option>
                        <option value="3">Level 3 - Ticket will be reviewed within 1 hour and escalated to Tier 2 Support</option>
                        <option value="4">Level 4 - Immediate escalation to Tier 2 & 3 Support</option>
                    </select>
                </label>
                <div class="flex-row mb-2">
                    <div class="flex-row__item--col">
                        <label>Date of Case</label>
                        <input type="date" id="caseDate" name="caseDate" value="caseDate" v-model="form.caseDate">
                    </div>
                    <div class="flex-row__item--col">
                        <label>Time of Case</label>
                        <input type="time" id="caseTime" name="caseTime" value="caseTime" v-model="form.caseTime">
                    </div>
                </div>
                <div class="flex-row__center">
                        <label for="callDuration">Call Duration</label>
                          <input type="number" id="callDuration" name="callDuration" min="1" max="60" v-model="form.callDuration">
                    </div>
                <div class="flex-row">
                    <div class="flex-row__item--col">
                        <label>Origination Number
                        <input type="text" id="originNum" name="originNumber" v-model="form.originationNum">
                        </label>
                    </div>
                    <div class="flex-row__item--col">
                        <label>Destination Number
                        <input type="text" id="destinationNum" name="destinationNum" v-model="form.destinationNum">
                        </label>
                    </div>
                </div>
                    
            </div>

            <textarea name="message" rows="6" class="mb-1" v-model="form.mssg" :placeholder="`${getTextAreaMssg}`" required></textarea>
            <div class="center">
              <div  v-if="getDoResponse" class="mt-1" :class="{success : getResponseStatus, fail : !getResponseStatus}">{{getResponseMssg}}</div>
              <button class="btn-solid mt-1">SEND</button>
            </div>
          </form>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DOMPurify from 'dompurify'

export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                title: '',
                companyName: '',
                phoneNumber: '',
                email: '',
                mssg: '',
                ticketType: 'billing',
                severity: null,
                caseDate: null,
                caseTime: null,
                callDuration: null,
                originationNum: null,
                destinationNum: null
            },
            doResponse: false,
            responseStatus: false,
            response: ''
        }
    },
    methods: {
        resetForm() {
            var self = this
            Object.keys(this.form).forEach(function(key,index) {
                self.form[key] = '';
            });
            this.form.ticketType = 'billing'
        },
        closeModal() {
            this.$store.commit('toggleModal', null)
        },
        sendMail() {
            let data = {}

            if (this.getModalType == 'contact') {
                data = {
                    "auth": process.env.VUE_APP_AUTH,
                    "sendTo": "contact@trepyx.com",
                    "ticketType": 'contact',
                    "fromName": DOMPurify.sanitize(`${this.form.firstName} ${this.form.lastName}`),
                    "replyTo": DOMPurify.sanitize(this.form.email),
                    "title": DOMPurify.sanitize(this.form.title),
                    "phone": DOMPurify.sanitize(this.form.phoneNumber),
                    "companyName": DOMPurify.sanitize(this.form.companyName),
                    "message": DOMPurify.sanitize(this.form.mssg),
                    "email": DOMPurify.sanitize(this.form.email)
                } 
            } else {
                data = {
                    "auth": process.env.VUE_APP_AUTH,
                    "sendTo": "support@trepyx.com",
                    "ticketType": DOMPurify.sanitize(this.form.ticketType),
                    "fromName": DOMPurify.sanitize(`${this.form.firstName} ${this.form.lastName}`),
                    "replyTo": DOMPurify.sanitize(this.form.email),
                    "title": DOMPurify.sanitize(this.form.title),
                    "phone": DOMPurify.sanitize(this.form.phoneNumber),
                    "companyName": DOMPurify.sanitize(this.form.companyName),
                    "message": DOMPurify.sanitize(this.form.mssg),
                    "email": DOMPurify.sanitize(this.form.email),
                    "severity": DOMPurify.sanitize(this.form.severity),
                    "caseDate": DOMPurify.sanitize(this.form.caseDate),
                    "caseTime": DOMPurify.sanitize(this.form.caseTime),
                    "callDuration": DOMPurify.sanitize(this.form.callDuration),
                    "originationNum": DOMPurify.sanitize(this.form.originationNum),
                    "destinationNum": DOMPurify.sanitize(this.form.destinationNum),
                } 
            }
    
            this.axios.post('https://trepyx-proxy.herokuapp.com/send', data).then((response) => {
                if (response.status == 200) {
                    this.$store.commit('makeResponse', {
                        doResponse: true,
                        responseStatus: true,
                        response: 'SUCCESS ! We\'ll Be In Touch.'
                    })
                    setTimeout(() => {
                        this.resetForm()
                        this.$store.commit('resetResponse')
                        window.scrollTo(0, 0)
                        this.$store.commit('toggleModal', null)
                    }, 2000)
                }
                    
            }).catch((e) => {
                this.$store.commit('makeResponse', {
                        doResponse: true,
                        responseStatus: false,
                        response: 'PROBLEM - please contact Steve directly : steve@trepyx.com'
                    })
                console.log(e)
            })      
        }
    },
    computed: {
        ...mapGetters({
            getModalState: 'getModalState',
            getModalType: 'getModalType',
            getDoResponse: 'getDoResponse',
            getResponseStatus: 'getResponseStatus',
            getResponseMssg: 'getResponseMssg'
        }),
        getTicketType() {
            return this.form.ticketType == 'trouble'
        },
        getTextAreaMssg() {
            if (this.getTicketType) {
                return 'Describe the Steps You Have Taken...'
            } else {
                return 'Describe your Issue...'
            }
        }
    }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/typography.scss';
@import '../scss/utils.scss';
@import '../scss/components/divider.scss';
@import '../scss/components/buttons.scss';

input, textarea {
    padding-left: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
}

textarea {
    padding-top: .5rem;
}

input[type=text], input[type=email] {
    margin: .5rem auto;
    border: 1px solid $primary;
    border-radius: 2rem;
    width: 80%;
    outline: none;
    height: 2.5rem;

    &::placeholder {
        font-size: 1rem;
        font-family: $font2;
        color: $color2;
        overflow: visible;
    }
}

 textarea {
    margin: .5rem auto;
    border: 1px solid $primary;
    border-radius: 2rem;
    width: 80%;
    outline: none;

    &::placeholder {
        font-size: 1rem;
        font-family: $font2;
        color: $color2;
        overflow: visible;
    }
 }

.trouble__select {
    min-height: 2rem;
    font-size: 1.3rem;
}

label {
    font-size: 1rem;
    margin: .3rem;
    font-family: $font2;
    color: $color2;
    letter-spacing: 1px;
}

.flex-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100% !important;

    &__center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;

        &--col {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
        }
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
        width: 80%;
        background: white;
        border-radius: 5px;
        position: relative;
        top: 45%;
        left: 50%;
        max-width: 600px;
        transform: translate(-50%, -50%);

        &--danger {
            background: $color3;
            border: 2px solid $color3;
            color: white;
            text-transform: uppercase;
            display: inline-block;
            padding: .2rem .6rem;
            letter-spacing: 1px;
            border-radius: .3rem;
            font-weight: bold;
            width: 80%;
            margin-left: 10%;
        }


        &--title {
            text-align: center;
            color: $color2;
        }

        &__input {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            & div {
                width: 80%;
                margin: 0 auto;
            }
        }
        

    }
}
</style>