<template>
  <v-container class="adote">
    <h2>Que bom que você quer me adotar! 💛</h2>
    <CardPet :pet="$route.query.pet" />

    <button class="botao">
      <v-icon>mdi-whatsapp</v-icon>Entre em contato conosco
    </button>
  </v-container>
</template>

<script>
import CardPet from "../components/CardPet";
export default {
  name: "Adote",
  components: {
    CardPet,
  },
};
</script>

<style scoped>
.adote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.botao {
  padding: 8px;
  background-color: #00ad99;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: bold;
}
</style>