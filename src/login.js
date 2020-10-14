export default {
  name: "Login",
  props: ['bbsrow'],
  data: function () {
    return {
      phAccount: '',
      phPassword: '密碼',
      inAccount: '',
      inPassword: '',
      rowIndex: 0
    }
  },
  created() {
  },
  mounted() {
    this.onChange();
    this.$bus.$on('on-keyup', this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    this.$bus.$off('on-keyup', this.onKeyup);
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
      console.log("reset rowIndex=0");
      this.rowIndex = 0;
    }
  }
};
