<template>
  <div>
    <h1
      v-if="posts.loading"
      class="copy-heading pt-3"
    >
      Loading recent instagram events...
    </h1>
    <h1
      v-show="!loading"
      class="copy-heading pt-3"
    >
      Recent Events
    </h1>

    <CarouselCore
      v-if="!loading"
      :feeds="posts"
    >
      <template #card="{post}">
        <b-card
          v-if="post.media_url.includes('.mp4')"
          no-body
          class="m-2 border-rounded "
        >
          <video
            :src="post.media_url"
            autoplay
            loop
            muted
            class="w-100"
            style="height: 80vh; object-fit: cover;"
          />
          <b-card-text class="p-2 caption-text">
            {{
              post.caption.replace(/•/g, "").replace(/#[a-zA-Z0-9]+/g, "")
            }}
            <a
              :href="post.permalink"
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
          :img-src="post.media_url"
          img-alt="Instagram post"
          img-top
          no-body
          class="m-2 border-rounded "
        >
          <b-card-text class="p-2 caption-text">
            {{
              post.caption.replace(/•/g, "").replace(/#[a-zA-Z0-9]+/g, "")
            }}
            <a
              :href="post.permalink"
              rel="noopener"
              target="_blank"
              class="float-right"
            >
              🌐
            </a>
          </b-card-text>
        </b-card>
      </template>
    </CarouselCore>

    <div class="fancy-alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    CarouselCore: () => (process.client
      ? import('./CarouselCore.vue')
      : () => ({ render: (h) => h('div') })),
  },
  data: () => ({
    error: null,
    loading: false,
    posts: [],
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
            this.posts.push(...response.data);
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>
