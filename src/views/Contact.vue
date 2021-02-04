<template>
<div class="container-fluid">
  <div class="contact">
    <h1>Contact</h1>
    <div class="text">
      <h2 class="h2-text">Qui sommes-nous ?</h2>
      <p><span>« Live Events »</span> est une entreprise
      d’organisation et de promotion de spectacles basée sur Paris et créée en 2005.
      Elle compte aujourd’hui une centaine
      d’employés.</p>
    </div>
    <div class="presentation">
      <!-- <h2 class="text">Axel Gonon</h2> -->
      <!-- <img class="image" src="../assets/img/axel.jpg" alt="axel"/> -->
      <div v-for="(contact, index) in contacts"  :key="index" v-bind:src="contact">
        <img class="image" :src="contact.image" />
        <p class="name-presentation">{{ contact.name }}</p>
        <p class="content-presentation">{{ contact.content }}</p>
        </div>
    </div>

   


      <div id="form_contact">

  <form class="vue-form" @submit.prevent="submit">

    <div class="error-message">
      <p v-show="!email.valid">Oh, please enter a valid email address.</p>
    </div>

    <fieldset>
      <legend>Pour toute demande veuillez-nous contacter via ce formulaire de contact :</legend>
      <div>
        <label class="label" for="name">Name</label>
        <input type="text" name="name" id="name" required="" v-model="name">
      </div>
      <div>
        <label class="label" for="email">Email</label>
        <input type="email" name="email" id="email" required=""
               :class="{ email , error: !email.valid }"
               v-model="email.value">
      </div>
      <div>
        <h4>Le sujet de ma demande :</h4>
        <p class="select">
          <select class="budget" >
						<option value="0">Je veux être bénévole</option>
						<option value="1">J'ai perdu quelques choses</option>
            <option value="2">J'ai une demande</option>
						<option value="3">Je désire être partenaire</option>
          
					</select>
        </p>
      </div>


      <div>
        <label class="label" for="textarea">Ma demande</label>
        <textarea class="message" name="textarea" id="textarea" required="" 
                  v-model="message.text" 
                  :maxlength="message.maxlength"></textarea>
        <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
      </div>
      <div>
        <input type="submit" value="Envoyer">
      </div>
    </fieldset>
  </form>



</div>

    
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        contacts: [{
          image: require('../assets/img/profil.png'),
          name: 'Axel',
          content: 'Organisateur'
        },
        {
          image: 'data:image/png;base64,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',
          name: 'Violette',
          content: 'Organisatrice'
        },
        {
          image: require('../assets/img/profil.png'),
          name: 'Walter',
          content: 'Régisseur en Chef'
        },],
        name: "John Doe",
        email: {
        value: "jo@hnd.oe",
        valid: true
      },
      

      message: {
        text: `Bonjour,\n...`,
        maxlength: 999
      },
      submitted: false,
};
},
      
        methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },

  },
      watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
  }
</script>


<style lang="scss">

.contact{

.image {
  // margin-right: 100%;
  margin-top: 13vh;
   width:100px;
   height:100px;
   clip-path:ellipse(50% 50%);
}

.text {
    span{
    color:var(--orange);
    font-size: 1.2rem;
    font-weight: 700;
  }
padding: 10vw 10vw 3vw 10vw;
h2{
  text-align: center;
  margin-bottom: 5vh;
}
}

.presentation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
 flex-direction: column;
    text-align: center;
 @media (min-width: 768px) {
      flex-direction: row;
    }
}



.name-presentation{
  text-align: center;
  margin-top: 3vh;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0rem
}

.content-presentation{
  text-align: center;
  font-style: italic;
}

#form_contact{
  @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");

*,
*::after,
*::before {
  box-sizing: border-box;
}
  color: #fff;
  background:#fff;
  

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;



.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #2c3e50;
  text-decoration: none;
}


.vue-form {
  font-size: 16px;
  //width: 500px;
  padding: 15px 30px;
  //border-radius: 4px;
  margin: 50px auto;
 // width: 500px;
  background-color: #fff;
  //box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
  margin: 24px 0 0 0;
}
.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
  color :var(--orange);
  font-size: 1.25rem;
  font-weight: 700;
}
.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form select,
.vue-form label {
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.vue-form .select {
  position: relative;
}
.vue-form .select::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: 16px;
  top: 50%;
  margin-top: -8px;
  display: block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpolygon%20fill%3D%22%232c3e50%22%20points%3D%220.9%2C5.5%203.1%2C3.4%208%2C8.3%2012.9%2C3.4%2015.1%2C5.5%208%2C12.6%20%09%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E")
    no-repeat center center;
  pointer-events: none;
}
.vue-form select {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.vue-form select::-ms-expand {
  display: none;
}
.vue-form .vue-form-list {
  margin-top: 16px;
}
.vue-form .vue-form-list::after {
  clear: both;
  content: "";
  display: table;
}


.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: var(--pink);;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background-color: var(--pink);
}
.vue-form input[type="submit"]:active {
  transform: scale(0.9);
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: #e94b35 !important;
}
.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}

.debug {
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #000;
  padding: 50px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.debug pre {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  white-space: pre-wrap;
}

@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@-moz-keyframes cd-bounce {
  0%,
  100% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}

}

}
</style>
