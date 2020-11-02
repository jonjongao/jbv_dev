<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <Header />
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
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
import post from "../assets/class3.json";
export default {
  name: "MMail",
    components: {
    Header,
    Footer,
  },
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
