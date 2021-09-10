<template>
  <v-img
    :src="require('/src/assets/images/headerImage.png')"
    position="left center"
    min-height="600"
    eager
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        class="text-left"
        cols="11"
      >
        <h1
          class="subheading text"
          :style="titleSize"
        >
          Покраска <br> мебельных фасадов
        </h1>
        <h1
          class="font-weight-light text"
          :style="subtitleSize"
        >
          В Набережных <br> Челнах
        </h1>
        <h1
          class="font-weight-light quality text"
          :style="subtitleSize"
        >
          Надежное качество <br>
          Опыт работы более 10 лет
        </h1>
      </v-col>
    </v-row>
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    titleSize() {
      let size = null;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 2.2;
          break;
        case 'sm':
          size = 3.0;
          break;
        case 'md':
          size = 3.5;
          break;
        case 'lg':
          size = 3.7;
          break;
        case 'xl':
          size = 5;
          break;
        default:
          size = 3.7;
      }
      return `font-size: ${size}em`;
    },
    subtitleSize() {
      let size = null;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 1.4;
          break;
        case 'sm':
          size = 1.7;
          break;
        case 'md':
          size = 2;
          break;
        case 'lg':
          size = 2.1;
          break;
        case 'xl':
          size = 2.9;
          break;
        default:
          size = 2.1;
      }
      return `font-size: ${size}em`;
    },
  },
});
</script>

<style scoped>
.subheading {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  line-height: 1.1em;
  margin-top: 1.5em;
}
.quality {
  margin-bottom: 2em;
  line-height: 1.3em;
  position: absolute;
  bottom: 0.5em;
}
.text-left {
  margin-top: 2em;
  margin-left: 2em;
}
.text {
  color: rgba(255, 253, 253, 0.897);
}
.font-weight-light {
  line-height: 1.3em;
}
</style>
