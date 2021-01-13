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
      <!-- <h2 class="text">Axel Gonon</h2> -->
      <!-- <img class="image" src="../assets/img/axel.jpg" alt="axel"/> -->
      <div v-for="(contact, index) in contacts"  :key="index" v-bind:src="contact">
        <img  :src="contact.image" />
        <p class="presentation">{{ contact.name }}</p>
         
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        contacts: [{
          image: '../assets/axel.jpg',
          name: 'axel'
        },
        {
          image: '../assets/axel.jpg',
          name: 'gonon'
        }]
      }
    }
  }
</script>


<style lang="scss">
.image {
  margin-right: 50px;
  margin-top: 50px;
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
  margin-left: 50px;
  margin-top: 60px;
}

.img {
  margin-top: 0.5em;
  width: 100%;
  height: 90%; 
  border: 2px solid var(--blue);
}
</style>