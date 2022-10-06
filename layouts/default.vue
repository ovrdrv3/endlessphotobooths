<template>
  <div>
    <Navbar v-if="$nuxt.$route.path !== '/'"/>
    <nuxt/>
    <Bottombar/>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar.vue';
import Bottombar from '~/components/BottomBar.vue';
export default {
  components: {
    Navbar,
    Bottombar
  }
}

</script>

<style>
html {
  font-size: 30px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
