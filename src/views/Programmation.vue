<template>
  <div class="programmation">
    <h1>Programmation</h1>
    <b-row id="brow">
      <b-dropdown text="Jour" variant="outline-danger">
        <b-dropdown-item value="All" @click="selectedType = 'All'">
          <strong>Tous</strong>
        </b-dropdown-item>
        <b-dropdown-item
          v-for="(card, index) in info"
          :key="index"
          :value="card.day"
          @click="selectedType = card.day"
        >
          {{ card.day }}
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown text="Heure" variant="outline-danger">
        <b-dropdown-item value="All" @click="selectedType = 'All'">
          <strong>Tous</strong>
        </b-dropdown-item>
        <b-dropdown-item
          v-for="(card, index) in info"
          :key="index"
          :value="card.hour"
          @click="selectedType = card.hour"
        >
          {{ card.hour }} Heures
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown text="Genre" variant="outline-danger">
        <b-dropdown-item value="All" @click="selectedType = 'All'">
          <strong>Tous</strong>
        </b-dropdown-item>
        <b-dropdown-item
          v-for="(card, index) in info"
          :key="index"
          :value="card.type"
          @click="selectedType = card.type"
        >
          {{ card.type }}
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown text="Scène" variant="outline-danger">
        <b-dropdown-item value="All" @click="selectedType = 'All'">
          <strong>Tous</strong>
        </b-dropdown-item>
        <b-dropdown-item
          v-for="(card, index) in info"
          :key="index"
          :value="card.stage"
          @click="selectedType = card.stage"
        >
          {{ card.stage }}
        </b-dropdown-item>
      </b-dropdown>
    </b-row>

    <div class="container-fluid d-flex flex-wrap">
      <div
        class="card_prog col-md-6 col-xl-4"
        v-for="(card, index) in info"
        :key="index"
      >
        <div class="card_title">
          <h3>{{ card.concert }}</h3>
          <span>
            {{ card.stage }} / {{ card.day }} / {{ card.hour }} Heures</span
          >
        </div>
        <div class="container_img">
          <p>{{ card.description }}</p>
          <img class="card_img" :src="card.img" />
        </div>
      </div>
    </div>
  </div>
</template>
/***************************************************JS******************************************************************************
*/

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://nation-sound.herokuapp.com/api/lineup")
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));
  },

  // created() {
  //   this.fetchData();
  // },
  // methods: {
  //   // Récupère les données de l'API
  //   fetchData: function() {
  //     let self = this;

  //     axios
  //       .get("https://nation-sound.herokuapp.com/api/lineup")
  //       .then(function(response) {
  //         // Datas pronvenant de l'API
  //         console.log(response.data);
  //         // Anciennes Data (qui va jarter)
  //         console.log(self.cards);
  //         // Nouvelle Data remplace l'ancienne
  //         self.cards = response.data;
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   },
  // },
  computed: {
    filteredCategory: function() {
      let self = this;
      let cardsArray = self.cards;
      let selectedType = self.selectedType;
      if (selectedType === "All") {
        return cardsArray;
      } else {
        cardsArray = cardsArray.filter(function(card) {
          if (
            card.type.indexOf(selectedType) !== -1 ||
            card.day.indexOf(selectedType) !== -1 ||
            card.hour.indexOf(selectedType) !== -1 ||
            card.stage.indexOf(selectedType) !== -1
          ) {
            return card.orderBy(this.bigArtists, 0);
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
  justify-content: center;
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;

  .btn {
    display: inline-block;
    font-weight: 400;
    color: var(--black);
    text-align: center;
    background-color: var(--green);
    border: 1px solid black;
    font-size: 1rem;
    border-radius: 2em;

    box-shadow: -2px 5px 0px var(--blue);
    margin: 0.5em;
    padding: 0 1em;
  }

  .dropdown-toggle::after {
    margin-left: 1em;
  }
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
  background: black;
  border: 2px solid var(--blue);
  height: 10em;
  margin-top: 0.5em;
  overflow: hidden;
  position: relative;

  &:hover, &:active, &:focus {
    p {
      opacity: 1;
    }

    img {
      opacity: 0.2;
    }
  }

  p {
    opacity: 0;
    position: absolute;
    padding: 1em;
    font-weight: bold;
    color: white;
    transition: 0.3s;
  }
}

.card_img {
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 100%;
  opacity: 1;
  transition: 0.3s;
}
</style>
