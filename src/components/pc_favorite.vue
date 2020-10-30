<template>
  <div id="mainContainer">
    <pre><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【看板列表】                     </span><span class="q11 b4">批踢踢實業坊</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←][q]回上層 [→][r]閱讀 [↑↓]選擇 [PgUp][PgDn]翻頁 [c]新文章 [/]搜尋 [h]求助 </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">   編號   看  板       類別   中   文   敘   述               人氣 板   主     </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>

    <pre v-for="p in 20" :key="p">
        <span v-if="p-1 < getMETA.length"><span class="q7 b0 pointer">{{ isSelect(p-1) }}</span><span class="q7 b0 index">{{ p }}</span><span class="q9 b0 trend">{{ getMETA[p-1].trend }}</span><span class="q14 b0 name">{{ getMETA[p-1].name }}</span><span :class="getColor[p-1]">{{ getMETA[p-1].class }}</span><span class="q7 b0 caption">{{ getMETA[p-1].caption }}</span><span :class="getPop[p-1]">{{ getMETA[p-1].pop }}</span><span class="q7 b0 manager">{{ getMETA[p-1].manager }}</span></span>
        <span v-else class="empty"></span>
    </pre>
    <pre><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q4 b6">  選擇看板  </span><span class="q0 b7">  </span><span class="q1 b7">(a)</span><span class="q0 b7">增加看板 </span><span class="q1 b7">(s)</span><span class="q0 b7">進入已知板名 </span><span class="q1 b7">(y)</span><span class="q0 b7">列出全部 </span><span class="q1 b7">(v/V)</span><span class="q0 b7">已讀/未讀           </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
  </div>
</template>

<script>
import u from "../assets/util";
export default {
  name: "PCFavorite",
  mounted: function () {
    this.$store.commit("setRowCount", this.getMETA.length);
    this.$bus.$on("on-keyup", this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
  },
  computed: {
    getMETA: function () {
      var db = this.$store.state.listFavorite;
      return db;
    },
    getColor: function () {
      var cl = [];
      for (var x = 0; x < this.getMETA.length; x++) {
        cl.push(this.randomColor() + " class");
      }
      return cl;
    },
    getPop: function () {
      var p = [];
      for (var x = 0; x < this.getMETA.length; x++) {
        var val = "q7 b0 pop";
        if (this.getMETA[x].pop >= 10) val = "q11 b0 pop";
        else if (this.getMETA[x].pop >= 100) val = "q9 b0 pop";
        p.push(val);
      }
      return p;
    },
  },
  methods: {
    isSelect: function (index) {
      if (index == this.$store.state.rowIndex) return "●";
      else return "";
    },
    randomColor: function () {
      var max = 15;
      var min = 3;
      var i = Math.floor(Math.random() * (max - min + 1) + min);
      return "q" + i + " b0";
    },
    onKeyup(e) {
      switch (e.which) {
        case 37: // ! left
          // this.$router.push({ name: "MainMenu" });
          this.$router.go(-1);
          break;
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          var to = this.getMETA[this.$store.state.rowIndex].id;
          if (to == null || to == "") {
            console.log("can't find target");
            return;
          }
          to = parseInt(to);
          switch (to) {
            case 1:
            case 2:
              this.$router.push({
                name: "Forum",
                params: { id: to },
              });
              this.$store.commit("setRowIndex", 0);
              break;
            default:
              break;
          }
      }
    },
  },
};
</script>