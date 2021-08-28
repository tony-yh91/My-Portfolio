<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <!-- Introduction -->
    <section class="flex flex-col-reverse md:flex-row items-center md:items-start md:mt-5">
      <div class="text-center md:text-left space-y-4 mt-8 md:mt-0 md:mr-8">
        <h2 class="text-2xl font-bold">
          {{ data.homePage.greetingHeader }}
        </h2>
        <div class="flex space-x-3 w-full justify-center md:justify-start">
          <a
            v-for="(image, index) in data.homePage.contactSocialMedia"
            :key="index"
            target="_blank"
            :aria-label="image.alt"
            rel="noopener"
          >
            <datocms-image
              :data="image.responsiveImage"
              class="social-btn"
              :alt="image.alt"
              lazy-load
            />
          </a>
        </div>
        <p class="text-base md:text-lg font-light tracking-wide leading-loose">
          Javascript Engineer at Professy.
          {{ data.homePage.greetingDescription }}
        </p>
        <NuxtLink
          href="#"
          to="about"
          class="
            relative
            top-6
            rounded
            px-5
            py-2.5
            overflow-hidden
            group
            text-textSecondary
            bg-buttonPrimary
            hover:ring-2
            hover:ring-offset-2
            hover:ring-offset-backgroundPrimary
            hover:ring-buttonPrimary
            transition-all
            ease-out
            duration-300
          "
        >
          <span>About me</span>
        </NuxtLink>
      </div>
      <div class="md:mr-5">
        <datocms-image
          class="
            h-40
            w-40
            sm:w-60 sm:h-60
            rounded-full
            text-center
            ring-4 ring-offset-backgroundPrimary ring-offset-4 ring-buttonPrimary
          "
          :data="data.homePage.greetingPhoto.responsiveImage"
          :alt="data.homePage.greetingPhoto.alt"
        />
      </div>
    </section>
    <!-- Projects -->
    <section class="mt-10">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight ml-2">
        {{ data.homePage.projectContentDescription }}
      </h3>
      <div
        class="
          flex flex-col
          md:flex-row
          justify-center
          items-center
          space-x-0
          md:space-x-5
          space-y-5
          md:space-y-0
          mt-5
        "
      >
        <div
          v-for="proj in data.homePage.projects"
          :key="proj.id"
          class="
            glass-card
            px-4
            py-4
            text-textPrimary
            space-y-5
            transform
            transition
            duration-500
            hover:shadow-lg
            cursor-pointer
          "
        >
          <datocms-image
            :data="proj.projectImage.responsiveImage"
            class="rounded-lg transform transition duration-500 hover:scale-105"
            :alt="proj.projectImage.alt"
          />
          <h3 class="text-lg font-bold">{{ proj.title }}</h3>
          <p class="text-sm md:text-base font-light">
            {{ proj.subtitle }}
          </p>
          <button
            class="
              flex
              rounded
              px-1
              py-1.5
              overflow-hidden
              text-buttonPrimary text-sm
              font-extralight
              hover:text-buttonPrimaryHover
              ml-auto
            "
          >
            <NuxtLink href="#" to="contact"> More </NuxtLink>
          </button>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">Latest Articles</h3>
      <div class="flex flex-col sm:flex-row space-y-7 sm:space-y-0 mt-4">
        <div class="px-1 py-1 group cursor-pointer">
          <h1 class="text-lg md:text-xl font-bold group-hover:text-textNavPrimary">
            How I built my blog
          </h1>
          <div class="font-extralight text-sm mt-3 space-x-3">
            <span>#Javascript</span><span>#WebDev</span>
          </div>
          <p class="mt-3 text-base md:text-lg font-light tracking-wide leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at rerum in doloribus
            velit suscipit libero excepturi beatae tempore, repudiandae dolor tempora debitis
            perspiciatis mollitia eum facere natus omnis voluptas.
          </p>
          <div class="font-extralight text-sm mt-3">
            <span>Aug 23</span> . <span></span>23 min read
          </div>
        </div>
        <div class="px-1 py-1">
          <h1 class="text-lg md:text-xl font-bold hover:text-textNavPrimary cursor-pointer">
            How I built my blog
          </h1>
          <div class="font-extralight text-sm mt-3 space-x-3">
            <span>#Javascript</span><span>#WebDev</span>
          </div>
          <p class="mt-3 text-base md:text-lg font-light tracking-wide leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at rerum in doloribus
            velit suscipit libero excepturi beatae tempore, repudiandae dolor tempora debitis
            perspiciatis mollitia eum facere natus omnis voluptas.
          </p>
          <div class="font-extralight text-sm mt-3">
            <span>Aug 23</span> . <span></span>23 min read
          </div>
        </div>
      </div>
    </section>
    <!-- Contact card -->
    <section class="mt-10">
      <div
        class="
          px-5
          py-5
          grid
          md:grid-cols-3
          gap-3
          place-items-center
          rounded-lg
          shadow-lg
          bg-backgroundSecondary
        "
      >
        <div class="md:col-span-2 space-y-7">
          <h3 class="text-lg md:text-xl font-bold">Want to hire me?</h3>
          <p class="mt-3 mb-3 text-sm md:text-base font-light">
            Feel free to reach out to me anytime if you're looking for a developer, have a question,
            or just want to connect.
          </p>
          <button
            class="
              rounded
              px-5
              py-2.5
              overflow-hidden
              text-textSecondary
              bg-buttonPrimary
              hover:ring-2
              hover:ring-offset-2
              hover:ring-buttonPrimary
              hover:ring-offset-backgroundPrimary
              transition-all
              ease-out
              duration-300
            "
          >
            <NuxtLink href="#" to="contact"> Let's win together </NuxtLink>
          </button>
        </div>
        <div class="p-3 flex justify-center row-start-1 md:row-start-auto">
          <datocms-image
            :data="data.homePage.contactPhoto.responsiveImage"
            :alt="data.homePage.contactPhoto.responsiveImage.alt"
            lazy-load
          />
        </div>
      </div>
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
              alt
              responsiveImage(imgixParams: { auto: enhance }) {
                aspectRatio
                alt
                base64
                height
                sizes
                src
                srcSet
                webpSrcSet
                title
                width
              }
            }
            contactSocialMedia {
              responsiveImage(imgixParams: { fit: crop, auto: enhance, w: 30, h: 30 }) {
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
            projectContentHeader
            projectContentDescription
            projects {
              id
              title
              subtitle
              projectImage {
                alt
                responsiveImage(imgixParams: { ar: "16:9", auto: enhance }) {
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
            contactHeader
            contactDescription
            contactPhoto {
              responsiveImage(imgixParams: { auto: enhance }) {
                alt
                aspectRatio
                base64
                height
                sizes
                src
                srcSet
                title
                width
              }
            }
          }
        }
      `,
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
  head() {
    return {
      title: 'Home - Ye Htet Aung',
    }
  },
  // beforeMount() {
  //   this.$colorMode.preference = 'system'
  // },
}
</script>
