<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
      class="copy copy-heading"
    >
      Page not found!
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/">
      Back to home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
