<template>
  <PCLogin account="phAccount" password="phPassword"/>
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
      inAccount: '',
      inPassword: ''
    }
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
    onAccountField(value) {
      this.$refs.pwfield.focus();
    },
    onPasswordField(value) {
      this.$bus.$emit('try-login', [this.inAccount, this.inPassword]);
    },
    onChange() {
      // this.$refs.acfield.focus();
      this.$store.commit('setRowIndex', 0);
      this.$store.commit('setRowCount', this.bbsrow);
    }
  }
};

</script>

<style scoped>
span input {
  height: 30px;
}
</style>