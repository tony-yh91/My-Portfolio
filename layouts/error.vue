<template>
  <section class="flex flex-col items-center justify-center h-screen">
    <h2 class="font-bold text-3xl">{{ error.statusCode }} — {{ error.message }}</h2>
    <p class="text-lg text-center px-5 py-5 pt-5">
      Oh no. Sorry about that. If you came here from a link, could you please let me know so I can
      fix it? You can mail me @
      <a
        :href="
          'mailto:' +
          'ygxan18@gmail.com.com?subject=I found a broken link!&body=Hey Wes,%0D%0A%0D%0AI found a broken link on your site. The page was supposed to be at' +
          ' ' +
          'yehtetaung.dev' +
          currentURL
        "
        class="font-bold hover:text-green-500"
        >ygxan18@gmail.com
      </a>
    </p>
    <button
      type="button"
      class="bg-green-300 font-bold text-black py-2 px-4 rounded-md hover:shadow-xl hover:bg-green-500"
    >
      <NuxtLink to="/">Back to home</NuxtLink>
    </button>
  </section>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    currentURL() {
      return this.$route.fullPath
    },
  },
}
</script>
