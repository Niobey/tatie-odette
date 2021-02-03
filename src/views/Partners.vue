<template>
<div class="container-fluid">
  <div class="partner">
    <h1>Partners</h1>
    <div class="text">
     
      <p>Chaque année depuis 3 ans, la société d’évènementiel <span>« Live Events »</span> 

      organise un festival de musique appelé «
Nation Sounds » dans la région parisienne afin de récolter des fonds pour une association humanitaire.
      </p>
      <h2>
        Un grand merci à nos partenaires qui soutiennent ce festival :
        </h2>
    </div>
    <div class="presentation">
      <div v-for="(contact, index) in contacts"  :key="index" v-bind:src="contact">
        <img class="image" :src="contact.image" />
        </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        contacts: [{
          image: 'https://f1i.auto-moto.com/wp-content/uploads/sites/17/2018/01/DSkT_ahXkAA7PKf.jpg',
        },
        {
          image: 'data:image/png;base64,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',
        },
        {
          image: 'https://cdn.1min30.com/wp-content/uploads/2019/05/Apple-logo-1.jpg',
        },
        {
          image: 'https://www.figs-education.com/wp-content/uploads/2020/09/logo-wis-400x400.png',
        },]
      }
    }
  }
</script>


<style lang="scss">

.partner{
.image {
  text-align: center;
   width:100px;
   height: 100px;
   margin-top: 12vh;
   border-radius: 20px;
}

.presentation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;

 flex-direction: column;
  margin-left: auto;
    margin-right: auto;
}

.text {
  
  margin-top: 12vh;
  text-align: justify;
  padding: 3vw;

  span{
    color:var(--orange);
    font-size: 1.2rem;
    font-weight: 700;
  }
}
}
</style>

