<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(R)ead 我的信箱</a>
        </li>
      <li class="nav-item">
            <a class="nav-link text-left" href="#">(S)end 站內寄信</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(M)ail List 群組寄信</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(F)orward 設定信箱自動轉寄</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(Z)ip UserHome 把所有私人資料打包回去</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(S)avemail 重建信箱索引</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-left" href="#">(C)ontact AM 寄信給帳號站長</a>
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
  name: "MMail",
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
