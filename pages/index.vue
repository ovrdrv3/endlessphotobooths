<template>
  <div>
    <div class="video-bg-height">
      <div class="video-bg">
        <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
        <div class="overlay"></div>

        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center">
            <div class="middle-text">
              <h1 class="title fancy-font gray-text pt-150">ENDLESS PHOTOBOOTHS</h1>
              <h2 class="caption-text pt-150">LIVING TO MAKE YOUR EVENT MEMORABLE</h2>
              <h2 class="caption-text">ONE SHOT AT A TIME</h2>
              <h2 class="fancy-font caption-text pt-150">SANTA&nbspBARBARA • VENTURA • LOS&nbspANGELES</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  <b-container class="copy">
    <h1 class="copy-heading pt-3">Check out some recent events:</h1>
    <insta-feed
    token="IGQVJYVkpSNHl2T21jWl9wMzFmWGpPYnhpcGo2LVNYTEpZAREdEbFNSUVpzRnozakd0VkRYRGR1Q3BFdWQwNGRUM2F5dnhfc2pkX3FFU2NGQk56eTlGWTlmVnVRWjJESXEtRXJSUVU0RU1aRlQxTk9odgZDZD"
    fields="media_url,media_type,caption,permalink"
    container-class="image-container"
    :mediatypes="['IMAGE']"
    class="py-3"
    >
      <template v-slot:loading="props">
        <h1 v-if="props.loading" class="fancy-loading">
          Loading, please wait...
        </h1>
      </template>
      <template v-slot:feeds="props">
        <a :href="props.feed.permalink" rel="noopener" target="_blank" style="all: unset;">
          <b-card
            :img-src="props.feed.media_url"
            img-alt="Instagram post"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{props.feed.caption}}
            </b-card-text>
        </b-card>
        </a>
      </template>


      <template v-slot:error="props">
        <div class="fancy-alert">
          {{ props.error }}
        </div>
      </template>
    </insta-feed>
    <!-- Instagram and Yelp Logos -->
    <b-row class="py-0">
      <b-col md="10" offset-md="1">
        <div class="d-flex justify-content-center">
          <a href="https://www.instagram.com/endlessphotobooths">
            <img src="~assets/images/home/instagram.png" alt="Instagram Link" style="width: 45px; height: 45px; top: 8px; position: relative;"/>
          </a>
          <a href="https://www.yelp.com/biz/endless-photobooth-oxnard">
            <img src="~assets/images/home/yelp.png" alt="Yelp Link" class="logo" style="width: 60px; height: 60px; position: relative;"/>
          </a>
          <a href="https://www.weddingwire.com/biz/endless-photo-booths-oxnard/3fc52dcdeb1f53d2.html">
            <img src="~assets/images/home/wedding_wire.png" alt="Wedding Wire Link" class="logo" style="width: 50px; height: 50px; top:5px; right: 4px; position: relative;"/>
          </a>
        </div>
      </b-col>
    </b-row>
    <!-- Make a non fluid container for the rest of the content -->
    <!-- Home info section -->
    <b-row class="py-3">
      <b-col md="10" offset-md="1">
      <h1 class="copy-heading">We provide:</h1>
      <ul>
        <li>Service to Ventura County, Los Angeles County and Santa Barbara County for all events!</li>
        <li>A fun way to remember those special days &mdash; not just for you, but for your family & friends as well!</li>
        <li>Flexibility for every type of event or occasion you have. If there is a photo booth at a wedding, corporate party, or any event, everyone will want to jump in and take a set of fun pictures that they can take home.</li>
        <li>Affordable and quality photo booth rentals with many great and amazing options. Different backdrop options including Rose Gold, Red, Silver and more.</li>
      </ul>
      </b-col>
    </b-row>
    <!-- Package Info Section -->
    <b-row>
      <b-col offset-md="1" md="10">
        <h1 class="copy-heading">ALL Photo Booth Packages Include:</h1>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col order-md="2" md="6">

        <picture>
         <source class="img-fluid" srcset="~assets/images/home/all_include-min.webp" type="image/webp">
         <img class="img-fluid"
               src="~assets/images/home/all_include-min.jpg"
               alt="All Photo Booths Include Props, Different backdrop options, Person to Run Photo Booth, and more!">
        </picture>

      </b-col>
      <b-col offset-md="1" order-md="1" md="4">
        <ul>
          <li>Props</li>
          <li>Different backdrop options: Rose Gold, Red, Silver and more</li>
          <li>2 Strips with 3 Photos Taken</li>
          <li>Copies for Everyone in Photo</li>
          <li>Unlimited Use of Booth</li>
          <li>Open air Photo Booth</li>
          <li>Custom Text For Bottom Of Picture</li>
          <li>Person to Run Photo Booth</li>
          <li>Drop off and Pickup Included</li>
        </ul>
      </b-col>
    </b-row>
    <PhotoBoothTypes/>
    <!-- End Section -->
    <b-row class="p-4">
      <b-col>
        <div class="subtitle"> Ventura Photo Booth Rentals will be a perfect addition to any event.
        <br>
        <nuxt-link class="contact-us-link" to="/contact-us">Book your photo booth today!</nuxt-link></div>
      </b-col>
    </b-row>
      </b-container>
    </div>
    </template>

<script>
import Navbar from '~/components/Navbar.vue';
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';
import InstaFeed from '~/components/InstaFeed.vue';

export default {
  head () {
    return {
      title: 'ENDLESS Ventura Photo Booth Rentals',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals Home Page' }
      ]
    }
  },
  components: {
    PhotoBoothTypes,
    Navbar,
    InstaFeed
  }
}
</script>

<style lang="scss">

$break-small: 600px;
$break-large: 1000px;
$grey: #eee;

.video-bg-height {
  height: calc(100vh - 140px);
  overflow-x: hidden;
}

.video-bg {
  position: absolute;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  top: 0px;
  overflow-x: hidden;
}

.video-bg video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.video-bg .container {
  position: relative;
  z-index: 2;
}

.video-bg .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}



.middle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 3;
}

.gray-text{
  color: $grey !important;
}

.pt-150 {
  padding-top: 150px;
}

.caption-text{

  font-size: 0.75rem;
  font-weight: 100;
  @media (max-width: $break-large) {
    font-size: 0.5rem;
  }

}

.logo{
    width: 60px;
    height: 60px;
    /*margin: auto;*/
    /*left: 50%;*/
    /*position: absolute;*/
}

.logo-list{
  display: block;
}

.dark-overlay {
  /*background: rgba(0, 0, 0, .6);*/
  filter: brightness(50%);
}

.subtitle {
  color: #317FBC;
  /*color: white;*/
  word-spacing: 5px;
  text-align: center;
}

.contact-us-link{
  color: #317FBC;
  text-decoration: underline;
}


ul{
  text-align: left;
}

li{
  margin-top: 10px;
}

</style>
