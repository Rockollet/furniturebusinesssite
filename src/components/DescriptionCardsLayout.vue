<template>
  <v-container
    style="max-width:1200px"
    justify="center"
  >
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.id"
        class="px-2"
      >
        <DescriptionCard :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DescriptionCard from '@/components/cards/DescriptionCard.vue';
import { DescriptionCardType } from '@/components/cards/description-card';
export default Vue.extend({
  components: {
    DescriptionCard,
  },
  props: {
    cards: {
      type: Array as PropType<DescriptionCardType[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.container {
  margin-bottom: 120px;
}
</style>
