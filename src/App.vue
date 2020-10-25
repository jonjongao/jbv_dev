<template>
  <div id="app" class="container h-100 min-vw-100 p-0 m-0">
    <div class="row min-vh-100 m-0 justify-content-center align-items-center">
      <div
        class="col-12"
        v-bind:style="this.$store.state.isMobile ? ';' : 'max-width:970px;'"
      >
        <div
          id="nav"
          v-bind:style="nav_tab ? 'display:block;' : 'display:none;'"
        >
          <router-link to="/">Index</router-link
          ><span style="color: white"> |</span>
          <router-link to="/mainmenu">MainMenu</router-link
          ><span style="color: white"> |</span>
          <router-link to="/favorite">Favorite</router-link
          ><span style="color: white"> |</span>
          <router-link to="/class">Class1</router-link
          ><span style="color: white"> |</span>
          <router-link to="/class2">Class2</router-link
          ><span style="color: white"> |</span>
          <router-link to="/class3">Class3</router-link
          ><span style="color: white"> |</span>
          <router-link to="/forum2">Forum2</router-link
          ><span style="color: white"> |</span>
          <router-link to="/mail1">Mail1</router-link
          ><span style="color: white"> |</span>
          <router-link to="/mail2">Mail2</router-link
          ><span style="color: white"> |</span>
          <router-link to="/mail3/1">Mail3</router-link
          ><span style="color: white"> |</span>
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
import list_favorite from "./assets/favorite.json";
import guest_mails from "./assets/guest_mails.json";
import ziqi_mails from "./assets/ziqi_mails.json";
import forum_posts from "./assets/forum-posts.json";
export default {
  name: "App",
  db1: list_favorite,
  db2: guest_mails,
  db3: ziqi_mails,
  db4: forum_posts,
  data: function () {
    return { nav_tab: true };
  },
  created: function () {
    this.$store.commit("setDBs", [
      this.$options.db1,
      this.$options.db2,
      this.$options.db3,
      this.$options.db4
    ]);

    window.addEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件
  },
  mounted() {},
  beforeDestroy() {
    window.removeEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件
  },
  methods: {
    onKeyup: function (e) {
      switch (e.which) {
        case 192:
          this.nav_tab = !this.nav_tab;
          break;
      }
    },
  },
};

// <style scoped src="../assets/pttchrome.css"></style>
// <style scoped src="../assets/pttchrome_override.css"></style>

// <style scoped lang="scss">
// body /deep/ {
//   @import "../assets/pttchrome.css";
// }
// </style>
</script>

<style>
@import "./assets/pttchrome.css";
@import "./assets/pttchrome_override.css";
@import "./assets/cross_override.css";
/* @import "./assets/mobile/pttweb.css"; */
/* @import "./assets/mobile.css"; */
</style>
