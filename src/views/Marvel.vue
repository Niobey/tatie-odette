<template>
  <div id="Marvel" class="models-library">
    <h1>Modèles du moment</h1>

    <div class="container-fluid d-flex flex-wrap justify-content-center">
      <div
        class="card_model"
        v-for="(marvel, index) in Marvels"
        :key="index"
        @click="choosePrint(marvel.name, marvel.urlImage)"
      >
        <div class="card_title">
          <h3>{{ marvel.name }}</h3>

          <img class="card_img" :src="marvel.urlImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// #Marvel {
//   h1 {
//     text-align: center;
//     color: #451e10;
//     margin-top: 6vh;
//     margin-bottom: 8vh;
//     font-size: 1.75rem;
//   }

//   h3 {
//     font-size: 1.25rem;
//     font-style: italic;
//   }

//   .card_prog {
//     text-align: center;
//     margin-bottom: 10vh;
//   }

//   img.card_img {
//     width: 200px;
//     height: 200px;
//     border: 1px solid #451e10;
//     border-radius: 20px;
//   }
// }
</style>

<script>
let nameMarvel = [
  "Hulk",
  "Captain America",
  "Iron Man",
  "Thor",
  "Spider Man",
  "Wolverine",
  "Thanos",
  "Black Panther",
  "Ant-Man",
];

let url = [
  "https://joueclub-joueclub-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/0f5a40c483355aa7fb4582114e960e8d8c030107_124342.jpeg",
  "https://joueclub-joueclub-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/83695ba7afb65b77e46eea9910c508b4d86d47f9_148695.jpeg",
  "https://www.cdiscount.com/pdt2/s/0/0/1/700x700/hase1410es00/rw/avengers-infinity-war-iron-man-figurine-titan.jpg",
  "https://www.maxitoys.fr/media/catalog/product/cache/fcf6fde2aecaa3a19404630833ab6e02/1/2/12619679-12619679-mt_picture1-50972.jpg",
  "https://www.cdiscount.com/pdt2/u/4/0/1/300x300/hase0649eu40/rw/marvel-spider-man-figurine-titan-30cm.jpg",
  "https://www.albumcomics.com/131445-thickbox_default/marvel-figurine-16-wolverine-30-cm.jpg",
  "https://joueclub-joueclub-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c5d9cc318de9e072f57348d64883e4ae8951f5eb_124333.jpeg",
  "https://www.cdiscount.com/pdt2/1/4/1/1/700x700/has5010993669141/rw/marvel-avengers-figurine-black-panther-titan-her.jpg",
  "https://joueclub-joueclub-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/af2509f5138e8500ecc04ca4243acd57853c334f_99202.jpeg",
];

export default {
  data() {
    return {
      Marvels: [
        {
          name: nameMarvel[0],
          urlImage: url[0],
        },
        {
          name: nameMarvel[1],
          urlImage: url[1],
        },
        {
          name: nameMarvel[2],
          urlImage: url[2],
        },
        {
          name: nameMarvel[3],
          urlImage: url[3],
        },
        {
          name: nameMarvel[4],
          urlImage: url[4],
        },
        {
          name: nameMarvel[5],
          urlImage: url[5],
        },
        {
          name: nameMarvel[6],
          urlImage: url[6],
        },
        {
          name: nameMarvel[7],
          urlImage: url[7],
        },
        // {
        //   name: nameMarvel[8],
        //   urlImage: url[8],
        // },
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
