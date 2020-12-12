<template>
  <v-card class="mx-auto card-pet" max-width="400">
    <v-img class="white--text align-end" height="400px" :src="pet.photo">
    </v-img>
    <v-card-title class="title"> {{ pet.name }}</v-card-title>

    <v-card-subtitle class="address">
      <v-icon>mdi-map-marker</v-icon> {{ pet.address }}
    </v-card-subtitle>

    <div class="alinha">
      <div class="tags" v-for="tag of pet.tags" :key="tag">
        <div class="chip">{{ tag }}</div>
      </div>
    </div>

    <v-card-text class="description text-left">
      {{ pet.description }}
    </v-card-text>

    <v-card-actions>
      <router-link to="/adote">
        <button class="botao-adote">Adote</button>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardPet",
  props: {
    pet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-pet {
  margin: 10px 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #00afbb;
  margin: 15px;
  padding: 0px;
}

.address {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
  padding: 5px;
}

.description {
  padding: 0;
  margin: 10px 0px 5px 0px;
}

.botao-adote {
  border: 1px solid #00afbb;
  border-radius: 10%;
  padding: 8px;
  background-color: #00afbb;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.chip {
  background-color: #00afbb;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 14px;
  width: 8vw;
  border: 1px solid white;
  padding: 3px;
  margin: 0px;
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex;
  margin: 5px;
}

.alinha {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>