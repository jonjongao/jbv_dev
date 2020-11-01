<template>
  <div v-if="this.$store.state.isMobile">
    <MLogin :account="phAccount" :password="phPassword" />
  </div>
  <div v-else>
    <PCLogin :account="phAccount" :password="phPassword" />
  </div>
</template>

<script>
import PCLogin from "@/components/pc_login.vue";
import MLogin from "@/components/m_login.vue";
export default {
  name: "Login",
  props: ["bbsrow"],
  components: {
    PCLogin,
    MLogin,
  },
  mounted: function(){
    this.$bus.$emit('resize',true);
  },
  data: function () {
    return {
      phAccount: "",
      phPassword: "密碼",
    };
  },
};
</script>