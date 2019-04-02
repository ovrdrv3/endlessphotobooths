
<div id="paddee-container" data-key="f89Okf2_1101" data-tags="landscape3l,landscape3p,landscape1l,portrait1p,strip3l" data-categories="">
</div>
<div style="text-align: center; padding-top: 30px;">Powered by <a href="http://getpaddee.com"><em>Paddee</em></a></div>
<script src="https://paddee.herokuapp.com/widget_v1.js"></script>


<template>
  <b-container>

    <h1 class="title">ENDLESS PHOTO{{spaceForMobile}}BOOTHS</h1>
    <div id="paddee-container" data-key="f89Okf2_1101" data-tags="landscape3l,landscape3p,landscape1l,portrait1p,strip3l" data-categories="">
    </div>
    <script src="https://paddee.herokuapp.com/widget_v1.js"></script>

  </b-container>
</template>

<script>
if (process.client) {
  var isMobile = require('mobile-device-detect');
}
export default {
  head () {
    return {
      title: 'Choose a Template',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTHS, Ventura Photo Booth Rentals Choose a Template Page' }
      ]
    }
  },
 computed: {
   // Check if mobile
   spaceForMobile: function () {
     return isMobile ? ' ' : '';
   }
 }

}
</script>

<style>
.title {
  letter-spacing: 4px;
  display: block;
  font-weight: 300;
  /*color: white;*/
  color: #317FBC;
  text-align: center;
}

.subtitle {
  color: #317FBC;
  /*color: white;*/
  font-weight: 300;
  word-spacing: 5px;
  text-align: center;
}

.tab-title{
  color: #317FBC !important;
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

.photobooth-style-img {
  max-height: 250px;
}

ul{
  text-align: left;
}

li{
  margin-top: 10px;
}

.links {
  padding-top: 15px;
}
</style>
