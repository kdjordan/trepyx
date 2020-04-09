<template>
  <div class="quote">
    <h1 class="mb-2">Trepyx Quote Tool</h1>
    <!-- ::{{getButtonMessg('pro')}} -->
    <form @submit.prevent="sendMail">
    <div class="divider div-transparent--blu"></div>
    <h2 class="mb-2 mt-2">1. Select Your Base Plan</h2>

    <div class="quote__container">

      <div class="quote__container--card" :class="{selected: getSelected == 'flex'}" @click.prevent="markSelected('flex')">
        <div class="quote__container--card-title">FLEX</div>
        <div class="quote-divider mb-1"></div>
        <div class="quote__container--card-price">$12.95<span>/month</span></div>

        <div class="quote__container--card-desc">
          <ul>
            <li>1 US Phone Number</li>
            <li>300 min/mo</li>
            <li>2 SIP Trunks</li>
            <li>1 Extension</li>
            <li>Mobile App</li>
            <li>Voicemail</li>
            <li>e911</li>
            <li>Overage Minutes : $0.03 /min</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
          <button class="btn-lte" :class="{selected: getSelected == 'flex'}" @click.prevent="markSelected('flex')">{{getButtonMessg('flex')}}</button>
        </div>
      </div>

      <div class="quote__container--card" :class="{selected: getSelected == 'basic'}" @click.prevent="markSelected('basic')">
        <div class="quote__container--card-title">BASIC</div>
        <div class="quote-divider mb-1"></div>
        <div class="quote__container--card-price">$19.95<span>/month</span></div>

        <div class="quote__container--card-desc">
          <ul>
            <li>2 US Phone Numbers</li>
            <li>600 min/mo</li>
            <li>2 SIP Trunks</li>
            <li>1 Extension</li>
            <li><strong>All of FLEX PLAN +</strong></li>
            <li>Inbound Fax</li>
            <li>Hosted Conferencing</li>
            <li>Overage Minutes : $0.03 /min</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
          <button class="btn-lte" :class="{selected: getSelected == 'basic'}" @click.prevent="markSelected('basic')">{{getButtonMessg('basic')}}</button>
        </div>
      </div>

     <div class="quote__container--card" :class="{selected: getSelected == 'pro'}" @click.prevent="markSelected('pro')">
        <div class="quote__container--card-title">PRO</div>
        <div class="quote-divider mb-1"></div>
        <div class="quote__container--card-price">$24.95<span>/month</span></div>

        <div class="quote__container--card-desc mb-2">
          <ul>
             <li>2 US Phone Numbers</li>
            <li>Unlimited min/mo</li>
            <li>2 SIP Trunks</li>
            <li>2 Extension</li>
            <li><strong>All of BASIC & FLEX PLAN +</strong></li>
            <li>Voicemail to Text</li>
            <li>Call Recording</li>
            <li>Directory Listing</li>
            <li>LNP Order</li>
            <li>LNP Tier 1</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
            <button class="btn-lte" :class="{selected: getSelected == 'pro'}" @click.prevent="markSelected('pro')">{{getButtonMessg('pro')}}</button>
        </div>
      </div>
     </div> 
    <div class="quote__bottom">
        <h2 class="mb-2 mt-5">2. Choose Add On Services</h2>
        <!-- {{activeServices}} -->
        <div class="quote__bottom--container">
            <div class="quote__bottom--col">
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addUsNumber')}" @click.prevent="toggleService({type: 'addUsNumber', cost: 2.00})">
                    <label class="addon-service--label" for="addUsNumber">Additional Us Number</label>
                    <input type="checkbox" id="addUsNumber" name="addUsNumber">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addCanNumber')}" @click.prevent="toggleService({type: 'addCanNumber', cost: 4.00})">
                    <label class="addon-service--label" for="addCanNumber">Additional Canadian Number</label>
                    <input type="checkbox" id="addCanNumber" name="addCanNumber">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addIntNumber')}" @click.prevent="toggleService({type: 'addIntNumber', cost: 5.00})">
                    <label class="addon-service--label" for="addIntNumber">Additional International Number</label>
                    <input type="checkbox" id="addIntNumber" name="addIntNumber">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addTollFreeNum')}" @click.prevent="toggleService({type: 'addTollFreeNum', cost: 5.00})">
                    <label class="addon-service--label" for="addTollFreeNum">Add Toll Free Number</label>
                    <input type="checkbox" id="addTollFreeNum" name="addTollFreeNum">
                </div>
            </div>    
            <div class="quote__bottom--col">
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addTollFreeUsage')}" @click.prevent="toggleService({type: 'addTollFreeUsage', cost: 2.00})">
                    <label class="addon-service--label" for="addTollFreeUsage">Add Toll Free Usage</label>
                    <input type="checkbox" id="addTollFreeUsage" name="addTollFreeUsage">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addCallRecording')}" @click.prevent="toggleService({type: 'addCallRecording', cost: 2.00})">
                    <label class="addon-service--label" for="addCallRecording">Add Call Recording</label>
                    <input type="checkbox" id="addCallRecording" name="addCallRecording">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addCallRecording100')}" @click.prevent="toggleService({type: 'addCallRecording100', cost: 10.00})">
                    <label class="addon-service--label" for="addCallRecording100">Add Call Recording (100)</label>
                    <input type="checkbox" id="addCallRecording100" name="addCallRecording100">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addCallRecording305')}" @click.prevent="toggleService({type: 'addCallRecording305', cost: 10.00})">
                    <label class="addon-service--label" for="addCallRecording305">Add Call Recording (305)</label>
                    <input type="checkbox" id="addCallRecording305" name="addCallRecording305">
                </div>
            </div>
            <div class="quote__bottom--col">
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addBizCNAM')}" @click.prevent="toggleService({type: 'addBizCNAM', cost: 10.00})">
                    <label class="addon-service--label" for="addBizCNAM">Add Business CNAM</label>
                    <input type="checkbox" id="addBizCNAM" name="addBizCNAM">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addLNPTier')}" @click.prevent="toggleService({type: 'addLNPTier', cost: 5.00})">
                    <label class="addon-service--label" for="addLNPTier">Add LNP Tier 2, 3, 4 +</label>
                    <input type="checkbox" id="addLNPTier" name="addLNPTier">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addTollNumPort')}" @click.prevent="toggleService({type: 'addTollNumPort', cost: 20.00})">
                    <label class="addon-service--label" for="addTollNumPort">Add Toll Free Number Port</label>
                    <input type="checkbox" id="addTollNumPort" name="addTollNumPort">
                </div>
                <div class="addon-service" :class="{btnSelected: getBtnSelected('addTollNASC')}" @click.prevent="toggleService({type: 'addTollNASC', cost: 75.00})">
                    <label class="addon-service__label" for="addTollNASC" >Add Toll Free Number NASC</label>
                    <input type="checkbox" id="addTollNASC" name="addTollNASC">
                </div>
            </div>
        </div>
        <button class="btn-solid" @click.prevent="resetServices">RESET ALL</button>
    </div>
    <!-- <div class="quote-form">
        <h2 class="mb-2 mt-2">3. Send Sign Up Request</h2>
        <div class="quote-form__input">
        
            <div>
                <input type="text" class="quote-form__text" name="user_name" required v-model="name" placeholder="Enter Your Full Name">
            </div>
            <div class="flex-row">
                <input type="email" class="quote-form__text short" name="user_email" required v-model="email" placeholder="Enter Your Email">
                <input type="email" class="quote-form__text short" name="user_email" required v-model="email" placeholder="Enter Your Phone">
            </div>
            <div>
                <label for="message" >Message</label>
                <textarea name="message" id=""  class="quote-form__textarea" rows="6" v-model="mssg" placeholder="Enter Any Notes You Would Like Us to See"></textarea>
            </div>
            <button class="btn"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
        </div> -->
    </form>
    <div v-if="showPriceBox" class="total-box">
        <div class="total-box__title">
            You're Cost per Month
        </div>
        <div class="total-box__price">
            ${{getTotalCost}}
            <!-- {{servicesCost}} -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showPriceBox: false,
            activePlan: null,
            activeServices: [],
            baseCost: 0.00,
            servicesCost: 0.00
        }
    },
    methods: {
        markSelected(plan) {
            if (plan == "flex") {
                this.activePlan = "flex"
                this.baseCost = 12.95
            } else if (plan == "basic") {
                this.activePlan = "basic"
                this.baseCost = 19.95
            }  else if (plan == "pro") {
                this.activePlan = "pro"
                this.baseCost = 24.95
            }
        },
        toggleService(service) {
            if (this.activeServices.some(serv => serv.type == service.type)) {
                this.activeServices = this.activeServices.filter(serv => serv.type != service.type)
            } else {
                this.activeServices.push(service)
            }
        },
        resetServices() {
            this.activeServices = []
        }
    },
    computed: {
        getSelected() {
            return this.activePlan
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
                if (this.activeServices.some(serv => serv.type == button)) {
                    return true
                } else {
                    return false
                }
            }
        },
        getTotalCost() {
            return (this.baseCost + this.getServicesCost)
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
        }
    },
    mounted() {
        var vm = this
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

.total-box {
    position: fixed;
    top: 0;
    right: 5%;
    background: rgba(0,212,255,1);
    padding: 1rem;
    border: 1px solid #133379;
    color: #133379;

    &__title {
        border-bottom: 1px solid #133379;
    }

    &__price {
        font-size: 3rem;

    }
}

input[type=checkbox] {
    opacity: 0;
    position: relative;
    right: 2rem;
    
}

.btnSelected {
    background: rgba(0,212,255,1) !important;
    color: #133379 !important;
}


.selected {
    background: rgba(0,212,255,1) !important;
    color: #133379 !important;
    border: 1px solid #133379 !important;

    & button {
        background: none;
        border: 2px solid   #133379 !important;
        color: #133379;
    }

    & .quote-divider {
        background-image: linear-gradient(to right, transparent, #133379, transparent) !important;
    }

    & :hover {
        color: #133379;
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


input[type=text], input[type=email], textarea {
    border: 1px solid $primary;
    border-radius: .2rem;
}

.quote-form {
    width: 70%;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    &__text {
        width: 50%;
        margin: .5rem auto;
        padding: .5rem;
    }

    &__textarea {
        width: 50%;
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

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {
            flex: 1 1 33%;
        }
    
        &--card {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            align-self: stretch;
            margin: 0 5px;
            max-width: 400px;
            padding: 20px 30px 30px 30px;
            border-radius: .5rem;
            color: white;
            background: $primary;
            transition: all .4s ease;
        
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

        &-desc li {
            display: block;
            text-align: left;
            width: 100%;
        }
    }
  
      &__title {
          font-size: 1.5rem;
          text-transform: uppercase;
      }
    }
    &__bottom {
        &--container {
            border-radius: 2rem;
            width: 90%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        &--col {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem;
        }

    }
}
.addon-service {
    background: $primary;
    color: white;
    padding: .3rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: .4rem 0;
    transition: all .4s ease;

    &--label {
        margin-left: 1rem;
        cursor: pointer;
    }
}



</style>