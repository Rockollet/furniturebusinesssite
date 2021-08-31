import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
