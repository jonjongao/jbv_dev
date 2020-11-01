<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
        <li class="nav-item" v-for="p in getMETA" :key="p.id">
            <a class="nav-link text-left" href="#">{{ p.id }} {{ p.caption }}</a>
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
    <!-- <pre v-for="p in 20" :key="p">
        <span v-if="p-1 < getMETA.length"><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0"><span class="pointer">{{ isSelect(p-1) }}</span><span class="id">{{ getMETA[p-1].id }}</span><span class="reply">{{ getMETA[p-1].reply }}</span><span class="date">{{ getMETA[p-1].date }}</span><span class="author">{{ getMETA[p-1].author }}</span><span class="caption2">{{ getMETA[p-1].caption }}</span></span></span></span><div></div></div></span></span>
        <span v-else class="empty"></span>
    </pre> -->

</template>

<script>
export default {
  name: "MMail2",
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