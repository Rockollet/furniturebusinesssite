<template>
  <v-container justify="center">
    <v-card elevation="0">
      <v-row>
        <v-col align="center">
          <v-img
            :src="require('/src/assets/images/cards/millingmachine.png')"
            max-width="600"
            contain
            eager
          />
        </v-col>
        <v-row
          :class="{'ml-11': $vuetify.breakpoint.lgAndUp}"
          align="center"
        >
          <v-col align="center">
            <v-card-text>
              <div
                class="text font-weight-light"
                :style="titleSize"
              >
                Декоративые ЗD панели <br>
                под заказ
              </div>
            </v-card-text>
            <v-card-subtitle
              class="text font-weight-light subtitle"
              :style="subtitleSize"
            >
              Изготавливаются на ЧПУ станке
            </v-card-subtitle>

            <router-link :to="{ name: 'paints' }">
              <v-btn
                class="mt-5"
                width="300"
                height="55"
                outlined
                rounded
              >
                Подробнее
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    titleSize() {
      let size = null;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 2.1;
          break;
        case 'sm':
          size = 2;
          break;
        default:
          size = 2.1;
      }
      return `font-size: ${size}em`;
    },
    subtitleSize() {
      let size = null;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 1;
          break;
        case 'sm':
          size = 1;
          break;
        default:
          size = 1;
      }
      return `font-size: ${size}em`;
    },
  },
});
</script>

<style scoped>
.text {
  font-family: Playfair Display;
  line-height: 1.1em;
  font-size: 2.5em;
}
.v-btn {
  color: #efc42b;
  border: 2px solid;
  text-transform: none;
}
a {
  text-decoration: none;
}
</style>
