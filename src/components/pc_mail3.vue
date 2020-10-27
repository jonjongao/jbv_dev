<template>
  <div id="mainContainer">
    <pre><span class="q4 b7"> 作者 </span><span class="q7 b4 p_field">{{ getMETA.author }}</span><span class="q7 b0">  </span></pre>
    <pre><span class="q4 b7"> 標題 </span><span class="q7 b4 p_field">{{ getMETA.caption }}</span><span class="q7 b0">  </span></pre>
    <pre><span class="q4 b7"> 時間 </span><span class="q7 b4 p_field">{{ getMETA.time }}</span><span class="q7 b0">  </span></pre>
    <pre><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q6 b0">───────────────────────────────────────</span><span class="q7 b0">  </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="4"><div><span class="" data-type="bbsline" data-row="4"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span></pre>
    <div><p class="q7 b0 text_field" v-html="getText">{{ getText }}</p></div>
    <pre><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="7"><div><span class="" data-type="bbsline" data-row="7"><span><span class="q7 b0">--                                                                              </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="8"><div><span class="" data-type="bbsline" data-row="8"><span><span class="q2 b0">※ 發信站: 批踢踢實業坊(ptt.cc), 來自: 114.136.173.9 (臺灣)</span><span class="q7 b0">                     </span></span></span><div></div></div></span></pre>
    <span class="empty"></span>
    <span class="p_foot"><span class="q7 b4">  瀏覽 第 1/1 頁 (100%) </span><span class="q8 b7"> 目前顯示: 第 01~08 行</span><span class="q7 b7">      </span><span class="q1 b7">(y)</span><span class="q0 b7">回信 </span><span class="q1 b7">(h)</span><span class="q0 b7">說明 </span><span class="q1 b7">(←/q)</span><span class="q0 b7">離開 </span><span class="q7 b0"> </span></span>
  </div>
</template>

<script>
import u from "../assets/util";
import post from "../assets/post_pool.json";
export default {
  name: "PCMail3",
  props: ["type","id"],
  mounted: function () {
    this.$bus.$on("on-keyup", this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
  },
  computed: {
    getText: function(){
      return this.getMETA.text.replace(/\n|\r\n/g,"<br/>");
    },
    getMETA: function () {
      var meta = {};
      if(this.type == "mail")
      {
        console.log("this is mail");
        if (this.$store.state.account == "Chi") meta = this.getZiqiMETA;
        else meta = this.getGuestMETA;
      }
      else
      {
        console.log("this is post");
        // var db = this.$store.state.guestMails;
        var db = post;
        for (var i = 0; i < db.length; i++) if (db[i].id == this.id) meta = db[i];
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
  },
  watch: {
    // id: function (val) {
    //   console.log("update2->" + val);
    //   console.log("next=" + this.id);
    // },
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
    };
  },
  methods: {
    // getPointer: function (index) {
    //   if (index == this.$store.state.rowIndex) {
    //     if (index > 8) return this.select.padEnd(3);
    //     else return this.select.padEnd(4);
    //   } else {
    //     if (index > 8) return this.deselect.padEnd(4);
    //     else return this.deselect.padEnd(5);
    //   }
    // },
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
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          break;
      }
    },
  },
};
</script>