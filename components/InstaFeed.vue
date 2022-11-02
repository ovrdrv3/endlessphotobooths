<template>
    <div>
      <slot name="loading" :loading="loading" />
      <h1 v-show='!loading' class="copy-heading pt-3">Recent Events</h1>
      <b-row>
        <b-col v-for="(feed, index) in feeds" :key="feed.id" cols="12" md="6" lg="4">
          <slot name="feeds" :feed="feed" :index="index"/>
        </b-col>
      </b-row>
      <slot name="error" :error="error" />
    </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
    data: () => ({
      error: null,
      loading: false,
      feeds: []
    }),
    mounted () {
      this.getUserFeed()
    },
    methods: {
      getUserFeed () {
        const url = process.env.NODE_ENV === 'development' ? 'http://localhost:9999/.netlify/functions/photos' : '/.netlify/functions/photos'
        this.loading = true
        axios
          .get(url)
          .then((response) => {
            this.loading = false
            if (response.status === 400) {
              this.error = response.error.message
            }
            if (response.status === 200) {
                this.feeds.push(...response.data)
            }
          })
          .catch((error) => {
            throw error
          })
      }
    }
  }
  </script>