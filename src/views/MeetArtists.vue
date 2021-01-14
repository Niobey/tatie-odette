<template>
  <div class="MeetArtists">
    <h1>Rencontre Artiste</h1>

    <div class="MeetArtistsContent" v-for="(MeetArtist,index) in MeetArtistsContent" :key="index">
      <p>{{MeetArtist.content}}</p>
      
  </div>

      
  <div class="MeetArtistsTabs">
    <b-table striped hover day="day" :items="MeetArtistsTabs">
      <template  #cell(vendredi)="vendredi">
        <b class="text-info">{{ vendredi.value.last}}<br></b> <b>{{ vendredi.value.first }}</b>
      </template>

      <template #cell(samedi)="samedi">
        <b class="text-info">{{ samedi.value.last}}<br></b> <b>{{ samedi.value.first }}</b>
      </template>

      <template #cell(dimanche)="dimanche">
        <b class="text-info">{{ dimanche.value.last}}<br></b>  <b>{{ dimanche.value.first }}</b>
      </template>


    </b-table>
  </div>

      <div class="MeetArtistsCondition" v-for="MeetArtistsCondition in MeetArtistsConditions" :key="MeetArtistsCondition.condition">
      <p>{{MeetArtistsCondition.condition}}</p>
      <p>{{MeetArtistsCondition.ps}}</p>
  </div>
      
  </div>


  
</template>


<style lang="scss">


.MeetArtists{
padding-bottom: 15%;

.MeetArtistsContent{
  padding: 15vw;
  text-align: center;
  p{
    font-size: 1.25rem;
    font-weight: 700;
  }
}

.MeetArtistsTabs{
   padding: 5vw;
  text-align: justify;
}

.table{
  text-align: center;



tbody tr:nth-of-type(odd) {
    background-color: var(--yellow);
}

.text-info {
  color: var(--grey)!important;
  font-size: 1.05rem;
    font-weight: 700;
}

  td{
  width:30vw;
  height: 14vh;
  vertical-align: middle;
  }
}

.MeetArtistsCondition{
  text-align: center;
  p{
color: var(--dark);
  }
  
}
}




</style>

<script>
let hour = [
    "",
    "16h30-17h30",
    "17h30-18h30",
    "18h30-19h30"
];

let artist = [
  "Malaa",
  "Rammstein",
  "Vitalic",
  "NTM",
  "Jean Schultheis",
  "Salut c\'est cool"
];



export default {
    data(){
    return {

     MeetArtistsConditions:[
                {
                    condition: "Accès sous présentation de votre réservation",
                    ps: "- jauge Maximal 150 personnes - "
                  

                },
            ],

      

     MeetArtistsContent:[
                {
                    content: 'Toutes les rencontres avec les différents Artistes se dérouleront au Bar Le Live.',
                  

                },
            ],
            day: ['Vendredi', 'Samedi', 'Dimanche'],

            MeetArtistsTabs:[
              
              { 
                Vendredi: {first: hour[1], last: artist[3]}, 
                Samedi: {first: hour[1], last: artist[4]}, 
                Dimanche: hour[0] 
                },

              { 
                Vendredi: hour[0],
                Samedi: {first: hour[2], last: artist[5]}, 
                Dimanche:{first: hour[2], last: artist[1]} 
                },

              { 
                Vendredi: {first: hour[3], last: artist[0]}, 
                Samedi: hour[0], 
                Dimanche: {first: hour[3], last: artist[2]} ,
                },
              

              
            ]
}
    }
}
</script>
