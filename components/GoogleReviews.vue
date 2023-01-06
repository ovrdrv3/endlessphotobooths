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
      Recent Reviews
    </h1>
    <b-row>
      <b-col
        v-for="(review, index) in reviews"
        :key="review.id"
        cols="12"
        md="12"
        lg="4"
      >
        <slot
          name="reviews"
          :review="review"
          :index="index"
        />
      </b-col>
    </b-row>
    <slot
      name="error"
      :error="error"
    />
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
