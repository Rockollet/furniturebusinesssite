<template>
  <v-app>
    <AppBar />
    <v-main class="ma-0 pa-0">
      <v-container
        class="ma-0 pa-0"
        fluid
      >
        <router-view />
      </v-container>
    </v-main>

    <v-footer
      class="mb-0"
      absolute
      padless
      app
    >
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/global/AppBar.vue';
import Footer from '@/components/global/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
