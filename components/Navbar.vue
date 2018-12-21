<template>
    <b-navbar id="navBar" v-scroll="handleScroll" :class="{ shrink: hasScrolled}" sticky toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <img id="brandLogo" src="~assets/images/best_png_logo.png" alt="Endless Photo Booths Ventura County logo"/>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">

        <b-nav-item href="tel:+18057108997">Call</b-nav-item>
        <b-nav-item href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">Email</b-nav-item>

        <b-nav-item to="packages">Packages</b-nav-item>
        <b-nav-item to="about-us">About Us</b-nav-item>
        <b-nav-item to="contact-us">Contact Us</b-nav-item>
        <b-nav-item to="choose-a-template">Choose a Template</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<style>

nav{
   // Animation
   -webkit-transition: all 0.4s;
   transition: all 0.4s;
   -webkit-transform: translateZ(0);
}
nav.shrink{
  background-color: #eee;
}
nav img{
  transition: all 0.4s;
  max-height: 92px;
  -webkit-transform: translateZ(0);
}
nav img.shrink{
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
      hasScrolled: false
    }
  },
  methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 30 || document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          this.hasScrolled = true;
        } else {
          this.hasScrolled = false;
        }
      }
    }
}


</script>
