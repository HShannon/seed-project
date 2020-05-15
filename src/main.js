import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'
import router from './router' 

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.component('v-icon', Icon)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
