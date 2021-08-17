<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="transparent"
      :height="AppBarHeight"
      flat
      app
    >
      <v-container
        justify="end"
      >
          <v-spacer />
          <v-row
          justify="end">
          <HeaderButton
            :buttons="buttons"
            :height="IconHeight"
          />
          </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderButton from './HeaderButton.vue';

export default Vue.extend({
  components: {
    HeaderButton,
  },
  data() {
    return {
      buttons: [
        {
          id: 'whatsapp',
          icon: 'mdi-whatsapp',
          target: '_blank',
          href:
            'https://api.whatsapp.com/send?phone=89179256292&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20',
        },
        {
          id: 'instagram',
          icon: 'mdi-instagram',
          target: '_blank',
          href: 'https://instagram.com/pokraska_chelny',
        },
      ],
    };
  },
  computed: {
    IconHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 20;
        case 'sm':
          return 30;
        case 'md':
          return 40;
        case 'lg':
          return 45;
        case 'xl':
          return 50;
      }
    },
    AppBarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '80%';
        case 'sm':
          return '130%';
        case 'md':
          return '85%';
        case 'lg':
          return '85%';
        case 'xl':
          return '85%';
      }
    },
  },
});
</script>
