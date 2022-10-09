<template>
  <b-navbar id="navBar" :class="{ shrink: hasScrolled}" sticky toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/" @click.native="navItemsVisible = false">
      <img  id="brandLogo"
            src="~assets/images/best_png_logo.png"
            alt="Endless Photo Booths Ventura County logo"/>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse" v-model="navItemsVisible">

      <b-navbar-nav class="ml-auto">

        <!-- <b-nav-item href="tel:+18057108997">Call</b-nav-item> -->
        <!-- <b-nav-item href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">Email</b-nav-item> -->

        <b-nav-item to="/packages">PACKAGES</b-nav-item>
        <b-nav-item to="/about-us">ABOUT US</b-nav-item>
        <b-nav-item to="/contact-us">CONTACT US</b-nav-item>
        <b-nav-item to="/choose-a-template">CHOOSE A TEMPLATE</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

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

.active{
color: #317FBC !important;
}

</style>

<script>

import debounce from 'lodash/debounce';

export default {
data () {
  return {
    hasScrolled: false,
    navItemsVisible: false
  }
},
methods: {
  handleScroll(event) {
    this.hasScrolled = (window.scrollY > 0);
  },
  handleNavBarVisibility: function (){
    // If the navbar items are not visible we do not want to allow this to show the items, only collapse them.
    if (this.navItemsVisible) {
      this.navItemsVisible = false;
    }
  }
},
mounted() {
  this.handleDebouncedScroll = debounce(this.handleScroll, 50);
  window.addEventListener('scroll', this.handleDebouncedScroll);
},

beforeDestroy() {
  window.removeEventListener('scroll', this.handleDebouncedScroll);
}
}


</script>
