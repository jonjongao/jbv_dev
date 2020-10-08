import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
//Test sample template
import Home from "@/views/Home"
import About from "@/views/About"
//BBS template
import Login from "@/views/Login"
import MainMenu from "@/views/MainMenu"

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'HelloWorld',
    component: () =>
      import("@/components/HelloWorld")
  },
  {
    path: '/home',
    name: "Home",
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props:{
      bbsrow: 2
    }
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    component: MainMenu,
    props:{
      bbsrow: 4
    }
  }
];

const router = new VueRouter({
  moode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Fired before load route template
  // Must execute next() so it'll do rendering

  next();
})

export default router;
