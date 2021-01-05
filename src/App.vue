<template>
  <div id="app">
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
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
