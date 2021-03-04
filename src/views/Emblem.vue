<template>
  <div id="emblem">
    <h1>Emblèmes</h1>

    <div class="container-fluid d-flex flex-wrap justify-content-center">
      <div
        class="card_model"
        v-for="(emblem, index) in emblems"
        :key="index"
        @click="choosePrint(emblem.name, emblem.urlImage)"
      >
        <div class="card_title">
          <h3>{{ emblem.name }}</h3>

          <img class="card_img" :src="emblem.urlImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#emblem {
  h1 {
    text-align: center;
    margin: 1em auto;
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-style: italic;
  }

  .card_model {
    text-align: center;
    margin: 2em;
  }

  img.card_img {
    width: 200px;
    height: 200px;
    border: 3px solid var(--gold);
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>

<script>
let NameEmblem = [
  "Biscuit Lu",
  "La tour Eiffel",
  "La Grue Titan",
  "La Bonne Mère",
  "Le Pastis",
  "Grappe de Raisin",
  "La Baguette",
  "La cathédrale de Strasbourg",
];

let url = [
  "https://images.bfmtv.com/DAaDZN402B1zhLO0ZetWfb4VHGM=/4x3:1252x705/375x0/images/-465588.jpg",
  "https://www.benoitchocolats.com/wp-content/uploads/2013/06/tour_lait1-510x510.jpg",
  "https://assets.bigcartel.com/product_images/287440749/Capture+d%E2%80%99e%CC%81cran+2020-12-01+a%CC%80+14.18.49.png?auto=format&fit=max&w=650",
  "https://img.aws.la-croix.com/2014/08/08/1189790/Notre-Dame-Garde_1_730_396.jpg",
  "https://www.cdiscount.com/pdt2/4/6/7/1/700x700/005467/rw/pastis-51-70cl.jpg",
  "https://img2.freepng.fr/20180424/zqe/kisspng-wine-barbera-grape-computer-icons-tempting-grapes-logo-5adf724691a051.2104881615245932225965.jpg",
  "https://cuistou.fr/294-large_default/baguette-tradition-bio.jpg",
  "data:image/png;base64,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",
];

export default {
  data() {
    return {
      emblems: [
        {
          name: NameEmblem[0],
          urlImage: url[0],
        },
        {
          name: NameEmblem[1],
          urlImage: url[1],
        },
        {
          name: NameEmblem[2],
          urlImage: url[2],
        },
        {
          name: NameEmblem[3],
          urlImage: url[3],
        },
        {
          name: NameEmblem[4],
          urlImage: url[4],
        },
        {
          name: NameEmblem[5],
          urlImage: url[5],
        },
        {
          name: NameEmblem[6],
          urlImage: url[6],
        },
        {
          name: NameEmblem[7],
          urlImage: url[7],
        },
      ],
    };
  },
  methods: {
    choosePrint(choice, choiceUrl) {
      localStorage.setItem("willPrint", choice);
      localStorage.setItem("willPrintUrl", choiceUrl);
      return this.$router.push("/ChoosePackaging");
    },
  },
};
</script>
