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
  methods: {
    showMenu: function() {
      document.querySelector(".menu").classList.add("slideAnim");
    },
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
  font-size: var(--font-size);
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Playfair Display", serif;
  font-weight: 600;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: var(--gold);
  border: none;
  border-radius: 16px;
  color: var(--brown);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10em;
  min-width: 16em;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
}

.btn {
  background: var(--gold);
  border: none;
  border-radius: 100px;
  color: var(--brown);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16em;
  padding: 0.6em 3em 0.7em;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  font-size: 1.375em;
}

a {
  color: initial;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    // color: var(--orange);
  }
}

ul {
  list-style: none;
}

// BUTTON GLOBAL

.big-btn {
  background: var(--green);
  border-radius: 50px;
  border: 1px solid black;
  box-shadow: -2px 5px 0 var(--blue);
  cursor: pointer;
  font-weight: 700;
  padding: 1em 4em;
}

// MENU BUTTON

.btn-menu {
  align-items: center;
  background: var(--dark);
  border: none;
  box-shadow: 3px 4px 0px var(--green);
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  position: fixed;
  right: remCalc(22);
  top: remCalc(20);
  width: 50px;
  z-index: 500;

  @media (min-width: 576px) {
    top: remCalc(50);
    right: remCalc(50);
  }

  svg {
    width: 20px;
  }

  .burger0 {
    fill: #fff;
  }
}

.btn-sort {
  background: var(--green);
  border: 1px solid black;
  border-radius: 1em;
  box-shadow: -2px 5px 0px var(--blue);
  margin: 0.5em;
  padding: 0 1em;

  &-now {
    background: var(--pink);
  }

  &.active {
    background: var(--yellow);
  }
}
</style>
