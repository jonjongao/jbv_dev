<template>
<div id="mainContainer">
  <div class="row text-center">
      <div class="col-12">
        <img
          src="../assets/outro.gif"
          class="img-fluid"
          alt="Logo"
        />
      </div>
    </div>
  <span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q14 b4">                                                               </span><span class="q11 b6"> [按任意鍵繼續] </span><span class="q7 b0"> </span></span></span><div></div></div></span></div>
</template>

<script>
export default {
    name: "PCGoodbye",
    props: ['bbsrow'],
  data: function () {
    return {
    }
  },
  created() {
  },
  mounted() {
    this.$bus.$on('on-keyup', this.onKeyup);
  },
  beforeDestroy() {
    this.$bus.$off('on-keyup', this.onKeyup);
  },
  watch: {
  },
  methods: {
    onKeyup: function (e) {
      //this.$router.push({ name: "Login" });
      window.location.href = 'https://www.clbbs.space/';
    }
  }
}
</script>