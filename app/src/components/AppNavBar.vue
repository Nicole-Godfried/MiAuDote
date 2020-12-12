<template>
    <div class="app-nav-bar">
    <v-app-bar app color="#00aFbb" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
     <img class="logo-footer" src="../assets/MiAuDote_Logo_02.png" alt="">
      
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue--text text--lighten-4">

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sobre">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: "AppNavBar",
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<style scoped>
    .app-nav-bar a{
        text-decoration: none;
    }
    .logo-footer{
        width: 15%;
    }
</style>