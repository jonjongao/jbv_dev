<template>
  <div v-if="this.$store.state.isMobile">
    <MMail3 :type="this.type" :id="this.id" />
  </div>
  <div v-else>
    <PCMail3 :type="this.type" :id="this.id" />
  </div>
</template>

<script>
import PCMail3 from "@/components/pc_mail3.vue";
import MMail3 from "@/components/m_mail3.vue";
export default {
  name: "Mail3",
  props: ["type","id"],
  components: {
    PCMail3,
    MMail3
  },
  data: function () {
    return {
    };
  },
  computed: {},
  created() {
    console.log("create");
  },
  mounted() {
    this.onChange();
    // this.$bus.$on("on-keyup", this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    // this.$bus.$off("on-keyup", this.onKeyup);
    console.log("destroy");
  },
  watch: {
    // call again the method if the route changes
    $route: "onChange"
  },
  methods: {
    onChange() {
      // this.$store.commit("setRowIndex", 0);
      // this.$store.commit("setRowCount", this.bbsrow);
    },
    onKeyup: function (e) {
      //   var i = this.$store.state.rowIndex;
      //   if (i >= 0 && i < 20) this.page = 0;
      //   else if (i >= 20 && i < 40) this.page = 1;
      //   else this.page = 2;
    },
  },
};
</script>