<template>
  <div class="LegalNotice">
    <h1>Mentions Légales</h1>

    <div class="LegalNoticeContent" v-for="(LegalNotice,index) in LegalNotices" :key="index">
      <p>{{LegalNotice.content}}</p>
      <p>{{LegalNotice.host}}</p>
  </div>
  </div>
</template>


<style lang="scss">
.LegalNotice{
padding-bottom: 15%;

.LegalNoticeContent{
  padding: 15vw;
  text-align: justify;
}
}




</style>

<script>
export default {
    data(){
    return {
     LegalNotices:[
                {
                    content: 'Le présent site Internet https://www.nation-sound-festival.com est la propriété de la Société Live Events, dont le siège social est situé au 18 rue montreuil - 75000 Paris, au capital social de 5000€, immatriculé sous le numéro 527 868 383 00086, téléphone 02 00 00 00 00, adresse courriel contact@nation-sound.fr. Le directeur de la publication est Madame Josianne Berkins, ayant la qualité de Gérant de la société Live Events. Informations relatives à l’hébergeur :Société OVH dont le siège social est situé 2 rue Kellermann - 59100 Roubaix – France ,téléphone 09 72 10 10 07',

                    host :'Informations relatives à l’hébergeur :Société OVH dont le siège social est situé 2 rue Kellermann - 59100 Roubaix – France ,téléphone 09 72 10 10 07'
                },
            ],
}
    }
}
</script>