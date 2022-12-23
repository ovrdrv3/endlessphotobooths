<template>
  <b-container>

    <h1 class="title">ENDLESS PHOTOBOOTH</h1>
    <div id="paddee-container" data-key="f89Okf2_1101" data-tags="landscape3l,landscape3p,landscape1l,portrait1p,strip3l" data-categories="">
    </div>

  </b-container>
</template>

<script>

export default {
  head () {
    return {
      title: 'Choose a Template',
      meta: [
        { hid: 'description', name: 'description', content: 'ENDLESS PHOTOBOOTH, Ventura Photo Booth Rentals Choose a Template Page' }
      ],
      script: [
        { src: 'https://paddee.herokuapp.com/widget_v1.js' }
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
