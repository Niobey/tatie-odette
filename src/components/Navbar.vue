<template>
  <header>
    <!-- <p>Tatie Odette</p> -->
        <Logo id="logo" title="Logo Tatie Odette" />
    <!-- <img src="../assets/TatieOdetteLogo2.png" alt="Logo Tatie Odette" /> -->
  </header>
</template>

<script>
import Logo from "../assets/TatieOdetteLogo2.svg";

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
header {
  padding: 1em 0 0 2em;

  #logo {
    max-width: 8em;
    position: absolute;
  }

  p {
    font-size: 1.6em;
    margin: 0;
  }
}
</style>
