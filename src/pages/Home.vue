<template>
  <v-row>
    <HeaderImage />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderImage from '@/components/HeaderImage.vue';

export default Vue.extend({
  components: {
    HeaderImage,
  },
    data() {
    return {
      //
    };
  },
});
</script>
