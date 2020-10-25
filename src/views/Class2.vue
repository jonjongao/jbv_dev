<template>
    <PCClass2/>
</template>

<script>
import PCClass2 from "@/components/pc_class2.vue";
export default {
  name: "Class2",
  props: ['bbsrow'],
  components:{
      PCClass2
  },
  data: function () {
    return {}
  },
  created() {
    console.log("create");
  },
  mounted() {
    this.onChange();
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("destroy");
  },
  watch: {
    // call again the method if the route changes
    '$route': 'onChange'
  },
  methods: {
    onChange() {
      this.$store.commit('setRowIndex', 0);
      this.$store.commit('setRowCount', this.bbsrow);
    }
  }
};
</script>