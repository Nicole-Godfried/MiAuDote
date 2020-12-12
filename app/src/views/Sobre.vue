<template>
  <div class="sobre">
    <h1>Sobre nós</h1>
    <div class="container">
      <div class="titulos">
        <v-container>
          <p></p>
          <h3>De onde viemos?</h3>
          <p>
            Decidimos criar a MiAuDote a partir do nosso desejo de ajudar
            bichinhos que hoje se encontram em situação de rua. Criada no dia 16
            de maio de 2018, a MiAuDote já resgatou mais de 200 animais em
            situação de rua e atualmente abriga cerca de 100 animais esperando
            por um novo lar. Todos os animais resgatados são tratados e
            castrados.
          </p>
        </v-container>

        <v-container>
          <p></p>
          <h3 class="m-top">Quem está conosco?</h3>
          <p>
            Atualmente temos 4 colaboradoras oficiais alem de nossos
            voluntários, são elas: Amanda Dos Santos, Sandra Larissa Marques,
            Elaine C. Estainer e Nicóle Godfried.
          </p>
        </v-container>
      </div>

      <div class="pessoas">
        <div class="pessoa">
          <h3>Amanda Dos Santos</h3>
          <p>
            Amanda ama bichinhos e tem duas gatinhas em sua casa, uma chamada
            Kiki e outra chamada Marie. Ela é responsável pela alimentação e diversão
            dos nossos bichinhos.
          </p>
        </div>

        <div class="pessoa">
          <h3>Sandra Larissa Marques</h3>
          <p>
            Sandra ama animais e já tem um total de 5 gatinhos e 3 cachorros em
            sua casa, ela é responsável pela alimentação e diversão dos nossos
            bichinhos.
          </p>
        </div>
      </div>

      <div class="pessoas">
        <div class="pessoa">
          <h3>Nicóle Godfried</h3>
          <p>
            Nicóle já teve os bichinhos mais variados em sua guarda, porém
            atualmente só cuida de um gatinho chamado Cookie. Ela é responsável
            pelo tratamento veterinário dos nossos bichinhos e também está
            sempre a procura de novos doadores para que possamos manter nosso
            espaço.
          </p>
        </div>
        <div class="pessoa">
          <p></p>
          <h3>Elaine C. Estainer</h3>
          <p>
            Elaine ama animais e já tem um total de 5 gatinhos e 3 cachorros em
            sua casa, ela é responsável pela alimentação e diversão dos nossos
            bichinhos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre",
};
</script>
  
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 25px;
  text-align: justify;
}

.container div.titulos  h3{
  margin-bottom: 10px;
}

.pessoas {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.pessoa {
  width: 50%;
  padding: 20px;
}

.pessoa h3 {
  margin-bottom: 10px;
}

.m-top {
  margin-top: 5px;
}

@media (max-width: 900px) {
     .pessoa{
       flex-direction: column;
       width: 100%;
       margin-bottom: 10px;
       align-items: center;
     } 
}
</style>