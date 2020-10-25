<template>
  <PCC3P2 v-if="page == 1" />
  <PCC3P3 v-else-if="page == 2" />
  <PCC3P1 v-else />
</template>

<script>
import PCC3P1 from "@/components/pc_class3_page1.vue";
import PCC3P2 from "@/components/pc_class3_page2.vue";
import PCC3P3 from "@/components/pc_class3_page3.vue";
export default {
  name: "Class3",
  props: ["bbsrow"],
  components: {
    PCC3P1,
    PCC3P2,
    PCC3P3,
  },
  data: function () {
    return {
      page: 0,
    };
  },
  created() {
    console.log("create");
  },
  mounted() {
    this.onChange();
    this.$bus.$on("on-keyup", this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
    console.log("destroy");
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
    onKeyup: function (e) {
      if (this.$store.state.isMobile) return;
      //   if (e.which != 38 || e.which != 40) return;
      var i = this.$store.state.rowIndex;
      if (i >= 0 && i < 20) this.page = 0;
      else if (i >= 20 && i < 40) this.page = 1;
      else this.page = 2;

      switch (e.which) {
        case 37: // ! left
          this.$router.push({ name: "Class2" });
          break;
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          switch (this.$store.state.rowIndex) {
            case 54: // ! Truth
              this.$router.push({ name: "Forum2" });
              break;
          }
          break;
      }
    },
  },
};
</script>