<template>
  <div class="about">
    <h1>Contact</h1>
    <div class="text">
      <h2>Qui sommes-nous ?</h2>
      <p>« Live Events » est une entreprise
      </p>
      <p>d’organisation et de promotion de spectacles basée sur Paris et créée en 2005.</p>
      <p>Elle compte aujourd’hui une centaine
      d’employés.</p>
    </div>
    <div class="presentation">
      <h2>Axel Gonon</h2>
      <img class="image" src="../assets/img/axel.jpg" alt="axel"/>
    </div>
  </div>
</template>


<style lang="scss">
.image {
  margin-left: 1px;
   width:100px;
   height: 100px;
   clip-path:ellipse(50% 50%);
}

.presentation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
}

.text {
  margin-left: 75px;
  margin-top: 60px;
}
</style>

