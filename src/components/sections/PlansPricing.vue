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
@import '../../scss/components/pricing-cards.scss';


</style>