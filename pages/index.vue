<template>
  <div
    class="container xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg xl:mx-auto space-y-10"
  >
    <!-- Introduction -->
    <section
      class="mt-2 py-5 px-5 grid grid-rows-1 gap-2 gap-y-5 md:grid-flow-col md:gap-x-9 justify-items-center place-items-center"
    >
      <div class="col-span-2">
        <img
          class="h-40 w-40 md:w-44 md:h-44 rounded-full row-span-2 text-center col-span-2 ring-4 ring-offset-white dark:ring-offset-black ring-offset-4 ring-green-600"
          src="../assets/profile-lowres.png"
          alt="Profile picture"
        />
      </div>
      <div class="w-full text-center md:text-left space-y-4 col-span-2 text-black dark:text-white">
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ data.homePage.greetingHeader }}
        </h2>
        <p class="text-lg">
          {{ data.homePage.greetingDescription }}
        </p>
        <button
          type="button"
          class="bg-green-300 font-bold py-2 px-4 rounded-md hover:shadow-xl text-black hover:bg-green-500"
        >
          <NuxtLink href="#" to="about">About Me</NuxtLink>
        </button>
      </div>
    </section>
    <!-- Projects -->
    <section class="px-2 py-5 space-y-3">
      <h3
        class="text-lg text-center md:text-left text-green-800 dark:text-green-500 font-semibold uppercase"
      >
        {{ data.homePage.projectContentHeader }}
      </h3>
      <h3 class="text-3xl text-center md:text-left dark:text-white md:text-4xl font-bold">
        {{ data.homePage.projectContentDescription }}
      </h3>
      <div class="grid md:grid-cols-2 gap-3">
        <div
          v-for="proj in data.homePage.projects"
          :key="proj.id"
          class="md:w-11/12 px-2 py-5 card cursor-pointer text-left"
          @mouseenter="addClass"
          @mouseleave="removeClass"
        >
          <datocms-image
            :data="proj.projectImage.responsiveImage"
            class="border border-green-300 rounded-md card dark:dark-card"
            :alt="proj.projectImage.alt"
          />
          <div
            class="px-3 py-5 w-11/12 ml-4 md:w-full bg-white dark:bg-gray-900 md:ml-10 border border-green-300 rounded-md -mt-16 md:-mr-6 relative lg:z-10 card"
          >
            <h2 class="text-2xl text-bold pb-3 text-black dark:text-white">{{ proj.title }}</h2>
            <p class="text-sm text-black dark:text-white">
              {{ proj.subtitle }}
            </p>
          </div>
        </div>
        <!-- <div
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
        </div> -->
      </div>
    </section>
    <!-- Work Together -->
    <section class="px-5 py-5 space-y-3 text-center md:text-left">
      <h3 class="text-lg text-green-800 dark:text-green-500 font-semibold uppercase">
        {{ data.homePage.approachHeader }}
      </h3>
      <h3 class="text-3xl md:text-4xl dark:text-white font-bold">
        {{ data.homePage.approachDescription }}
      </h3>
      <p class="text-lg dark:text-white md:w-3/4 pb-5">
        {{ data.homePage.approachText }}
      </p>
      <button
        type="button"
        class="bg-green-300 font-bold text-black py-2 px-4 rounded-md hover:shadow-xl hover:bg-green-500"
      >
        <NuxtLink to="/approach">My approach</NuxtLink>
      </button>
    </section>
  </div>
</template>

<script>
import { request } from '../lib/datocms'

export default {
  async asyncData({ $axios, error }) {
    const data = await request({
      query: `
      {
        homePage {
          greetingHeader
          greetingDescription
          greetingPhoto {
            responsiveImage(imgixParams: {auto: enhance}) {
              aspectRatio
              alt
              base64
              height
              sizes
              src
              srcSet
              title
              width
            }
          }
          projectContentHeader
          projectContentDescription
          projects {
            id
            title
            subtitle
            projectImage {
              alt
              responsiveImage(imgixParams: {fit: crop, ar: "16:9", auto: enhance}) {
                src
                srcSet
                title
                width
                alt
                aspectRatio
                base64
                height
                sizes
              }
            }
          }
          approachHeader
          approachDescription
          approachText
        }
      }`,
      axios: $axios,
      error,
    })
    return { data }
  },
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
.card {
  transition: transform 0.5s;
}
.dark .dark\:dark-card {
  filter: brightness(0.8) contrast(1.2);
}
.card-image-transition {
  transform: translate(-15px, -15px);
}
.card-description-transition {
  transform: translate(15px, 15px);
}
.profile-::before {
  display: block;
  content: '';
  padding-top: calc(100% * 2 / 3);
  /* You could reduce this expression with a preprocessor or by doing the math. I've kept the longer form in `calc()` to make the math more readable for this demo. */
}
.profile-img {
  /* width: 100%; */
  margin: 0 0 1rem;
  box-sizing: border-box;
}
</style>
