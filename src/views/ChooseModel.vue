<template>
  <div class="print">
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
    <router-link to="/Marvel">
      <button class="card">
        Modèles du moment
      </button>
    </router-link>
  </div>
</template>

<style lang="scss">
.print {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
