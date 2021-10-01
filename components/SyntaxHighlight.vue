<template>
  <pre class="highlight">
      <code v-highlight class="rounded-md text-sm sm:text-lg"  :class="language">{{code}}</code>
  </pre>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      default: null,
    },
  },
}
</script>
