<template>
  <PCFavorite />
</template>

<script>
import PCFavorite from "@/components/pc_favorite.vue";
export default {
  name: "Favorite",
  props: ["bbsrow"],
  components: {
    PCFavorite,
  },
  mounted() {
    this.onChange();
  },
  watch: {
    $route: "onChange",
  },
  methods: {
    onChange() {
      this.$store.commit("setRowIndex", 0);
    },
  },
};
</script>
