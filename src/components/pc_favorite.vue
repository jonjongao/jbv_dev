<template>
  <div id="mainContainer">
    <pre><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【看板列表】                     </span><span class="q11 b4">批踢踢實業坊</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←][q]回上層 [→][r]閱讀 [↑↓]選擇 [PgUp][PgDn]翻頁 [c]新文章 [/]搜尋 [h]求助 </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">   編號   看  板       類別   中   文   敘   述               人氣 板   主     </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>

    <pre v-for="p in 20" :key="p">
        <span v-if="p-1 < getMETA.length"><span class="q7 b0 pointer">{{ isSelect(p-1) }}</span><span class="q7 b0 index">{{ p }}</span><span class="q9 b0 trend">{{ getMETA[p-1].trend }}</span><span class="q7 b0 name">{{ getMETA[p-1].name }}</span><span class="q7 b0 class">{{ getMETA[p-1].class }}</span><span class="q7 b0 caption">{{ getMETA[p-1].caption }}</span><span class="q7 b0 pop">{{ getMETA[p-1].pop }}</span><span class="q7 b0 manager">{{ getMETA[p-1].manager }}</span></span>
        <span v-else class="empty"></span>
    </pre>
    <pre><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q4 b6">  選擇看板  </span><span class="q0 b7">  </span><span class="q1 b7">(a)</span><span class="q0 b7">增加看板 </span><span class="q1 b7">(s)</span><span class="q0 b7">進入已知板名 </span><span class="q1 b7">(y)</span><span class="q0 b7">列出全部 </span><span class="q1 b7">(v/V)</span><span class="q0 b7">已讀/未讀           </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
  </div>
</template>

<script>
import u from "../assets/util";
export default {
  name: "PCFavorite",
  mounted: function(){
      this.$store.commit('setRowCount', this.getMETA.length);
  },
  computed: {
    getMETA: function () {
      var db = this.$store.state.listFavorite;
      return db;
    },
  },
  data: function () {
    return {
    //   select: "●   ",
    //   deselect: "     ",
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
    isSelect: function(index){
        if(index == this.$store.state.rowIndex)
            return '●';
        else
            return '';
    },
    getColor: function () {
      var max = 16;
      var min = 1;
      var i = Math.floor(Math.random() * (max - min + 1) + min);
      return "q" + i + " b0";
    },
    getIndex: function (index) {
      var s = (index + 1).toString().padStart(2);
      return s;
    },
    getTrend: function (trend) {
      // console.log("trend="+trend);
      // if(trend == '' || trend == null)
      //     return '   ';
      // else
      //     return trend.padStart(2);
      var s = trend.length;
      var a = u.getSpaceCount(trend);
      var length = 3 - a;
      return trend.padStart(s + length);
    },
    getName: function (name) {
      var s = name.padEnd(8);
      return s;
    },
    getClass: function (text) {
      var s = text.length;
      var a = u.getSpaceCount(text);
      var length = 5 - a;
      return text.padEnd(s + length);
    },
    getCaption: function (caption, pop, manager) {
      var s = caption.length;
      var a = u.getSpaceCount(caption);
      var text1 = caption.padEnd(s + (36 - a));
      //   var text2 = pop.toString().padStart(2) + " ";
      //   s = manager.length;
      //   a = u.getSpaceCount(manager);
      //   var text3 = manager.padEnd(s + (13 - a));
      return text1;
    },
  },
};
</script>