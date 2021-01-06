import VueSimpleAccordion from 'vue-simple-accordion';


<template>
  <div class="PraticalInformations">
    <h1>Informations pratiques et FAQ</h1>
    
    <h2 class="titlefind">Nous trouver</h2>

  <p class="adress">Adresse et autres infos pratiques.</p>

<div class="PraticalInformationsArcordion">
        <div :key="index" v-for="(item,index) in questions" role="tablist">
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">{{item.title}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ item.content }}</b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>  
    </div>


  </div>
</template>

<style lang="scss">
.PraticalInformations{

.btn-info{
   background-color: var(--yellow) ; 
   border-color: var(--yellow);
   font-weight: 700;
   color:black;
}

.btn-info:hover {
  background-color: var(--blue) ; 
   border-color: var(--blue);
   font-weight: 700;
   color:black;
}
.adress{
  text-align: center;
}

.PraticalInformationsArcordion{
margin-top: 8.5vh;
}

.card{
  height: auto;
}

h2.titlefind{
  text-align: center;
  margin-top: 1.5em
}
} 
</style>




<script>
export default {
    data: function(){
        return{
            questions:[
                {
                    title: 'Comment devenir Bénévole ?',
                    content: 'Lorem Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
                },
                {
                    title: 'Comment me faire rembourser ?',
                    content: 'Lorem2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
                },    
                {
                    title: 'Où sont les Parking ?',
                    content: 'Lorem3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
                },      
                {
                    title: 'Que faire en cas de vol ou de perte ?',
                    content: 'Lorem4 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
                },
                  {
                    title: 'Comment accéder ou festival ?',
                    content: 'Lorem5 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
                },
                
            ]
        }
    }
  }


</script>