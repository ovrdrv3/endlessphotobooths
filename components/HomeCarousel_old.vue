<template>
  <div>
    <!-- controls -->
    <!-- indicators -->
    <b-carousel
      id="carousel1"
      v-model="slide"
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img
          slot="img"
          src="~assets/images/home/slide_1.jpg"
          alt="Endless Photo Booth Slide One"
          class="d-block img-fluid carousel-img"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          src="~assets/images/home/slide_2.jpg"
          alt="Endless Photo Booth Slide Two"
          class="d-block img-fluid carousel-img"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          src="~assets/images/home/slide_3.jpg"
          alt="Endless Photo Booth Slide Three"
          class="d-block img-fluid carousel-img"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          src="~assets/images/home/slide_4.png"
          alt="Endless Photo Booth Slide Four"
          class="d-block img-fluid carousel-img"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style>
.carousel-img {
  max-height: 500px;
}
</style>
