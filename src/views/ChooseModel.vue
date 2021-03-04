<template>
  <div class="print wrapper">
    <div>
      <router-link to="/Emblem">
        <button class="card">
          Emblèmes
        </button>
      </router-link>
      <router-link to="/Pictogram">
        <button class="card">
          Pictogrammes
        </button>
      </router-link>
      <router-link to="/#">
        <button class="card">
          Modèles du moment
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.print div {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
