<template>
  <carousel
    ref="carousel"
    :per-page="1"
    :autoplay="autoPlay"
    :autoplay-hover-pause="true"
    :autoplay-timeout="5000"
    :pagination-enabled="false"
  >
    <slide
      v-for="(feed) in feeds"
      :key="feed.id"
    >
      <slot
        name="card"
        :post="feed"
      />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    feeds: Array,
  },
  data() {
    return {
      autoPlay: false, // change autoplay to a data property
    };
  },
  mounted() {
    this.setObserver();
  },
  methods: {
    setObserver() {
      const options = {
        root: null, // relative to the viewport
        threshold: 0.1, // trigger when at least 10% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start autoplay when element is in viewport
            this.autoPlay = true;
          } else {
            // stop autoplay when element is not in viewport
            this.autoPlay = false;
          }
        });
      }, options);

      // observe the carousel
      observer.observe(this.$refs.carousel.$el);
    },
  },
};
</script>
