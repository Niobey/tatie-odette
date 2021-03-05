<template>


<div id="writeWord">
  <h1>Votre message</h1>
    <input
      :value="input"
      class="input message"
      @input="onInputChange"
      placeholder="Utilisez le clavier pour écrire votre message"
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
  name: "writeWord",
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

    

    writeWord(input) {
    localStorage.setItem("textWriten", input);

    return this.$router.push("/ChoosePrint");
    },
  
  }
};
</script>

<style lang="scss">
#writeWord {
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
  margin-bottom: 14vh;


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
