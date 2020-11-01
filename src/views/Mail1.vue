<template>
  <div v-if="this.$store.state.isMobile">
    <MMail />
  </div>
  <div v-else>
    <PCMail />
  </div>
</template>

<script>
import PCMail from "@/components/pc_mail1.vue";
import MMail from "@/components/m_mail1.vue";
export default {
  name: "Mail1",
  props: ["bbsrow"],
  components: {
    PCMail,
    MMail,
  },
  data: function () {
    return {};
  },
  created() {},
  mounted() {
    this.onChange();
    this.$bus.$on("on-keyup", this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
  },
  watch: {
    // call again the method if the route changes
    $route: "onChange",
  },
  methods: {
    onChange() {
      console.log("reset rowIndex=0");
      this.$store.commit("setRowIndex", 0);
      this.$store.commit("setRowCount", this.bbsrow);
    },
    onKeyup: function (e) {
      if (this.$store.state.isMobile) return;

      switch (e.which) {
        case 37: // ! left
          this.$router.push({ name: "MainMenu" });
          break;
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          switch (this.$store.state.rowIndex) {
            case 0: // ! 我的信箱
              this.$router.push({ name: "Mail2" });
              break;
          }
          break;
      }
    },
  },
};
</script>