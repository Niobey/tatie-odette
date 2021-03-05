<template>
  <div id="Eticket">
    <h1>Eticket</h1>
    <p class="telBlock">
      Merci de remplir votre numéro de téléphone ou votre mail afin de récupérer
      le code de vérification.
      <br />
      Avec ce code vous pourrez récupérer votre commande.
    </p>

    <input
      :value="tel"
      class="tel"
      placeholder="Téléphone"
      @click="selectInput"
    />

    <p class="telBlock">
      Inscrivez votre adresse mail pour recevoir la vidéo de votre impression !
    </p>

    <input
      :value="mail"
      class="mail"
      placeholder="Email"
      @click="selectInput"
    />

    <button type="button" class="btn" @click="nextPage">Suivant</button>

    <div class="keyboard" @focusout="hideKeyboard()">
      <SimpleKeyboard :input="input" tabindex="0" @onKeyPress="onKeyPress" />
    </div>
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";

let telNum = [];
let eMail = [];

export default {
  components: {
    SimpleKeyboard,
  },
  data: () => ({
    input: null,
    tel: "",
    mail: "",
    selectedInput: null,
  }),
  methods: {
    selectInput: function(e) {
      this.selectedInput = e.target.classList[0];
      localStorage.setItem("selectedInput", e.target.classList[0]);
      document.querySelector(".keyboard").classList.add("slideAnim");
    },
    onKeyPress(button) {
      // Regex pour chercher un nombre
      var r = /\d+/;
      if (this.selectedInput === "tel") {
        if (button.match(r) != null) {
          telNum.push(button);
          let num = telNum.join("");
          this.tel = num;
        }
      } else {
        eMail.push(button);
        let mail = eMail.join("");
        this.mail = mail;
      }
    },
    hideKeyboard: function() {
      document.querySelector(".keyboard").classList.remove("slideAnim");
    },
    nextPage: function() {
      localStorage.setItem("tel", this.tel);
      localStorage.setItem("mail", this.mail);
      return this.$router.push("/EndOrder");
    },
  },
};
</script>

<style lang="scss">
#Eticket {
  text-align: center;
  h1 {
    margin-bottom: 5vh;
    font-size: 1.75rem;
  }

  .telBlock {
    text-align: center;
    font-family: "Heebo", sans-serif;
    font-size: 1.2em;
    font-weight: normal;
  }

  input {
    text-align: center;
    width: 40vw;
    margin: 0 auto 4em;
    border-radius: 50px;
    border: none;
    padding: 0.4em 1em;
  }

  .simple-keyboard {
    max-width: 850px;
    position: absolute;
    margin-bottom: 20%;
    margin-left: 9%;
  }
  .keyboard {
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

  button {
    margin: 0 auto;
    padding: 0.4rem;
  }
}
</style>
