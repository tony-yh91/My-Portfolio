<template>
  <footer>
    <div class="flex flex-col items-center px-5 py-4 border-t-0 shadow-inner">
      <h3 class="text-gray-500">{{ data.footer.title }}</h3>
      <!-- <span class="text-gray-500">© 2021. All rights reserved.</span> -->
      <span class="flex flex-row items-center space-x-3 px-5 py-2">
        <a
          v-for="(image, index) in data.footer.contactSocialMedia"
          :key="index"
          :href="image.customData.link"
          target="_blank"
          :aria-label="image.alt"
          rel="noopener"
        >
          <datocms-image :data="image.responsiveImage" class="social-btn" :alt="image.alt" />
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
import { request } from '../lib/datocms'

export default {
  data() {
    return {
      data: null,
    }
  },
  async fetch() {
    const data = await request({
      query: `
      {
        footer {
            title
            contactSocialMedia {
              customData
              alt
              responsiveImage(imgixParams: {fit: crop, auto: enhance, w: 30, h: 30}) {
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
        }
      }
      `,
      axios: this.$axios,
    })
    this.data = data
  },
}
</script>

<style scoped>
.social-btn {
  /*
      All of the base styles have
      moved to the “CSS” tab above.
    */
  transition: transform 250ms;
  cursor: pointer;
}

.social-btn:hover {
  transform: translateY(-8px);
}
</style>
