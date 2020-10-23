<template>
    <PCMenu/>
</template>

<script>
import PCMenu from "@/components/pc_menu.vue";
export default {
  name: "MainMenu",
  props: ['bbsrow'],
  components:{
      PCMenu
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