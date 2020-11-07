<template>
  <div id="app" class="container h-100 min-vw-100 p-0 m-0">
    <div
      :class="
        this.$store.state.isMobile
          ? 'row min-vh-100 m-0'
          : 'row min-vh-100 m-0 justify-content-center align-items-center'
      "
    >
      <div
        class="col-12 p-0"
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
          <div class="row fixed-top q15 b1 justify-content-center" :style="'z-index:1080;'+'height:'+this.$store.state.mobileHeaderHeight+'px;'" v-if="hasMail">
            <span class="q15 my-auto text-center" v-if="blink">{{ popupMessage }}</span>
          </div>
          <router-view></router-view>
        </div>
        <div id="BBSWindow" style="padding-left:0px;padding-right:0px;" v-else>
          <div class="main">
            <div
              class="new_popup row d-flex justify-content-center"
              v-if="hasMail"
            >
              <span class="q15 b1 text-center" v-if="blink">{{
                popupMessage
              }}</span>
            </div>
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
import secret_mails from "./assets/secret_mails.json";
import forum_posts from "./assets/forum.json";
/**
 * ? 討論板資料表
 */
import forum_head from "./assets/forum_head.json";
import forum from "./assets/forum.json";
import tsueihua from "./assets/tsuei-hua.json";
import eil_guest from "./assets/eil_guest.json";
import eil_ziqi from "./assets/eil_ziqi.json";

export default {
  name: "App",
  db1: list_favorite,
  db2: guest_mails,
  db3: ziqi_mails,
  db4: secret_mails,
  db5: forum_posts,
  fdb1: forum_head,
  fdb2: forum,
  fdb3: tsueihua,
  fdb4: eil_guest,
  fdb5: eil_ziqi,
  computed: {},
  data: function () {
    return {
      nav_tab: false,
      blink: false,
      hasMail: false,
      timeBlinks: 0,
      popupMessage: "",
    };
  },
  created: function () {
    this.$store.commit("setDBs", [
      this.$options.db1,
      this.$options.db2,
      this.$options.db3,
      this.$options.db4,
      this.$options.db5,
    ]);

    this.$store.commit("setForumDBs", [
      this.$options.fdb1,
      this.$options.fdb2,
      this.$options.fdb3,
      this.$options.fdb4,
      this.$options.fdb5,
    ]);

    window.addEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件

    this.timeOutRefresh = window.setInterval(() => {
      this.$bus.$emit("on-blink");
    }, 1000);
  },
  mounted() {
    this.$bus.$on("on-blink", this.onBlink);
    this.$bus.$on("on-mail-popup", this.onMailPopup);
    this.$bus.$on("on-warning-popup", this.onWarningPopup);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.onKeyup); // ! 監聽鍵盤事件
    this.$bus.$off("on-blink", this.onBlink);
    this.$bus.$off("on-mail-popup", this.onMailPopup);
    this.$bus.$on("on-warning-popup", this.onWarningPopup);
    window.clearInterval(this.timeOutRefresh);
  },
  methods: {
    onKeyup: function (e) {
      switch (e.which) {
        case 192:
          this.nav_tab = !this.nav_tab;
          break;
      }
    },
    onBlink: function () {
      this.blink = !this.blink;
      if (this.hasMail) {
        this.timeBlinks++;
        if (this.timeBlinks >= 6) {
          this.hasMail = false;
          this.timeBlinks = 0;
        }
      }
    },
    onMailPopup: function (val) {
      this.popupMessage = "你有新信件";
      this.hasMail = val;
      this.$store.commit("setSecret", true);
    },
    onWarningPopup: function (val) {
      this.popupMessage = "壞孩子會被趕出去";
      this.hasMail = val;
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
