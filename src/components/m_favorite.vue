<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <Header />
    <div class="row my-5"></div>
    <div class="row">
      <div class="col-12">
        <div class="nav flex-column nav-pills">
          <router-link
            v-for="p in getMETA"
            :key="p.id"
            class="my-1 nav-link line bg-dark"
            :to="'/f/' + p.id"
            ><span class="q9 b0 trend">{{ p.trend }}</span
            ><span class="q14 b0 name">{{ p.name }}</span
            ><span :class="getColor[p.id - 1]">{{ p.class }}</span
            ><span class="q7 b0 caption">{{ p.caption }}</span
            ><span :class="getPop[p.id - 1]">{{ p.pop }}</span
            ><span class="q7 b0 manager">{{ p.manager }}</span></router-link
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import u from "../assets/util";
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MFavorite",
  components: {
    Header,
    Footer,
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
