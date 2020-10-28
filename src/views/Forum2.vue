<template>
  <PCForum2 :id="this.id" />
</template>

<script>
import PCForum2 from "@/components/pc_forum2.vue";
export default {
  name: "Forum2",
  props: ["id"],
  components: {
    PCForum2,
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