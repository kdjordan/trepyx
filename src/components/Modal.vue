<template>
<div>
  <div v-if="getModalType == 'contact' && getModalState" class="modal" @click.prevent="closeModal">
        <div class="modal__card" @click.stop>
          <h2 class="modal__card--title">Contact Us</h2>
          <div class="divider div-transparent--blu mb-2"></div>
          <form @submit.prevent="sendMail" class="modal__card__input">

            <input type="text" class="mb-1" name="firstName" required v-model="firstName" placeholder="First Name">
            <input type="text" class="mb-1" name="lastName" required v-model="lastName" placeholder="Last Name">
            <input type="text" class="mb-1" name="title"  v-model="title" placeholder="Title">
            <input type="text" class="mb-1" name="companyName"  v-model="companyName" placeholder="Company Name">

            <input type="email" class="mb-1" name="phoneNumber"  v-model="phoneNumber" placeholder="Phone Number">
            <input type="email" class="mb-1" name="email" required v-model="email" placeholder="Email">

            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" placeholder="Message"></textarea>
            <div>
              <button class="btn-solid"  :disabled="!formCheck" >SEND</button>
              <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
          </form>

        </div>
    </div>

  <div v-if="getModalType == 'trouble' && getModalState" class="modal" @click.prevent="closeModal">
      <div class="modal__card" @click.stop>
          <h2 class="modal__card--title">Submit A Ticket</h2>
          <div class="divider div-transparent--blu mb-1"></div>
          <div class="modal__card--danger mb-1">Is this is an emergency please dial 911</div>
          <form @submit.prevent="sendMail" class="modal__card__input">

            <input type="text" class="mb-1" name="firstName" required v-model="firstName" placeholder="First Name">
            <input type="text" class="mb-1" name="lastName" required v-model="lastName" placeholder="Last Name">
            <input type="text" class="mb-1" name="title" required v-model="title" placeholder="Title">
            <input type="text" class="mb-1" name="companyName" required v-model="companyName" placeholder="Company Name">

            <input type="email" class="mb-1" name="user_email" required v-model="email" placeholder="Email">
            <div class="flex-row mt-1 mb-1">
                <div class="flex-row__item">
                    <label>Billing Issue
                        <input type="radio" id="billing" name="type" value="billing" checked v-model="ticketType">
                    </label>
                </div>
                <div class="flex-row__item">
                    <label>Technical Issue
                        <input type="radio" id="trouble" name="type" value="trouble" v-model="ticketType">
                    </label>
                </div>
            </div>
            <div v-if="getTicketType" class="mb-4 mt-2">
                <label for="">Severity of Case
                    <select name="severity" id="" class="mb-2">
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
                        <input type="date" id="caseDate" name="caseDate" value="caseDate">
                    </div>
                    <div class="flex-row__item--col">
                        <label>Time of Case</label>
                        <input type="time" id="caseTime" name="caseTime" value="caseTime">
                    </div>
                </div>
                <div class="flex-row__center mb-2">
                        <label for="callDuration">Call Duration</label>
                          <input type="number" id="callDuration" name="callDuration" min="1" max="60">
                    </div>
                <div class="flex-row">
                    <div class="flex-row__item--col">
                        <label>Origination Number
                        <input type="text" id="originNum" name="originNumber">
                        </label>
                    </div>
                    <div class="flex-row__item--col">
                        <label>Desitnation Number
                        <input type="text" id="destinationNum" name="destinationNum">
                        </label>
                    </div>
                </div>
                    
            </div>

            <textarea name="message" id=""  rows="6" class="mb-1" v-model="mssg" :placeholder="`${getTextAreaMssg}`"></textarea>
            <div>
              <button class="btn-solid"  :disabled="!formCheck" >SEND</button>
              <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
          </form>
        </div>
    </div>

  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            ticketType: 'billing',
            name: '',
            email: '',
            mssg: '',
            doResponse: false,
            responseStatus: false,
            response: ''
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('toggleModal', null)
        }
    },
    computed: {
        ...mapGetters({
            getModalState: 'getModalState',
            getModalType: 'getModalType'
        }),
        formCheck() {
            return  !(this.name  == '' || this.email == '');
        },
        getTicketType() {
            return this.ticketType == 'trouble'
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

input[type=text], input[type=email], textarea {
    margin: .5rem auto;
    border: 1px solid $primary;
    border-radius: 2rem;
    width: 80%;
    padding: 1rem;
    outline: none;

    &::placeholder {
        font-size: 1rem;
        font-family: $font2;
        color: $color2;
    }
}

label {
    color: $color2;
    margin-right: 1rem;
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

// button:disabled {
//     background: grey;
// }

// .success {
//     color: green;
// }

// .fail {
//     color: red;
// }

// .full {
//     width: 80%;
//     border-radius: 5px;
//     background: $primary;
//     color: white;
//     outline: none;

//     &:hover {
//         color: $primary;
//         box-shadow: inset 0 0 0 1px #0000ff;
//     }
// }
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

        &--danger {
            background: red;
            color: white;
            text-transform: uppercase;
            border: 1px solid red;
            display: inline-block;
            padding: .2rem .6rem;
            letter-spacing: 1px;
            border-radius: .3rem;
            font-weight: bold;
        }


        &--title {
            color: $color2;
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