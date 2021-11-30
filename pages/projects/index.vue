<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <section class="mt-5">
      <h1 class="text-xl md:text-2xl font-bold tracking-tight text-center">Projects</h1>
      <div class="grid sm:grid-cols-2 grid-flow-row gap-5 mt-10">
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
  </div>
</template>

<script>
import { request, imageFields, gql } from '../../lib/datocms'

export default {
  async asyncData() {
    const data = await request({
      query: gql`
        query {
          projects: allProjectShowcases(orderBy: _firstPublishedAt_ASC) {
            id
            title
            slug
            techStack {
              id
              name
            }
            previewImage {
              responsiveImage(imgixParams: { fm: jpg, q: 60, fit: min, w: 500, h: 220 }) {
                ...imageFields
              }
            }
          }
        }
        ${imageFields}
      `,
    })
    return { ready: !!data, ...data }
  },
  methods: {
    goto(slug) {
      this.$router.push(`projects/${slug}`)
    },
  },
}
</script>
