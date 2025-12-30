<template>
<div>
    <b-row class="py-3">
      <b-col md="4">
        <img src="~assets/new-images/packages/booth_360.png" alt="360 Photo Booth" class="img-fluid">
        <b-button class="book-button" variant="primary" to="/contact-us?package=360">Book</b-button>
      </b-col>
      <b-col md="4">
        <img src="~assets/new-images/packages/open_air.png" alt="Open Air Photo Booth" class="img-fluid">
        <b-button class="book-button" variant="primary" to="/contact-us?package=Open">Book</b-button>
      </b-col>
      <b-col md="4">
        <img src="~assets/new-images/packages/cali.png" alt="Cali Photo Booth" class="img-fluid">
        <b-button class="book-button" variant="primary" to="/contact-us?package=Cali">Book</b-button>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col md="6">
        <img src="~assets/new-images/packages/social.png" alt="Social Photo Booth" class="img-fluid">
        <b-button class="book-button" variant="primary" to="/contact-us?package=Social">Book</b-button>
      </b-col>
      <b-col md="6">
        <img src="~assets/new-images/packages/add_ons.jpg" alt="Add-ons" class="img-fluid">
      </b-col>
    </b-row>
</div>
</template>

<style>
.book-button {
  background-color: #cbb1a3 !important;
  color: #333333 !important;
  width: 90%;
  margin: 10px auto 0;
  display: block;
  border: none;
}

@media screen and (max-width: 768px) {
  .book-button {
    margin-bottom: 10px;
  }
}
</style>
