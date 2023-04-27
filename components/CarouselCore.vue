<template>
  <carousel
    :per-page="1"
    :autoplay="true"
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
};

</script>
