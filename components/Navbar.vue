<template>
  <b-navbar
    id="navBar"
    :class="{ 'shrink': hasScrolled || hamburgerClicked }"
    sticky
    toggleable="sm"
  >
    <b-navbar-toggle
      target="nav_collapse"
      @click="hamburgerClicked = !hamburgerClicked"
    />
    <b-navbar-brand
      to="/"
      @click="navItemsVisible = false"
    >
      <img
        id="brandLogo"
        src="~assets/images/best_png_logo.png"
        alt="Endless Photo Booth Ventura County logo"
      >
    </b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      v-model="navItemsVisible"
      is-nav
    >
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item href="tel:+18057108997">Call</b-nav-item> -->
        <!-- <b-nav-item
          href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry"
        >
          Email
        </b-nav-item> -->
        <b-nav-item-dropdown
          text="PACKAGES"
          right
          :toggle-class="{'text-white': !hasScrolled && !hamburgerClicked}"
        >
          <b-dropdown-item to="/packages/360-video-booth">
            360 VIDEO BOOTH
          </b-dropdown-item>
          <b-dropdown-item to="/packages/social-booth">
            SOCIAL BOOTH
          </b-dropdown-item>
          <b-dropdown-item to="/packages/open-air-booth">
            OPEN AIR BOOTH
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
          to="/about-us"
        >
          <div
            :class="{ 'text-white' : !hasScrolled && !hamburgerClicked}"
          >
            ABOUT US
          </div>
        </b-nav-item>
        <b-nav-item
          to="contact-us"
        >
          <div
            :class="{ 'text-white' : !hasScrolled && !hamburgerClicked}"
          >
            CONTACT US
          </div>
        </b-nav-item>
        <b-nav-item to="/choose-a-template">
          <div
            :class="{ 'text-white' : !hasScrolled && !hamburgerClicked}"
          >
            CHOOSE A TEMPLATE
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      hasScrolled: false,
      navItemsVisible: false,
      hamburgerClicked: false,
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 50);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  },
  methods: {
    handleScroll(event) {
      this.hasScrolled = (window.scrollY > 0);
    },
    handleNavBarVisibility() {
      // If the navbar items are not visible we do not want to allow this to show the items, only
      // collapse them.
      if (this.navItemsVisible) {
        this.navItemsVisible = false;
      }
    },
  },
}

</script>

<style>
nav{
 -webkit-transition: all 0.4s;
 transition: all 0.4s;
 -webkit-transform: translateZ(0);
 font-size: 0.5rem;
}

.shrink{
  background-color: #eee;
}

nav img{
transition: all 0.4s;
max-height: 92px;
-webkit-transform: translateZ(0);
}

.nuxt-link-exact-active{
color: #317FBC !important;
}

/* override b-dropdown-item to be the same styling as the nav links */
.dropdown-item {
  font-size: initial;
}
</style>
