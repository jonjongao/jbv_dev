<template>
<div v-if="this.$store.state.isMobile">
    <MClass2 />
  </div>
  <div v-else>
    <PCClass2 />
  </div>
</template>

<script>
import PCClass2 from "@/components/pc_class2.vue";
import MClass2 from "@/components/m_class2.vue";
export default {
  name: "Class2",
  props: ['bbsrow'],
  components:{
      PCClass2,
      MClass2
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
    this.$bus.$emit('resize',true);
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