<template>
  <v-card
    class="mx-auto"
    max-width="800"
    elevation="0"
  >
    <v-img
      :src="require(`/src/assets/images/cards/${card.image}`)"
      class="white--text align-end"
      contain
      eager
    >
      <v-card-title> {{ card.title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div> {{ card.text }} </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { DescriptionCardType } from '@/components/cards/description-card';
export default Vue.extend({
  props: {
    card: {
      type: Object as PropType<DescriptionCardType>,
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
