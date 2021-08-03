<template>
  <div
    class="container xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg xl:mx-auto space-y-5 xl:px-4 divide-y divide-grey-200"
  >
    <div>
      <!-- About me  -->
      <section class="py-5 px-5 space-y-6 flex flex-col">
        <div class="space-y-3">
          <h3 class="text-lg text-green-800 font-semibold uppercase">
            {{ data.aboutPage.aboutMeHeader }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {{ data.aboutPage.aboutMeDescription }}
          </h3>
        </div>
        <div
          v-for="(text, index) in data.aboutPage.aboutMeText.value.document.children"
          :key="index"
        >
          <p class="text-left text-lg font-normal text-black dark:text-white">
            {{ text.children[0].value }}
          </p>
        </div>
        <!-- <p class="text-left text-lg">
        I have a demonstrated history of working in the information technology and services
        industry. I have done over five projects which include medium to large business
        applications.
      </p>
      <p class="text-left text-lg">
        I specialize in Javascript which is the most popular programming language in web
        development.
      </p>
      <p class="text-left text-lg">
        I’m currently part of the team at Professy where I help to develop full-stack RESTful
        microservices, and leading the Javascript developers in a remote working environment.
      </p>
      <p class="text-left text-lg">
        I have a bachelor degree of Computer Science from University of Computer Studies, Monywa.
      </p>
      <p class="text-left text-lg">I always like to learn new things.</p> -->
      </section>
      <!-- TIMELINE -->
      <section class="py-5 px-5 space-y-6">
        <div class="space-y-3">
          <h3 class="text-lg text-green-800 font-semibold uppercase">
            {{ data.aboutPage.timelineHeader }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {{ data.aboutPage.timelineDescription }}
          </h3>
        </div>

        <div
          v-for="(prevJob, index) in data.aboutPage.timelineJobs.slice().reverse()"
          :key="prevJob.id"
          class="flex flex-row ml-5"
        >
          <ul
            class="flex flex-col text-left pl-10"
            :class="{ lastItem: index === reorderJobs.length - 1 }"
          >
            <li class="text-lg md:text-xl font-normal text-black dark:text-white">
              {{ prevJob.title }}
            </li>
            <li class="text-base md:text-lg text-green-800 dark:text-green-500">
              {{ prevJob.type }}
            </li>
            <li class="text-base md:text-lg text-gray-700 dark:text-white">
              {{ prevJob.from }} - {{ prevJob.to }} - {{ prevJob.location }}
            </li>
          </ul>
        </div>
      </section>
      <!-- TOOLBOX -->
      <section class="py-5 px-5 space-y-6">
        <div class="space-y-3">
          <h3 class="text-lg text-green-800 font-semibold uppercase">
            {{ data.aboutPage.toolboxHeader }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {{ data.aboutPage.toolboxDescription }}
          </h3>
          <article class="flex flex-wrap justify-center items-center">
            <div v-for="(img, index) in data.aboutPage.toolboxImages" :key="index" class="m-6">
              <datocms-image :data="img.responsiveImage" />
            </div>
            <!-- <figure class="m-6 h-25 w-20">
            <img src="../assets/nodejs.svg" alt="Node" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/react.svg" alt="React" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/vuejs.svg" alt="Vue.js" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/js.svg" alt="Javascript" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/nuxt.svg" alt="Nuxt.js" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/html.svg" alt="HTML5" loading="lazy" />
          </figure>
          <figure class="m-6 h-16 w-12">
            <img src="../assets/css.svg" alt="CSS3" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-32">
            <img src="../assets/rails.svg" alt="Rails" loading="lazy" />
          </figure>
          <figure class="m-6 h-25 w-36">
            <img src="../assets/mongodb.svg" alt="MongoDB" loading="lazy" />
          </figure>
          <figure class="m-6 h-20 w-20">
            <img src="../assets/mysql.png" alt="Mysql" loading="lazy" />
          </figure> -->
          </article>
        </div>
      </section>
      <!-- OTHER THAN THAT -->
      <section class="py-5 px-5 space-y-6">
        <div class="space-y-3">
          <h3 class="text-lg text-green-800 font-semibold uppercase">
            {{ data.aboutPage.interestsHeader }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {{ data.aboutPage.interestsDescription }}
          </h3>
          <div
            v-for="(interest, index) in data.aboutPage.interestsText.value.document.children"
            :key="index"
          >
            <p class="text-left text-lg font-normal text-black dark:text-white">
              {{ interest.children[0].value }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { request } from '../lib/datocms'

export default {
  async asyncData({ $axios, error }) {
    const data = await request({
      query: `
      {
        aboutPage {
          aboutMeHeader
          aboutMeDescription
          aboutMeText {
            value
          }
          timelineHeader
          timelineDescription
          timelineJobs
          toolboxHeader
          toolboxDescription
          toolboxImages {
            responsiveImage(imgixParams: {auto: enhance, w: "80", h: "80"}) {
              base64
              aspectRatio
              alt
              height
              sizes
              src
              srcSet
              title
              width
            }
          }
          interestsHeader
          interestsDescription
          interestsText {
            value
          }
        }
      }`,
      axios: $axios,
      error,
    })
    return { data }
  },
  data() {
    return {
      data: null,
    }
  },
  head() {
    return {
      title: `About - Ye Htet Aung`,
    }
  },
  computed: {
    reorderJobs() {
      return this.data.aboutPage.timelineJobs.slice().reverse()
    },
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>
<style scoped>
ul {
  position: relative;
}
ul::after {
  position: absolute;
  top: 5px;
  left: 0;
  content: '';
  background-image: url('../assets/check.svg');
  display: inline-block;
  height: 24px;
  width: 24px;
  text-align: center;
  line-height: 24px;
}
ul::before {
  position: absolute;
  left: 11px;
  top: 30px;
  content: '';
  height: 100%;
  width: 0;
  --tw-divide-opacity: 1;
  border-left: 2px solid #000;
  border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
}
.lastItem::before {
  --tw-divide-opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
