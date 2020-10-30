<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ DigitalLife ]生活</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ DigitalTech ]科技</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ DigitalWare ]軟體</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_Console ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_Mobile ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_Online ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_RolePlay ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_SportAct ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ G_Strategy ]電玩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[ GameTopics ]綜合</a>
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
export default {
  name: "MClass2",
  computed: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>
