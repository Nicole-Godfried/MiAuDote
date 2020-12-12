<template>
  <v-card class="mx-auto card-pet" max-width="400">
    <v-img class="white--text align-end" height="400px" :src="pet.photo">
    </v-img>
    <v-card-title class="title">{{ pet.name }}</v-card-title>
<div class="tags" v-for="tag of pet.tags" :key="tag">
      <div class="chip">{{ tag }}</div>
    </div>
    <v-card-subtitle class="address">{{ pet.address }}</v-card-subtitle>

    <v-card-text class="description text-left">
      {{ pet.description }}
    </v-card-text>

    

    <!-- <v-container v-for="tag in pet.tags" :key="tag" class="grey lighten-5 mb-6">
      <v-row no-gutters>
          <div class="chip">{{ tag }}</div>
        <v-col v-for="n in 1" :key="n">
        </v-col>
      </v-row>
    </v-container> -->

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
  margin: 20px 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.title {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #00afbb;
}

.address {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.description {
  padding: 0;
  margin: 0;
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
  width: 15vw;
  border: 1px solid white;
  padding: 3px;
  margin: 0px;
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>