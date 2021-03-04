<template>
  <div class="home wrapper">
    <router-link to="/Format">
      <button class="btn enter">Touchez l'écran pour commencer</button>
    </router-link>
    <div class="flags">
      <button type="button" class="flag france"></button>
      <button type="button" class="flag spain"></button>
      <button type="button" class="flag england"></button>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  background-image: url("../assets/heart-clover-side.jpg");
  height: 100%;
  width: 100%;
  background-position-y: 30%;
  background-size: cover;
  flex-direction: column;
}

.enter {
  margin-top: 3em;
}

.flags {
  display: flex;
  justify-content: center;
}

.flag {
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 8px;
  height: 3em;
  margin: 2em 1em;
  width: 5em;
}

.france {
  background-image: url("../assets/france.jpg");
}

.spain {
  background-image: url("../assets/spain.png");
}

.england {
  background-image: url("../assets/england.png");
}
</style>
