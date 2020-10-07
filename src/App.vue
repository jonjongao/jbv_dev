<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div id="nav">
      <router-link to="/">Index</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
    </div>
<div id="cmenuReact">
        <div class="">
            <ul class="dropdown-menu DropdownMenu--reset" style="top: 0px; left: 0px;">
                <li role="separator" class="divider"></li>
                <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">設定</a></li>
            </ul>
        </div>
    </div>
    <div id="BBSWindow" style="cursor: auto;" align="center">
      <div class="main" style="border: 0px; font-family: MingLiu, SymMingLiu, monospace !important; transform-origin: center center; font-size: 24px; line-height: 24px; overflow: hidden auto; text-align: left; width: 970px; height: 586px; margin-top: 96px; transform: none;">
    <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/*
@import './assets/pttchrome.dfcd8a57e6603f03c793.css';
*/

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

pre{
    display: inline;
}
</style>
