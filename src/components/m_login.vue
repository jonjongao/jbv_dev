<template>
  <div id="mobileContainer" class="container">
    <div class="col-sm-12 my-5">
      <img
        src="../assets/mobile/mobile_gwh-logo_x2.png"
        class="img-fluid"
        alt="Logo"
      />
    </div>

    <ul class="col-12 my-auto bg-dark rounded">
      <li class="nav-link text-white text-center">
        <h1>登入翠華BBS</h1>
      </li>
      <li class="nav-link text-white">
        <div class="col-12 field-head px-0">帳號</div>

        <input
          class="col-12"
          type="text"
          ref="acfield"
          v-on:keyup="onAccountField(inAccount)"
          v-on:keyup.enter="onAccountReturn"
          v-model="inAccount"
          :placeholder="phAccount"
        />
      </li>
      <li class="nav-link text-white">
        <input
          v-if="!isError"
          v-bind:style="isGuest ? 'visibility:hidden' : 'visibility:visible'"
          class="col-12"
          type="password"
          ref="pwfield"
          v-on:keyup.enter="onPasswordReturn"
          v-model="inPassword"
          :placeholder="phPassword"
        />

        <div v-else>
          <div class="col-12 px-0">{{ errorText }}</div>
        </div>
      </li>
      <li class="nav-link text-white text-center">
        <button class="btn btn-dark" v-on:click="onPasswordReturn">
          {{ buttonLabel }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MLogin",
  props: ["phAccount", "phPassword"],
  mounted: function () {
    this.$refs.acfield.focus();
  },
  data: function () {
    return {
      errorText: "密碼不對或無此帳號。請檢查大小寫及有無輸入錯誤。",
      inAccount: "",
      inPassword: "",
      isGuest: false,
      isError: false,
    };
  },
  computed: {
    buttonLabel: function () {
      if (this.isGuest) return "訪客登入";
      else return "登入";
    },
  },
  methods: {
    onAccountField(value) {
      if (value == null || value == "") return;
      if (value.toLowerCase() == "guest") {
        this.isGuest = true;
        this.isError = false;
      } else {
        this.isGuest = false;
        this.isError = false;
      }
    },
    onAccountReturn() {
      this.$nextTick(function () {
        this.$refs.pwfield.focus();
      });
    },
    onPasswordReturn() {
      if (
        this.isGuest ||
        (this.inAccount == "Chi" && this.inPassword == "wakeupsoon")
      ) {
        this.$store.commit("setUser", [this.inAccount, this.inPassword]);
        this.$router.push({ name: "MainMenu" });
      } else {
        this.isError = true;
        this.isGuest = false;
        this.inAccount = this.phAccount;
        this.inPassword = this.phPassword;
        this.$refs.acfield.focus();
      }
    },
  },
};
</script>
