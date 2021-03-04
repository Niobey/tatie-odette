<template>
  <div class="choosePackaging wrapper">
    <router-link to="/Eticket">
      <button class="card" @click="chooseClassic">
        Classique
      </button>
    </router-link>
    <router-link to="/Packaging">
      <button class="card" @click="chooseGift">
        Pour offrir
        <!-- <div class="infos"> -->
        <p class="giftPrice">+{{ gift }} €</p>
        <!-- </div> -->
      </button>
    </router-link>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return {
      gift: 0.8,
    };
  },
  methods: {
    chooseGift() {
      localStorage.setItem("gift", this.gift);
    },
    chooseClassic() {
      localStorage.setItem("gift", 0);
    },
  },
};
</script>

<style lang="scss">
.giftPrice {
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
