import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/app.scss';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import frag from 'vue-frag';

Vue.config.productionTip = false;

Vue.directive('frag', frag);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
