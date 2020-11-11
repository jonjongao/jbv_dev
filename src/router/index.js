import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
// ! BBS template
import Login from "@/views/Login"
import MainMenu from "@/views/MainMenu"
import Favorite from "@/views/Favorite"
import Class from "@/views/Class"
import Class2 from "@/views/Class2"
import Class3 from "@/views/Class3"
import ForumCover from "@/views/ForumCover"
import Forum2 from "@/views/Forum2"
import Mail1 from "@/views/Mail1"
import Mail2 from "@/views/Mail2"
import Mail3 from "@/views/Mail3"
import Goodbye from "@/views/Goodbye"

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
    meta: { trackedTitle: "登入" }
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    component: MainMenu,
    props: {
      bbsrow: 10
    },
    meta: { trackedTitle: "主選單" }
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite,
    meta: { trackedTitle: "最愛區" }
  },
  {
    path: '/class',
    name: 'Class',
    component: Class,
    props: {
      bbsrow: 14
    },
    meta: { trackedTitle: "分類看板" }
  },
  {
    path: '/class2',
    name: 'Class2',
    component: Class2,
    props: {
      bbsrow: 15
    },
    meta: { trackedTitle: "戰略高手" }
  },
  {
    path: '/class3',
    name: 'Class3',
    component: Class3,
    props: {
      bbsrow: 58
    },
    meta: { trackedTitle: "GOnline" }
  },
  {
    path: '/f/:id',
    name: 'Forum',
    component: Forum2,
    props: true,
    meta: { trackedTitle: "討論板" }
  },
  {
    path: '/mail1',
    name: 'Mail1',
    component: Mail1,
    props: {
      bbsrow: 7
    },
    meta: { trackedTitle: "私信區" }
  },
  {
    path: '/mail2',
    name: 'Mail2',
    component: Mail2,
    props: {
      bbsrow: 4
    },
    meta: { trackedTitle: "信箱" }
  },
  {
    path: '/p/:type/:id',
    name: 'Post',
    component: Mail3,
    props: true,
    meta: { trackedTitle: "貼文" }
  },
  {
    path: '/goodbye',
    name: 'Goodbye',
    component: Goodbye,
    props: {
      bbsrow: 4
    },
    meta: { trackedTitle: "離開" }
  }
];

const router = new VueRouter({
  moode: "history",
  base: process.env.NODE_ENV === 'production' ?
    process.env.PUBLIC_PATH : process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

// router.beforeEach((to, from, next) => {
//   // Fired before load route template
//   // Must execute next() so it'll do rendering
//   next();
// })

export default router;
