<template>
  <div class="card">
    <v-img
      :src="require('/src/assets/images/cards/cooperation.png')"
      min-height="300"
      max-height="330"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          class="text-left"
          cols="auto"
        >
          <h1
            class="text subheading font-weight-light"
            :style="TitleSize"
          >Приглашаю к <br> сотрудничеству на <br> постоянной основе</h1>
          <h1
            class="text font-weight-light subtitle mt-5"
            :style="SubtitleSize"
          >Можете позвонить нам в любое <br> удобное для Вас время</h1>
        </v-col>
        <v-col
          align-self="end"
          cols="auto"
        >
          <v-btn
            class="mb-12"
            color="#efc42b"
            width="200"
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
    TitleSize() {
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
      }
    },
    SubtitleSize() {
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
      }
    },
  },
});
</script>

<style scoped>
.card {
  margin-top: 80px;
}
.text {
  font-family: Playfair Display;
  line-height: 1em;
  color: white;
}
.subtitle {
  font-size: 1.4em;
}
.text-left {
  margin-top: 9vh;
}
.v-btn {
  text-transform: none;
}
</style>
