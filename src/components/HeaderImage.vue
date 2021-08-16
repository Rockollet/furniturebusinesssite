<template>
  <v-img
    :src="require('/src/assets/images/kitchen.png')"
    contain
    eager
  />
<v-row>
    <v-col cols="auto">
      <img
        :src="require('/src/assets/images/title.png')"
        contain
      >
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  //
});
</script>

<style scoped>
</style>
