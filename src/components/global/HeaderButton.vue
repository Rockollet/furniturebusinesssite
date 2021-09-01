<template>
  <div>
    <v-btn
      v-for="button in buttons"
      :key="button.id"
      :target="button.target"
      :href="button.href"
      :to="button.to"
      :dark="$vuetify.breakpoint.smAndDown"
      rounded
      text
    >
      <v-icon :size="IconHeight"> {{ button.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface HeaderButtonType {
  id: string;
  to: string;
  icon: string;
  target: string | null;
  href: string | Location;
}

export default Vue.extend({
  props: {
    buttons: {
      type: Array as PropType<HeaderButtonType[]>,
      required: true,
    },
  },
  computed: {
    IconHeight(): number {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30;
        case 'sm':
          return 30;
        case 'md':
          return 30;
        case 'lg':
          return 40;
        case 'xl':
          return 50;
      }
    },
  },
});
</script>

<style scoped>
.v-btn {
  font-weight: normal;
}
.v-btn :hover {
  color: rgba(0, 83, 176, 100);
  transition: 0.1s;
}
.v-btn::before {
  background-color: transparent;
}
</style>
