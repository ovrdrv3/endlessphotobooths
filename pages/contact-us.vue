<template>
  <b-container>

        <h1 class="title">Get in Touch with ENDLESS PHOTO{{spaceForMobile}}BOOTHS</h1>
        <div class="subtitle">Ventura County Photo Booth Rentals</div>

        <div class="py-3">
          We have Photo Booth Rentals in Ventura, Los Angeles, and Santa Barbara Counties. Please give us a call, send us an email, or feel free to fill out the contact form below if you have any questions!
        </div>
        <div class="py-3">
          Our Number:
          <br>
          <a href="tel:+18057108997">(805) 710-8997</a>
        </div>
        <div class="py-3">
          Our Email:
          <br>
          <a href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">endlessphotobooths@gmail.com</a>
        </div>
        <no-ssr>
          <ContactForm/>
        </no-ssr>


  </b-container>
</template>

<script>

import ContactForm from '~/components/ContactForm.vue';

export default {
  head () {
    return {
      title: 'Contact Us',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals Contact Us Page' }
      ]
    }
  },
  components: {
    ContactForm
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
.contact-btn {
  background-color: #317FBC;
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
