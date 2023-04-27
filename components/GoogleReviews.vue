<template>
  <div>
    <h1
      v-if="loading"
      class="copy-heading pt-3"
    >
      Loading recent Google reviews...
    </h1>
    <h1
      v-show="!loading"
      class="copy-heading pt-3"
    >
      Recent Reviews
    </h1>
    <CarouselCore
      v-if="!loading"
      :feeds="reviews"
    >
      <template #card="{post}">
        <b-card
          class="m-1 rounded dark-gray"
        >
          <b-card-text>
            <span
              v-for="n in 5"
              :key="n"
            >
              <span
                v-if="n <= post.rating"
                class="gold-star"
              >★</span>
            </span>
          </b-card-text>
          <b-card-text>
            {{ post.text }}
          </b-card-text>
          <b-card-text class="small caption-text font-italic">
            &mdash;
            {{ post.author_name.split(' ')[0][0] }}.
            {{ post.author_name.split(' ')[1] }},
            {{ post.relative_time_description }}
          </b-card-text>
        </b-card>
      </template>
      <div class="fancy-alert">
        {{ error }}
      </div>
    </CarouselCore>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    CarouselCore: () => (process.client
      ? import('./CarouselCore.vue')
      : () => ({ render: (h) => h('div') })),
  },
  data: () => ({
    error: null,
    loading: false,
    reviews: [],
  }),
  mounted() {
    this.getReviews()
  },
  methods: {
    getReviews() {
      const url = process.env.NODE_ENV === 'development' ? 'http://localhost:9999/.netlify/functions/google-mybusiness' : '/.netlify/functions/google-mybusiness'
      this.loading = true
      axios
        .get(url)
        .then((response) => {
          this.loading = false
          if (response.status === 400) {
            this.error = response.error.message
          }
          if (response.status === 200) {
            this.reviews.push(...response.data)
          }
        })
        .catch((error) => {
          throw error
        })
    },
  },
}
</script>

<style scoped>
.gold-star {
  color: gold;
  font-size: 1.5em;
}

</style>
