<template>
  
    
  <div id="app">
    <AppNavBar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sobre">Sobre</router-link> |
      <router-link to="/adote">Adote</router-link>
    </div>
    <router-view/>
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