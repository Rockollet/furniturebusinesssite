<template>
  <DescriptionCardsLayout :cards="cards" />
</template>

<script lang="ts">
import Vue from 'vue';
import DescriptionCardsLayout from '@/components/DescriptionCardsLayout.vue';
import { DescriptionCardType } from '@/components/cards/description-card';
export default Vue.extend({
  components: {
    DescriptionCardsLayout,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: '',
          text: 'Крашеные декоративные настренные панели 3D из МДФ. Подойдут для трехмерной облицовки стен, не требующей профессиональных навыков и специального инструмента. Облицовка 3D панелями возможна как на стенах, так и на элементах мебели (ресепшн, барная стойка). Комплект предназначен для внутренней отделки помещений, например для стен в гостиной или спальне. Обеспечивает дополнительную тепло- и звукоизоляцию, придает поверхности эстетичный внешний вид. Для очистки от загрязнений можно использовать влажную уборку.',
          image: 'millingpage/panel.png',
        },
      ] as DescriptionCardType[],
    };
  },
});
</script>
