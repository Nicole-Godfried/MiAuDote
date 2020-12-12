<template>
  <v-app>
    <AppNavBar />

    <v-main>
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
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