<template>
  <div v-frag>
    <v-img
      :src="require('/src/assets/images/headerImage.png')"
      min-height="922"
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
          <h1 class="subheading text">
            Покраска <br> мебельных фасадов
          </h1>
          <h1 class="text-h4 font-weight-light text">
            В Набережных <br> Челнах
          </h1>
          <h1 class="text-h4 font-weight-light quality text">
            Надежное качество <br>
            Опыт работы более 10 лет
          </h1>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    TextSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '5em';
        case 'sm':
          return '5em';
        case 'md':
          return '5em';
        case 'lg':
          return '10em';
        case 'xl':
          return '10em';
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
}
.quality {
  margin-top: 6em;
}
.text-left {
  margin-top: 5em;
}
.text {
  color: rgba(255, 253, 253, 0.897);
  font-size: 5em;
}
.v-img {

}
</style>
