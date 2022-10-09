<template>
  <div>
    <!-- <Navbar v-if="$nuxt.$route.path !== '/'"/> -->
    <Navbar/>
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
