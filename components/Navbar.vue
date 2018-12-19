<template>
    <b-navbar id="navBar" sticky toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <img id="brandLogo" src="~assets/images/best_png_logo.png" alt="Endless Photo Booths Ventura County logo"/>
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">

        <b-nav-item href="tel:+18057108997">Call</b-nav-item>
        <b-nav-item href="mailto:endlessphotobooths@gmail.com?subject=Photo%20Booth%20Inquiry">Email</b-nav-item>

        <b-nav-item-dropdown to="packages" text="Packages" extra-toggle-classes="nav-link-custom" right>
          <b-dropdown-item to="packages#one">Package one</b-dropdown-item>
          <b-dropdown-item to="packages#two">Package two</b-dropdown-item>
          <b-dropdown-item to="packages#three">Package three</b-dropdown-item>
        </b-nav-item-dropdown>
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
   -webkit-transition: all 0.4s ease;
   transition: all 0.4s ease;
}
nav.shrink{
  background-color: #eee;
}
nav img{
  transition: all 0.5s;
  /*transition-delay: 0.5s;*/
  max-height: 92px;
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
  mounted() {
        // shrink the navbar on scroll.
        this.$nextTick(function(){
          window.addEventListener("scroll", function(){
            var brandLogo = document.getElementById("brandLogo");
            var navBarId = document.getElementById("navBar");
            var brandClasses = brandLogo.classList;
            var navBarClasses = navBarId.classList;
            if(document.documentElement.scrollTop >= 50) {
              if (brandClasses.contains("shrink") === false) {
                brandClasses.toggle("shrink");
                navBarClasses.toggle("shrink");
              }
            }
            if(document.documentElement.scrollTop < 5) {
              if (brandClasses.contains("shrink") === true) {
                brandClasses.toggle("shrink");
                navBarClasses.toggle("shrink");
              }
            }
          })
        })
      },
}


</script>
