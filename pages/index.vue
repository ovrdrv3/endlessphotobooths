<template>
  <b-container fluid>
      <h1 class="title">ENDLESS PHOTO{{spaceForMobile}}BOOTHS</h1>
      <h5 class="subtitle">Ventura County Photo Booth Rentals</h5>
    <b-row class="py-3">
      <b-col>
        <!-- <HomeCarousel/> -->
        <!-- <div class="parallax-text title"><h2>Living To Make Your Event Memorable - One Shot at a Time</h2></div> -->
        <div v-if="!isMobile" class="parallax-text title"><h1 class="gray-text">LIVING TO MAKE YOUR EVENT MEMORABLE</h1><br><h1 class="gray-text">ONE SHOT AT A TIME</h1></div>
        <Parallax v-if="!isMobile" :speed-factor="0.1">
          <picture>
            <source srcset="~assets/images/home/home_splash-min.webp" type="image/webp" class="img-fluid dark-overlay">
            <img src="~assets/images/home/home_splash-min.jpeg" alt="Endless Photo Booths Slide Two" class="img-fluid dark-overlay">
          </picture>
        </Parallax>

        <picture v-else>
          <source srcset="~assets/images/home/home_splash-min.webp" type="image/webp" class="img-fluid">
          <img src="~assets/images/home/home_splash-min.jpeg" alt="Endless Photo Booths Slide Two" class="img-fluid">
        </picture>
        <div v-if="isMobile">
          <br>
          <h5 class="subtitle">Living To Make Your Event Memorable - One Shot At a Time</h5>
        </div>
      </b-col>
    </b-row>
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
        </div>
      </b-col>
    </b-row>
    <!-- Make a non fluid container for the rest of the content -->
    <!-- Home info section -->
    <b-row class="py-3">
      <b-col md="10" offset-md="1">
      <h1 class="title">We provide:</h1>
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
        <h1 class="title">ALL Photo Booth Packages Include:</h1>
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
</template>

<script>
// import HomeCarousel from '~/components/HomeCarousel.vue';
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';

if (process.client) {
  var Parallax = require('vue-parallaxy');
}

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
    Parallax
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

.blue-text{
  /*color: #317FBC;*/
  color: #EEE;
  background: #317FBC;
  display:inline;
  font-weight: 300;
  text-align: center;
}

.gray-text{
  color: #EEE;
  font-weight: 600;
}

.mobile-gray-text {
  color: #EEE;
  background: #317FBC;
  /*display: block;*/
  display:inline;
  font-weight: 300;
  text-align: center;
  word-spacing: 5px;
  text-align: center;
}

.parallax-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*background-color: #eee;*/
  opacity: 0.75;
  filter: alpha(opacity=75);
}

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

.contact-us-link{
  color: #317FBC;
  text-decoration: underline;
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

</style>
