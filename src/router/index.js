import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home"
import VueRouter from 'vue-router'

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
  }
];

const router = new VueRouter({
  moode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;