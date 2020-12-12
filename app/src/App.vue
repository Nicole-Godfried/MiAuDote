<template>
  <div id="app">
    <AppNavBar />
    <v-main class="main">
      <router-view/>
    </v-main>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavBar from "./components/AppNavBar";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {    
    AppNavBar,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2c2c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #3d3d3d;

    &.router-link-exact-active {
      color: #00AFBB;
    }
  }
}

.main {
  margin: 10px;
}
</style>
