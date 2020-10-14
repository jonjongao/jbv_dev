<template>
  <!--

-->
  <div id="mobileContainer" v-if="this.$store.state.isMobile">
    <div class="row h-100">
      <div class="col-sm-11 my-auto">
        <label for="exampleInputPassword1">帳號</label>
        <div class="form-group">
          <input
            type="text"
            v-on:keyup.enter="onAccountField(inAccount)"
            v-model="inAccount"
            :placeholder="phAccount"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            ref="pwfield"
            v-on:keyup.enter="onPasswordField(inPassword)"
            v-model="inPassword"
            :placeholder="phPassword"
          />
        </div>
        <button class="btn btn-primary" v-on:click="onPasswordField">
          登入
        </button>
      </div>
    </div>
  </div>
</template>
