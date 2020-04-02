<template>
    <div class="second" id="second">
        <div class="second__container">
        <div class="second__container--desc">
            <p>From virtual offices and remote work, to contractors and freelancers...<br /> let's face it - your communications needs change rapidly. </p>  
            <p>That's where We Come In.</p>
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

.second {
    width: 100%;
    margin: 0 auto;
     background-image: url('../../assets/blue-back5.svg');
    background-size: cover;
    background-position: top;
    height: 40rem;

    &__container {
        padding: 1rem 0 2rem 0;
        // border: 1px solid red;
        width: 90%;
        margin: 0 auto;

        &--desc {
            font-family: $font1;
            font-size: 2rem;
            color: $primary;
            width: 100%;
            margin: 0;

        }
    }
}
    
</style>