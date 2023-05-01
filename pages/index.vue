<template>
  <client-only>
    <div>
      <div
        class="video-bg-height"
      >
        <div class="video-bg">
          <!-- This div is  intentionally blank. It creates the transparent black overlay over the
        video which you can modify in the CSS -->
          <div class="overlay" />

          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="~assets/video/epb360video.mp4"
              type="video/mp4"
            >
          </video>
          <div class="container h-100">
            <div
              class="
              d-flex
              flex-column
              h-100
              text-center
              justify-content-around
              text-white
              fancy-font
              z-index-3"
            >
              <h1 class="title">
                ENDLESS PHOTOBOOTH
              </h1>
              <div class="caption-text">
                LIVING TO MAKE YOUR EVENT MEMORABLE
                <br>
                ONE SHOT AT A TIME
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <!-- Home info section -->
      <b-container
        fluid
        class="bg-ghostwhite slate-gray"
      >
        <b-container>
          <!-- Package Info Section -->
          <h1 class="copy-heading-no-color">
            Photo Booth Packages Include:
          </h1>
          <b-row class="py-3">
            <b-col
              order-md="2"
              md="7"
            >
              <picture>
                <source
                  class="img-fluid"
                  srcset="~assets/images/home/all_include-min.webp"
                  type="image/webp"
                >
                <img
                  class="img-fluid"
                  src="~assets/images/home/all_include-min.jpg"
                  alt="All Photo Booth Include Props, Different backdrop options,
                   Person to Run Photo Booth, and more!"
                >
              </picture>
            </b-col>
            <b-col
              order-md="1"
              md="5"
              class="copy"
            >
              <ul>
                <li class="mt-0">
                  Props
                </li>
                <li>Different backdrop options: Rose Gold, Red, Silver and more</li>
                <li>2 Strips with 3 Photos Taken</li>
                <li>Copies for Everyone in Photo</li>
                <li>Unlimited Use of Booth</li>
                <li>Custom Text For Bottom Of Picture</li>
                <li>Person to Run Photo Booth</li>
                <li>Drop off and Pickup Included</li>
              </ul>
            </b-col>
          </b-row>
          <PhotoBoothTypes />
          <!-- End Section -->
          <b-row class="p-4">
            <b-col>
              <div class="subtitle">
                Ventura Photo Booth Rentals will be a perfect addition to any event.
                <b-button class="mt-3">
                  <nuxt-link
                    class="ghostwhite text-decoration-none color-inherit"
                    to="/contact-us"
                  >
                    Book your photo booth today!
                  </nuxt-link>
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container
        fluid
        class="copy bg-dark lg-px-5"
      >
        <!-- Recent Instagram history and Google reviews -->
        <b-row align-h="center">
          <b-col
            md="12"
            lg="4"
            class="text-center bg-blue"
          >
            <InstaFeed />
          </b-col>
          <b-col
            md="12"
            lg="4"
            class="text-center bg-blue"
          >
            <GoogleReviews />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </client-only>
</template>

<script>
import PhotoBoothTypes from '~/components/PhotoBoothTypes.vue';
import InstaFeed from '~/components/InstaFeed.vue';
import GoogleReviews from '~/components/GoogleReviews.vue';
import CallToAction from '~/components/CallToAction.vue';

export default {
  components: {
    CallToAction,
    GoogleReviews,
    InstaFeed,
    PhotoBoothTypes,
  },
  data() {
    return {
      hover: false,
      hoverTimeoutId: null,
    }
  },
  head() {
    return {
      title: 'ENDLESS Ventura Photo Booth Rentals',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals Home Page' },
      ],
    }
  },
};
</script>

<style lang="scss">
$break-small: 600px;
$break-large: 1000px;
$grey: #eee;

.chat-bubble {
  border-radius: 10px;
  padding: 10px;
  position: relative;
}

.arrow-left {
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f1f1f1 transparent transparent;
  position: absolute;
  left: -10px;
  top: 10px;
}

.text-near-video {
  height: calc(100vh - 141px);
}

.video-bg-height {
  height: calc(100vh - 141px);
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
  opacity: 0.9;
  z-index: 1;
  @media (max-width: $break-large) {
    opacity: 0.5;
  }
}

.vh-50 {
  height: 50vh;
}

.vh-25 {
  height: 25vh;
}

.gray-text {
  color: $grey !important;
}

.dark-gray {
  background-color: #5A5A5A;
}

.ivory {
  color: #FFFFF0;
}

.pt-150 {
  padding-top: 150px;
}

.logo {
  width: 60px;
  height: 60px;
  /*margin: auto;*/
  /*left: 50%;*/
  /*position: absolute;*/
}

.logo-list {
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

.contact-us-link {
  color: #317FBC;
  text-decoration: underline;
}

ul {
  text-align: left;
}

li {
  margin-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
