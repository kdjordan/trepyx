<template>
  <div class="quote">
    <h1>Trepyx Quote Tool</h1>
    <form @submit.prevent="sendRequest">
    <div class="divider div-transparent--blu"></div>
    <h2>1. Select Your Base Plan</h2>
    <div class="quote__container">

      <div class="quote__container--card" :class="{selected: getSelected == 'flex'}" @click.prevent="markSelected('flex')">
        <div class="quote__container--card-title">FLEX</div>
        <div class="quote-divider"></div>
        <div class="quote__container--card-price">$13.95<span>/month</span></div>

        <div class="quote__container--card-desc">
          <ul>
            <li>1 US Phone Number</li>
            <li>300 min/mo</li>
            <li>2 SIP Trunks</li>
            <li>1 Extension</li>
            <li>iOS & Android Mobile App</li>
            <li>Voicemail</li>
            <li>e911</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
          <button class="btn-lte" :class="{selected: getSelected == 'basic'}" @click.prevent="markSelected('basic')">{{getButtonMessg('basic')}}</button>
        </div>
      </div>

      <div class="quote__container--card" :class="{selected: getSelected == 'basic'}" @click.prevent="markSelected('basic')">
        <div class="quote__container--card-title">BASIC</div>
        <div class="quote-divider"></div>
        <div class="quote__container--card-price">$19.95<span>/month</span></div>

        <div class="quote__container--card-desc">
          <ul>
            <li><strong>All of FLEX PLAN +</strong></li>
            <li>1 Additional US Phone Number</li>
            <li>300 more min/mo</li>
            <li>2 SIP Trunks</li>
            <li>1 Extension</li>
            <li>Inbound Fax</li>
            <li>iOS & Android Mobile App</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
          <button class="btn-lte" :class="{selected: getSelected == 'basic'}" @click.prevent="markSelected('basic')">{{getButtonMessg('basic')}}</button>
        </div>
      </div>

     <div class="quote__container--card" :class="{selected: getSelected == 'pro'}" @click.prevent="markSelected('pro')">
        <div class="quote__container--card-title">PRO</div>
        <div class="quote-divider"></div>
        <div class="quote__container--card-price">$26.50<span>/month</span></div>

        <div class="quote__container--card-desc">
          <ul>
            <li><strong>All of BASIC & FLEX PLAN +</strong></li>
            <li>2 US Phone Numbers</li>
            <li>Unlimited min/mo</li>
            <li>2 SIP Trunks</li>
            <li>2 Extension</li>
            <li>Voicemail to Text</li>
            <li>Directory Listing</li>
            <li>LNP transfer fees (free)</li>
            <li>iOS & Android Mobile App</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
            <button class="btn-lte" :class="{selected: getSelected == 'pro'}" @click.prevent="markSelected('pro')">{{getButtonMessg('pro')}}</button>
        </div>
      </div>
     </div> 
    <div class="quote__bottom">
        <h2>2. Choose Add On Services</h2>
        <div class="quote__bottom--container">
            <div class="quote__bottom--container-top">
                <div class="quote__bottom--col">
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addUsNumber')}" @click.prevent="toggleService({type: 'addUsNumber', cost: 2.00, desc:'+ Additional Us Number'})">
                        Additional Us Number
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addCanNumber')}" @click.prevent="toggleService({type: 'addCanNumber', cost: 3.00, desc:'+ Additional Canadian Number'})">
                        Additional Canadian Number
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addIntNumber')}" @click.prevent="toggleService({type: 'addIntNumber', cost: 5.00, desc:'+ Additional International Number'})">
                        Additional International Number
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addExtension')}" @click.prevent="toggleService({type: 'addExtension', cost: 4.00, desc:'+ Additional Extension'})">
                        Add Extension
                    </button>
                </div>    
                <div class="quote__bottom--col">
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addTollFreeNum')}" @click.prevent="toggleService({type: 'addTollFreeNum', cost: 5.00, desc:'+ Add Toll Free Number'})">
                        Add Toll Free Number
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addTollFreeUsage')}" @click.prevent="toggleService({type: 'addTollFreeUsage', cost: 2.00, desc:'+ Add Toll Free Usage'})">
                        Add Toll Free Usage
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addCallRecording100')}" @click.prevent="toggleService({type: 'addCallRecording100', cost: 12.00, desc:'+ Add Call Recording (100)'})">
                        Add Call Recording (100)
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addCallRecording500')}" @click.prevent="toggleService({type: 'addCallRecording500', cost: 40.00, desc:'+ Add Call Recording (500)'})">
                        Add Call Recording (500)
                    </button>
                </div>
                <div class="quote__bottom--col">
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addTollNumPort')}" @click.prevent="toggleService({type: 'addTollNumPort', cost: 20.00, desc:'+ Add Toll Free Number Port', recurring: false})">
                        Add Toll Free Number Port
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('voicelmailTrans')}" @click.prevent="toggleService({type: 'voicelmailTrans', cost: 3.00, desc:'+ Add Voicemail Transcription'})">
                        Add Voicemail Transcription
                    </button>
                    <button class="addon-service" :class="{btnSelected: getBtnSelected('addTollNASC')}" @click.prevent="toggleService({type: 'addTollNASC', cost: 75.00, desc:'+ Add Toll Free Number NASC', recurring: false})">
                        Add Toll Free Number NASC
                    </button>
                </div>
            </div>
            <div class="quote__bottom--container-bottom">
                <button class="btn-solid" @click.prevent="resetServices">RESET ALL SERVICES</button>
            </div>
        </div>
        
    </div>
    <div class="quote-form">
        <h2>3. Send Sign Up Request</h2>
        <div class="quote-form__container">
            <div class="quote-form__container--top">
                <div class="quote-form__container--left">
                    <div class="quote-form__input">
                        
                        <input type="text" class="mb-1" name="firstName" required v-model="form.firstName" placeholder="First Name">
                        <input type="text" class="mb-1" name="lastName" required v-model="form.lastName" placeholder="Last Name">
                        <input type="text" class="mb-1" name="title"  v-model="form.title" placeholder="Title">
                        <input type="text" class="mb-1" name="companyName"  v-model="form.companyName" placeholder="Company Name">

                        <input type="text" class="mb-1" name="phoneNumber"  v-model="form.phoneNumber" placeholder="Phone Number">
                        <input type="email" class="mb-1" name="email" required v-model="form.email" placeholder="Email">

                        <textarea name="message" id=""  rows="6" class="mb-1" v-model="form.mssg" placeholder="Message"></textarea>
                    </div>
                </div>
                <div class="quote-form__container--right">
                    <div class="quote-form__title">Your Order</div>
                    <div v-if="activePlan != null" class="quote-form__plan mt-1">Base Plan: <span>{{activePlan}}</span> @ ${{getBaseCost}}/mo</div>
                    <div v-if="activePlan != null" class="mt-1 mb-1">One Time Set Up Fee: ${{getSetUpCharge}}</div>
                    <ul class="mt-1 mb-1">
                        <li v-for="(service, index) in activeServices" :key="index">{{service.desc}} @ ${{service.cost}}.00/mo</li>
                    </ul>
                    <div v-if="activePlan != null || oneTimeCharges.length != 0" class="quote-form__total">Your Total: ${{getTotalCost(true)}}
                        <div class="quote-form__claimer">
                            <div>* These numbers do not apply to Call Centers</div>
                            <div>* These numbers are an estimate and not a final quote</div>
                            <div>* Taxes and other fees are not included with this estimate</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quote-form__container--bottom">
                <!-- {{oneTimeCharges}} -->
                <div  v-if="getDoResponse" :class="{success : getResponseStatus, fail : !getResponseStatus}">{{getResponseMssg}}</div>
                <button class="btn-solid mt-1">SEND REQUEST</button>
            </div>
        </div>
    </div>
    </form>
    <div v-if="showPriceBox" class="total-box">
        <div class="total-box__title">
            Your Cost per Month
        </div>
        <div class="total-box__price">
            ${{getTotalCost(false)}}
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

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
                mssg: ''
            },
            showPriceBox: false,
            activePlan: null,
            activeServices: [],
            baseCost: 0.00,
            oneTimeCharges: [],
            servicesCost: 0.00,
            setUpCharge: 0.00
        }
    },
    methods: {
        markSelected(plan) {
            if (plan == "flex") {
                this.activePlan = "flex"
                this.baseCost = 13.95
                this.setUpCharge = 6
            } else if (plan == "basic") {
                this.activePlan = "basic"
                this.baseCost = 19.95
                this.setUpCharge = 7.5
            }  else if (plan == "pro") {
                this.activePlan = "pro"
                this.baseCost = 26.50
                this.setUpCharge = 26.5
            }
        },
        toggleService(service) {
            if (this.activeServices.some(serv => serv.type == service.type) || this.oneTimeCharges.some(serv => serv.type == service.type)) {
                this.activeServices = this.activeServices.filter(serv => serv.type != service.type)
                this.oneTimeCharges = this.oneTimeCharges.filter(serv => serv.type != service.type)
            } else {
                if (service.recurring == false) {
                    console.log('got one')
                    this.oneTimeCharges.push(service)
                } else {
                    this.activeServices.push(service)
                }
            }
        },
        resetServices() {
            this.activeServices = []
            this.oneTimeCharges = []
        },
        resetForm() {
            var self = this
            Object.keys(this.form).forEach(function(key,index) {
                self.form[key] = '';
            });
            this.activePlan = null
            this.activeServices = []
            this.oneTimeCharges = []
            this.showPriceBox = false 
            this.baseCost = 0.00,
            this.servicesCost = 0.00
            this.setUpCharge = 0.00
        },
        sendRequest() {
            if (this.activePlan == null) {
                this.$store.commit('makeResponse', {
                    doResponse: true,
                    responseStatus: false,
                    response: 'Please select a Base Plan to Continue'
                })
                setTimeout(() => {
                    this.$store.commit('makeResponse', {
                    doResponse: false,
                    responseStatus: false,
                    response: ''
                    })
                }, 2000)
            } else {
                let services = []
                this.activeServices.forEach(service => services.push(service.desc))

                let singularServices = []
                this.oneTimeCharges.forEach(service => singularServices.push(service.desc))

                
                this.axios.post('https://trepyx-proxy.herokuapp.com/crm', 
                { 
                    data: {
                        // auth: process.env.VUE_APP_AUTH,
                        form: this.form,
                        plan: this.activePlan,
                        services: services,
                        oneTimeServices: singularServices
                    }
              }).then((response) => {
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
            }
    },
    computed: {
        ...mapGetters({
            getDoResponse: 'getDoResponse',
            getResponseStatus: 'getResponseStatus',
            getResponseMssg: 'getResponseMssg'

        }),
        getSelected() {
            return this.activePlan
        },
        getSetUpCharge() {
            return (this.setUpCharge + this.getOneTimeCharges).toFixed(2)
        },
        getButtonMessg() {
            return (button) => {
                if (button == 'flex' && this.activePlan == 'flex') {
                     return 'SELECTED'
                } else if (button == 'basic' && this.activePlan == 'basic') {
                     return 'SELECTED'
                }  else if (button == "pro" && this.activePlan == 'pro') {
                    return 'SELECTED'
                }
                return "SELECT"
            }
        },
        getBtnSelected() {
            return (button) => {
                if (this.activeServices.some(serv => serv.type == button) || this.oneTimeCharges.some(serv => serv.type == button)) {
                    return true
                } else {
                    return false
                }
            }
        },
        getTotalCost() {
            return (flag) => {
                if (flag) {
                    return (this.baseCost + this.getServicesCost + this.setUpCharge + this.getOneTimeCharges).toFixed(2)
                } else {
                    return (this.baseCost + this.getServicesCost).toFixed(2)
                }

            }
        },
        getServicesCost() {
            if(this.activeServices.length > 0) {
                let total = 0
               this.activeServices.forEach(service => {
                    total += service.cost
               }) 
               return total 
            } else {
                return 0
            }
        },
        getBaseCost() {
            return this.baseCost.toFixed(2)
        },
        getOneTimeCharges() {
            if(this.oneTimeCharges.length > 0) {
                let total = 0
               this.oneTimeCharges.forEach(service => {
                    total += service.cost
               }) 
               return total 
            } else {
                return 0
            }
        }
    },
    mounted() {
        if (this.$store.state.planSelected == null) {
            window.scrollTo(0, 0)
        } else if (this.$store.state.planSelected == 'flex'){
            this.activePlan = "flex"
            this.setUpCharge = 6
            this.baseCost = 13.95
            window.scrollTo(0, 69)
        } else if (this.$store.state.planSelected == 'basic') {
            this.activePlan = "basic"
            this.baseCost = 19.95
            this.setUpCharge = 7.5
            window.scrollTo(0, 69)
        } else if (this.$store.state.planSelected == 'pro') {
            this.activePlan = "pro"
            this.baseCost = 26.50
            this.setUpCharge = 26.50
            window.scrollTo(0, 69)
        }

        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 68) {
                this.showPriceBox = true
            } else {
                this.showPriceBox = false
            }
        })
    }

}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/typography.scss';
@import '../scss/utils.scss';
@import '../scss/components/buttons.scss';
@import '../scss/components/divider.scss';

input[type=checkbox] {
    display: none;
}

.quote-form {
    
    &__title {
        text-align: center;
        font-size: 3vw;
        color: $color2;
        border-bottom: 1px solid $color2;
        text-transform: uppercase;

        @media(min-width: 735px) {
            font-size: 2vw;
        }
    }

    &__plan {
        font-size: 1.2rem;

        & span {
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    &__claimer {
        font-size: .8rem;
        color: red;
        font-style: italic;
    }

    &__total {
        text-align: center;
        border-top: 1px solid $color2;
        padding-top: 1rem;
    }

    &__container {
        width: 90%;
        margin: 0 auto;
        border: 2px solid $primary;
        border-radius: 2rem;
        padding: 1rem 0;
        margin-bottom: 2rem;

        &--top {
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            @media(max-width: 735px) {
                width: 90%;
                flex-direction: column;
            }

        }

        &--left {
            width: 50%;
            margin: 0 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media(max-width: 735px) {
                width: 80%;
                margin: 0 auto;
            }

            & input[type=text], input[type=email], textarea {
                margin: .5rem auto;
                border: 1px solid $primary;
                border-radius: 2rem;
                width: 100%;
                padding: 1rem;
                outline: none;
            }

            & ::placeholder {
                font-size: 1rem;
                font-family: $font2;
                color: $color2;
            }
        }

        &--right {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media(max-width: 735px) {
                width: 100%;
                margin: 0 auto;
                margin-bottom: 2rem;
            }

            & li {
                display: block;

                @media(max-width: 735px) {
                    font-size: 3vw;
                }
            }

        }

        &--bottom {
            text-align: center;
        }
    }

}

.total-box {
    position: fixed;
    top: 0;
    right: 5%;
    background: rgba(0,212,255,1);
    padding: 1rem;
    border: 1px solid $color2;
    color: $color2;

    @media(max-width: 735px) {
        font-size: 3vw;
        right: 65%;
    }

    &__title {
        border-bottom: 1px solid $color2;
    }

    &__price {
        margin-top: .5rem;
        text-align: center;
        font-size: 3rem;

        @media(max-width: 735px) {
            font-size: 3vw;
        }

    }
}


.btnSelected {
    background: rgba(0,212,255,1) !important;
    color: $color2 !important;
}


.selected {
    background: rgba(0,212,255,1) !important;
    color: $color2 !important;
    border: 1px solid $color2 !important;

    & button {
        background: none;
        border: 2px solid   $color2 !important;
        color: $color2;
    }

    & .quote-divider {
        background-image: linear-gradient(to right, transparent, $color2, transparent) !important;
    }

    & :hover {
        color: $color2;
    }
}

.flex-row {
    display: flex;
    justify-content: center;
    align-items: center;

    & .short {
        width: 25%;
        margin: none !important;
    }
}



.quote-divider {
    content: "";
    position: relative;
	width: 100%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, white, transparent);
}

.quote {
    margin-top: 2rem;
    color: $primary;

    & h1, & h2 {
        font-size: 7vw;
        text-align: center;
        padding-bottom: 1rem;

        @media(min-width: 735px) {
            font-size: 4vw;
        }
    }

    & h2 {
        padding: 2rem 0;
        font-size: 5vw;

        @media(min-width: 735px) {
            font-size: 2.5vw;
        }
    }

    & btn-solid {
        width: 20%;
        margin: 0 auto;
    }

    &__container {
        border: 2px solid $primary;
        border-radius: 2rem;
        width: 90%;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    
        &--card {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            align-self: stretch;
            margin: 1rem 5px;
            width: 32%;
            min-width: 15rem;
            max-width: 30rem;
            padding: 20px 30px 30px 30px;
            border-radius: .5rem;
            color: white;
            background: $primary;
            transition: all .4s ease;

             @media(max-width: 735px) {
                width: 90%;
            }
        
        & button {
            margin-top: auto;
        }

        &-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
        }

        &-price {
            font-size: 2rem;

            & span {
                font-size: 25px;
            }
        }

        &-desc ul {
            padding-bottom: 1rem;
        }

        &-desc li {
            display: block;
            text-align: left;
            width: 100%;
            padding: .2rem;
        }
    }
  
      &__title {
          font-size: 1.5rem;
          text-transform: uppercase;
      }
    }
    &__bottom {
         display: flex;
         flex-direction: column;
            justify-content: center;
            align-items: center;
            
        
        &--container {
            border: 2px solid $primary;
            border-radius: 2rem;
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        }
        
        &--container-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            @media(max-width: 735px) {
                margin: 1rem 0;
                flex-direction: column;
            }
        }

        &--col {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem 0;
    
            @media(max-width: 735px) {
                margin: 0rem;
            }
        }

        &--container-bottom  {
            display: flex;
            justify-content: center;
            padding: 1rem;
            margin-left: 5%;

            @media(max-width: 735px) {
                font-size: 1.2vw;
                margin-left: 0;
            }
        }

    }
}
.addon-service {
    font-family: $font2;
    letter-spacing: 1px;
    outline: none;
    border-style: none;
    font-size: 2.4vw;
    background: $primary;
    color: white;
    padding: .3rem .8rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: .4rem 0;
    text-align: center;
    transition: all .4s ease;

    @media(min-width: 735px) {
        font-size: 1.5vw;
    }
   

    
}



</style>