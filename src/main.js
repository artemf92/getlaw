import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'materialize-css/dist/js/materialize.min';
// import 'material-icons/iconfont/material-icons.css';
import getTime from './filters/time.filter'

Vue.config.productionTip = false
Vue.filter('time', getTime);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
