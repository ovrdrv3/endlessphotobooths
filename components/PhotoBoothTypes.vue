<template>
  <div class="copy pt-4">
    <b-row class="d-flex align-items-center">
      <b-col class="text-center">
        <h1 class="copy-heading-no-color">
          Our Photo Booth Types:
        </h1>
      </b-col>
    </b-row>
    <b-row
      class="pb-4"
      align-h="center"
    >
      <b-col md="4">
        <picture>
          <source
            srcset="~assets/images/home/360_booth.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/360_booth.jpg"
            alt="360 Video Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=360"
          variant="secondary"
          squared
          block
        >
          Book a 360 Video Booth!
        </b-button>
      </b-col>
      <b-col md="4">
        <div class="col d-flex justify-content-center align-items-center">
          <h5 class="copy-heading-no-color">
            360 Video Booth
          </h5>
        </div>
        <p class="copy-text lh-base">
          Our 360 Video Booth is the latest and greatest booth! The 360 Video
          Booth takes a video of you at every angle, and breaks it down into
          slow motion! You can add a custom overlay to the video, and it is a
          great way to show off your dance moves or just have a little fun.
        </p>
      </b-col>
    </b-row>
    <b-row
      class="pb-4"
      align-h="center"
    >
      <b-col
        order-md="2"
        md="4"
      >
        <picture>
          <source
            srcset="~assets/images/home/LED-Enclosed.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/LED-Enclosed-min.jpg"
            alt="Enclosed Photo Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=LED"
          variant="secondary"
          squared
          block
        >
          Book an LED Enclosed Booth!
        </b-button>
      </b-col>
      <b-col
        order-md="1"
        md="4"
      >
        <div class="col d-flex justify-content-center align-items-center">
          <h5 class="copy-heading-no-color">
            Enclosed Photo Booth
          </h5>
        </div>
        <p class="copy-text">
          The LED Photo Booth Enclosure is great fun for all events and will
          give your party an amazing look and feel. This gives a more private
          session for your guest and adds a cool, color changing background
          texture to brighten up every print. The enclosure is able to fit up to
          10 or more people in a shot. So if you want that different look to
          your party and pictures, the LED enclosure is what you want!
        </p>
      </b-col>
    </b-row>
    <b-row
      class="pb-4"
      align-h="center"
    >
      <b-col md="4">
        <picture>
          <source
            srcset="~assets/images/home/Open-Air.webp"
            type="image/webp"
            class="img-fluid"
          >
          <img
            src="~assets/images/home/Open-Air-min.jpeg"
            alt="Open Photo Booth"
            class="img-fluid"
          >
        </picture>
        <b-button
          slot="footer"
          to="/contact-us?package=Open"
          variant="secondary"
          squared
          block
        >
          Book an Open Air Booth!
        </b-button>
      </b-col>
      <b-col md="4">
        <div class="col d-flex justify-content-center align-items-center">
          <h5 class="copy-heading-no-color">
            Open Air Photo Booth
          </h5>
        </div>
        <p class="copy-text">
          This Open Air booth is great for house parties or smaller venues and
          space limitations. Your guest are able to see and even jump in to the
          shot for a Photo Bomb. Able to fit up to 10 people in a shot. Black,
          Backdrop Curtain and Curtain Stand. Photo Booth can fit in spaces from
          5ft to 8ft and must be at least 6.5ft back from the curtain.
        </p>
      </b-col>
    </b-row>
  </div>
</template>
