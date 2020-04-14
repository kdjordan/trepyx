<template>
<div>
   <section class="pricing" id="pricing">
    <h2>PLANS & PRICING</h2>
    <div class="divider div-transparent"></div>
    <div class="pricing__container">

      <div class="pricing__container--card">
        <div class="pricing__container--card--title">FLEX</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$12.95<span>/month</span></div>

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
          <router-link to="/quote/flex"><button class="btn-lte">SELECT</button></router-link>
        </div>
      </div>


      <div class="pricing__container--card">
        <div class="pricing__container--card--title">BASIC</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$19.95<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
          <ul>
            <li><strong>All of FLEX PLAN +</strong></li>
            <li>2 US Phone Numbers</li>
            <li>600 min/mo</li>
            <li>2 SIP Trunks</li>
            <li>1 Extension</li>
            <li>Inbound Fax</li>
            <li>iOS & Android Mobile App</li>
            <li>Hosted Conferencing</li>
          </ul>
        </div>
        <div style="margin-top: auto;">
          <router-link to="/quote/flex"><button class="btn-lte">SELECT</button></router-link>
        </div>
      </div>

     <div class="pricing__container--card">
        <div class="pricing__container--card--title">PRO</div>
        <div class="plans-divider-transparent mb-1"></div>
        <div class="pricing__container--card--price">$24.95<span>/month</span></div>

        <div class="pricing__container--card--desc mb-2">
          <ul>
            <li><strong>All of BASIC & FLEX PLAN +</strong></li>
            <li>2 US Phone Numbers</li>
            <li>Unlimited min/mo</li>
            <li>2 SIP Trunks</li>
            <li>2 Extension</li>
            <li>Voicemail to Text</li>
            <li>Call Recording</li>
            <li>Directory Listing</li>
            <li>LNP Order</li>
            <li>iOS & Android Mobile App</li>
            <li>LNP</li>
          </ul>
        </div>
        <router-link to="/quote/pro"><button class="btn-lte">SELECT</button></router-link>
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

<style lang="scss" scoped>

.plans-divider-transparent {
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, white, transparent);

}
</style>