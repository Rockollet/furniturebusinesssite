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
          title: 'Мебель с матовой фактурой',
          text:
            'Используется полиэфирный материал для обеспечения ровной фактуры и долговечности мебели.',
          image: 'paintspage/mat.png',
        },
        {
          id: 2,
          title: 'Мебель с глянцевой фактурой',
          text:
            'Блеск подчеркнет природную красоту материала, сделает вид мебели более привлекательным.',
          image: 'paintspage/gloss.png',
        },
        {
          id: 3,
          title: 'Мебель металлик',
          text:
            'Металлизированный блеск подходит для фасадов в современном стиле, с помощью него дизайнеры подчеркивают отдельные элементы внутреннего убранства.',
          image: 'paintspage/metallic.png',
        },
        {
          id: 4,
          title: 'Мебель с фрезеровкой фасадов',
          text:
            'Фрезерованные фасады сочетают в себе функциональность и красоту, так как в производстве фрезерованных фасадов используют натуральный массив или МДФ, такой фасад прочен и долго служит, экологичен, безопасен, не привередлив в уходе и устойчив к механическим повреждениям.',
          image: 'paintspage/milled.png',
        },
      ] as DescriptionCardType[],
    };
  },
});
</script>
