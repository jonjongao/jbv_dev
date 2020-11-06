<template>
  <nav class="row m-0 p-2 fixed-top q15 b4" ref="header">
    <div>
      <span class="q15 b4">{{ label1 }}</span
      ><span v-if="label3 != ''" class="q15 b4">{{ label3 }}</span
      ><span class="q11 b4">{{ label2 }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MHeader",
  props: ["p1", "p2", "p3"],
  created: function () {
    console.log(this.p1 + " _ " + this.p2 + " _ " + this.p3);
  },
  mounted:function(){
    this.$store.commit("setMobileHeaderHeight",this.$refs.header.clientHeight);
  },
  computed: {
    label1: function () {
      if (this.p1 == null) return "【主功能表】";
      else return this.p1;
    },
    label2: function () {
      if (this.p2 == null) return "批踢踢實業坊";
      else return this.p2;
    },
    label3: function () {
      if (this.p3 == null) return "";
      else return this.p3;
    },
  },
};
</script>