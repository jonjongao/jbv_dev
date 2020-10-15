export default {
  name: "Class",
  props: ['bbsrow'],
  data: function () {
    return {}
  },
  created() {},
  mounted() {
    this.onChange();
  },
  beforeDestroy() {},
  watch: {
    // call again the method if the route changes
    '$route': 'onChange'
  },
  methods: {
    onChange() {
      console.log("reset rowIndex=0");
      this.$store.commit('setRowIndex', 0);
      this.$store.commit('setRowCount', this.bbsrow);
    }
  }
};
