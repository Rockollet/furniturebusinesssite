<template>
  <v-app>
    <AppBar />
    <v-main class="ma-0 pa-0">
      <v-container
        fluid
        class="ma-0 pa-0"
      >
        <router-view />
      </v-container>
    </v-main>

    <v-footer
      absolute
      padless
      app
    >

    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/global/AppBar.vue';

export default Vue.extend({
  name: 'App',

  components: { AppBar },

  data: () => ({
    //
  }),
});
</script>
