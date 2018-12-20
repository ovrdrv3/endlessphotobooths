<template>
  <b-container fluid>

<!--       <b-col md="4">
          <h1 class="title">ENDLESS PHOTOBOOTHS</h1>
          <span class="subtitle">Ventura County Photo Booth Rentals</span>
          <b-button class="contact-btn"
                    size="lg"
                    href="tel:+18057108997">
            Call
          </b-button>
          <b-button class="contact-btn"
                    size="lg"
                    href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">
            Email
          </b-button>

      </b-col>
      <b-col md="8"> -->
    <h1 class="title">ENDLESS PHOTO{{spaceForMobile}}BOOTHS</h1>
    <div class="subtitle">Ventura County Photo Booth Rentals</div>
    <Packages/>
    <PhotoBoothTypes/>

  </b-container>
</template>

<script>
import Packages from '~/components/Packages.vue';
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';
import mediumZoom from 'medium-zoom';

export default {
  components: {
    Packages,
    PhotoBoothTypes
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contact-us-link{
  color: #317FBC;
  text-decoration: underline;
}
.contact-btn {
  background-color: #317FBC;
}

.photobooth-style-img {
  max-height: 250px;
}

ul{
  text-align: left;
}

li{
  margin-top: 10px;
}

.links {
  padding-top: 15px;
}
</style>
