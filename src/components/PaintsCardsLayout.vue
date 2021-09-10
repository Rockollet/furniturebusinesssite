<template>
  <v-container
    style="max-width:1200px"
    justify="center"
  >
    <v-row>
      <v-col
        v-for="paint in paints"
        :key="paint.id"
        class="px-2"
      >
        <PaintCard :paint="paint" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PaintCard from '@/components/cards/PaintCard.vue';
import { PaintCardType } from '@/components/cards/paint-card';
export default Vue.extend({
  components: {
    PaintCard,
  },
  data() {
    return {
      paints: [
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
      ] as PaintCardType[],
    };
  },
});
</script>


<style scoped>
.container {
  margin-bottom: 120px;
}
</style>
