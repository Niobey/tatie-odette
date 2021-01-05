<template>
  <div id="app">
    <!-- <Navbar /> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/map">Map</router-link>
      <router-link to="/programmation">Programmation</router-link>
      <router-link to="/tiketoffice">TicketOffice</router-link>
      <router-link to="/praticalinformations">PraticalInformations</router-link>
      <router-link to="/partners">Parters</router-link>MeetArtists
      <router-link to="/generalinformations">GeneralInformations</router-link>
      <router-link to="/meetartists">MeetArtists</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/legalnotice">LegalNotice</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";

// export default {
//   components: {
//     Navbar,
//   },
// };
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap");

:root {
  --yellow: #fcf6bd;
  --blue: #a9def9;
  --green: #d0f4de;
  --orange: #ff8e4e;
  --pink: #e4c1f9;
  --grey: #989898;
  --dark: #2f2f2f;
}

/* MIXINS */

@function remCalc($target-px, $context: 16) {
  @return ($target-px / $context) * 1rem;
}

/* GLOBAL */

body {
  font-family: "Raleway", sans-serif;
  font-size: remCalc(14);
}

h1 {
  border-bottom: 3px solid var(--orange);
  font-size: remCalc(18);
  font-weight: 900;
  line-height: remCalc(28);
}

h2 {
  font-size: remCalc(16);
  font-weight: 900;
}

a {
  text-decoration: none;
  color: var(--dark);
}
</style>
