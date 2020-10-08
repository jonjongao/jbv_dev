// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // 載入 bootstrap CSS 檔
import 'bootstrap' // 載入 bootstrap 的 JS 檔
import './bus'

Vue.config.productionTip = false

/*
$(document).ready(function () {
  var v = function () {
    addVue(restoreSpace);
  };
  replaceSpace(v);

  $('#mainContainer > span').each(function () {
    //Counting each bbsrow
  });
});

function replaceSpace(callback) {
  console.log("replace space");
  //Replace all space in html with <_> incase of trim by Vue
  $('#mainContainer > span > div > span > span > span').each(function () {
    var text = $(this).text();
    console.log("read "+text);
    $(this).text(text.replace(/\s/g, "<_>"));
  });

  callback();
}

function restoreSpace() {
  console.log("restore space");
  //Replace all <_> back to space
  $('#mainContainer > span > div > span > span > span').each(function () {
    var text = $(this).text();
    $(this).text(text.replace(/<_>/g, " "));
  });
}
*/
addVue();

function addVue(callback) {
  console.log("add vue");
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    mounted: function () {
      var c = document.getElementById('mainContainer');
      if (c == null) return;
      var i = document.getElementById('mainContainer').getAttribute('bbsrowCount');
      if (i != null) this.bbsrowCount = i;
    },
    computed: {
      getAccountLabel: function () {
        //Original 'Charmon' length = 7
        //Rest of space length = 9, so is 16 in total
        var t = this.loginAccount == '' ? 'Guest' : this.loginAccount;
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
      window.addEventListener('keyup', this.onKeyup);
      this.$bus.$on("try-login", (i) => {
        this.chkLogin(i[0], i[1]);
      });
      this.$bus.$on("update-bbsrow", (i) => {
        console.log("update bbsrow=" + i);
        this.bbsrowCount = i;
      });
    },
    watch: {
      '$route'(to, from) {
        // Fired when route change
      }
    },
    template: '<App/>',
    data: function () {
      return {
        bbsrowIndex: 0,
        bbsrowCount: 0
      }
    },
    methods: {
      toggle: function () {
        this.a1 = !this.a1;
      },
      chkLogin: function (id, pw) {
        if (id == "charmon" &&
          pw == "likewhat") {
          console.log("success!");
          //Direct user to next page
          //window.location.href = '/ptsbbs/layout_page1';
          this.$router.push("/home")
        } else {
          console.log("failed");
        }
      },
      onKeyup: function (e) {
        switch (e.which) {
          case 38: //up
            this.bbsrowIndex--;
            if (this.bbsrowIndex < 0) this.bbsrowIndex = this.bbsrowCount - 1;
            break;
          case 40: //down
            this.bbsrowIndex++;
            if (this.bbsrowIndex > this.bbsrowCount - 1) this.bbsrowIndex = 0;
            break;
          case 13: //enter
            break;
          default:
            console.log(e.which);
            return;
        }
        e.preventDefault();
      }
    }
  })

  if (callback != null)
    callback();
}
