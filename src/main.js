import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
