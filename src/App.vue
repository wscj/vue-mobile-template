<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~@/assets/scss/index.scss';
html, body, #app {
  height: 100%;
}
li {
  list-style: none;
}
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 去除ios点击自带闪烁效果
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0;
  position: relative;
}
#nav {
  padding: rem(20);
  font-size: rem(16);
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
