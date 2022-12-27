<template>
  <b-container>
    <h1 class="title fancy-font">
      ENDLESS PHOTOBOOTH PACKAGES
    </h1>
    <div class="subtitle">
      Ventura County Photo Booth Rentals
    </div>
    <Packages />
    <PhotoBoothTypes />
  </b-container>
</template>

<script>
import Packages from '~/components/Packages.vue';
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';

export default {
  components: {
    Packages,
    PhotoBoothTypes,
  },
  head() {
    return {
      title: 'Packages',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals Packages Page' },
      ],
    }
  },
}
</script>

<style>
.subtitle {
  color: #317FBC;
  /*color: white;*/
  font-weight: 300;
  word-spacing: 5px;
  text-align: center;
}

</style>
