<template>
<v-app>
<v-toolbar-title>Saiba mais sobre o PET
</v-toolbar-title>
    <v-divider></v-divider>

 <v-container>

    <h2 class="text-h5 text-center mb-3 mt-5">Nome do bichinho</h2>

    <v-img
  src="https://www.petz.com.br/blog/wp-content/uploads/2019/06/tamanho-de-gato-pet.jpg">
></v-img>
 
    
    <p>Descrição do animal </p>

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<template>
  <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      ADOTAR
    </v-btn>
  </div>
</template>


  </v-container>
  
  </v-app>

</template>




<script>
export default {
 name: 'ListadeAnimais',
data() {
return {
 ListadeAnimais: []
}
},
created() {
fetch('https://it3yui.firebaseio.com/pets.json')
      .then(response => response.json())
      .then(json => {
        this.ListadeAnimais = json
      })
  }
}
</script>