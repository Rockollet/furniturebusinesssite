import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../pages/HomePage.vue'),
  },
  {
    path: '/paints',
    name: 'paints',
    component: () => import(/* webpackChunkName: "LocationOnMap" */ '../pages/PaintsPage.vue'),
  },
  {
    path: '/milling',
    name: 'milling',
    component: () => import(/* webpackChunkName: "MillingPage" */ '../pages/MillingPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
