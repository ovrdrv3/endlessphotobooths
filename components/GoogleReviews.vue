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
      <template #card="{post, index}">
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
            {{ getDisplayText(post, index) }}
          </b-card-text>
          <b-card-text v-if="post.text.length > 350">
            <div
              class="show-more-link"
              @click.prevent="toggleFullText(index)"
            >
              {{ getButtonText(index) }}
            </div>
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
    showFullText: [],
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
          if (response.status === 350) {
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
    getDisplayText(review, index) {
      if (this.showFullText[index]) {
        return review.text;
      }
      return review.text.length > 350 ? `${review.text.slice(0, 350)}...` : review.text;
    },
    getButtonText(index) {
      return this.showFullText[index] ? '(Show less)' : '(Show more)';
    },
    toggleFullText(index) {
      this.$set(this.showFullText, index, !this.showFullText[index]);
    },
  },
}
</script>

<style scoped>
.gold-star {
  color: gold;
  font-size: 1.5em;
}
.show-more-link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
