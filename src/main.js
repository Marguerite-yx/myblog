import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
