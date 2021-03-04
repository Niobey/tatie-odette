<template>
  <div class="packaging">
    <!-- <h1>Choisissez votre emballage</h1> -->
    <div
      v-for="(packaging, index) in packagings"
      :key="index"
      @click="choosePattern(packaging.name)"
    >
      <div>
        <p class="p-name">{{ packaging.name }}</p>
        <div
          class="pattern"
          :style="{ backgroundImage: 'url(' + packaging.urlImage + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return {
      packagings: [
        {
          name: "Fleurs",
          urlImage:
            "https://www.maskingtape.fr/6078-large_default/feuilles-papier-cadeau-olivia-blue.jpg",
        },
        {
          name: "Coeurs",
          urlImage:
            "https://www.cadeau-maestro.com/67607-large_default/papier-cadeau-coeurs.jpg",
        },
        {
          name: "Pois",
          urlImage:
            "https://www.maskingtape.fr/9445-thickbox_default/papier-cadeau-fond-rouge-a-pois-blanc-2m.jpg",
        },
        {
          name: "Fête",
          urlImage:
            "https://static.nashvillewraps.com/images/sku/A629485-XLARGE.jpg",
        },
        {
          name: "Flocons",
          urlImage:
            "https://previews.123rf.com/images/vectaray/vectaray1810/vectaray181000067/110753355-seamless-christmas-gift-wrapping-paper-pattern-texture-wallpaper.jpg",
        },
        {
          name: "Doré",
          urlImage:
            "https://i.ebayimg.com/images/g/J~cAAOSwGphbUgLK/s-l400.jpg",
        },
      ],
    };
  },
  methods: {
    choosePattern(choice) {
      localStorage.setItem("pattern", choice);
      return this.$router.push('/Eticket');
    },
  },
};
</script>

<style lang="scss">
.packaging {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: space-evenly;
  margin: auto;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
  }
}

.p-name {
  text-align: center;
}

.pattern {
  height: 8em;
  width: 8em;
  border-radius: 100px;
  background-size: cover;
  margin: 0 4em 2.5em;
}
</style>
