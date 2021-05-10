<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <a @click="openMicro">micro_01</a>
    </div>
    <div id="micro_container"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  methods: {
    openMicro() {
      const route = '/micro_01';
      history.pushState(null, route, route); // 没引入路由，所以不能用路由切换
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
