<template>
  <div>
    <slot
      name="loading"
      :loading="loading"
    />
    <h1
      v-show="!loading"
      class="copy-heading pt-3"
    >
      Recent Events
    </h1>
    <carousel-loader
      v-if="!loading"
      :feeds="feeds"
    />
    <slot
      name="error"
      :error="error"
    />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    CarouselLoader: () => (process.client
      ? import('./CarouselLoader.vue')
      : () => ({ render: (h) => h('div') })),
  },
  data: () => ({
    error: null,
    loading: false,
    feeds: [],
  }),
  mounted() {
    this.getUserFeed();
  },
  methods: {
    getUserFeed() {
      const url = process.env.NODE_ENV === 'development'
        ? 'http://localhost:9999/.netlify/functions/photos'
        : '/.netlify/functions/photos';
      this.loading = true;
      axios
        .get(url)
        .then((response) => {
          this.loading = false;
          if (response.status === 400) {
            this.error = response.error.message;
          }
          if (response.status === 200) {
            this.feeds.push(...response.data);
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>
