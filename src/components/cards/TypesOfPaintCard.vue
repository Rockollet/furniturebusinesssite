<template>
  <v-container justify="center">
    <v-card elevation="0">
      <v-row>
        <v-col align="center">
          <v-img
            :src="require('/src/assets/images/cards/cardImage.png')"
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
                Виды лакокрасочных <br> покрытий
              </div>
            </v-card-text>

            <router-link :to="{ name: 'paints' }">
              <v-btn
                class="mt-5"
                width="300"
                height="55"
                outlined
                rounded
              >
                Смотреть все
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
.container {
  margin-bottom: 175px;
}
</style>
