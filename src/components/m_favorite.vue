<template>
  <div id="mobileContainer" class="container">
    <Header p1="【看板列表】" />
    <div class="row my-5"></div>
    <div class="row">
      <div class="col-12 p-0">
        <!-- <div class="nav flex-column nav-pills"> -->
        <div v-for="p in getMETA" :key="p.id" class="row m-0">
          <div class="col-12 p-0">
            <div class="front bg-dark-0">
              <div class="content">
                <router-link :to="'/f/' + p.id" class="row m-0">
                  <div class="col-2 p-0 pl-2">
                    <div class="col-12 p-0">
                      <span class="q9 b0 trend">{{ p.trend }}</span
                      ><span :class="getPop[p.id - 1]">{{ p.pop }}</span>
                    </div>
                    <div class="col-12 p-0">
                      <span :class="getColor[p.id - 1]">{{ p.class }}</span>
                    </div>
                  </div>
                  <div class="col-10 p-0 pr-2">
                    <div class="col-12 p-0 q15 line">
                      <span class="q14 b0 name">{{ p.name }}</span>
                      <span class="q7 b0 caption">{{ p.caption }}</span>
                    </div>
                    <div class="col-12 p-0 q8">
                      <span class="q7 b0 manager">{{ p.manager }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->
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
      // for (var x = 0; x < this.getMETA.length; x++) {
      //   cl.push(this.randomColor() + " class");
      // }
      for (var x = 0; x < this.getMETA.length; x++) {
        cl.push(this.randomColor());
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
    return {
      style:["badge badge-primary","badge badge-secondary","badge badge-success","badge badge-danger","badge badge-warning","badge badge-info","badge badge-light","badge badge-dark"]
    };
  },
  methods: {
    randomColor: function () {
      var max = this.style.length;
      var min = 0;
      var i = Math.floor(Math.random() * (max - min + 1) + min);
      return this.style[i];
    },
  },
};
</script>
