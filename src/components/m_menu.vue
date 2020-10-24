<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="#">我的最愛</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">分組討論區</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">私人信件區</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-left" href="#">離開，再見…</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MMenu",
  computed: {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>
