<template>
  <b-container>

        <h1 class="title fancy-font">ENDLESS PHOTOBOOTHS</h1>
        <div class="subtitle">Ventura County Photo Booth Rentals</div>

        <div class="py-3">
          Thank you for your message. We'll reach out to you soon!
          <br>
          <br>
          <nuxt-link class="contact-us-link" to="/">Link back to our home page</nuxt-link>
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


  </b-container>
</template>

<script>

export default {
  head () {
    return {
      title: 'Contact Us Success',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals Contact Us Success Page' }
      ]
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
