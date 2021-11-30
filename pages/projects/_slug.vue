<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <h1 class="text-2xl md:text-4xl font-bold text-center tracking-tight">{{ project.title }}</h1>
    <datocms-image
      class="rounded-tr-lg rounded-tl-lg mt-5"
      :data="project.previewImage.responsiveImage"
      :alt="project.previewImage.alt"
    />
    <div class="flex justify-evenly mt-5 mb-5">
      <div class="space-y-1">
        <h3 class="text-sm sm:text-base font-bold uppercase">Type</h3>
        <p class="text-xs sm:text-sm">{{ project.pjType.name }}</p>
      </div>
      <div class="space-y-1">
        <h3 class="text-sm sm:text-base font-bold uppercase">Status</h3>
        <p class="text-xs sm:text-sm">{{ project.pjStatus }}</p>
      </div>
      <div class="space-y-2">
        <h3 class="text-sm sm:text-base font-bold uppercase">Stack</h3>
        <p v-for="stack in project.techStack" :key="stack.id" class="text-xs sm:text-sm">
          {{ stack.name }}
        </p>
      </div>
      <div class="space-y-1">
        <h3 class="text-sm sm:text-base font-bold uppercase">Live</h3>
        <p class="text-xs sm:text-sm font-bold text-primary">{{ projectLink }}</p>
      </div>
    </div>
    <datocms-structured-text
      class="space-y-5 text-lg"
      :data="project.content"
      :custom-rules="customRules"
      :render-block="renderBlock"
    />
  </div>
</template>

<script>
import { h } from 'vue-demi'
import { renderRule } from 'vue-datocms'
import { isHeading, isList, isLink } from 'datocms-structured-text-utils'
import { request, gql, imageFields } from '../../lib/datocms'

export default {
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          project: projectShowcase(filter: { slug: { eq: "${params.slug}" } }) {
            title
            previewImage {
              responsiveImage(
                imgixParams: { fm: jpg, q: 75, auto: enhance, fit: max }
              ) {
                ...imageFields
              }
            }
            techStack {
              id
              name
            }
            content {
              value
              blocks {
                id
                __typename
                ... on ImageBlockRecord {
                  image {
                    responsiveImage(imgixParams: {fm: jpg, q: 75, fit: crop ar: "2:1"}) {
                      ...imageFields
                    }
                  }
                }
              }
            }
            link
            pjStatus
            pjType {
              name
            }
          }
        }
        ${imageFields}
      `,
      variables: {
        slug: params.slug,
      },
    })
    return { ready: !!data, ...data }
  },
  data() {
    return {
      customRules: [
        renderRule(isHeading, ({ adapter: { renderNode: h }, node, children, key }) => {
          return h(`h${node.level}`, { class: 'text-xl lg:text-2xl font-extrabold mb-4' }, [
            ...children,
          ])
        }),
        renderRule(isList, ({ adapter: { renderNode: h }, node, children, key }) => {
          return h('ul', { class: 'list-disc ml-5' }, [...children])
        }),
        renderRule(isLink, ({ adapter: { renderNode: h }, node, children, key }) => {
          return h(
            'a',
            { class: 'text-primary hover:cursor-pointer', target: '_blank', href: node.url },
            [...children]
          )
        }),
      ],
    }
  },
  computed: {
    projectLink() {
      return this.project.link
        ? {
            href: this.project.link,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : null
    },
  },
  methods: {
    renderBlock: ({ record }) => {
      switch (record.__typename) {
        case 'ImageBlockRecord':
          return h('datocms-image', {
            props: {
              data: record.image.responsiveImage,
              alt: record.image.alt,
            },
            class: 'rounded-lg rounded-lg mt-5',
          })
        default:
          return null
      }
    },
  },
}
</script>
