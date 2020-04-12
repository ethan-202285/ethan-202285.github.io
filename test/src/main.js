import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

new Vue({
  render: h => h(App),
}).$mount('#app')
