<template>
  <div id="mobileContainer" class="container">
    <Header />
    <div class="row my-5"></div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <router-link class="nav-link text-left" to="/mail2"
          >(R)ead 我的信箱</router-link
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(S)end 站內寄信</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(M)ail List 群組寄信</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(F)orward 設定信箱自動轉寄</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(Z)ip UserHome 把所有私人資料打包回去</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(S)avemail 重建信箱索引</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)"
          >(C)ontact AM 寄信給帳號站長</a
        >
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
    getMETA: function () {
      return post;
    },
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
