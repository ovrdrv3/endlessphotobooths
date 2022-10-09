<template>
  <b-container>

    <h1 class="title fancy-font">ABOUT ENDLESS PHOTOBOOTHS</h1>
    <div class="subtitle">Ventura County Photo Booth Rentals</div>

    <b-row >
      <b-col md="6" class="py-5">
        <h4 class="copy-heading">Our Story</h4>
        <br>
        <p>Endless Photo Booths is a family owned and ran company. What got us into the photo booth business was when we started attending events with photo booths in them, we got so excited taking silly pictures and being able to take our print outs home! After realizing how fun it was as well as seeing the joy of other people in the photo booth, that strived us to create our own photo booth business.</p>
        <br>
        <h4 class="copy-heading">Looking for Photo Booth Rentals in Ventura or Los Angeles County?</h4>
        <br>
        <p>Endless Photo Booths is a full service photo booth rental company with 2 types of booth styles and  different options.</p>
        <p>We offer amazing photo quality with our DSLR camera, an elegant set up, quality props, many back drop options as well as an Enclosed Set Up, UNLIMITED PRINTS and pricing at a budget because we want everyone to have a joyful photobooth experience, just like we have, without breaking an arm or leg for pricing. Don’t just take our word for it, <a href="https://www.yelp.com/biz/endless-photobooth-oxnard">check out our reviews!</a></p>
        <p>Where we are living to make your event memorable one shot at a time and always strive to give you the 5 Star service everyone deserves!</p>
        <p>Photo Booths aren’t just great to rent for weddings but for any other special event as well. Here at Endless Photo Booths, we offer affordable photo booth rentals with many great and amazing options. Endless Photo Booths will be a perfect addition to any and all events!</p>
        <br>
        <h4 class="copy-heading">Areas we service:</h4>
        <br>
        <p>Endless Photo Booths services Ventura County, Los Angeles and Santa Barbara with small travel fees outside of Ventura County.</p>
        <br>
        <h4 class="copy-heading">We specialize in:</h4>
        <br>
        <ul>
          <li>Corporate Events​​</li>
          <li>Baby Showers</li>
          <li>​Graduations</li>
          <li>Weddings</li>
          <li>Private Parties</li>
          <li>Many More!</li>
        </ul>
      </b-col>
      <b-col md="5" offset-md="1">
        <picture>
          <source srcset="~assets/images/about-us/conrad_and_rocio-min.webp" type="image/webp"  class="py-5 img-fluid">
          <img src="~assets/images/about-us/conrad_and_rocio-min.jpg" alt="Example of a wedding Four by Six Print" class="py-5 img-fluid">
        </picture>
        <picture>
          <source srcset="~assets/images/about-us/elijah_meet_and_greet-min.webp" type="image/webp"  class="py-5 img-fluid">
          <img src="~assets/images/about-us/elijah_meet_and_greet-min.jpg" alt="Example of a Baby Shower" class="py-5 img-fluid">
        </picture>
        <picture>
          <source srcset="~assets/images/about-us/krystal_and_deven_slides-min.webp" type="image/webp"  class="py-5 img-fluid">
          <img src="~assets/images/about-us/krystal_and_deven_slides-min.jpg" alt="Example of what the slide print out will look like" class="py-5 img-fluid">
        </picture>
        <picture>
          <source srcset="~assets/images/about-us/props-min.webp" type="image/webp"  class="py-5 img-fluid">
          <img src="~assets/images/about-us/props-min.jpg" alt="Example of what the props will look like" class="py-5 img-fluid">
        </picture>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

export default {
  head () {
    return {
      title: 'About Us',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals About Us Page' }
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

ul{
  text-align: left;
}

li{
  margin-top: 10px;
}

</style>
