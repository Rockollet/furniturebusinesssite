import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),
  },
  {
    path: '/paints',
    name: 'paints',
    component: () => import(/* webpackChunkName: "LocationOnMap" */ '../pages/PaintsPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
