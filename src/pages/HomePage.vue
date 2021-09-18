<template>
  <div v-frag>
    <v-row>
      <HeaderImage />
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <MillingMachineCard />
      </v-col>
      <v-col cols="auto">
        <CooperationCard />
      </v-col>
      <v-col cols="auto">
        <TypesOfPaintCard />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderImage from '@/components/HeaderImage.vue';
import TypesOfPaintCard from '@/components/cards/TypesOfPaintCard.vue';
import CooperationCard from '@/components/cards/CooperationCard.vue';
import MillingMachineCard from '@/components/cards/MillingMachineCard.vue';

export default Vue.extend({
  components: {
    HeaderImage,
    TypesOfPaintCard,
    CooperationCard,
    MillingMachineCard,
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style scoped>
.col {
  margin-top: 65px;
}
</style>
