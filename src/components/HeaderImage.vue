<template>
  <div v-frag>
    <v-img
      :src="require('/src/assets/images/headerImage.png')"
      class="hidden-sm-and-down"
      contain
      eager
    />
    <v-img
      :src="require('/src/assets/images/headerImageForSmAndDown.png')"
      class="hidden-md-and-up"
      contain
      eager
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  //
});
</script>

<style scoped>
</style>
