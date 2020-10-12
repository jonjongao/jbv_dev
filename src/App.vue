<template>
  <div id="app">
    <p>測試連結</p>
    <div id="nav">
      <router-link to="/">Index</router-link>
      <router-link to="/mainmenu">MainMenu</router-link>
      <router-link to="/favorite">Favorite</router-link>
      <router-link to="/class">Class1</router-link>
      <router-link to="/class2">Class2</router-link>
      <router-link to="/class3">Class3</router-link>
      <router-link to="/forum-cover">ForumCover</router-link>
      <router-link to="/forum">Forum</router-link>
      <router-link to="/forum2">Forum2</router-link>
      <router-link to="/forum-post">ForumPost</router-link>
      <router-link to="/mail1">Mail1</router-link>
      <router-link to="/mail2">Mail2</router-link>
      <router-link to="/goodbye">Goodbye</router-link>
    </div>
    <div id="cmenuReact">
      <div class="">
        <ul
          class="dropdown-menu DropdownMenu--reset"
          style="top: 0px; left: 0px"
        >
          <li role="separator" class="divider"></li>
          <li role="presentation" class="">
            <a role="menuitem" tabindex="-1" href="#">設定</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="BBSWindow" style="cursor: auto" align="center">
      <div
        class="main"
        style="
          border: 0px;
          font-family: MingLiu, SymMingLiu, monospace !important;
          transform-origin: center center;
          font-size: 24px;
          line-height: 24px;
          overflow: hidden auto;
          text-align: left;
          width: 970px;
          height: 586px;
          margin-top: 96px;
          transform: none;
        "
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./assets/pttchrome.dfcd8a57e6603f03c793.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#BBSWindow {
  z-index: -1;
  margin-top: 100px;
}

span {
  white-space: pre;
}
</style>
