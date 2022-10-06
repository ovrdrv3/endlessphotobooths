<template>
    <b-navbar id="navBar" v-scroll="handleScroll" :class="{ shrink: hasScrolled}" sticky toggleable="md">

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

        <b-nav-item to="/packages">Packages</b-nav-item>
        <b-nav-item to="/about-us">About Us</b-nav-item>
        <b-nav-item to="/contact-us">Contact Us</b-nav-item>
        <b-nav-item to="/choose-a-template">Choose a Template</b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<style>

nav{
   -webkit-transition: all 0.4s;
   transition: all 0.4s;
   -webkit-transform: translateZ(0);
   background-color: rgba(255, 255, 255, 0.2);
}
/* when hovering over the navbar make the background white */
nav:hover{
   background-color: rgba(255, 255, 255, 1);
}

nav img{
  transition: all 0.4s;
  max-height: 92px;
  -webkit-transform: translateZ(0);
}
nav img.hover{
  max-height: 50px;
}

.active{
  color: #317FBC !important;
}


</style>

<script>

export default {
  data () {
    return {
      hasScrolled: false,
      navItemsVisible: false
    }
  },
  methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 30 || document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          this.hasScrolled = true;
        } else {
          this.hasScrolled = false;
        }
      },
      handleNavBarVisibility: function (){
        // If the navbar items are not visible we do not want to allow this to show the items, only collapse them.
        if (this.navItemsVisible) {
          this.navItemsVisible = false;
        }
      }
    }
}


</script>
