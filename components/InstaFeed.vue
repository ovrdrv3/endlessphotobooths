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
      Events
    </h1>

    <CarouselCore
      v-if="!loading"
      :feeds="posts"
    >
      <template #card="{post}">
        <b-card
          v-if="post.mediaType == 'VIDEO'"
          no-body
          class="m-2 border-rounded dark-gray"
        >
          <video
            :src="post.mediaUrl"
            autoplay
            loop
            muted
            class="w-100 video-height"
            style="object-fit: cover;"
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
              <img
                src="~assets/images/home/instagram.png"
                alt="Instagram Link"
                style="width: 20px; height: 20px; position: relative;"
              >
            </a>
          </b-card-text>
        </b-card>
        <b-card
          v-else
          :img-src="post.mediaUrl"
          img-alt="Instagram post"
          img-top
          no-body
          class="m-2 border-rounded dark-gray"
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
              <img
                src="~assets/images/home/instagram.png"
                alt="Instagram Link"
                style="width: 20px; height: 20px; position: relative;"
              >
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
      const url = 'https://feeds.behold.so/AeYYwPQ41Vc4XcaKfwo8'
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

<style scoped lang="scss">

$break-large: 1000px;
.video-height {
  max-height: 80vh;
  object-fit: cover;
  @media (min-width: $break-large) {
    max-height: 436px;
  }
}
</style>
