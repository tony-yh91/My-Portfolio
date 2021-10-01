<template>
  <div class="w-11/12 max-w-3xl mx-auto px-1 space-y-3">
    <div class="font-extralight text-sm space-x-3">
      <span>#{{ data.post.category.name }}</span>
    </div>
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
      {{ data.post.title }}
    </h1>
    <div class="font-extralight text-base space-y-1">
      <div>
        By <span class="font-bold">{{ data.post.author.name }}</span> •
        {{ $moment(data.post.publishedDate).format('MMM D YYYY') }} • {{ readingTime }} minute read
      </div>
    </div>
    <p ref="article">
      <datocms-structured-text
        class="space-y-5 text-lg"
        :data="data.post.content"
        :render-block="renderBlock"
        :custom-rules="customRules"
      />
    </p>
    <div class="px-3 py-3 flex flex-col justify-center items-center space-y-4 max-w-xs mx-auto">
      <span class="w-52 border-t max-w-full border-borderSecondary pb-6"></span>
      <h4 class="font-semibold text-base text-center">You can send your feedback to me</h4>
      <button
        class="
          w-8/12
          rounded-full
          px-5
          py-2.5
          overflow-hidden
          text-textPrimary
          border border-buttonPrimary
          hover:bg-buttonPrimary hover:text-textSecondary
          transition-all
          ease-out
          duration-300
        "
      >
        <a href="#">
          Chat me on
          <svg
            aria-hidden="true"
            focusable="false"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-6 inline-block pl-1"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { h } from 'vue-demi'
import { renderRule, toHead } from 'vue-datocms'
import { isHeading, isCode } from 'datocms-structured-text-utils'
import SyntaxHighlight from '@/components/SyntaxHighlight'
import { request } from '../../lib/datocms'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'syntax-highlight': SyntaxHighlight,
  },
  async asyncData({ params, $axios, error }) {
    const data = await request({
      query: `
        query BlogPostQuery($slug: String!) {
          site: _site {
            favicon: faviconMetaTags {
              attributes
              content
              tag
            }
          }
          post(filter: {slug: {eq: $slug }}) {
            seo: _seoMetaTags {
              attributes
              content
              tag
            }
            id
            title
            slug
            publishedDate: _firstPublishedAt
            _updatedAt
            author {
              name
            }
            category {
              name
            }
            content {
              value
              blocks {
                __typename
                ... on ImageBlockRecord {
                  id
                  image {
                    responsiveImage(imgixParams: {auto: enhance}) {
                      srcSet
                      webpSrcSet
                      sizes
                      src
                      width
                      height
                      aspectRatio
                      alt
                      title
                      base64
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
      axios: $axios,
      error,
    })
    return { data }
  },
  data() {
    return {
      customRules: [
        renderRule(isHeading, ({ adapter: { renderNode: h }, node, children, key }) => {
          return h(
            `h${node.level}`,
            { class: 'text-xl lg:text-2xl font-extrabold text-primary mb-4' },
            [...children]
          )
        }),
        renderRule(isCode, ({ adapter: { renderNode: h }, node, key }) => {
          return h(
            'syntax-highlight',
            {
              code: node.code,
              language: node.language,
            },
            []
          )
        }),
      ],
      readingTime: 0,
    }
  },
  mounted() {
    this.getReadingTime()
  },
  methods: {
    renderBlock: ({ record }) => {
      if (record.__typename === 'ImageBlockRecord') {
        return h('div', { class: 'mb-3' }, [
          h('datocms-image', { props: { data: record.image.responsiveImage } }),
        ])
      }
    },
    getReadingTime() {
      const text = this.$refs.article.innerText
      const wpm = 225
      const words = text.trim().split(/\s+/).length
      this.readingTime = Math.ceil(words / wpm)
    },
    head() {
      if (!this.ready) {
        return
      }
      return toHead(this.data.post.seo, this.data.site.favicon)
    },
  },
}
</script>
