<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <section class="mt-5">
      <h1 class="text-xl md:text-2xl font-bold tracking-tight">Blog</h1>
      <div class="grid sm:grid-cols-2 grid-flow-row gap-7 mt-4">
        <div
          v-for="post in data.allPosts"
          :key="post.slug"
          class="group glass-card px-5 py-5 hover:shadow-lg"
        >
          <nuxt-link :to="'blog/' + post.slug">
            <div class="space-y-5">
              <datocms-image
                :data="post.previewImage.responsiveImage"
                class="rounded-lg transform transition duration-500 hover:scale-105"
                :alt="post.previewImage.alt"
              />
              <h3
                class="text-lg md:text-xl font-bold group-hover:text-textNavPrimary cursor-pointer"
              >
                {{ post.title }}
              </h3>
              <div class="font-extralight text-sm mt-3 space-x-3">
                <span>#{{ post.category.name }}</span>
              </div>
              <p class="mt-3 text-base md:text-lg font-light tracking-wide leading-loose">
                {{ post.excerpt }}
              </p>
              <div class="font-extralight text-sm mt-3 text-textNavPrimary">
                <span>{{ $moment(post.publishedDate).format('MMMM D YYYY') }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { toHead } from 'vue-datocms'
import { request } from '../../lib/datocms'

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
          allPosts(first: "10", orderBy: _firstPublishedAt_DESC) {
            id
            title
            slug
            excerpt
            publishedDate: _firstPublishedAt
            previewImage {
              responsiveImage(imgixParams: { auto: enhance, h: 500, ar: "16:9" }){
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
            author {
              name
              _firstPublishedAt
            }
            category {
              name
              slug
            }
          }
        }
      `,
      axios: $axios,
      error,
    })
    return { data }
  },
  head() {
    if (!this.ready) {
      return
    }
    return toHead(this.data.site.favicon)
  },
}
</script>
