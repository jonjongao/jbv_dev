<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
document.addEventListener("DOMContentLoaded", fetchJquery);
window.setTimeout(fetchJquery, 5000);

var init = false;
function fetchJquery() {
  if (init == true) {
    console.log("is already init");
    return;
  }
  init = true;
  console.log("init");
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
