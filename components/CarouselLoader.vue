<template>
  <carousel :per-page="1">
    <slide
      v-for="(feed, index) in feeds"
      :key="feed.id"
    >
      <b-card
        v-if="feed.media_url.includes('.mp4')"
        no-body
        class="p-0 mb-2 border-rounded shadow"
      >
        <video
          :src="feed.media_url"
          autoplay
          loop
          muted
          class="w-100"
        />
        <b-card-text class="p-2 caption-text">
          {{
            feed.caption.replace(/•/g, "").replace(/#[a-zA-Z0-9]+/g, "")
          }}
          <a
            :href="feed.permalink"
            rel="noopener"
            target="_blank"
            class="float-right"
          >
            🌐
          </a>
        </b-card-text>
      </b-card>
      <b-card
        v-else
        :img-src="feed.media_url"
        img-alt="Instagram post"
        img-top
        no-body
        class="mb-2 border-rounded shadow"
      >
        <b-card-text class="p-2 caption-text">
          {{
            feed.caption.replace(/•/g, "").replace(/#[a-zA-Z0-9]+/g, "")
          }}
          <a
            :href="feed.permalink"
            rel="noopener"
            target="_blank"
            class="float-right"
          >
            🌐
          </a>
        </b-card-text>
      </b-card>
      <slot
        name="feeds"
        :feed="feed"
        :index="index"
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
