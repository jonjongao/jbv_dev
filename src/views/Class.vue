<template>
  <div v-if="this.$store.state.isMobile">
    <MClass1 />
  </div>
  <div v-else>
    <PCClass1 />
  </div>
</template>

<script>
import PCClass1 from "@/components/pc_class1.vue";
import MClass1 from "@/components/m_class1.vue";
export default {
  name: "Class",
  props: ["bbsrow"],
  components: {
    PCClass1,
    MClass1
  },
  data: function () {
    return {};
  },
  created() {},
  mounted() {
    this.onChange();
    this.$bus.$emit('resize',true);
  },
  beforeDestroy() {},
  watch: {
    // call again the method if the route changes
    $route: "onChange",
  },
  methods: {
    onChange() {
      // console.log("reset rowIndex=0");
      this.$store.commit("setRowIndex", 0);
      this.$store.commit("setRowCount", this.bbsrow);
    },
  },
};
</script>