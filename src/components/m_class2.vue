<template>
  <div id="mobileContainer" class="container">
    <Header />
    <div class="row my-5"></div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ DigitalLife ]生活</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ DigitalTech ]科技</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ DigitalWare ]軟體</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ G_Console ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ G_Mobile ]電玩</a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-left" to="/class3">[ G_Online ]電玩</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ G_RolePlay ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ G_SportAct ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ G_Strategy ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[ GameTopics ]綜合</a>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MClass2",
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
