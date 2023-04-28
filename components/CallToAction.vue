<template>
  <div class="py-5">
    <!--  center text 'Celebrating something special?' with special highlighted in a way. Below that, There will be three call to action buttons that will be stacked on mobile, Add a CTA for Corporate, Weddings, and Special Occasions above -->
    <h2 class="pb-5 text-center fancy-font">
      <strong class="p-1 special-highlight">Celebrating</strong> something?
    </h2>
    <b-row align-h="center">
      <b-col
        md="12"
        lg="4"
      >
        <b-card
          title="Corporate"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 dark-gray fancy-font"
          @mouseover="addHighlight($event, 'special-highlight-blue')"
          @mouseout="removeHighlight($event, 'special-highlight-blue')"
        />
      </b-col>
      <b-col
        md="12"
        lg="4"
      >
        <b-card
          title="Weddings"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 dark-gray fancy-font"
          :class="{'special-highlight-white': isHovering}"
          @mouseover="addHighlight($event, 'special-highlight-white')"
          @mouseout="removeHighlight($event, 'special-highlight-white')"
        />
      </b-col>
      <b-col
        md="12"
        lg="4"
      >
        <b-card
          title="Special Occasions"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 dark-gray fancy-font "
          @mouseover="addHighlight($event, 'special-highlight')"
          @mouseout="removeHighlight($event, 'special-highlight')"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
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

<style scoped>
.special-highlight {
  color: #f7c08a;
  background-image: linear-gradient(
    90deg,
    rgba(255, 127, 80, 0.1) 25%,
    rgba(255, 127, 80, 0.4) 50%,
    rgba(255, 127, 80, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 4px;
}

.special-highlight-white {
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 4px;
}

.special-highlight-blue {
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 255, 0.1) 25%,
    rgba(0, 0, 255, 0.4) 50%,
    rgba(0, 0, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: loading 5s infinite;
  border-radius: 4px;
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
