<template>
    <v-btn
    :target="value.target"
    :href="value.href"
    :to="value.to"
    :dark="$vuetify.breakpoint.smAndDown"
    rounded
    text>
    <v-icon :size="iconHeight"> {{ value.icon }}</v-icon>
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
        default:
          return 40;
      }
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
