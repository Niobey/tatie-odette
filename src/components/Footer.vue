<template>
  <footer>
    <!-- <router-link to="/"> -->
    <button type="button" @click="goBack">
      <img src="../assets/previous.png" alt="Previous" />
    </button>
    <!-- </router-link> -->
    <h2>Choisissez une option</h2>
    <router-link to="/">
      <button type="button">
        <img src="../assets/home.png" alt="Home" />
      </button>
    </router-link>
  </footer>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
footer {
  background: var(--brown);
  padding: 0.5em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gold);

  h2 {
    font-size: 1.3em;
  }

  button {
    height: 3em;
    width: 3em;
    background: var(--gold);
    border-radius: 50px;
    border: none;

    img {
      height: 60%;
    }
  }
}
</style>
