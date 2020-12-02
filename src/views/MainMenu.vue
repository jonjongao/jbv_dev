<template>
  <div v-if="this.$store.state.isMobile">
    <MMenu />
  </div>
  <div v-else>
    <PCMenu />
  </div>
</template>

<script>
import PCMenu from "@/components/pc_menu.vue";
import MMenu from "@/components/m_menu.vue";
export default {
  name: "MainMenu",
  props: ["bbsrow"],
  components: {
    PCMenu,
    MMenu,
  },
  computed: {
    getAccountLabel: function () {
      /**
       * * Original 'Charmon' length = 7
       * * Rest of space length = 9, so is 16 in total
       */
      var ac = this.$store.state.account;
      var t = ac == null || ac == "" ? "Guest" : ac;
      t = t.padEnd(14);
      return t;
    },
    getTimeLabel: function () {
      /**
       * * Original is '[9/30 星期三 0:29]' length = 15
       */
      var now = new Date();
      var now_local = now.toLocaleDateString();
      var mon = now_local.split("/")[0];
      var day = now_local.split("/")[1];
      var day_list = ["日", "一", "二", "三", "四", "五", "六"];
      var week = day_list[now.getDay()];
      var hour = now.getHours();
      var min = now.getMinutes();
      var t =
        "[" + mon + "/" + day + " 星期" + week + " " + hour + ":" + min + "]";
      t = t.padStart(15);
      return t;
    },
  },
  data: function () {
    return {};
  },
  created() {
    this.$store.commit("setAccount", this.getAccountLabel);
    this.$store.commit("setDate", this.getTimeLabel);
  },
  mounted() {
    this.onChange();
  },
  beforeDestroy() {
  },
  watch: {
    // call again the method if the route changes
    $route: "onChange",
  },
  methods: {
    onChange() {
      this.$store.commit("setRowIndex", 0);
      this.$store.commit("setRowCount", this.bbsrow);
    },
  },
};
</script>