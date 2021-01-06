<template>
  <div class="programmation">
    <h1>Programmation</h1>
    <div class="container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="card_title">
          <h3>{{card.artiste}}</h3>
          <span>/ {{card.scene}} / {{card.jour}} / {{card.heure}} /</span>
        </div>
        <div class="container_img">
          <img class="card_img" :src="card.img" />
          </div>
      </div>
    </div>
  </div>
</template>
/***************************************************JS****************************************************************************** */

<script>

let artiste = [
  "Booba",
  "Vald",
  "Petit Biscuit",
  "Marlin Manson",
  "Céline Dion",
  "Jean Schultheis",
  "Psy",
  "Cardi B", 
  "Scorpion",
  "Fatal Bazooka",
  "Tragédie",
  "Keen v",
]

let scene = [
    "Scène A",
    "Scène B",
    "Scène C",
]

let heure = [
  "18h",
  "19h",
  "20h",
  "21h",
  "22h",
  "23h",
  "00h00",
  "01h00", 
]

let jour = [
  "Vendredi",
  "Samedi",
  "Dimanche",
]


const cardsData = [
  {
    artiste: artiste[2],
    img: "https://media.virginradio.fr/article-4260166-head-f8/petit-biscuit.jpg",
    scene: scene[0],
    jour: jour[2],
    heure: heure[4],
  },
    {
    artiste: artiste[0],
    img: "https://www.parisladefense-arena.com/uploads/2018/10/3764-booba-orig-2.jpg",
    scene: scene[1],
    jour: jour[0],
    heure: heure[5],
  },
    {
    artiste: artiste[1],
    img: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/05e9523a-428f-4798-ad07-c4abcc70acfa/801x410_vald_album_2019.jpg",
    scene: scene[2],
    jour: jour[1],
    heure: heure[5],
  },
  {
    artiste: artiste[5],
    img: "https://static1.purepeople.com/articles/6/30/54/86/@/4322687-semi-exclusif-jean-schultheis-vendre-950x0-1.jpg",
    scene: scene[0],
    jour: jour[1],
    heure: heure[6],
  },

];

export default {
   data() {
    return {cards: cardsData}
  }
}
</script>

/***************************************************CSS****************************************************************************** */

<style lang="scss">
.container {
  margin-top: 10em;
}

.card {
  margin: 2em auto auto auto;
  width: 80%;
  height: 140px;
  font-family: Helvetica;
}

.card_title {
  width: auto;
  background: #fcf5be;
  display: flex;
  border-bottom: 2px solid #ff8e4e;
  padding-top: 0.4em;
}

.card_title h3 {
  width: 92px;
  margin: 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  color: #000000;
}

.card_title span {
  width: 188px;
  height: 18px;
  left: 161px;
  top: 181px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  margin-left: auto;
  color: #000000;
}

.container_img{
  height: 9em;
  overflow: hidden;
  bottom: 9em;
}

.card_img {
  margin-top: 0.5em;
  width: 100%;
  height: 90%; 
  border: 2px solid var(--blue);
}

</style>

