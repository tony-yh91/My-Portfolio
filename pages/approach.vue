<template>
  <div
    v-if="data"
    class="
      container
      mt-10
      xl:max-w-6xl
      lg:max-w-4xl
      md:max-w-2xl
      sm:max-w-xl
      max-w-lg
      xl:mx-auto
      space-y-5
      xl:px-4
      divide-y divide-grey-200
    "
  >
    <section class="px-5 py-5 space-y-10">
      <div class="grid lg:grid-cols-2 gap-5">
        <div class="space-y-3 max-w-2xl row-start-2 lg:row-start-auto">
          <h3 class="text-lg text-green-500 font-semibold uppercase">
            {{ data.approachPage.articleHeader }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-normal text-black dark:text-white">
            {{ data.approachPage.articleDescription }}
          </h3>
          <div
            v-for="(text, index) in data.approachPage.articleText.value.document.children"
            :key="index"
          >
            <p class="text-left text-lg text-black dark:text-white">
              {{ text.children[0].value }}
            </p>
          </div>
        </div>
        <div class="px-5 py-5">
          <!-- <datocms-image
            :data="data.approachPage.articleImage.responsiveImage"
            :alt="data.approachPage.articleImage.responsiveImage.alt"
          /> -->
          <img src="@/assets/frontend.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="px-5 py-5 space-y-10">
      <div class="grid lg:grid-cols-2 gap-5">
        <div class="px-5 py-5">
          <!-- <datocms-image
            :data="data.approachPage.articleImageCopy1.responsiveImage"
            :alt="data.approachPage.articleImageCopy1.responsiveImage.alt"
          /> -->
          <img src="@/assets/jamstack.svg" alt="" />
        </div>
        <div class="space-y-3 max-w-2xl">
          <h3 class="text-lg text-green-500 font-semibold uppercase">
            {{ data.approachPage.articleHeaderCopy1 }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-normal text-black dark:text-white">
            {{ data.approachPage.articleDescriptionCopy1 }}
          </h3>
          <div
            v-for="(text, index) in data.approachPage.articleTextCopy1.value.document.children"
            :key="index"
          >
            <p class="text-left text-lg text-black dark:text-white">
              {{ text.children[0].value }}
              <a class="text-green-500" :href="text.children[1].url" target="_blank">{{
                text.children[1].children[0].value
              }}</a>
              {{ text.children[2].value }}
              <span class="font-bold">{{ text.children[3].value }}</span
              >, <span class="font-bold">{{ text.children[5].value }}</span
              >, <span class="font-bold">{{ text.children[7].value }}</span>
              {{ text.children[8].value }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-5 py-5 space-y-10">
      <div class="grid lg:grid-cols-2 gap-5">
        <div class="space-y-3 max-w-2xl row-start-2 lg:row-start-auto">
          <h3 class="text-lg text-green-500 font-semibold uppercase">
            {{ data.approachPage.articleHeaderCopy2 }}
          </h3>
          <h3 class="text-3xl md:text-4xl font-normal text-black dark:text-white">
            {{ data.approachPage.articleDescriptionCopy2 }}
          </h3>
          <div
            v-for="(text, index) in data.approachPage.articleTextCopy2.value.document.children"
            :key="index"
          >
            <p class="text-left text-lg text-black dark:text-white">
              {{ text.children[0].value }}
            </p>
          </div>
        </div>
        <div class="px-5 py-5">
          <!-- <datocms-image
            :data="data.approachPage.articleImageCopy2.responsiveImage"
            :alt="data.approachPage.articleImageCopy2.responsiveImage.alt"
          /> -->
          <img src="@/assets/backend.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="px-5 py-5 space-y-10">
      <div class="text-center space-y-5">
        <h5 class="text-lg text-green-500 uppercase">Why work with me</h5>
        <p class="text-md text-black dark:text-white">
          I do more than just creating a beautiful website. I create a website that brings customers
          to your business.
        </p>
      </div>
      <h3 class="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
        Everything you need for your website
      </h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="p in data.approachPage.paragraphs"
          :key="p.id"
          class="grid grid-cols-4 space-x-3"
        >
          <div class="bg-neutral-muted px-6 rounded-lg">
            <datocms-image :data="p.paragraphsImage.responsiveImage" />
          </div>
          <div class="col-span-3 text-black dark:text-white">
            <h3 class="text-2xl mb-2">{{ p.title }}</h3>
            <p>
              {{ p.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-5 py-5 space-y-10">
      <div
        class="
          px-5
          py-5
          border
          rounded-md
          shadow-sm
          grid
          lg:grid-cols-3
          gap-3
          bg-green-400
          place-items-center
        "
      >
        <div class="p-3 lg:col-span-2">
          <h3 class="text-3xl font-bold text-left">{{ data.approachPage.contactHeader }}</h3>
          <p class="pt-3 pb-3">
            {{ data.approachPage.contactDescription }}
          </p>
          <button
            type="button"
            class="
              focus:outline-none
              text-white text-sm
              py-2
              px-4
              rounded-md
              bg-black
              border-2 border-black
              hover:shadow-xl
            "
          >
            <NuxtLink to="contact">Let's win together</NuxtLink>
          </button>
        </div>
        <div class="p-3 flex justify-center row-start-1 lg:row-start-auto">
          <datocms-image
            :data="data.approachPage.contactImage.responsiveImage"
            :alt="data.approachPage.contactImage.responsiveImage.alt"
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
        approachPage {
          articleHeader
          articleDescription
          articleText {
            value
          }
          articleImage {
            responsiveImage(imgixParams: {fit: crop, ar: "4:3", auto: enhance, w: 860}) {
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
          articleHeaderCopy1
          articleDescriptionCopy1
          articleTextCopy1 {
            value
          }
          articleImageCopy1 {
            responsiveImage(imgixParams: {fit: crop, ar: "4:3", auto: enhance, w: 860}) {
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
          articleHeaderCopy2
          articleDescriptionCopy2
          articleTextCopy2 {
            value
          }
          articleImageCopy2 {
            responsiveImage(imgixParams: {fit: crop, ar: "4:3", auto: enhance, w: 860}) {
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
          factHeader
          factDescription
          factTitle
          paragraphs {
            paragraphsImage {
              responsiveImage(imgixParams: {auto: enhance}) {
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
            title
            description
          }
          contactHeader
          contactDescription
          contactImage {
            responsiveImage(imgixParams: {auto: enhance}) {
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
      }`,
      axios: $axios,
      error,
    })
    return { data }
  },
  data() {
    return {
      data: null,
      paragraphs: [
        {
          id: 1,
          paragraph_title: '',
          paragraph_description: '',
          paragraph_image: '',
        },
      ],
    }
  },
  head() {
    return {
      title: `Approach - Ye Htet Aung`,
    }
  },
}
</script>
