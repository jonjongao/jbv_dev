// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
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
  computed: {
    getAccountLabel: function () {
      /**
       * * Original 'Charmon' length = 7
       * * Rest of space length = 9, so is 16 in total
       */
      var t = this.account == '' ? 'Guest' : this.account;
      t = t.padEnd(16);
      return t;
    },
    getTimeLabel: function () {
      /**
       * * Original is '[9/30 星期三 0:29]' length = 15
       */
      var now = new Date();
      var now_local = now.toLocaleDateString();
      var mon = now_local.split('/')[0];
      var day = now_local.split('/')[1];
      var day_list = ['日', '一', '二', '三', '四', '五', '六'];
      var week = day_list[now.getDay()];
      var hour = now.getHours();
      var min = now.getMinutes();
      var t = '[' + mon + '/' + day + ' 星期' + week + ' ' + hour + ':' + min + ']';
      t = t.padStart(15);
      return t;
    }
  },
  created: function () {
    /**
     * * Vue初始化時觸發
     */
    window.addEventListener('keyup', this.onKeyup); // ! 監聽鍵盤事件
    window.addEventListener('resize', this.onResize); // ! 監聽視窗縮放事件
    // ! 監聽login.js的登入事件
    this.$bus.$on("try-login", (i) => {
      this.checkLogin(i[0], i[1]);
    });
  },
  watch: {
    '$route'(to, from) {
      /**
       * * router view變更時觸發
       */
      this.$store.commit('setAccount', this.getAccountLabel); // ! 更新用戶暱稱Label
      this.$store.commit('setDate', this.getTimeLabel); // ! 更新日期Label
    }
  },
  template: '<App/>',
  data: {
    account: '',
    password: ''
  },
  methods: {
    checkLogin: function (id, pw) {
      this.account = id;
      this.password = pw;

      if (id != "" &&
        pw != "") {
        console.log("success!");
        // ! 跳轉到MainMenu頁面
        this.$router.push({
          name: 'MainMenu',
          params: {
            account: this.account
          }
        })
      } else {
        console.log("failed");
      }
    },
    onKeyup: function (e) {
      switch (e.which) {
        case 38: // * 按下up
          break;
        case 40: // * 按下down
          break;
        case 13: // * 按下enter
          break;
        default:
          return;
      }
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
