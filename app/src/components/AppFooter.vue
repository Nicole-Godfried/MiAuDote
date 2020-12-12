<template>
   <v-footer app
    color="#00aFbb"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >

    <img class="logo-footer" src="../assets/MiAuDote_Logo_02.png" alt="">
     
      <v-col
        class="00aFbb py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: "AppFooter",
   
}
</script>

<style scoped>
    .logo-footer{
        width: 15%;
    }
</style>