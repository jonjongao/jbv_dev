<template>
  <PCLogin :account="phAccount" :password="phPassword" />
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
  data: function () {
    return {
      phAccount: "",
      phPassword: "密碼",
    };
  },
};
</script>