<template>
  <b-container>
    <h1 class="title fancy-font">
      ENDLESS PHOTOBOOTH PACKAGE: SOCIAL BOOTH
    </h1>
    <b-row class="pb-1">
      <b-col md="6">
        <picture>
          <source
            srcset="~assets/images/home/social_booth_black_bg.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/social_booth_black_bg.png"
            alt="Social Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=Social"
          variant="primary"
          squared
          block
        >
          Book a Social Booth!
        </b-button>
      </b-col>
      <b-col md="6">
        <p class="copy-text">
          Our Social Booth is a great way to get your guests to interact with each other. It’s
          packed with fun options such as:
        </p>
        <ul>
          <li>Pictures</li>
          <li>Boomerang Videos</li>
          <li>GIF Pics</li>
          <li>Digital Prop Pics</li>
        </ul>
        <p class="copy-text">
          This Booth does not print pictures, it only text and emails them to you.
        </p>
        <p class="copy-text">
          This is an ALL DAY RENTAL
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {
  },
  head() {
    return {
      title: 'Social Booth Package',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals Social Booth Package Page' },
      ],
    }
  },
}
</script>,

<style>
.subtitle {
    color: #317FBC;
    /*color: white;*/
    font-weight: 300;
    word-spacing: 5px;
    text-align: center;
}
</style>
