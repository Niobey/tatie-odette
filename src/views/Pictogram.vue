<template>
  <div id="Pictogrammes">
    <h1>Pictogrammes</h1>


    <div class="container-fluid d-flex flex-wrap">
      <div
        class="card_prog col-md-6 col-xl-4"
        v-for="(picto, index) in Pictos"
        :key="index"
      >
        <div class="card_title">
          <h3>{{ picto.name }}</h3>

          <img class="card_img" :src="picto.urlImage" />
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="scss">
#Pictogrammes{

h1{
  text-align: center;
  color: #451E10 ;
  margin-top: 6vh;
  margin-bottom: 8vh;
  font-size: 1.75rem;

}

h3{
  font-size: 1.25rem;
  font-style: italic;
}

.card_prog{
  text-align: center;
  margin-bottom: 10vh;
  background-color: #fff;
}

  img.card_img{
      width: 200px;
      height: 200px;
    }
    
  


}

</style>

<script>


let NamePicto = [
  "coeur",
  "cactus",
  "fleur",
  "fusée",
  "voiture",
  "terre",
  "Étoile",
  "Diamant",


];

let url = [
  "https://www.decoho.com/57869-large_default/ardoise-silhouette-murale-coeur.jpg",
  "https://photos.gammvert.fr/magazine/picto/cactus.jpg",
  "https://picto-fr.s3.eu-west-3.amazonaws.com/pictos/images/000/000/493/medium/Fleurs.png?1484660578",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9tdiNckCs1BoY3Ut4SbkO4KXVfqv_mSlkA&usqp=CAU",
  "data:image/png;base64,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",
  "https://i.pinimg.com/originals/2f/be/df/2fbedfafeeecfe97bc8b5d0e6a7b1850.jpg",
  "data:image/png;base64,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",
  "https://www.vaugirard-demenagement.fr/wp-content/uploads/sites/6154/2018/06/picto-diamant.png",

];



export default {
      data(){
    return {

     Pictos:[
                {
                    name: NamePicto[0],
                    urlImage:url[0]
                },
                {
                    name: NamePicto[1],
                    urlImage: url[1]
                },
                {
                    name: NamePicto[2],
                    urlImage: url[2]
                },
                {
                    name: NamePicto[3],
                    urlImage: url[3]
                },
                {
                    name: NamePicto[4],
                    urlImage: url[4]
                },
                {
                    name: NamePicto[5],
                    urlImage: url[5]
                },
                {
                    name: NamePicto[6],
                    urlImage: url[6]
                },
                {
                    name: NamePicto[7],
                    urlImage: url[7]
                },


            ],
    }
}
}
</script>

