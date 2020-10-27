<template>
  <div id="mainContainer">
    <pre><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【郵件選單】                     </span><span class="q11 b4">批踢踢實業坊</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←]離開[↑↓]選擇[→]閱讀信件 [O]站外信:開 [h]求助 [~]資源回收筒               </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">  編號   日 期 作 者          信  件  標  題                 </span><span class="q2 b7">{{ getCapacity }}</span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre v-for="p in 20" :key="p">
        <span v-if="p-1 < getMETA.length"><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0"><span class="pointer">{{ isSelect(p-1) }}</span><span class="id">{{ getMETA[p-1].id }}</span><span class="reply">{{ getMETA[p-1].reply }}</span><span class="date">{{ getMETA[p-1].date }}</span><span class="author">{{ getMETA[p-1].author }}</span><span class="caption2">{{ getMETA[p-1].caption }}</span></span></span></span><div></div></div></span></span>
        <span v-else class="empty"></span>
    </pre>
    <pre><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6"> 鴻雁往返 </span><span class="q0 b7"> </span><span class="q1 b7">(R/y)</span><span class="q0 b7">回信 </span><span class="q1 b7">(x)</span><span class="q0 b7">站內轉寄 </span><span class="q1 b7">(d/D)</span><span class="q0 b7">刪信 </span><span class="q1 b7">(^P)</span><span class="q0 b7">寄發新信             </span><span class="q1 b7">(←/q)</span><span class="q0 b7">離開 </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
  </div>
</template>

<script>
export default {
  name: "PCMail2",
  props: ["login"],
  mounted: function () {
    this.$store.commit("setRowCount", this.getMETA.length);
    this.$bus.$on("on-keyup", this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
  },
  computed: {
    getCapacity: function () {
      return ("(容量:" + this.getGuestMETA.length + "/1500篇) ").padStart(15);
    },
    getMETA: function () {
      if (this.$store.state.account == "Chi") return this.getZiqiMETA;
      else return this.getGuestMETA;
    },
    getGuestMETA: function () {
      var db = this.$store.state.guestMails;
      return db;
    },
    getZiqiMETA: function () {
      var db = this.$store.state.ziqiMails;
      return db;
    },
  },
  data: function () {
    return {
      select: "●",
      deselect: "  ",
    };
  },
  methods: {
    isSelect: function (index) {
      if (index == this.$store.state.rowIndex) return "●";
      else return "";
    },
    getPointer: function (index) {
      if (index == this.$store.state.rowIndex) {
        if (index > 8) return this.select;
        else return this.select + " ";
      } else {
        if (index > 8) return this.deselect;
        else return " " + this.deselect;
      }
    },
    onKeyup(e) {
      switch (e.which) {
        case 37: // ! left
          // this.$router.push({ name: "Mail1" });
          this.$router.go(-1);
          break;
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          this.$router.push({
            name: "Post",
            params: { type: "mail", id: this.$store.state.rowIndex + 1 },
          });
          break;
      }
    },
  },
};
</script>