<template>
  <div id="mobileContainer" class="container">
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

    <div class="col-12 py-3 px-0 rounded bg-dark">
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >Announce 【 精華公佈欄 】</a
        >
      </div>
      <div>
        <router-link class="nav-link line" to="/favorite"
          >Favorite 【 我 的 最愛 】</router-link
        >
      </div>
      <div>
        <router-link class="nav-link line" to="/class"
          >Class 【 分組討論區 】</router-link
        >
      </div>
      <div>
        <router-link class="nav-link line" to="/mail1"
          >Mail 【 私人信件區 】</router-link
        >
      </div>
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >Talk 【 休閒聊天區 】</a
        >
      </div>
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >User 【 個人設定區 】</a
        >
      </div>
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >Xyz 【 系統資訊區 】</a
        >
      </div>
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >Play 【 娛樂與休閒 】</a
        >
      </div>
      <div>
        <a class="nav-link line" href="javascript:void(0)"
          >Namelist 【 編特別名單 】</a
        >
      </div>
      <div>
        <router-link class="nav-link line" to="/goodbye"
          >Goodbye 【 離開，再見… 】</router-link
        >
      </div>
    </div>
    -->
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
