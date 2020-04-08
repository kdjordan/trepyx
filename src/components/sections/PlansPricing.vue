<template>
<div>
   <section class="pricing" id="pricing">
    <h2>PLANS & PRICING</h2>
    <div class="divider div-transparent"></div>
    <div class="pricing__container">

      <div class="pricing__container--card">
        <div class="pricing__container--card--title">FLEX</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$12.95<span>/month</span></div>

        <div class="pricing__container--card--desc">
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
          <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
        </div>
      </div>


      <div class="pricing__container--card">
        <div class="pricing__container--card--title">BASIC</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$19.95<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
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
        <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
      </div>

     <div class="pricing__container--card">
        <div class="pricing__container--card--title">PRO</div>
        <div class="divider div-transparent small mb-1"></div>
        <div class="pricing__container--card--price">$24.95<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
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
        <button class="btn-lte" @click.prevent="toggleModal">SELECT</button>
      </div>
      
    </div>
  </section>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/typography.scss';

.pricing {
  padding-top: 2rem;
  background: blue;
  padding-bottom: 2rem;
  

  & h2 {
    font-size: 3rem;
    color: white;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 3rem;

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
    max-width: 400px;
    padding: 20px 30px 30px 30px;
    border-radius: .5rem;
    color: white;
    background-image: linear-gradient(360deg, rgba(0,212,255,1) 0%, rgba(10,56,253,1) 100%);
    transition: all .4s ease;

    & button {
      margin-top: auto;
    }

    &--title {
      font-size: 50px;
      letter-spacing: 2px;
    }

    &--price {
      font-size: 40px;

      & span {
        font-size: 25px;
      }
    }

    &--desc li{
      display: block;
      text-align: left;
      width: 100%;
    }

    // &:hover {
    //   transform: translateY(-20px);
    //   background-image: linear-gradient(360deg, rgba(0,212,255,1) 0%, rgba(10,56,253,1) 50%);
    // }
  }
  }
}

</style>