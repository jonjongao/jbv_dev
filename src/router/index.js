import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home"
import VueRouter from 'vue-router'

import Login from "@/views/Login"

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: "Home",
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:()=>
      import("@/views/About")
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  moode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  next();
})

export default router;