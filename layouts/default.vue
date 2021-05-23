<template>
  <div class="flex flex-col justify-between">
    <Navbar></Navbar>
    <transition name="home">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  components: { Navbar, Footer },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 1s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
