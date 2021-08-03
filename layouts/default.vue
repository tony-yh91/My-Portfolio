<template>
  <div class="flex flex-col min-h-screen dark-mode bg-white dark:bg-gray-900">
    <Navbar></Navbar>
    <main class="flex-grow">
      <transition name="home">
        <Nuxt />
      </transition>
    </main>
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
.dark-mode {
  transition: background-color 0.5s;
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
