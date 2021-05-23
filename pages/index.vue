<template>
  <div class="container py-5 divide-y divide-blue-80">
    <!-- Introduction -->
    <header
      class="mx-auto mt-2 py-5 px-5 max-w-6xl sm:w-full lg:max-w-6xl grid grid-rows-2 gap-2 gap-y-5 sm:grid-flow-col sm:gap-x-9"
    >
      <!-- <div class="absolute w-full top-0 left-0 wave-bg"></div> -->
      <img
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
        class="mx-auto h-40 sm:h-56 rounded-full row-span-2 col-span-2 ring-4 ring-offset-2 ring-green-600"
      />
      <section class="w-full text-center sm:text-left space-y-4 col-span-2">
        <h2 class="text-3xl sm:text-4xl text-black font-bold">Hi, I'm Ye Htet Aung</h2>
        <p class="text-lg text-black">
          I'm a senior full stack engineer with a passion for coding. Welcome to my home. I'm glad
          you're here!
        </p>
      </section>

      <!-- <section class="col-span-2 text-center sm:text-left">
        <button
          type="button"
          class="focus:outline-none ring ring-green-600 ring-offset-2 text-white text-sm py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
        >
          Find out more
        </button>
      </section> -->
    </header>
    <!-- Projects -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      planets: [],
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.wave-bg {
  background-image: url('../assets/wavebg.svg');
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  height: 80%;
  overflow: hidden;
}
</style>
