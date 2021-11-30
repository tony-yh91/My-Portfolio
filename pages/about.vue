<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <!-- About me  -->
    <section class="space-y-6 flex flex-col">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">
        {{ aboutPage.aboutMeHeader }}
      </h3>
      <div v-for="(text, index) in aboutPage.aboutMeText.value.document.children" :key="index">
        <p class="text-base md:text-lg font-light">
          {{ text.children[0].value }}
        </p>
      </div>
    </section>
    <!-- TIMELINE -->
    <section class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between mt-10">
      <div>
        <h3 class="text-xl md:text-2xl font-bold tracking-tight">
          {{ aboutPage.timelineExperienceTitle }}
        </h3>
        <div
          v-for="prevJob in aboutPage.timelineJobs.slice().reverse()"
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
          {{ aboutPage.timelineCertificateTitle }}
        </h3>
        <div
          v-for="certificate in aboutPage.timelineCertificates.slice().reverse()"
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
        {{ aboutPage.toolboxDescription }}
      </h3>
      <div class="flex flex-wrap justify-center items-center">
        <div v-for="(img, index) in aboutPage.toolboxImages" :key="index" class="m-5">
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
          currently playing songs of my Spotify.
        </p>
        <div class="glass-card items-center flex gap-2 mt-5 py-2 pl-2 max-w-sm">
          <img v-if="track" :src="track.album_art" width="64" height="64" class="rounded-md" />
          <div class="font-bold text-xs p-1 tracking-normal leading-normal">
            <div v-if="track">
              <div class="uppercase">{{ track.title }}</div>
              <div>{{ track.artist }}</div>
              <div v-if="track.isPlaying">Playing on {{ track.device }}</div>
              <div v-else>Recently played at {{ track.played_at }}</div>
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
import { request, imageFields, seoMetaTagsFields, gql } from '../lib/datocms'

export default {
  async asyncData() {
    const data = await request({
      query: gql`
        {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }
          aboutPage {
            seo: _seoMetaTags {
              ...seoMetaTagsFields
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
              responsiveImage(imgixParams: { auto: enhance, w: "84", h: "84" }) {
                ...imageFields
              }
            }
          }
        }
        ${imageFields}
        ${seoMetaTagsFields}
      `,
    })
    return { ready: !!data, ...data }
  },
  data() {
    return {
      track: null,
    }
  },
  head() {
    if (!this.ready) {
      return
    }
    return toHead(this.aboutPage.seo, this.site.favicon)
  },
  created() {
    this.spotifyCurrentlyPlaying()
  },
  methods: {
    async spotifyCurrentlyPlaying() {
      try {
        const response = await this.$axios({
          method: 'POST',
          url: '/SpotifyCurrentTrack',
          baseURL: process.env.NETLIFY_FUNCTION_URL,
        })
        // console.log(response)
        if (response.status === 200) {
          this.bindMusic(response.data)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        if (error.response && error.response.status === 401) {
          this.spotifyRefreshToken()
        }
      }
    },
    async spotifyRefreshToken() {
      try {
        const response = await this.$axios({
          method: 'POST',
          url: '/SpotifyRefreshToken',
          baseURL: process.env.NETLIFY_FUNCTION_URL,
        })
        if (response.status === 200) {
          this.spotifyCurrentlyPlaying()
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    bindMusic(track) {
      this.track = {
        artist: track.item.artists[0].name,
        title: track.item.name,
        isPlaying: track.is_playing,
        device: track.device.type === 'Computer' ? "Tony's Macbook Air" : track.device.name,
        album_art: track.item.album.images[1].url,
        played_at: this.$moment(track.timestamp).format('dddd hh:mm A'),
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
