<template>
  <v-img
    :src="require('/src/assets/images/headerImage.png')"
    min-height="600"
    position="left center"
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
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:2.4em';
        case 'sm':
          return 'font-size:3.0em';
        case 'md':
          return 'font-size:3.5em';
        case 'lg':
          return 'font-size:3.7em';
        case 'xl':
          return 'font-size:5em';
      }
    },
    subtitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:1.4em';
        case 'sm':
          return 'font-size:1.7em';
        case 'md':
          return 'font-size:2em';
        case 'lg':
          return 'font-size:2.1em';
        case 'xl':
          return 'font-size:2.9em';
      }
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
