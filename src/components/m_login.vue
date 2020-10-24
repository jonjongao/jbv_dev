<template>
  <div id="mobileContainer" class="container">
    <div class="col-sm-12">
      <img
        src="../assets/mobile/mobile_gwh-logo_x2.png"
        class="img-fluid"
        alt="Logo"
      />
    </div>
    <div class="row h-100">
      <div class="col-sm-12 my-auto">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h1>登入翠華BBS</h1>
          </li>
          <li class="list-group-item">
            <div class="col-sm-10 field-head">
              帳號
            </div>
            <div class="col-sm-10">
              <input
                class="col-sm-10"
                type="text"
                v-on:keyup.enter="onAccountField(inAccount)"
                v-model="inAccount"
                :placeholder="phAccount"
              />
            </div>
          </li>
          <li class="list-group-item">
            <div class="col-sm-10">
              <input
                class="col-sm-10"
                type="password"
                ref="pwfield"
                v-on:keyup.enter="onPasswordField(inPassword)"
                v-model="inPassword"
                :placeholder="phPassword"
              />
            </div>
          </li>
          <li class="list-group-item">
            <button class="btn btn-dark" v-on:click="onPasswordField">
              登入
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MLogin",
  props: ["phAccount", "phPassword"],
  computed: {},
  data: function() {
    return {
      inAccount: "",
      inPassword: ""
    };
  },
  methods: {
    onAccountField(value) {
      this.$refs.pwfield.focus();
    },
    onPasswordField(value) {
      this.$bus.$emit("try-login", [this.inAccount, this.inPassword]);
    }
  }
};
</script>
