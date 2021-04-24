<template>
  <div class="container">
    <div>
      <h3 class="title">{{ planet.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'zoom',
  async asyncData({ params, $http }) {
    const planet = await $http.$get(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    )
    return { planet }
  },
}
</script>
