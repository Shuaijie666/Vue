// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* import day011 from './components/day011' */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(ElementUI);
Vue.config.productionTip = false
import VCharts from 'v-charts'
Vue.use(VCharts)
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './vuex/store'

axios.defaults.withCredentials = true
import axios from 'axios'
Vue.prototype.$axios = axios    //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.baseUrl = 'http://localhost:9000'    //设置后端的网址
import qs from 'qs'
Vue.prototype.$qs = qs;


router.beforeEach((to, from, next) => {		
		if(to.name=='Login'||store.state.LoginFlag){
			 next();
		}else{
			 next("/Login");
		}
		// next();
	})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
