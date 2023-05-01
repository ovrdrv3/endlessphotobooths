<template>
  <b-container
    fluid
    class="copy bg-ghostwhite px-lg-5"
  >
    <h2 class="mb-0 py-3 text-center fancy-font title text-secondary">
      Choose your unforgettable <strong>celebration</strong>  below:
    </h2>
    <b-row align-h="center">
      <b-col
        v-for="card in cards"
        md="12"
        lg="4"
        class="d-flex justify-content-center"
      >
        <b-card
          style="max-width: 20rem;"
          class="mb-2 dark-gray cursor-pointer shadow"
          :img-src="card.imgSrc"
          overlay
          body-class="card-overlay"
          @mouseover="addHighlight($event, 'special-highlight-white')"
          @mouseout="removeHighlight($event, 'special-highlight-white')"
        >
          <b-card-title>
            <span
              class="p-2 fancy-font text-white font-italic card-title"
              :class="card.specialClass"
            >
              {{ card.title }}
            </span>
          </b-card-title>
          <b-card-text
            class="
              p-1
              fancy-font
              card-subtext
              flex-grow-1
              d-flex
              flex-column
              justify-content-end"
          >
            {{ card.text }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Weddings',
          text: 'Blissful Beginnings',
          imgSrc: 'https://placekitten.com/1920/1080',
          specialClass: 'special-highlight-white',
        },
        {
          title: 'Corporate Events',
          text: 'Power-Up Party',
          imgSrc: 'https://placekitten.com/1920/1080',
          specialClass: 'special-highlight-blue',
        },
        {
          title: 'Special Events',
          text: 'Magic Moments',
          imgSrc: 'https://placekitten.com/1920/1080',
          specialClass: 'special-highlight-gold',
        },
      ],
    };
  },
  methods: {
    addHighlight(event, className) {
      event.target.closest('.card').classList.add(className);
    },
    removeHighlight(event, className) {
      event.target.closest('.card').classList.remove(className);
    },
  },
};
</script>

<style lang="scss">
$break-small: 600px;
$break-large: 1000px;

.card-title {
  font-size: 1.5rem;

  @media (max-width: $break-large) {
    font-size: 1rem;
  }
}
.card-overlay {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.card-subtext {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: $break-large) {
    font-size: 0.5rem;
  }
}

.cursor-pointer {
  cursor: pointer;
}

.special-highlight-gold {
  background-image: linear-gradient(
    90deg,
    rgba(255, 127, 80, 0.05) 25%,
    rgba(255, 127, 80, 0.2) 50%,
    rgba(255, 127, 80, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 10px;
}

.special-highlight-white {
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.05) 85%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 10px;
}

.special-highlight-blue {
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 255, 0.05) 25%,
    rgba(0, 0, 255, 0.2) 50%,
    rgba(0, 0, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 10px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

</style>
