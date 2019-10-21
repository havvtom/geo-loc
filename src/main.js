import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.component('Navbar', require('@/components/layouts/Navbar.vue').default)


Vue.config.productionTip = false
let app = null

//wait for firebase auth to init before creating the APP
firebase.auth().onAuthStateChanged (()=>{
	if(!app){
		let app = new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')
	}

})

