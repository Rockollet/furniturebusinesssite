<template>
  <div class="card">
    <v-img
      :src="require('/src/assets/images/cards/cooperation.png')"
      height="350"
      eager
    >
      <v-row
        :class="{'mt-12': $vuetify.breakpoint.smAndDown, 'mt-16': $vuetify.breakpoint.mdAndUp}"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="auto"
          justify="center"
          align="center"
        >
          <h1
            class="text subheading font-weight-light"
            :style="titleSize"
          >
            Приглашаю к <br> сотрудничеству на <br> постоянной основе
          </h1>
          <h1
            class="text font-weight-light subtitle mt-5"
            :style="subtitleSize"
          >
            Можете позвонить нам в любое <br> удобное для Вас время
          </h1>
        </v-col>
        <v-col
          align-self="end"
          cols="auto"
        >
          <v-btn
            :href="`tel:+79179256292`"
            class="mb-12"
            color="#efc42b"
            width="280"
            height="55"
            rounded
          >
            Позвонить
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    titleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:1.9em';
        case 'sm':
          return 'font-size:2.2em';
        case 'md':
          return 'font-size:2.2em';
        case 'lg':
          return 'font-size:2.6em';
        case 'xl':
          return 'font-size:2.7em';
        default:
          return 'font-size:2.6em';
      }
    },
    subtitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'font-size:1.1em';
        case 'sm':
          return 'font-size:1.3em';
        case 'md':
          return 'font-size:1.3em';
        case 'lg':
          return 'font-size:1.6em';
        case 'xl':
          return 'font-size:1.6em';
        default:
          return 'font-size:1.6em';
      }
    },
  },
});
</script>

<style scoped>
.text {
  font-family: Playfair Display;
  line-height: 1em;
  color: white;
}
.subtitle {
  font-size: 1.4em;
}
.text-center {
  margin-top: ;
}
.v-btn {
  text-transform: none;
}
</style>
