<template>
  <b-container>
    <h1 class="title fancy-font">
      ENDLESS PHOTOBOOTH PACKAGE: OPEN AIR BOOTH
    </h1>
    <b-row class="pb-4">
      <b-col md="6">
        <picture>
          <source
            srcset="~assets/images/home/Open-Air.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/Open-Air-min.jpeg"
            alt="Open Air Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=Open"
          variant="primary"
          squared
          block
        >
          Book a Open Air Booth!
        </b-button>
      </b-col>
      <b-col md="6">
        <p class="copy-text lh-base">
          This Open Air booth is great for house parties or smaller venues and space limitations.
          Your guest are able to see and even jump in to the shot for a Photo Bomb. Able to fit up
          to 10 people in a shot. Black, Backdrop Curtain and Curtain Stand. Photo Booth can fit in
          spaces from 5ft to 8ft and must be at least 6.5ft back from the curtain.
        </p>
        <ul>
          <li>Unlimited 2x6 Photo Strip Print outs</li>
          <li>Copies for EVERYONE in the photo</li>
          <li>Texted Copies</li>
          <li>Props</li>
          <li>On-site attendant(s)</li>
          <li>Custom Template Design</li>
          <li>Free Setup/Tear Down</li>
        </ul>
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
      title: 'Open Air Booth Package',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals Open Air Booth Package Page' },
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
