<template>
  <v-container class="home">
    <h1>Nos ajude a dar um lar para estes bichinhos!</h1>
    <h3>Adote um novo companheiro para a vida</h3>
    <br />
    <p>
      Venha conhecer essas fofuras e achar um novo amigo, todos os nossos
      bichinhos são resgatados das ruas e dóceis
    </p>
    <v-container class="cards-list" v-for="pet of listaPets" :key="pet.name">
      <CardPet :pet="pet" />
    </v-container>
  </v-container>
</template>

<script>
import CardPet from "../components/CardPet";

export default {
  name: "Home",
  components: {
    CardPet,
  },
  data() {
    return {
      listaPets: [],
    };
  },
  created() {
    fetch("https://it3yui.firebaseio.com/pets.json")
      .then((response) => response.json())
      .then((json) => {
        this.listaPets = json;
      });
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cards-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>