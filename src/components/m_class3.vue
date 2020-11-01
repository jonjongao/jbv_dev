<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
        <li class="nav-item" v-for="p in getMETA" :key="p.id">
            <a class="nav-link text-left" href="#">{{ p.name }} {{ p.caption }}</a>
        </li>
      
    </ul>
    <div class="row">
      <div class="col-12 q8 b7">
        <span>{{ this.$store.state.dateLabel }}</span
        ><span>[牡羊時]</span><span>線上</span><span>89879</span
        ><span>人, 我是</span><span>{{ this.$store.state.accountLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import post from "../assets/class3.json";
export default {
  name: "MClass3",
  computed: {
      getMETA:function(){
          return post;
      }
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
