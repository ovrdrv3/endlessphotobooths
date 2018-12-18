<template>
  <b-container fluid>
    <b-row>
      <b-col md="4">
          <h1 class="title">ENDLESS PHOTOBOOTHS</h1>
          <br>
          <span class="subtitle">Ventura County Photo Booth Rentals</span>
          <br>
          <br>
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
          <br>
          <br>

      </b-col>
      <b-col md="8">
        <HomeCarousel/>
      </b-col>
    </b-row>

    <!-- Make a non fluiid container for the rest of the content -->
    <br>
    <br>
    <!-- Home info section -->
    <b-row>
      <b-col md="10" offset-md="1">
      <br>
      <h1 class="title">We provide:</h1>
      <ul>
        <li>Service to Ventura County, Los Angeles County and Santa Barbara County for all events!</li>
        <li>A fun way to remember those special days &mdash; not just for you, but for your family & friends as well!</li>
        <li>Flexibility for every type of event or occasion you have. If there is a photo booth at a wedding, corporate party, or any event, everyone will want to jump in and take a set of fun pictures that they can take home.</li>
        <li>Affordable and quality photo booth rentals with many great and amazing options. Different backdrop options including Rose Gold, Red, Silver and more.</li>
      </ul>
      </b-col>
    </b-row>
    <br>
    <br>
    <!-- Package Info Section -->
    <b-row>
      <b-col offset-md="1" md="10">
        <h1 class="title">ALL Photo Booth Packages Include:</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col order-md="2" md="3">
        <img class="d-block img-fluid zoomable-img"
             src="~assets/images/home/all_include.jpg"
             alt="Endless Photo Booths Ventura County logo">
      </b-col>
      <b-col offset-md="1" order-md="1" md="7">
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
    <!-- End Section -->
    <b-row>
      <b-col>
      <div class="subtitle"> Ventura Photo Booth Rentals will be a perfect addition to any and all events! <nuxt-link class="contact-us-link" to="/contact-us">Contact us!</nuxt-link></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HomeCarousel from '~/components/HomeCarousel.vue'
import mediumZoom from 'medium-zoom'

export default {
  components: {
    Logo,
    HomeCarousel
  },
  mounted(){
    mediumZoom('.zoomable-img')
  }
}
</script>

<style>
.title {
  letter-spacing: 2px;
  display: block;
  font-weight: 300;
  /*color: white;*/
  color: #317FBC;
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

ul{
  font-size: 20px;
  text-align: left;
}
li{
  margin-top: 10px;
}

.links {
  padding-top: 15px;
}
</style>
