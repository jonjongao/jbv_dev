// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // 載入 bootstrap CSS 檔
import 'bootstrap' // 載入 bootstrap 的 JS 檔

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
addVue(() => {});

function addVue(callback) {
  console.log("add vue");
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    watch: {
      '$route'(to, from) {
        // Fired when route change
      }
    },
    template: '<App/>'
  })

  callback();
}
