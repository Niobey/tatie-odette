<template>
<div class="container-fluid">
  <div class="GeneralInformations">
    <h1>Informations générales</h1>


    <div class="alert" v-for="(alert,index) in alerts" :key="index">
      <b-card >
        <b-card-title>{{alert.title}}</b-card-title>
        <b-card-text>
            {{alert.content}}
        </b-card-text>
      </b-card>

  </div>

 <div v-for="(information,index) in informations" :key="index">
    <div class="informations">
    <h4>{{information.title}}</h4>
    <b-card :img-src="information.img" img-alt="Card image" img-top>
      <b-card-text>
        {{information.content}}
      </b-card-text>
    </b-card>

  </div>

</div>
</div>
</div>
  

  


</template>




<style lang="scss">
.GeneralInformations{
padding-bottom: 15%;

.card{
  border: none;

}
.informations{
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 5vh;
 
 .card{
   img{
     padding: 1.25rem;
   }
 }

  h4{
    text-align: center;
    margin-bottom: 3vh;
  }

  p{
    text-align: justify;
  }
}

.alert{
  text-align: center;
   margin-top: 6vh;
   background-color: var(--orange);
   color: var(--dark);
   font-weight: 700;
    border-radius: 10px;
    margin-left: 3vw;
    margin-right: 3vw;
   

   .card{
     background-color: var(--orange);
     
   }
  .card-text{
    font-size: 1.15rem;
  }

  h4{
    font-size: 1.65rem;
  }

}
img.card-img-top{
border-radius: 40px;
}

} 
</style>

<script>


import fair from "../assets/fair.jpg";
import concert from "../assets/concert.jpg";
import teddy from "../assets/teddy.jpg";
import arbre from "../assets/arbre.jpg";

export default {
  data(){
    return {
     alerts:[
                {
                    title: 'Alerte Méteo',
                    content: 'Grosses averses attendues dimanche 14h-19h',
                },
            ],


       informations:[
                {
                    title: 'Le site du Festival',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    img:fair,
                },
                                {
                    title: 'Notre Associations',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    img:teddy,
                },
                                {
                    title: 'EDITION 2019',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    img:concert,
                    
                },
                                {
                    title: 'FESTIVAL ET ENVIRONNEMENT',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    img:arbre,
                },
            ]
  }


  }
   }

</script>
