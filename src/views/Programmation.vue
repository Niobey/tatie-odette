<template>
  <div class="programmation">
    <h1>Programmation</h1>
    <b-row align-h="center " id="brow">
      <div>
        <b-dropdown
          text="Jour"
          variant="outline-danger"
          class="s-1"
          id="button-programmation"
        >
          <b-dropdown-item value="All" @click="selectedType = 'All'">
            <strong>Tous</strong>
          </b-dropdown-item>
          <b-dropdown-item
            v-for="day in days"
            :key="day"
            :value="day"
            @click="selectedType = day"
          >
            {{ day }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown
          text="Heure"
          variant="outline-danger"
          class="s-1"
          id="button-programmation"
        >
          <b-dropdown-item value="All" @click="selectedType = 'All'">
            <strong>Tous</strong>
          </b-dropdown-item>
          <b-dropdown-item
            v-for="hour in hours"
            :key="hour"
            :value="hour"
            @click="selectedType = hour"
          >
            {{ hour }}
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <div>
        <b-dropdown
          text="Genre"
          variant="outline-danger"
          class="s-1"
          id="button-programmation"
        >
          <b-dropdown-item value="All" @click="selectedType = 'All'">
            <strong>Tous</strong>
          </b-dropdown-item>
          <b-dropdown-item
            v-for="type in types"
            :key="type"
            :value="type"
            @click="selectedType = type"
          >
            {{ type }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-dropdown
          text="Scène"
          variant="outline-danger"
          class="s-1"
          id="button-programmation"
        >
          <b-dropdown-item value="All" @click="selectedType = 'All'">
            <strong>Tous</strong>
          </b-dropdown-item>
          <b-dropdown-item
            v-for="stage in stages"
            :key="stage"
            :value="stage"
            @click="selectedType = stage"
          >
            {{ stage }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-row>

    <div class="container-fluid d-flex flex-wrap">
      <div
        class="card_prog col-md-6 col-xl-4"
        v-for="(card, index) in filteredCategory "
        :key="index"
      >
        <div class="card_title">
          <h3>{{ card.artist }}</h3>
          <span> {{ card.stage }} / {{ card.day }} / {{ card.hour }} </span>
        </div>
        <div class="container_img">
          <img class="card_img" :src="card.img" />
        </div>
      </div>
    </div>
  </div>
</template>
/***************************************************JS******************************************************************************
*/

<script>


let types = [
  "rap",
  "rock",
  "metal",
  "pop",
  "electro",
  "folk",
  "jazz",
  "alternatif",
];
let artist = [
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
];
let stage = ["Scène A", "Scène B", "Scène C"];
let hour = ["18h", "19h", "20h", "21h", "22h", "23h", "00h", "01h00"];
let day = ["Vendredi", "Samedi", "Dimanche"];
const cardsData = [
  {
    artist: artist[2],
    type: types[0],
    img:
      "https://media.virginradio.fr/article-4260166-head-f8/petit-biscuit.jpg",
    stage: stage[0],
    day: day[2],
    hour: hour[4],
  },
  {
    artist: artist[0],
    type: types[1],
    img:
      "https://www.parisladefense-arena.com/uploads/2018/10/3764-booba-orig-2.jpg",
    stage: stage[1],
    day: day[0],
    hour: hour[5],
  },
  {
    artist: artist[1],
    type: types[2],
    img:
      "https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/05e9523a-428f-4798-ad07-c4abcc70acfa/801x410_vald_album_2019.jpg",
    stage: stage[2],
    day: day[1],
    hour: hour[5],
  },
  {
    artist: artist[5],
    type: types[0],
    img:
      "https://static1.purepeople.com/articles/6/30/54/86/@/4322687-semi-exclusif-jean-schultheis-vendre-950x0-1.jpg",
    stage: stage[0],
    day: day[1],
    hour: hour[6],
  },
];
export default {
  data() {
    return {
      cards: cardsData,
      types: types,
      days: day,
      hours: hour,
      stages: stage,
      selectedType: "All",
    };
  },
  computed: {
    filteredCategory: function () {
      let self = this;
      let cardsArray = self.cards;
      let selectedType = self.selectedType;
      if (selectedType === "All") {
        return cardsArray;
      } else {
        cardsArray = cardsArray.filter(function (card) {
          if (
            card.type.indexOf(selectedType) !== -1 ||
            card.day.indexOf(selectedType) !== -1 ||
            card.hour.indexOf(selectedType) !== -1 ||
            card.stage.indexOf(selectedType) !== -1
          ) {
            return card;
          }
        });
      }
      return cardsArray;
    },
  },
};
</script>

/***************************************************CSS******************************************************************************
*/

<style lang="scss">
#brow {
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: var(--black) !important;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: var(--green) !important;
    border: 1px solid black !important;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 2em !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}



#button-programmation {
    background: var(--green);
    margin: .2em;
    border-radius: 1em ;
    border-color: var(--blue);
}

.container {
  margin-top: 10em;
}
.card_prog {
  margin: 2em auto auto;
  width: 100%;
}
.card_title {
  background: var(--yellow);
  border-bottom: 2px solid var(--orange);
  display: flex;
  padding-top: 0.4em;
  width: 100%;
  h3 {
    font-weight: 800;
    font-size: 12px;
    margin: 0;
  }
  span {
    font-size: 12px;
    height: 18px;
    left: 161px;
    line-height: 14px;
    margin-left: auto;
    text-align: right;
    top: 181px;
  }
}
.container_img {
  border: 2px solid var(--blue);
  height: 10em;
  margin-top: 0.5em;
  overflow: hidden;
}
.card_img {
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 100%;
}
</style>