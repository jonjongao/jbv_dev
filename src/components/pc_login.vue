<template>
  <div id="mainContainer">
    <div class="row text-center my-5">
      <div class="col-12">
        <img
          src="../assets/intro.jpg"
          class="img-fluid"
          alt="Logo"
        />
      </div>
    </div>
    <pre>
    <span class="q7 b0">請輸入代號，或以 guest 參觀: </span><input type="text" ref="acfield" v-on:keyup.enter="onAccountField(inAccount)" v-model="inAccount" :placeholder="phAccount">
</pre>
    <pre
      v-if="!isError"
      v-bind:style="isGuest ? 'visibility:hidden' : 'visibility:visible'"
    >
    <span class="q7 b0">請輸入您的密碼:</span><input type="text" ref="pwfield" v-on:keyup.enter="onPasswordField(inPassword)" v-model="inPassword" :placeholder="phPassword" class="pw">
</pre>
    <pre v-else>
  <span class="q7 b0 pw">{{ errorText }}</span>
</pre>
    <pre>
    <span type="bbsrow" srow="22"><div><span class="" data-type="bbsline" data-row="22"><span><span class="q7 b0"> </span><span class="q15 b0">※本站目前僅開放 ***@ntu.edu.tw 註冊帳號。</span><span class="q7 b0">                                     </span></span></span><div></div></div></span>
</pre>
    <pre>
    <span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span>
</pre>
  </div>
</template>

<script>
export default {
  name: "PCLogin",
  props: ["phAccount", "phPassword"],
  computed: {},
  created: function () {
    this.$store.commit("setUser", ["", ""]); // ! 重設帳密
  },
  mounted() {
    this.$refs.acfield.focus();
    this.$bus.$on("on-keyup", this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
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
  methods: {
    onAccountField(value) {
      if (value == null || value == "") return;
      if (value.toLowerCase() == "guest") {
        this.$store.commit("setUser", [this.inAccount, this.inPassword]);
        this.$router.push({ name: "MainMenu" });
      } else {
        this.isGuest = false;
        this.isError = false;
        this.$nextTick(function () {
          this.$refs.pwfield.focus();
        });
      }
    },
    onKeyup(e) {
      switch (e.which) {
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
          if (this.isGuest == false) {
            if (this.inAccount == "wakeupsoon" && this.inPassword == "chi") {
              this.$store.commit("setUser", [this.inAccount, this.inPassword]);
              this.$router.push({ name: "MainMenu" });
            } else {
              this.isError = true;
              this.inAccount = this.phAccount;
              this.inPassword = this.phPassword;
              this.isGuest = true;
              this.$refs.acfield.focus();
            }
          }
          break;
      }
    },
  },
};
</script>