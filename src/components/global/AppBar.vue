<template>
    <v-app-bar
      color="transparent"
      hide-on-scroll
      :height="appBarHeight"
      flat
      app>
      <v-spacer />
      <HeaderButton v-for="btn in buttons" :key="btn.id" :value="btn"/>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { HeaderButtonType } from './header-button';
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
      ] as HeaderButtonType[],
    };
  },
  computed: {
    appBarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '80%';
        case 'sm':
          return '130%';
        case 'md':
          return '85%';
        case 'lg':
          return '110%';
        case 'xl':
          return '120%';
        default:
          return '100%';
      }
    },
  },
});
</script>
