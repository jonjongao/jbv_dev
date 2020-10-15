export default {
  name: "MainMenu",
  props: ['bbsrow'],
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
