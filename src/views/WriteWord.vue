<template>


<div id="app">
  <h1>Votre message</h1>
    <input
      :value="input"
      class="input message"
      @input="onInputChange"
      placeholder="Utilisez le clavier pour écrire votre message"
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  h1{
  text-align: center;
  color: #451E10 ;
  margin-top: 6vh;
  margin-bottom: 8vh;
  font-size: 1.75rem;
  text-align: center;

}

  input.message {
  width: 50vw;
  text-align: center; 
  padding: 5px;
  font-size: 18px;
  border: none;
  box-sizing: border-box;
  margin-left: 25%;
  margin-bottom: 18vh;


  }
.simple-keyboard {
  max-width: 850px;
  text-align: center;
   margin-left: 15%;
}
}
</style>
