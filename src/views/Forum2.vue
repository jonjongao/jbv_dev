<template>
<PCForum2 :id="this.id" />
</template>

<script>
import PCForum2 from "@/components/pc_forum2.vue";
export default {
  name: "Forum2",
  props: ['id'],
  components:{
    PCForum2
  },
  data: function () {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  watch: {
  },
  methods: {
  }
};
</script>