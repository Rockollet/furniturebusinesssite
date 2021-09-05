<template>
  <v-card
    class="mx-auto"
    max-width="800"
    elevation="0"
  >
    <v-img
      :src="require(`/src/assets/images/cards/${paint.image}`)"
      class="white--text align-end"
      contain
    >
      <v-card-title> {{ paint.title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div> {{ paint.text }} </div>

    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    paint: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-title {
  font-family: Playfair Display;
}
</style>
