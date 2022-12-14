import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
// import 'normalize.css/normalize.css';
import './quasar';
import 'element-ui/lib/theme-chalk/index.css';

//Vuelidate
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
