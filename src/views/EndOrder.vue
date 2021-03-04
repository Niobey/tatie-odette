<template>
  <div id="EndOrder">
    <h1>Tatie Odette vous remercie pour votre achat !</h1>
    <h2>Temps Restant</h2>
<div class="container">
  <div id="app">
    <div class="timer">
      <span class="minute">{{ minutes }}</span>
      <span>:</span>
      <span class="seconds">{{ seconds }}</span>
    </div>

  </div>
</div>

    <div class="container-fluid d-flex flex-wrap">
      <div class="card_prog col-md-6">
<button class="btn patience">Quizz Chococo</button>
</div>
      <div class="card_prog col-md-6">
<button class="btn patience">Dessiner un modèle</button>
</div>
      <div class="card_prog col-md-6">
<button class="btn patience">Découvrir l'impression 3D</button>
</div>
      <div class="card_prog col-md-6">
<button class="btn patience">Voter pour le modèle du mois</button>
</div>
  
    </div>
  </div>
</template>




<script>


  export default {
  

  data(){
      return {
    timer: null,
    totalTime: (20 * 60),
    resetButton: false,
    title: "Countdown to rest time!",
    edit: false
      }
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
      this.resetButton = true;
    },
    
    padTime: function(time){
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
    }
  },
   beforeMount(){
    this.startTimer()
 },
  computed: {
    minutes: function(){
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    },
  }
}
  
</script>

<style lang="scss">
@import "susy";

$primary-color: #FD7014;
$secondary-color: #393E46;
$background-color: #222831;
$text-color: #EEEEEE;


#EndOrder{
  h1{
  text-align: center;
  color: #451E10 ;
  margin-top: 6vh;
  margin-bottom: 8vh;
  font-size: 1.75rem;
  text-align: center;

}
  h2{
  text-align: center;
  color: #451E10 ;
  margin-top: 6vh;

  font-size: 1.25rem;
  text-align: center;

}

.container {
  height: 30vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  

  #app {
    display: flex; 
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 2rem;
    }
  }
  .timer {
    font-size: 6rem;
    color: $text-color;
  }
 

}
div.card_prog.col-md-6 {
  text-align: center;
}

button.btn.patience{
  width: 80%;
  margin: 2%;
   margin-left: 5vw;
}



}
</style>