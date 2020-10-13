// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './bus'
import store from './store'
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
      //Original 'Charmon' length = 7
      //Rest of space length = 9, so is 16 in total
      var t = this.account == '' ? 'Guest' : this.account;
      t = t.padEnd(16);
      return t;
    },
    getTimeLabel: function () {
      //Original is '[9/30 星期三 0:29]' length = 15
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
    window.addEventListener('keyup', this.onKeyup); // 監聽鍵盤事件
    window.addEventListener('resize', this.onResize);
    // 監聽login.js的登入事件
    this.$bus.$on("try-login", (i) => {
      this.checkLogin(i[0], i[1]);
    });
  },
  watch: {
    '$route'(to, from) {
      // Fired when route change
      // 更新日期與帳號名稱
      this.$store.commit('setAccount', this.getAccountLabel);
      this.$store.commit('setDate', this.getTimeLabel);
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
        //Direct user to next page
        //window.location.href = '/ptsbbs/layout_page1';
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
        case 38: //up
          break;
        case 40: //down
          break;
        case 13: //enter
          break;
        default:
          return;
      }
      // 轉發鍵盤事件
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
