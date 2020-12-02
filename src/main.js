// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueGtag from "vue-gtag";
import {
  BootstrapVue,
  IconsPlugin
} from "bootstrap-vue";
import "./bus";
import store from "./store";
//import './assets/mobile/pttweb.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import SlidingButton from 'vue-sliding-button'

Vue.config.productionTip = false;
Vue.use(
  VueGtag, {
    config: {
      id: "GTM-PHWQL6T",
      params: {
        send_page_view: true
      }
    },
    pageTrackerTemplate(to) {
      switch (to.name) {
        case "Forum":
          // console.log("gtag=" + to["meta"].trackedTitle + "_" + to["params"].id);
          return {
            page_title: to["meta"].trackedTitle + "_" + to["params"].id,
              page_path: to.path,
              page_location: window.location.href
          };
          break;
        case "Post":
          // console.log("gtag=" + to["meta"].trackedTitle + "_" + to["params"].type + "_" + to["params"].id);
          return {
            page_title: to["meta"].trackedTitle + "_" + to["params"].type + "_" + to["params"].id,
              page_path: to.path,
              page_location: window.location.href
          };
          break;
        default:
          // console.log("gtag=" + to["meta"].trackedTitle);
          return {
            page_title: to["meta"].trackedTitle,
              page_path: to.path,
              page_location: window.location.href
          };
          break;
      }
    }
  },
  router
);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(SlidingButton)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  computed: {},
  created: function () {
    /**
     * * Vue初始化時觸發
     */
    window.addEventListener("keydown", this.onKeyup); // ! 監聽鍵盤事件
    window.addEventListener("resize", this.onResize); // ! 監聽視窗縮放事件

    this.$bus.$on("resize", this.onResize);
  },
  beforeDestroy() {
    this.$bus.$off("resize", this.onResize);
  },
  watch: {
    $route(to, from) {
      /**
       * * router view變更時觸發
       */
      // this.$store.commit('setAccount', this.getAccountLabel); // ! 更新用戶暱稱Label
      // this.$store.commit('setDate', this.getTimeLabel); // ! 更新日期Label
    }
  },
  template: "<App/>",
  data: {},
  methods: {
    onKeyup: function (e) {
      var now = this.$store.state.rowIndex;
      var length = this.$store.state.rowCount;
      //console.log(now+" -> "+length);
      switch (e.which) {
        case 37: // * 按下left
          break;
        case 38: // * 按下up
          now--;
          // ! 如果指針到頂，是否跳轉到尾
          // if (now < 0) now = length - 1;
          if (now < 0) now = 0;
          break;
        case 39: // * 按下right
          break;
        case 40: // * 按下down
          now++;
          if (now > length - 1) now = 0;
          break;
        case 13: // * 按下enter
          break;
        case 68: // ! d
          break;
        default:
          // console.log(e.which);
          return;
      }
      if (this.$store.state.isFreeze == false) {
        this.$store.commit("setRowIndex", now);
      }
      // ! 轉發鍵盤事件
      this.$bus.$emit("on-keyup", e);
      e.preventDefault();
    },
    onResize: function (e) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var m = false;
      if (w < 1024) m = true;
      if (this.$store.state.isMobile != m) {
        // console.log("Force restart");
        if (this.$route.name != "Login") {
          this.$router.push({
            name: "Login"
          });
        }
      }
      this.$store.commit("setWindowSize", [w, h, m]);
    }
  }
});
