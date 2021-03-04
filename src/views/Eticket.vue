<template>
  <div id="Eticket">
    <h1>Eticket</h1>
    <p class="tel">Merci de remplir votre numéro de téléphone ou votre mail afin de récupérer le code de vérification.</p>
    <p class="tel">Avec ce code vous pourrez récupérer votre commande.</p>

    <input
      :value="input"
      class="input message"
      @input="onInputChange"
      placeholder="Téléphone"
    >

    <p class="tel">Inscrivez votre adresse mail pour recevoir la vidéo de votre impression !
</p>

    <input
      :value="input"
      class="input message"
      @input="onInputChange"
      placeholder="Email"
    >
<SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";


export default {
  name: "App",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    input: ""
  }),
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
};
</script>


<style lang="scss">
#Eticket{
  h1{
  text-align: center;
  color: #451E10 ;
  margin-top: 6vh;
  margin-bottom: 8vh;
  font-size: 1.75rem;
  text-align: center;

}

.tel{
  text-align: center;
  color: #000
   ;
}
}
</style>

