<template>
  <div id="app">
    <button class="btn-menu" @click="showMenu()">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 20 20"
        xml:space="preserve"
      >
        <path id="XMLID_6_" class="burger0" d="M0 8.5h20v3H0z" />
        <path id="XMLID_7_" class="burger0" d="M0 0h20v3H0z" />
        <path id="XMLID_8_" class="burger0" d="M0 17h20v3H0z" />
      </svg>
    </button>

    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    showMenu: function() {
      document.querySelector(".menu").classList.add("slideAnim");
    }
  }
};
</script>

<style lang="scss">
@import 'styles/mixins';

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap");

:root {
  --yellow: #FCF5BE;
  --blue: #a9def9;
  --green: #d0f4de;
  --orange: #ff8e4e;
  --pink: #e4c1f9;
  --grey: #989898;
  --dark: #2f2f2f;


  --font-size: 14px;
}

/* GLOBAL */
html,
body, #app {
  font-family: "Raleway", sans-serif;
  font-size: var(--font-size);
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

h1 {
  border-bottom: 3px solid var(--orange);
  font-size: remCalc(18);
  font-weight: 900;
  line-height: remCalc(28);
  margin: 0 0 0 remCalc(22);
  padding: 36px 0 6px;
  max-width: 70%;
}

h2 {
  font-size: remCalc(16);
  font-weight: 900;
}

a {
  text-decoration: none;
  color: var(--dark);
}

ul {
  list-style: none;
}

// MENU BUTTON

.btn-menu {
  align-items: center;
  background: var(--dark);
  border: none;
  box-shadow: 3px 4px 0px var(--green);
  display: flex;
  float: right;
  height: 50px;
  justify-content: center;
  margin-top: remCalc(20);
  margin-right: remCalc(22);
  cursor: pointer;
  width: 50px;

  @media (min-width: 576px) {
    margin-top: remCalc(50);
    margin-right: remCalc(50);
  }

  svg {
    width: 20px;
  }

  .burger0 {
    fill: #fff;
  }
}
</style>
