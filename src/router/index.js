import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
//Test sample template
import Home from "@/views/Home"
import About from "@/views/About"
// ! BBS template
import Login from "@/views/Login"
import MainMenu from "@/views/MainMenu"
import Favorite from "@/views/Favorite"
import Class from "@/views/Class"
import Class2 from "@/views/Class2"
import Class3 from "@/views/Class3"
import ForumCover from "@/views/ForumCover"
import Forum from "@/views/Forum"
import Forum2 from "@/views/Forum2"
import ForumPost from "@/views/ForumPost"
import Mail1 from "@/views/Mail1"
import Mail2 from "@/views/Mail2"
import Mail3 from "@/views/Mail3"
import Goodbye from "@/views/Goodbye"

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    component: MainMenu,
    props: {
      bbsrow: 10
    }
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite,
  },
  {
    path: '/class',
    name: 'Class',
    component: Class,
    props: {
      bbsrow: 14
    }
  },
  {
    path: '/class2',
    name: 'Class2',
    component: Class2,
    props: {
      bbsrow: 15
    }
  },
  {
    path: '/class3',
    name: 'Class3',
    component: Class3,
    props: {
      bbsrow: 58
    }
  },
  {
    path: '/forum-cover',
    name: 'ForumCover',
    component: ForumCover,
    props: {
      bbsrow: 4
    }
  },
  // {
  //     path: '/forum',
  //     name: 'Forum',
  //     component: Forum,
  //     props: {
  //         bbsrow: 4
  //     }
  // },
  // {
  //     path: '/forum2',
  //     name: 'Forum2',
  //     component: Forum2,
  //     props: {
  //         bbsrow: 5
  //     }
  // },
  {
    path: '/f/:id',
    name: 'Forum',
    component: Forum2,
    props: true
  },
  {
    path: '/forum-post',
    name: 'ForumPost',
    component: ForumPost,
    props: {
      bbsrow: 4
    }
  },
  {
    path: '/mail1',
    name: 'Mail1',
    component: Mail1,
    props: {
      bbsrow: 7
    }
  },
  {
    path: '/mail2',
    name: 'Mail2',
    component: Mail2,
    props: {
      bbsrow: 4
    }
  },
  {
    path: '/p/:type/:id',
    name: 'Mail3',
    component: Mail3,
    props: true
  },
  {
    path: '/p/:type/:id',
    name: 'Post',
    component: Mail3,
    props: true
  },
  {
    path: '/goodbye',
    name: 'Goodbye',
    component: Goodbye,
    props: {
      bbsrow: 4
    }
  }
];

const router = new VueRouter({
  moode: "history",
  base: process.env.NODE_ENV === 'production' ?
    process.env.PUBLIC_PATH : process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Fired before load route template
  // Must execute next() so it'll do rendering
  next();
})

export default router;
