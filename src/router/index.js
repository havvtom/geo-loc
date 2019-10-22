import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '@/components/auth/Signup.vue'
import Login from '@/components/auth/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
     requiresAuth: true 
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

routes.beforeEach((to, from, next) => {

  if (to.matched.some(rec => rec.meta.requiresAuth)){
    //check if user is authenticated
    let user = firebase.auth().currentUser;
    if(user){
      next('')
    }else{
      next({
        name: 'Login'
      })
    }
  }
  else next()
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
