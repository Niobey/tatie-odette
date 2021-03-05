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
      @click="showKeyboard()"
    >

    <p class="tel">Inscrivez votre adresse mail pour recevoir la vidéo de votre impression !
</p>

    <input
      :value="input"
      class="input message"
      @input="onInputChange"
      placeholder="Email"
      @click="showKeyboard()"
    >

    <div class="keyboard">
<SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
</div>
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
    },
    showKeyboard: function() {
      document.querySelector(".keyboard").classList.add("slideAnim");
    },
  }
};
</script>


<style lang="scss">
#Eticket{
  text-align: center;
  h1{
  text-align: center;
  color: #451E10 ;
  margin-bottom: 5vh;
  font-size: 1.75rem;
  text-align: center;

}

.tel{
  text-align: center;
  color: #000
   ;
}
  input.message{
  text-align: center;
  width: 40vw;
  margin-top: 1vh;
  margin-bottom: 1vh ;
  border-radius: 5px;
  border:none;
}

.simple-keyboard {
  max-width: 850px;
   position: absolute;
   margin-bottom: 20%;
   margin-left: 9%;
}
.keyboard{
  display: grid;
  grid-template-rows: auto 20%;
  height: 100%;
  left: 100%;
  margin: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 1200;
}
.slideAnim {
  animation-name: slide;
  animation-duration: 0.5s;
  left: 0;
}
@keyframes slide {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
}
</style>

