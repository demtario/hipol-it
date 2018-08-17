<template>
  <div id="app">
    <Header />

    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <Trusted />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Trusted from '@/components/Trusted.vue'

export default {
  name: 'App',
  components: {
    Header, Footer, Trusted
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600');

@import 'settings.scss';

html {
  background-color: #eee !important;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  background-color: transparent;
  color: #222;
}

main {
  justify-items: start;
  align-items: start;

  @media #{$media-md} {
    min-height: calc(100vh - 415px);
  }
}

img {
  max-width: 100%;
}

.wrapper {

  padding: 5px;

  @media #{$media-xs} {
    padding: 10px 20px;
  }
}

.item-grid {
  display: grid;
  justify-self: start;
  grid-template-columns: 1fr;
  grid-gap: 1px;

  @media #{$media-xs} {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    // grid-auto-rows: 200px;
  }
}

.title-text {
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
}

.logo-grid {
  display: grid;
  width: 100%;
  grid-gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;

  @media #{$media-md} {
    width: 70%;
    margin:  0 auto;
  }

  @media #{$media-xl} {
    width: 40%;
  }
}

// Anim
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
