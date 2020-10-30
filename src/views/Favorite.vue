<template>
  <div v-if="this.$store.state.isMobile">
    <MFavorite />
  </div>
  <div v-else>
    <PCFavorite />
  </div>
</template>

<script>
import PCFavorite from "@/components/pc_favorite.vue";
import MFavorite from "@/components/m_favorite.vue";
export default {
  name: "Favorite",
  props: ["bbsrow"],
  components: {
    PCFavorite,
    MFavorite
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
