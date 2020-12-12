<template>
  <v-container class="home">
    <h1>Nos ajude a dar um lar para estes bichinhos!</h1>
    <h3>Adote um novo companheiro para a vida</h3>
    <br />
    <p>
      Venha conhecer essas fofuras e achar um novo amigo, todos os nossos
      bichinhos são resgatados das ruas e dóceis
    </p>
    <br />
    <v-text-field
      v-model="filtro"
      name="filtro"
      id="filtro"
      type="text"
      placeholder="Pesquisar..."
    >
    </v-text-field>
    <button class="botao" @click="petsFiltrados(filtro)">Pesquisar</button>
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
      listaPetsOriginal: [],
      filtro: "",
    };
  },
  created() {
    fetch("https://it3yui.firebaseio.com/pets.json")
      .then((response) => response.json())
      .then((json) => {
        this.listaPetsOriginal = json;
        this.listaPets = this.listaPetsOriginal;
      });
  },
  methods: {
    petsFiltrados(f) {
      const listaFiltrada = !f
        ? this.listaPetsOriginal
        : this.listaPetsOriginal.filter(function (pet) {
            return pet.tags.includes(f);
          });
      this.listaPets = listaFiltrada;
    },
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
  margin: 2px;
}

.botao {
  border: 1px solid #00afbb;
  border-radius: 10%;
  padding: 8px;
  background-color: #00afbb;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}
</style>