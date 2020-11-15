<template>
  <div id="mobileContainer" class="container">
    <Header />
    <div class="row my-5"></div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item" v-for="p in getMETA" :key="p.id">
        <router-link class="nav-link text-left" :to="getURL(p)"
          >{{ p.id }} {{ p.caption }}</router-link
        >
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MMail2",
  props: ["login"],
  components: {
    Header,
    Footer,
  },
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
      if (this.$store.state.account == "wakeupsoon") return this.getZiqiMETA;
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
    getURL: function (item) {
      return {
        name: "Post",
        params: { type: "mail", id: item.id },
      };
    },
  },
};
</script>