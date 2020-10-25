<template>
<div id="mainContainer"><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q4 b7"> 作者 </span><span class="q7 b4"> Charmon (小安)                                                         </span><span class="q7 b0">  </span></span></span><div></div></div></span><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q4 b7"> 標題 </span><span class="q7 b4"> test                                                                   </span><span class="q7 b0">  </span></span></span><div></div></div></span><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q4 b7"> 時間 </span><span class="q7 b4"> Fri Aug  7 19:39:08 2020                                               </span><span class="q7 b0">  </span></span></span><div></div></div></span><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q6 b0">───────────────────────────────────────</span><span class="q7 b0">  </span></span></span><div></div></div></span><span type="bbsrow" srow="4"><div><span class="" data-type="bbsline" data-row="4"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="5"><div><span class="" data-type="bbsline" data-row="5"><span><span class="q7 b0">test                                                                            </span></span></span><div></div></div></span><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="7"><div><span class="" data-type="bbsline" data-row="7"><span><span class="q7 b0">--                                                                              </span></span></span><div></div></div></span><span type="bbsrow" srow="8"><div><span class="" data-type="bbsline" data-row="8"><span><span class="q2 b0">※ 發信站: 批踢踢實業坊(ptt.cc), 來自: 114.136.173.9 (臺灣)</span><span class="q7 b0">                     </span></span></span><div></div></div></span><span type="bbsrow" srow="9"><div><span class="" data-type="bbsline" data-row="9"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="10"><div><span class="" data-type="bbsline" data-row="10"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="11"><div><span class="" data-type="bbsline" data-row="11"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="12"><div><span class="" data-type="bbsline" data-row="12"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="13"><div><span class="" data-type="bbsline" data-row="13"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="14"><div><span class="" data-type="bbsline" data-row="14"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="15"><div><span class="" data-type="bbsline" data-row="15"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="16"><div><span class="" data-type="bbsline" data-row="16"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="17"><div><span class="" data-type="bbsline" data-row="17"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="18"><div><span class="" data-type="bbsline" data-row="18"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="19"><div><span class="" data-type="bbsline" data-row="19"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="20"><div><span class="" data-type="bbsline" data-row="20"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="21"><div><span class="" data-type="bbsline" data-row="21"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="22"><div><span class="" data-type="bbsline" data-row="22"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q7 b4">  瀏覽 第 1/1 頁 (100%) </span><span class="q8 b7"> 目前顯示: 第 01~08 行</span><span class="q7 b7">      </span><span class="q1 b7">(y)</span><span class="q0 b7">回信 </span><span class="q1 b7">(h)</span><span class="q0 b7">說明 </span><span class="q1 b7">(←/q)</span><span class="q0 b7">離開 </span><span class="q7 b0"> </span></span></span><div></div></div></span></div>
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
      var db = this.$store.state.db1;
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