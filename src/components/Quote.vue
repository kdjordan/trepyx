<template>
  <div class="quote">
    <h1 class="mb-2">Trepyx Quote Tool</h1>
    <form @submit.prevent="sendMail" class="quote-form__input">
    <div class="divider div-transparent--blu"></div>
    <h2 class="mb-2 mt-2">1. Select Your Base Plan</h2>
    <div class="quote__top">
        <div class="quote__top--col">
            <div class="quote__title">Flex : $12.95/<span>mo</span></div>
            <div class="divider div-transparent--blu mb-1"></div>
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
            <div>
                <label for="flex">SELECT</label>
                <input type="radio" id="flex" name="flex" value="flex">
            </div>
        </div>
        <div class="quote__top--col  middle">
            <div class="quote__title">Basic : $19.95/<span>mo</span></div>
            <div class="divider div-transparent--blu mb-1"></div>
            <ul>
                <li>2 US Phone Numbers</li>
                <li>600 min/mo</li>
                <li>2 SIP Trunks</li>
                <li>1 Extension</li>
                <li>All of FLEX PLAN +</li>
                <li>Inbound Fax</li>
                <li>Hosted Conferencing</li>
                <li>Overage Minutes : $0.03 /min</li>
            </ul>
            <div>
                <label for="basic">SELECT</label>
                <input type="radio" id="flex" name="basic" value="basic">
            </div>
        </div>
        
        <div class="quote__top--col">
            <div class="quote__title">Pro : $24.95/<span>mo</span></div>
            <div class="divider div-transparent--blu mb-1"></div>
            <ul>
                <li>2 US Phone Numbers</li>
                <li>Unlimited min/mo</li>
                <li>2 SIP Trunks</li>
                <li>2 Extensions</li>
                <li>All of BASIC & FLEX PLAN +</li>
                <li>Voicemail to Text</li>
                <li>Call Recording</li>
                <li>Directory Listing</li>
                <li>LNP Order</li>
                <li>LNP Tier 1</li>
            </ul>
            <div>
                <label for="pro">SELECT</label>
                <input type="radio" id="flex" name="pro" value="pro">
            </div>
        </div>
    </div>
    <div class="quote__bottom">
        <h2 class="mb-2 mt-2">2. Choose Add On Services</h2>
        <div class="quote__bottom--container">
            <div class="quote__bottom--col">
                <div>
                    <label for="addUsNumber">Additional Us Number</label>
                    <input type="checkbox" id="addUsNumber" name="addUsNumber">
                </div>
                <div>
                    <label for="addCanNumber">Additional Canadian Number</label>
                    <input type="checkbox" id="addCanNumber" name="addCanNumber">
                </div>
                <div>
                    <label for="addIntNumber">Additional International Number</label>
                    <input type="checkbox" id="addIntNumber" name="addIntNumber">
                </div>
                <div>
                    <label for="addTollFreeNum">Add Toll Free Number</label>
                    <input type="checkbox" id="addTollFreeNum" name="addTollFreeNum">
                </div>
            </div>    
            <div class="quote__bottom--col">
                <div>
                    <label for="addTollFreeUsage">Add Toll Free Usage</label>
                    <input type="checkbox" id="addTollFreeUsage" name="addTollFreeUsage">
                </div>
                <div>
                    <label for="addCallRecording">Add Call Recording</label>
                    <input type="checkbox" id="addCallRecording" name="addCallRecording">
                </div>
                <div>
                    <label for="addCallRecording100">Add Call Recording (100)</label>
                    <input type="checkbox" id="addCallRecording100" name="addCallRecording100">
                </div>
                <div>
                    <label for="addCallRecording305">Add Call Recording (305)</label>
                    <input type="checkbox" id="addCallRecording305" name="addCallRecording305">
                </div>
            </div>
            <div class="quote__bottom--col">
                <div>
                    <label for="addBizCNAM">Add Business CNAM</label>
                    <input type="checkbox" id="addBizCNAM" name="addBizCNAM">
                </div>
                <div>
                    <label for="addLNPTier">Add LNP Tier 2, 3, 4 +</label>
                    <input type="checkbox" id="addLNPTier" name="addLNPTier">
                </div>
                <div>
                    <label for="addTollNumPort">Add Toll Free Number Port</label>
                    <input type="checkbox" id="addTollNumPort" name="addTollNumPort">
                </div>
                <div>
                    <label for="addTollNASC">Add Toll Free Number NASC</label>
                    <input type="checkbox" id="addTollNASC" name="addTollNASC">
                </div>
            </div>
        </div>
    </div>
    <div class="quote-form">
        <h2 class="mb-2 mt-2">3. Send Sign Up Request</h2>
        <div class="quote-form__input">
        
            <div>
                <label for="user_name">Name*</label>
                <input type="text" class="quote-form__text" name="user_name" required v-model="name">
            </div>
            <div>
                <label for="user_email">Email*</label>
                <input type="email" class="quote-form__text" name="user_email" required v-model="email">
            </div>
            <div>
                <label for="message" >Message</label>
                <textarea name="message" id=""  class="quote-form__textarea" rows="6" v-model="mssg" placeholder="Give us an idea of what you're interested in..."></textarea>
            </div>
            <button class="btn"  :disabled="!formCheck" >Send</button>
            <div  v-if="doResponse" :class="{success : responseStatus, fail : !responseStatus}">{{response}}</div>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/typography.scss';
@import '../scss/utils.scss';
@import '../scss/components/divider.scss';

.middle {
    border-right: 1px solid $primary;
    border-left: 1px solid $primary;
}

span {
    text-transform: none;
}

label {
    margin-right: .4rem;
}

input[type=text], input[type=email], textarea {
    border: 1px solid $primary;
    border-radius: .2rem;
}

.quote-form {
    width: 70%;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 12px -4px rgba(255, 255, 255, 0.75);
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

li {
    display: block;
}

.quote {
    margin-top: 2rem;
    color: $primary;

    &__title {
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    &__top {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto;
        border: 1px solid $primary;
        border-radius: 2rem;

        &--col {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: space-around;
            flex: 1;
        }
    }

    &__bottom {

        &--container {
            border-radius: 2rem;
            width: 80%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 1px solid $primary;
        }

        &--col {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem;

            & div {
                margin: .4rem 0;
            }
        }
    }
}

</style>