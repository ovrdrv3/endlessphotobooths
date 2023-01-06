<template>
  <b-container>
    <h1 class="title fancy-font">
      ENDLESS PHOTOBOOTH PACKAGE: 360 VIDEO BOOTH
    </h1>
    <b-row class="pb-1">
      <b-col md="6">
        <picture>
          <source
            srcset="~assets/images/home/360_booth.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/360_booth.jpg"
            alt="360 Video Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=360"
          variant="primary"
          squared
          block
        >
          Book a 360 Video Booth!
        </b-button>
      </b-col>
      <b-col md="6">
        <p class="copy-text lh-base">
          Our 360 Video Booths are the latest and greatest! The 360 Video Booth takes a video
          of you at every angle, and break it down into slow motion! You can add a custom overlay to
          the video, and it is a great way to show off your dance moves or just have a little fun.
        </p>
        <ul>
          <li>Unlimited Video Sessions</li>
          <li>Props</li>
          <li>On-site attendant(s)</li>
          <li>Personalized event graphic on all videos</li>
          <li>Online access to videos</li>
          <li>Free Setup/Tear Down</li>
          <li>LED Lighting Set</li>
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
      title: '360 Video Booth Package',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals 360 Video Booth Package Page' },
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
