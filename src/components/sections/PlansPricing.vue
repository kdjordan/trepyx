<template>
<div>
   <section class="pricing" id="pricing">
    <h2>PLANS & PRICING</h2>
    <div class="divider div-transparent"></div>
    <div class="pricing__container">

      <div class="pricing__container--card">
        <div class="pricing__container--card--title">FLEX</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$10.50<span>/month</span></div>

        <div class="pricing__container--card--desc">
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
          <router-link to="/quote"><button class="btn-lte" @click="addPlanVuex('flex')">SELECT</button></router-link>
        </div>
      </div>


      <div class="pricing__container--card">
        <div class="pricing__container--card--title">BASIC</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$13.00<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
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
          <router-link to="/quote"><button class="btn-lte" @click="addPlanVuex('basic')">SELECT</button></router-link>
        </div>
      </div>

     <div class="pricing__container--card">
        <div class="pricing__container--card--title">PRO</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$27.50<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
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
        <router-link to="/quote"><button class="btn-lte" @click="addPlanVuex('pro')">SELECT</button></router-link>
      </div>
      
    </div>
  </section>
</div>
</template>

<script>
export default {
  methods: {
    addPlanVuex(plan) {
      console.log(plan)
      this.$store.commit('selectPlan', plan)
    }
  }
    
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/typography.scss';
</style>

<style lang="scss" scoped>

.plans-divider-transparent {
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, white, transparent);

}

.pricing {
  padding-top: 2rem;
  background: blue;
  padding-bottom: 2rem;
  

  & h2 {
    font-size: 6vw;
    color: white;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;

    @media(min-width: 735px) {
        // width: 50%;
        // margin: 0 auto;
        // margin-top: 1rem;
    }

    & > * {
      flex: 1 1 33%;
    }

  &--card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: stretch;
    margin: 0 5px;
    width: 100%;
    max-width: 20rem;
    min-width: 15rem;
    padding: 20px 30px 30px 30px;
    border-radius: .5rem;
    color: white;
    background-image: linear-gradient(360deg, rgba(0,212,255,1) 0%, rgba(10,56,253,1) 100%);
    transition: all .4s ease;

    @media(min-width: 735px) {
        width: 50%;
        margin: 1rem auto;
        margin-top: 1rem;
    }

    & button {
      margin-top: auto;
    }

    &--title {
      font-size: 4vw;
      letter-spacing: 2px;
    }

    &--price {
      font-size: 3vw;

      & span {
        font-size: 25px;
      }
    }

    &--desc li{
      display: block;
      text-align: left;
      width: 100%;
    }

  }
  }
}

</style>