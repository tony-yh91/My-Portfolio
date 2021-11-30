<template>
  <footer class="mx-auto px-2 items-center w-11/12 max-w-5xl mt-10 border-t border-bgBorder">
    <div class="container py-10 flex flex-row">
      <nav class="space-y-5 w-1/2">
        <h2 class="font-bold uppercase">Pages</h2>
        <ul class="flex flex-col items-start cursor-pointer">
          <li class="hover:text-buttonPrimaryHover py-1">
            <NuxtLink href="#" to="blog"> Blog </NuxtLink>
          </li>
          <li class="hover:text-buttonPrimaryHover py-1">
            <NuxtLink href="#" to="/projects"> Projects </NuxtLink>
          </li>
          <li class="hover:text-buttonPrimaryHover py-1">
            <NuxtLink href="#" to="/about"> About </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col space-y-6 w-1/2 items-end">
        <h2 class="font-bold uppercase">Soical Media</h2>
        <div v-if="data" class="flex space-x-3">
          <a
            v-for="(image, index) in data.footer.socialMediaIcon.icon"
            :key="index"
            :href="image.customData.link"
            target="_blank"
            :aria-label="image.alt"
            rel="noopener"
          >
            <datocms-image :data="image.responsiveImage" class="social-btn" :alt="image.alt" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="
        container
        flex flex-col
        sm:flex-row
        justify-between
        pb-10
        space-y-5
        sm:space-y-0
        text-sm
        sm:text-base
      "
    >
      <p>©2021 Developed by Ye Htet Aung</p>
      <p>Made with Nuxt.js, Tailwind CSS, and Dato CMS</p>
    </div>
  </footer>
</template>

<script>
import { request, gql, imageFields } from '../lib/datocms'

export default {
  data() {
    return {
      data: [],
    }
  },
  async fetch() {
    this.data = await request({
      query: gql`
        {
          footer {
            title
            socialMediaIcon {
              icon {
                customData
                alt
                responsiveImage(imgixParams: { fm: jpg, q: 75, fit: max, w: 35, h: 35 }) {
                  ...imageFields
                }
              }
            }
          }
        }
        ${imageFields}
      `,
    })
  },
}
</script>
