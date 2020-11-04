<template>
  <div id="mobileContainer" class="container">
    <div class="col-sm-12 my-5">
      <img
        src="../assets/mobile/mobile_gwh-logo_x2.png"
        class="img-fluid"
        alt="Logo"
      />
    </div>
    <ul class="col-12 my-3 bg-dark rounded">
      <li class="nav-link text-white text-center">
        <span>特別感謝本站最佳主角</span>
      </li>
      <li class="nav-link text-white text-center">
        <span>{{ this.$store.state.account }}</span>
      </li>
      <li class="nav-link text-white text-center">
        <span>...期待您下一次的光臨</span>
      </li>
      <li class="nav-link text-white text-center">
        <button class="btn btn-dark" v-on:click="onClick">繼續</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MGoodbye",
  methods:{
      onClick(){
          window.location.href = '/jbv_dev';
      }
  }
};
</script>