<template>
  <div id="app" class="container h-100">
    <div class="row min-vh-100 justify-content-center align-items-center">
      <div class="col-12">
        <div
          id="nav"
          v-bind:style="nav_tab ? 'display:block;' : 'display:none;'"
        >
          <router-link to="/">Index</router-link>
          <router-link to="/mainmenu">MainMenu</router-link>
          <router-link to="/favorite">Favorite</router-link>
          <router-link to="/class">Class1</router-link>
          <router-link to="/class2">Class2</router-link>
          <router-link to="/class3">Class3</router-link>
          <router-link to="/forum-cover">ForumCover</router-link>
          <router-link to="/forum">Forum</router-link>
          <router-link to="/forum2">Forum2</router-link>
          <router-link to="/forum-post">ForumPost</router-link>
          <router-link to="/mail1">Mail1</router-link>
          <router-link to="/mail2">Mail2</router-link>
          <router-link to="/goodbye">Goodbye</router-link>
        </div>
        <div id="MobileWindow" v-if="this.$store.state.isMobile">
          <router-view></router-view>
        </div>
        <div id="BBSWindow" v-else>
          <div class="main">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import u from "./assets/util";
export default {
  name: "App",
  data: function() {
    return { nav_tab: true };
  },
  created: function() {
    window.addEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件
  },
  mounted() {},
  beforeDestroy() {
    window.removeEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件
  },
  methods: {
    onKeyup: function(e) {
      switch (e.which) {
        case 192:
          this.nav_tab = !this.nav_tab;
          break;
      }
    }
  }
};
</script>

<style>
@import "./assets/pttchrome.css";
@import "./assets/pttchrome_override.css";
@import "./assets/mobile/pttweb.css";
@import "./assets/mobile.css";

/* * 手機板取消水平卷軸
html, body {
  overflow-x: hidden;
}
body {
  position: relative
}
*/
</style>
