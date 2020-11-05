<template>
  <div id="mobileContainer" class="container">


    <Header p1="【看板列表】" />
    <div class="row my-5"></div>
    <div class="row">
      <div class="col-12 p-0">
        <!-- <div class="nav flex-column nav-pills"> -->
        <div v-for="(p, index) in getMETA" :key="index" class="row m-0">
          <div class="col-12 p-0">
            <div class="front bg-dark-0">
              <div class="content">
                <router-link :to="getURL(p)" class="row m-0">
                  <div class="col-2 p-0 pl-2">
                    <div class="col-12 p-0">
                      <span class="q9 b0 trend">{{ p.ext1 }}</span
                      ><span :class="getPop[index]">{{ p.hot }}</span>
                    </div>
                    <div class="col-12 p-0">
                      <span :class="getColor(p.type)">{{ p.type }}</span>
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
import post from "../assets/class3.json";
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MClass3",
  components: {
    Header,
    Footer,
  },
  computed: {
    getMETA: function () {
      return post;
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
    getURL: function (item) {
      if (item.id.includes("55"))
      {
        return {
          name: "Forum",
          params: { id: 0 },
        };
      }
      else
        return "/class3";
    },
    getColor: function (label) {
      if(label == "回憶" || label == "組務" || label == "手遊")
return "badge badge-warning";
      if(label == "觀封")
      return "badge badge-success";
      else
      return "badge badge-light";
    },
  },
};
</script>
