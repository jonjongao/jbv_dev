<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item" v-for="p in 20" :key="p">
          <a href="#">
        <span v-if="p-1 < getMETA.length"><span class="q7 b0 index">{{ p }}</span><span class="q9 b0 trend">{{ getMETA[p-1].trend }}</span><span class="q14 b0 name">{{ getMETA[p-1].name }}</span><span :class="getColor[p-1]">{{ getMETA[p-1].class }}</span><span class="q7 b0 caption">{{ getMETA[p-1].caption }}</span><span :class="getPop[p-1]">{{ getMETA[p-1].pop }}</span><span class="q7 b0 manager">{{ getMETA[p-1].manager }}</span></span>
        <span v-else class="col-12"></span>
        </a>
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
export default {
  name: "MFavorite",
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
  data: function () {
    return {};
  },
  methods: {
    randomColor: function () {
      var max = 15;
      var min = 3;
      var i = Math.floor(Math.random() * (max - min + 1) + min);
      return "q" + i + " b0";
    },
  },
};
</script>
