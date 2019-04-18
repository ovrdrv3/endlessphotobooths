<template>
  <b-container fluid>
    <h1 class="title">ENDLESS PHOTO{{spaceForMobile}}BOOTHS PACKAGES</h1>
    <div class="subtitle">Ventura County Photo Booth Rentals</div>
    <Packages/>
    <PhotoBoothTypes/>

  </b-container>
</template>

<script>
import Packages from '~/components/Packages.vue';
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';

export default {
  head () {
    return {
      title: 'Packages',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals Packages Page' }
      ]
    }
  },
  components: {
    Packages,
    PhotoBoothTypes
  },
  computed: {
    spaceForMobile: function () {
      return this.isMobile ? ' ' : '';
    },
    isMobile: function () {
      if (process.static) {
        var mobileDeviceDetect = require('mobile-device-detect');
        return mobileDeviceDetect.isMobile;
      }
    }
  }

}
</script>

<style>
.title {
  letter-spacing: 4px;
  display: block;
  font-weight: 300;
  /*color: white;*/
  color: #317FBC;
  text-align: center;
}

.subtitle {
  color: #317FBC;
  /*color: white;*/
  font-weight: 300;
  word-spacing: 5px;
  text-align: center;
}

</style>
