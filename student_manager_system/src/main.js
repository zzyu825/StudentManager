import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './directives'
import './assets/index.css'
import axios from "./axios";
import toast from "./tools/toast";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$Toast = toast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
