<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "styles/mixins";

@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");
// font-family: 'Heebo', sans-serif;

:root {
  --gold: #debf7c;
  --brown: #451e10;
  --grey: #d4cfcd;
  --dark: #202020;

  --font-size: 100%;
}

/* GLOBAL */
html,
body,
#app {
  background: var(--grey);
  color: var(--brown);
  font-size: var(--font-size);
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  height: 100%;
}

.card {
  align-items: center;
  background: var(--gold);
  border: none;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--brown);
  display: flex;
  font-size: 2em;
  justify-content: center;
  margin: 1rem;
  min-height: 12rem;
  min-width: 20rem;
}

.btn {
  align-items: center;
  background: var(--gold);
  border: none;
  border-radius: 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--brown);
  display: flex;
  justify-content: center;
  font-size: 1.375em;
  min-width: 16em;
  padding: 0.6em 3em 0.7em;
}

a {
  color: initial;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

// MODELS LIBRARIES

.models-library {
  margin: auto;
  max-width: 80em;

  h1 {
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 4vh;
  }

  h3 {
    font-size: 1.25rem;
    font-style: italic;
  }
}

.card_model {
  text-align: center;
  margin: 1em;
}

.card_img {
  width: 200px;
  height: 200px;
  border: 3px solid var(--gold);
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
