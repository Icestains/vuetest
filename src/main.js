import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'


Vue.config.productionTip = false
Vue.config.productionSourceMap = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
