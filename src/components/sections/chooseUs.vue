<template>
    <div class="choose" id="choose">
        <div class="choose__container">
            <div class="choose__container--title mb-5">Why Choose Trepyx Communications ?</div>
        <div class="choose__icon-container">
            <div class="icon-col">
                <img src="../../assets/icons/easy-lte.svg" alt="" class="svg-adjust">
                <div class="icon-col__title">We're Easy</div>
                <div class="icon-col__desc">Setting up your new services is a breeze. Simply Select your plan below and hit send. Done.</div>
            </div>
            <div class="icon-col">
                <img src="../../assets/icons/flexible-lte.svg" alt="">
                <div class="icon-col__title">Flexible Plans</div>
                <div class="icon-col__desc">Services can be added and subtracted in a manner of hours. No long term contracts either.</div>
            </div>
            <div class="icon-col">
                <img src="../../assets/icons/watch-lte.svg" alt="">
                <div class="icon-col__title">Rapid Response</div>
                <div class="icon-col__desc">We appreciate how busy you are. If you need assistance, we respond right away.</div>
            </div>
            <div class="icon-col">
                <img src="../../assets/icons/support-lte.svg" alt="">
                <div class="icon-col__title">Super Support</div>
                <div class="icon-col__desc">Have a technical issue ? No problem - submit a trouble ticket below and we're on it.</div>
            </div>    
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/typography.scss';

.svg-adjust {
    width: 9rem !important;
}

.choose {
    width: 100%;
    padding: 3rem 0;

    &__container {
        padding: 0rem 0 3rem 0;
        width: 90%;
        margin: 0 auto;

        &--title {
            font-size: 2.5rem;
            color: $color2;
            font-family: $font1;
        }
    }

    &__icon-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;
    }
}

.icon-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 1rem;
    // height: 20rem;

    & > img {
        width: 6rem;
        margin-bottom: 1rem;
    }

    &__title {
        font-weight: bold;
        font-size: 1.4rem;
        color: $color2;
        text-transform: uppercase;
    }
}
    
</style>