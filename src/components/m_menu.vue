<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <Header />
    <div class="row my-5"></div>
    <div class="row text-center my-5">
      <div class="col-12">
        <img
          src="../assets/mobile/mobile_gwh-logo_x2.png"
          class="img-fluid"
          alt="Logo"
        />
      </div>
    </div>
    <ul class="nav nav-pills flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Announce 【 精華公佈欄 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Favorite 【 我 的 最愛 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Class 【 分組討論區 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Mail 【 私人信件區 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Talk 【 休閒聊天區 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">User 【 個人設定區 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Xyz 【 系統資訊區 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Play 【 娛樂與休閒 】</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">Namelist 【 編特別名單 】</a>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MMenu",
  components: {
    Header,
    Footer,
  },
  computed: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>
