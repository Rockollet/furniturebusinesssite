<template>
  <v-container justify="center">
    <v-card
      max-width="1200"
      elevation="0"
    >
      <v-row>
        <v-col>
          <v-img
            :src="require('/src/assets/images/cards/cardImage.png')"
            max-width="700"
            contain
            eager
          />
        </v-col>
        <v-row
          justify="center"
          align="center"
          class="ml-11"
        >

          <v-col>
            <v-card-text>
              <div
                class="text font-weight-light"
                :style="titleSize"
              >Виды и назначение <br> лакокрасочных <br> покрытий</div>
            </v-card-text>

            <v-card-actions>
              <router-link :to="{ name: 'paints' }">
              <v-btn
                width="200"
                height="55"
                outlined
                rounded
              >
                Смотреть все
              </v-btn>
              </router-link>
            </v-card-actions>
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
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:2.1em';
        case 'sm':
          return 'font-size:2em';
      }
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
.v-card {
  margin-top: 80px;
}
a {
  text-decoration: none;
}
</style>
