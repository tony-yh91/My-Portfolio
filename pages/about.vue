<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <!-- About me  -->
    <section class="space-y-6 flex flex-col">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">
        {{ data.aboutPage.aboutMeHeader }}
      </h3>
      <div v-for="(text, index) in data.aboutPage.aboutMeText.value.document.children" :key="index">
        <p class="text-base md:text-lg font-light">
          {{ text.children[0].value }}
        </p>
      </div>
    </section>
    <!-- TIMELINE -->
    <section class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between mt-10">
      <div>
        <h3 class="text-xl md:text-2xl font-bold tracking-tight">
          {{ data.aboutPage.timelineExperienceTitle }}
        </h3>
        <div
          v-for="prevJob in data.aboutPage.timelineJobs.slice().reverse()"
          :key="prevJob.id"
          class="flex px-3 py-5"
        >
          <div class="pt-2 w-24">
            <img :src="prevJob.logo" alt="" class="w-12 h-12 rounded-md bg-iconPrimary" />
          </div>
          <div class="space-y-1 w-full">
            <div class="text-lg md:text-xl font-semibold">
              {{ prevJob.title }}
            </div>
            <div class="text-sm font-semibold md:text-base">
              {{ prevJob.company }}
            </div>
            <div class="text-sm md:text-base">
              {{ prevJob.from }} - {{ prevJob.to }} -
              <span class="text-green-800">{{ prevJob.type }}</span>
            </div>
            <div class="text-sm md:text-base">
              {{ prevJob.location }}
            </div>
          </div>
        </div>
      </div>
      <!-- Education & Certificates -->
      <div>
        <h3 class="text-xl md:text-2xl font-bold tracking-tight">
          {{ data.aboutPage.timelineCertificateTitle }}
        </h3>
        <div
          v-for="certificate in data.aboutPage.timelineCertificates.slice().reverse()"
          :key="certificate.id"
          class="flex px-5 py-5"
        >
          <div class="pt-2 w-24">
            <a :href="certificate.verification" target="_blank">
              <img :src="certificate.logo" alt="" class="w-12 h-12 rounded-md" />
            </a>
          </div>
          <div class="text-left w-full">
            <div class="text-lg md:text-xl font-semibold">
              {{ certificate.title }}
            </div>
            <div class="text-sm font-semibold md:text-base">
              {{ certificate.organization }}
            </div>
            <div class="text-sm md:text-base">
              {{ certificate.from }} - {{ certificate.to }} -
              <span class="text-green-800">{{ certificate.type }}</span>
            </div>
            <div class="text-sm md:text-base">
              {{ certificate.location }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- TOOLBOX -->
    <section class="space-y-6 mt-10">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">
        {{ data.aboutPage.toolboxDescription }}
      </h3>
      <div class="flex flex-wrap justify-center items-center">
        <div v-for="(img, index) in data.aboutPage.toolboxImages" :key="index" class="m-5">
          <datocms-image :data="img.responsiveImage" lazy-load />
        </div>
      </div>
    </section>
    <!-- Spotify -->
    <section class="mt-10 space-y-5">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">Tunes</h3>
      <div class="flex flex-col">
        <p class="text-sm tracking-tight">
          This section is created with Netlify serverless function that will keep tracking on
          recently played songs of my spotify account.
        </p>
        <div class="glass-card items-center flex gap-2 mt-5 py-2 pl-2 max-w-sm">
          <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              viewBox="-33.4974 -55.829 290.3108 334.974"
            >
              <path
                d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"
                fill="#1ed660"
              />
            </svg> -->
          <img v-if="track" :src="track.album_art" width="64" height="64" class="rounded-md" />
          <div class="font-bold text-xs p-1 tracking-normal leading-normal">
            <div v-if="track">
              <div class="uppercase">{{ track.title }}</div>
              <div>{{ track.artist }}</div>
              <div>Recently played at {{ track.played_at }}</div>
            </div>
            <div v-else>Not Playing</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { toHead } from 'vue-datocms'
import { request } from '../lib/datocms'

export default {
  async asyncData({ $axios, error }) {
    const data = await request({
      query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          }
        }
        aboutPage {
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
          aboutMeHeader
          aboutMeDescription
          aboutMeText {
            value
          }
          timelineHeader
          timelineExperienceTitle
          timelineJobs
          timelineCertificateTitle
          timelineCertificates
          toolboxHeader
          toolboxDescription
          toolboxImages {
            responsiveImage(imgixParams: {auto: enhance, w: "84", h: "84"}) {
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
      }`,
      axios: $axios,
      error,
    })
    return { data }
  },
  data() {
    return {
      data: null,
      track: null,
    }
  },
  head() {
    if (!this || !this.data) {
      return
    }
    return toHead(this.data.aboutPage.seo, this.data.site.favicon)
  },
  computed: {
    reorderJobs() {
      return this.data.aboutPage.timelineJobs.slice().reverse()
    },
  },
  mounted() {
    // const response = await this.$axios.post(
    //   `${process.env.HOST_URL}/.netlify/functions/SpotifyAuth`
    // )
    // console.log(response)
    this.spotifyRecentlyPlayed()
  },
  methods: {
    async spotifyRecentlyPlayed() {
      try {
        const response = await this.$axios.post(
          `https://yehtetaung.netlify.app/.netlify/functions/SpotifyRecentSongs`
        )
        if (response.data.items) {
          this.bindMusic(response.data.items)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        if (error.response.status === 401) {
          this.spotifyRefreshToken()
        }
      }
    },
    async spotifyRefreshToken() {
      try {
        const response = await this.$axios.post(
          `https://yehtetaung.netlify.app/.netlify/functions/SpotifyRefreshToken`
        )
        if (response.status === 200) {
          this.spotifyRecentlyPlayed()
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    bindMusic(items) {
      const track = items[0]
      this.track = {
        artist: track.track.artists[0].name,
        title: track.track.name,
        album_art: track.track.album.images[2].url,
        played_at: this.$moment(track.played_at).format('dddd hh:mm A'),
      }
    },
  },
}
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
