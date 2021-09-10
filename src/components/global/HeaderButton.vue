<template>
  <v-btn
    :target="value.target"
    :href="value.href"
    :to="value.to"
    :dark="$vuetify.breakpoint.smAndDown"
    rounded
    text
  >
    <v-icon :size="iconHeight">
      {{ value.icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { HeaderButtonType } from './header-button';

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<HeaderButtonType>,
      required: true,
    },
  },
  computed: {
    iconHeight(): number {
      let height = null;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
        case 'md':
          height = 30;
          break;
        case 'lg':
          height = 40;
          break;
        case 'xl':
          height = 50;
          break;
        default:
          return 40;
      }
      return height;
    },
  },
});
</script>
<style lang="scss" scoped>
.v-btn {
  font-weight: normal;

  :hover {
    color: rgba(0, 83, 176, 100);
    transition: 0.1s;
  }
  &:before {
    background-color: transparent;
  }
}
</style>
