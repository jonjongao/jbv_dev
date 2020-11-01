<template>
<div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <p class="q7 b0 text_field" v-html="getText">{{ getText }}</p>
    <ul class="nav flex-column bg-dark">
        <li class="nav-item" v-for="(r, index) in getReply" :key="index">
            <a class="nav-link text-left" href="#">{{ r.author }} {{ r.text }}</a>
        </li>
      
    </ul>
    <div class="row">
      <div class="col-12 q8 b7">
        <span>{{ this.$store.state.dateLabel }}</span
        ><span>[牡羊時]</span><span>線上</span><span>89879</span
        ><span>人, 我是</span><span>{{ this.$store.state.accountLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import u from "../assets/util";
import post from "../assets/post_pool.json";
import reply from "../assets/reply_pool.json";
export default {
  name: "MMail3",
  props: ["type", "id"],
  mounted: function () {
    this.onChange();
    this.$bus.$on("on-keyup", this.onKeyup);

    this.updatePage();
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
    this.$store.commit("setFreeze", false);
  },
  computed: {
    getExt1: function () {
      var s = [];
      for (var i = 0; i < this.getReply.length; i++) {
        if (this.getReply[i].ext1 == "→" || this.getReply[i].ext1 == "噓")
          s.push("q9 b0");
        else s.push("q15 b0");
      }
      return s;
    },
    getText: function () {
      var n = this.getMETA.text.replace(/\n|\r\n/g, "<br/>");
      var m = (n.match(new RegExp("<br/>", "g")) || []).length;
      m += 5;
      // ! 一頁18行
      console.log("text got num of " + (m + this.getReply.length) + " <br/>");

      this.lineInTotal = m + this.getReply.length;
      this.pageInTotal = Math.ceil(this.lineInTotal / 18);

      // this.updatePage();
      // var p = [];
      // var n = this.getMETA.text.split("\n");
      // for (var i = 0; i < n.length; i++) {
      //   console.log(n[i]);
      // }

      // var r = this.getReply;
      // for (var i = 0; i < r.length; i++) {
      //   n.push(r[i].text);
      // }

      return n;
    },
    getMETA: function () {
      var meta = {};
      if (this.type == "mail") {
        console.log("this is mail");
        if (this.$store.state.account == "Chi") meta = this.getZiqiMETA;
        else meta = this.getGuestMETA;
      } else {
        console.log("this is post");
        var db = post;
        for (var i = 0; i < db.length; i++)
          if (db[i].id == this.id) meta = db[i];
      }
      if (meta == {}) return this.ph;
      else return meta;
    },
    getGuestMETA: function () {
      var db = this.$store.state.guestMails;
      for (var i = 0; i < db.length; i++) if (db[i].id == this.id) return db[i];
      return {};
    },
    getZiqiMETA: function () {
      var db = this.$store.state.ziqiMails;
      for (var i = 0; i < db.length; i++) if (db[i].id == this.id) return db[i];
      return {};
    },
    getReply: function () {
      var meta = [];
      var a = parseInt(this.getMETA.reply_start);
      var b = parseInt(this.getMETA.reply_end);
      for (var i = 0; i < reply.length; i++) {
        if (reply[i].id >= a && reply[i].id <= b) {
          meta.push(reply[i]);
        }
      }
      return meta;
    },
    pageStart: function () {
      var p = (this.line - 18).toString().padStart(2, "0");
      return p;
    },
    pageEnd: function () {
      var p = this.line.toString().padStart(2, "0");
      return p;
    },
  },
  watch: {
    $route: "onChange",
  },
  data: function () {
    return {
      ph: {
        id: "0",
        reply: "",
        date: "",
        time: "",
        author: "",
        caption: "",
        text: "----尚缺文案----",
      },
      lineInTotal: 0,
      line: 18,
      pageInTotal: 0,
      pageNow: 0,
      progress: "",
    };
  },
  methods: {
    onChange() {
      this.$store.commit("setFreeze", true);
    },
    isSelect: function (index) {
      if (index == this.$store.state.rowIndex) return "●";
      else return "";
    },
    onKeyup(e) {
      switch (e.which) {
        case 37: // ! left
          // this.$router.push({ name: "Mail2" });
          this.$router.go(-1);
          break;
        case 38: // ! up
          if (this.line > 18) {
            this.$nextTick(() => {
              this.$refs.box.scrollTop -= 24;
            });
            this.line--;
            this.updatePage();
          }
          break;
        case 40: // ! down
          if (this.line < this.lineInTotal) {
            this.$nextTick(() => {
              this.$refs.box.scrollTop += 24;
            });
            this.line++;
            this.updatePage();
          }
          break;
        case 13: // ! enter
        case 39: // ! right
          break;
      }
    },
    updatePage() {
      this.pageNow = Math.floor(this.line / this.lineInTotal) + 1;
      this.progress =
        "(" + Math.round((this.pageNow / this.pageInTotal) * 100) + "%)";
      this.progress = this.progress.padEnd(6);
    },
  },
};
</script>