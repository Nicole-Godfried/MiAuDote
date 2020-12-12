<template>
  <v-container class="adote">
      <h2>Quero adotar! 💛</h2>
      <CardPet :pet="$route.query.pet" />
  </v-container>
</template>

<script>
import CardPet from "../components/CardPet";
export default {
  name: "Adote",
  components: {
    CardPet,
  },
  created() {
    console.log(this.$route.query.pet);
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
</style>