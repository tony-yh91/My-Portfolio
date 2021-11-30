<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <!-- Introduction -->
    <section class="flex flex-col-reverse md:flex-row items-center md:items-start md:mt-5">
      <div class="text-center md:text-left space-y-4 mt-8 md:mt-0 md:mr-8">
        <h2 class="text-2xl font-bold">
          {{ homePage.greetingHeader }}
        </h2>
        <div class="flex space-x-3 w-full justify-center md:justify-start">
          <a
            v-for="(image, index) in homePage.socialMediaIcon.icon"
            :key="index"
            target="_blank"
            :href="image.customData.link"
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
          Software Engineer currently working at
          <a
            target="_blank"
            href="https://qualva.com/"
            class="text-base font-bold text-linkColor"
            rel="noopener noreferrer"
            >Qualva</a
          >.
          {{ homePage.greetingDescription }}
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
            bg-primary
            text-buttonColor
            hover:ring-2 hover:ring-offset-2 hover:ring-offset-bg hover:ring-primary
            transition-all
            ease-out
            duration-300
          "
        >
          <span>About me</span>
        </NuxtLink>
      </div>
      <div class="md:mr-5 p-9 sm:p-10 md:p-0">
        <datocms-image
          class="rounded-full text-center ring-4 ring-offset-bg ring-offset-4 ring-primary"
          :data="homePage.greetingPhoto.responsiveImage"
          :alt="homePage.greetingPhoto.alt"
        />
      </div>
    </section>
    <!-- Projects -->
    <section class="mt-10">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight ml-2">Projects</h3>
      <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 mt-5">
        <div
          v-for="proj in projects"
          :key="proj.id"
          class="glass-card cursor-pointer group"
          @click="goto(proj.slug)"
        >
          <datocms-image
            class="rounded-tr-lg rounded-tl-lg"
            :data="proj.previewImage.responsiveImage"
            :alt="proj.previewImage.alt"
          />
          <div class="px-3 py-3 text-center">
            <h3 class="text-lg font-bold group-hover:text-primary-color">{{ proj.title }}</h3>
            <div class="font-extralight text-sm mt-3 space-x-3 flex items-center justify-center">
              <div
                v-for="tech in proj.techStack"
                :key="tech.id"
                class="
                  w-auto
                  py-0.5
                  px-1
                  border
                  rounded-xl
                  border-primary
                  bg-primary
                  text-buttonColor text-center
                "
              >
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Posts -->
    <section class="mt-10">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">Latest Articles</h3>
      <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 mt-5">
        <div v-for="post in posts" :key="post.slug" class="glass-card cursor-pointer group">
          <nuxt-link :to="'blog/' + post.slug">
            <datocms-image
              class="rounded-tr-lg rounded-tl-lg"
              :data="post.previewImage.responsiveImage"
              :alt="post.previewImage.alt"
            />
            <div class="px-3 py-3 text-center">
              <h1 class="text-lg md:text-xl font-bold group-hover:text-primary-color">
                {{ post.title }}
              </h1>
              <div class="font-extralight text-sm mt-3 space-x-3 flex items-center justify-center">
                <div
                  v-for="category in post.category"
                  :key="category.id"
                  class="
                    w-auto
                    py-0.5
                    px-1
                    border
                    rounded-xl
                    border-primary
                    bg-primary
                    text-buttonColor text-center
                  "
                >
                  {{ category.name }}
                </div>
              </div>
              <div class="font-extralight text-sm mt-3 text-primary-color">
                <span>{{ $moment(post.updatedDate).format('MMMM D YYYY') }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- Contact card -->
    <section class="mt-10">
      <div
        class="
          px-5
          py-5
          md:py-0
          grid
          md:grid-cols-3
          gap-3
          place-items-center
          rounded-lg
          shadow-lg
          glass-card
        "
      >
        <div class="md:col-span-2 space-y-7">
          <h1 class="text-lg md:text-xl font-bold">Need collaboration?</h1>
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
              text-white
              bg-primary
              text-buttonColor
              hover:ring-2 hover:ring-offset-2 hover:ring-primary hover:ring-offset-bg
              transition-all
              ease-out
              duration-300
            "
          >
            <NuxtLink href="#" to="contact"> Let's win together </NuxtLink>
          </button>
        </div>
        <div class="p-3 flex justify-center row-start-1 md:row-start-auto">
          <img src="../assets/programming.svg" alt="Contact Picture" />
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
          projects: allProjectShowcases(first: "2", orderBy: _firstPublishedAt_ASC) {
            id
            title
            slug
            updatedDate: date
            techStack {
              id
              name
            }
            previewImage {
              responsiveImage(imgixParams: { fm: jpg, q: 60, fit: crop, w: 500, h: 280 }) {
                ...imageFields
              }
            }
          }
          posts: allPosts(first: "2", orderBy: _firstPublishedAt_ASC) {
            id
            title
            slug
            publishedDate: _firstPublishedAt
            updatedDate: date
            previewImage {
              responsiveImage(imgixParams: { fm: jpg, q: 60, fit: crop, w: 500, h: 280 }) {
                ...imageFields
              }
            }
            author {
              name
              _firstPublishedAt
            }
            category {
              id
              name
              slug
            }
          }
          homePage {
            seo: _seoMetaTags {
              ...seoMetaTagsFields
            }
            greetingHeader
            greetingDescription
            greetingPhoto {
              alt
              responsiveImage(
                imgixParams: { fm: jpg, q: 75, auto: enhance, fit: max, w: 600, h: 600 }
              ) {
                ...imageFields
              }
            }
            socialMediaIcon {
              icon {
                customData
                responsiveImage(imgixParams: { fm: jpg, q: 75, fit: max, w: 30, h: 30 }) {
                  ...imageFields
                }
              }
            }
            contactHeader
            contactDescription
          }
        }

        ${imageFields}
        ${seoMetaTagsFields}
      `,
    })
    return { ready: !!data, ...data }
  },
  head() {
    if (!this.ready) {
      return
    }
    return toHead(this.homePage.seo, this.site.favicon)
  },
  methods: {
    goto(slug) {
      this.$router.push(`projects/${slug}`)
    },
  },
}
</script>
