<template>
  <div v-if="this.$store.state.isMobile">
    <MGoodbye />
  </div>
  <div v-else>
    <PCGoodbye />
  </div>
</template>

<script>
import PCGoodbye from "@/components/pc_goodbye.vue";
import MGoodbye from "@/components/m_goodbye.vue";
export default {
  name: "Goodbye",
  props: ['bbsrow'],
  components:{
    PCGoodbye,
    MGoodbye
  }
};
</script>