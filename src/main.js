import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false
Vue.config.productionSourceMap = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
