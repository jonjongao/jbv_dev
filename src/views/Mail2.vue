<template>
    <PCMail2/>
</template>

<script>
import PCMail2 from "@/components/pc_mail2.vue";
export default {
  name: "Mail2",
  props: ["bbsrow"],
  components: {
    PCMail2
  },
  data: function () {
    return {
      
    };
  },
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
    $route: "onChange",
  },
  methods: {
    onChange() {
      this.$store.commit("setRowIndex", 0);
      this.$store.commit("setRowCount", this.bbsrow);
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