<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <section class="mt-5">
      <h1 class="text-xl md:text-2xl font-bold tracking-tight text-center">Blog</h1>
      <div class="grid sm:grid-cols-2 grid-flow-row gap-5 mt-10">
        <div v-for="post in posts" :key="post.slug" class="group glass-card">
          <nuxt-link :to="'blog/' + post.slug">
            <datocms-image
              :data="post.previewImage.responsiveImage"
              class="rounded-lg"
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
  </div>
</template>

<script>
import { toHead } from 'vue-datocms'
import { request, gql, imageFields, seoMetaTagsFields } from '../../lib/datocms'

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
          posts: allPosts(first: "10", orderBy: _firstPublishedAt_ASC) {
            id
            title
            slug
            excerpt
            publishedDate: _firstPublishedAt
            updatedDate: date
            previewImage {
              responsiveImage(imgixParams: { fm: jpg, q: 60, fit: min, w: 500, h: 220 }) {
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
    return toHead(this.site.favicon)
  },
}
</script>
