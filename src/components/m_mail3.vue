<template>
  <div id="mobileContainer" class="container">
    <Header />
    <div class="row my-5"></div>

    <div class="col-12">
      <div class="row">
        <span class="col-2 q4 b7">作者</span
        ><span class="col-10 q7 b4 p_field">{{ getMETA.author }}</span>
      </div>
      <div class="row">
        <span class="col-2 q4 b7">標題</span
        ><span class="col-10 q7 b4 p_field">{{ getMETA.caption }}</span>
      </div>
      <div class="row">
        <span class="col-2 q4 b7">時間</span
        ><span class="col-10 q7 b4 p_field">{{ getMETA.time }}</span>
      </div>
    </div>
    
    <p class="q7 b0 text_field mt-3" v-html="getText">{{ getText }}</p>

    <div class="row">
      <span class="col-12 q7 b0">--</span>
    </div>
    <div class="row">
      <div class="col-12 q2 b0">
        ※ 發信站: 金鸞BBS佈告欄
      </div>
    </div>
    <div class="col-12 p-0">
      <div class="row mx-0 my-1 p-1 bg-dark rounded" v-for="(r, index) in getReply" :key="index">
        <span :class="getExt1[index]">{{ r.ext1 }} </span><span class="q11 b0">{{ r.author }}: </span><span class="q3 b0 line">{{ r.text }}</span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import u from "../assets/util";
import post from "../assets/post_pool.json";
import reply from "../assets/reply_pool.json";
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MMail3",
  components: {
    Header,
    Footer,
  },
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
      // console.log("text got num of " + (m + this.getReply.length) + " <br/>");

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
        // console.log("this is mail");
        if (this.$store.state.account == "wakeupsoon") meta = this.getZiqiMETA;
        else meta = this.getGuestMETA;
      } else {
        // console.log("this is post");
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
      this.pageNow = Math.ceil(this.line / 18);
      if(this.pageNow > this.pageInTotal)
        this.pageNow = this.pageInTotal;
      this.progress =
        "(" + Math.round((this.pageNow / this.pageInTotal) * 100) + "%)";
      this.progress = this.progress.padEnd(6);
    },
  },
};
</script>