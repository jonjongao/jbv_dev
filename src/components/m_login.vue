<template>
  <div id="mobileContainer" class="container">
    <div class="row text-center my-5">
      <div class="col-12">
        <img
          src="../assets/mobile/mobile_gwh-logo_x2.gif"
          class="img-fluid"
          alt="Logo"
        />
      </div>
    </div>

    <ul class="col-12 my-auto bg-dark rounded">
      <li class="nav-link text-white text-center">
        <h1>金鸞BBS佈告欄</h1>
        <div>請輸入代號，或以 guest 參觀</div>
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
      isGuest: true,
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
      if (this.isGuest) {
        this.onPasswordReturn();
      } else {
        this.$nextTick(function () {
          this.$refs.pwfield.focus();
        });
      }
    },
    onPasswordReturn() {
      if (
        this.inAccount.toLowerCase() == "guest" ||
        (this.inAccount == "wakeupsoon" && this.inPassword == "chi")
      ) {
        if (this.isGuest) {
          this.$gtag.event("login", {
            event_category: "玩家登入",
            event_label: "guest",
            value: 0,
          });
        } else {
          this.$gtag.event("login", {
            event_category: "玩家登入",
            event_label: "wakeupsoon",
            value: 0,
          });
        }
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
