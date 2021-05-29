<template>
  <div
    class="container xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg xl:mx-auto space-y-5"
  >
    <!-- Introduction -->
    <section class="mt-2 py-5 px-5 grid grid-rows-1 gap-2 gap-y-5 md:grid-flow-col md:gap-x-9">
      <img
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
        class="mx-auto h-40 md:h-56 rounded-full row-span-2 col-span-2 ring-4 ring-offset-2 ring-green-600"
      />
      <div class="w-full text-center md:text-left space-y-4 col-span-2">
        <h2 class="text-3xl md:text-4xl text-black font-bold">Hi, I'm Ye Htet Aung</h2>
        <p class="text-lg text-black">
          I'm a senior full stack engineer with a passion for coding. Welcome to my home. I'm glad
          you're here!
        </p>
        <button
          type="button"
          class="focus:outline-none text-black text-sm py-2 px-4 rounded-md border-2 border-green-600 hover:shadow-xl"
        >
          <NuxtLink href="#" to="about">About Me</NuxtLink>
        </button>
      </div>
    </section>
    <!-- Work Together -->
    <section class="px-5 py-5 space-y-3 text-center md:text-left">
      <h3 class="text-md text-green-500 font-semibold tracking-wider uppercase">
        I'm working for awesome people
      </h3>
      <h3 class="text-3xl md:text-4xl font-bold">Let's work together.🤝</h3>
      <p class="text-lg md:w-3/4 pb-5">
        From personal website to scalable design systems, single-page apps to e-commerce web
        applications. I help people to build ambitious web projects.
      </p>
      <button
        type="button"
        class="focus:outline-none text-black text-sm py-2 px-4 rounded-md border-2 border-green-600 hover:shadow-xl"
      >
        <NuxtLink to="/about">My approach</NuxtLink>
      </button>
    </section>
    <!-- Projects -->
    <section class="px-2 py-5 space-y-3">
      <h3 class="text-lg text-center text-green-500 font-semibold tracking-wider uppercase">
        Some of my works
      </h3>
      <h3 class="text-3xl text-center md:text-4xl font-bold">I've built awesome things.</h3>
      <div class="grid grid-flow-row gap-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-2">
        <div
          class="px-2 py-5 card cursor-pointer text-left"
          @mouseenter="addClass"
          @mouseleave="removeClass"
        >
          <img src="../assets/sample.png" class="rounded-md h-56 card" />
          <div
            class="px-3 py-5 bg-white ml-10 border border-green-300 rounded-md -mt-28 relative lg:z-10 card"
          >
            <h2 class="text-2xl text-bold pb-3">Qualva Chat Bot</h2>
            <p class="text-sm">
              We are living the digital life. Even those who hate the internet and everything it
              represents can’t deny the fact that this is the time and age of digitization.
            </p>
          </div>
        </div>
        <div
          class="px-2 py-5 card cursor-pointer text-left"
          @mouseenter="addClass"
          @mouseleave="removeClass"
        >
          <img src="../assets/sample.png" class="rounded-md h-56 card" />
          <div
            class="px-3 py-5 bg-white ml-10 border border-green-300 rounded-md -mt-28 relative lg:z-10 card"
          >
            <h2 class="text-2xl text-bold pb-3">Qualva Chat Bot</h2>
            <p class="text-sm">
              We are living the digital life. Even those who hate the internet and everything it
              represents can’t deny the fact that this is the time and age of digitization.
            </p>
          </div>
        </div>
        <div
          class="px-2 py-5 card cursor-pointer text-left"
          @mouseenter="addClass"
          @mouseleave="removeClass"
        >
          <img src="../assets/sample.png" class="rounded-md h-56 card" />
          <div
            class="px-3 py-5 bg-white ml-10 border border-green-300 rounded-md -mt-28 relative z-10 card"
          >
            <h2 class="text-2xl text-bold pb-3">Qualva Chat Bot</h2>
            <p class="text-sm">
              We are living the digital life. Even those who hate the internet and everything it
              represents can’t deny the fact that this is the time and age of digitization.
            </p>
          </div>
        </div>
        <div
          class="px-2 py-5 card cursor-pointer text-left"
          @mouseenter="addClass"
          @mouseleave="removeClass"
        >
          <img src="../assets/sample.png" class="rounded-md h-56 card" />
          <div
            class="px-3 py-5 bg-white ml-10 border border-green-300 rounded-md -mt-28 relative z-10 card"
          >
            <h2 class="text-2xl text-bold pb-3">Qualva Chat Bot</h2>
            <p class="text-sm">
              We are living the digital life. Even those who hate the internet and everything it
              represents can’t deny the fact that this is the time and age of digitization.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardHover: false,
    }
  },
  methods: {
    addClass(e) {
      if (!e.target.children[0].classList.contains('card-image-transition')) {
        e.target.children[0].classList.add('card-image-transition')
        e.target.children[1].classList.add('card-description-transition')
      }
    },
    removeClass(e) {
      if (e.target.children[0].classList.contains('card-image-transition')) {
        e.target.children[0].classList.remove('card-image-transition')
        e.target.children[1].classList.remove('card-description-transition')
      }
    },
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
.card {
  transition: transform 0.5s;
}
.card-image-transition {
  transform: translate(-15px, -15px);
}
.card-description-transition {
  transform: translate(15px, 15px);
}
</style>
