<template>
  <div class="format wrapper">
    <div v-for="(format, index) in formats" :key="index">
      <button
        class="card"
        @click="chooseFormat(format.name, format.duration, format.price)"
      >
        {{ format.name }}
        <div class="infos">
          <p>{{ format.duration }} min</p>
          <p>{{ format.price }} €</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formats: [
        {
          name: "Grand format",
          duration: 20,
          price: 7,
        },
        {
          name: "Petit Format",
          duration: 10,
          price: 4,
        },
      ],
    };
  },
  methods: {
    chooseFormat(name, duration, price) {
      localStorage.setItem("format", name);
      localStorage.setItem("duration", duration);
      localStorage.setItem("price", price);
      return this.$router.push("/ChoosePrint");
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
