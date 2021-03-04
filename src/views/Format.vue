<template>
  <div class="format wrapper">
    <router-link to="/ChoosePrint">
      <button class="card" @click="chooseFormat(7)">
        Grand Format
        <div class="infos">
          <p>20 min</p>
          <p>7€</p>
        </div>
      </button>
    </router-link>
    <router-link to="/ChoosePrint">
      <button class="card" @click="chooseFormat(4)">
        Petit Format
        <div class="infos">
          <p>10 min</p>
          <p>4€</p>
        </div>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: 7,
      small: 4,
    };
  },
  methods: {
    chooseFormat(choice) {
      localStorage.setItem("format", choice);
    },
  },
};
</script>

<style lang="scss">
.infos {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 90%;
  justify-content: space-between;

  p {
    margin: 0 0 0.5em;
    font-size: 0.6em;
    opacity: 0.8;
  }
}
</style>
