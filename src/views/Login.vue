<template>
  <PCLogin :account="phAccount" :password="phPassword"/>
</template>

<script>
import PCLogin from "@/components/pc_login.vue";
import MLogin from "@/components/m_login.vue";
export default {
  name: "Login",
  props: ['bbsrow'],
  components:{
    PCLogin,
    MLogin
  },
  data: function () {
    return {
      phAccount: '',
      phPassword: '密碼',
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

<style scoped>
/* span input {
  height: 30px;
} */
</style>