export default {
  name: "MainMenu",
  props: ['bbsrow'],
  data: function () {
    return {
      phAccount: '',
      phPassword: '',
      inAccount: '',
      inPassword: ''
    }
  },
  created() {
    this.onChange();
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
      this.$bus.$emit('update-bbsrow', this.bbsrow);
    }
  }
};
