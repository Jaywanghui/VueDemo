import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui样式
import ElementUI from 'element-ui';
//引入全局样式
import "@/assets//css/global.css"
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
