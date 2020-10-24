<template>
  <PCFavorite />
</template>

<script>
import PCFavorite from "@/components/pc_favorite.vue";
export default {
  name: "Favorite",
  props: ["bbsrow"],
  components: {
    PCFavorite
  },
  data: function() {
    return {
    //   rowIndex: 0
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
    '$route': "onChange"
  },
  methods: {
    onChange() {
      console.log("reset rowIndex=0");
      this.$store.commit('setRowIndex', 0);
    //   this.$store.commit('setRowCount', this.bbsrow);
    //   this.rowIndex = 0;
    },
    onKeyup: function(e) {
    //   switch (e.which) {
    //     case 38:
    //       this.rowIndex--;
    //       if (this.rowIndex < 0) this.rowIndex = this.bbsrow - 1;
    //       break;
    //     case 40:
    //       this.rowIndex++;
    //       if (this.rowIndex > this.bbsrow - 1) this.rowIndex = 0;
    //       break;
    //     case 13:
    //       console.log("enter index:" + this.rowIndex);
    //       console.log(this.$route.name);
    //       break;
    //   }
      console.log("rowIndex=" + this.rowIndex);
    }
  }
}
</script>
