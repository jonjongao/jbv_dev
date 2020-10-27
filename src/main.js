// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import './bus'
import store from './store'
//import './assets/mobile/pttweb.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
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
    window.addEventListener('keydown', this.onKeyup); // ! 監聽鍵盤事件
    window.addEventListener('resize', this.onResize); // ! 監聽視窗縮放事件
  },
  watch: {
    '$route'(to, from) {
      /**
       * * router view變更時觸發
       */
      // this.$store.commit('setAccount', this.getAccountLabel); // ! 更新用戶暱稱Label
      // this.$store.commit('setDate', this.getTimeLabel); // ! 更新日期Label
    }
  },
  template: '<App/>',
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
          if (now < 0) now = length - 1;
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
      this.$store.commit('setRowIndex', now);
      // ! 轉發鍵盤事件
      this.$bus.$emit('on-keyup', e);
      e.preventDefault();
    },
    onResize: function (e) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      this.$store.commit('setWindowSize', [w, h]);
    }
  }
})
