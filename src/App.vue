<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './scss/app.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
