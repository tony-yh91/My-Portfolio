<template>
  <div class="flex flex-col min-h-screen">
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
