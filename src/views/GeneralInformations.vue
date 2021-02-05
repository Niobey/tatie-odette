<template>
  <div class="container-fluid">
    <div class="GeneralInformations">
      <h1>Informations générales</h1>

      <div class="alert" v-for="(alert, index) in alerts" :key="`alert-${index}`">
        <b-card>
          <b-card-title>{{ alert.title }}</b-card-title>
          <b-card-text>
            {{ alert.description }}
          </b-card-text>
        </b-card>
      </div>

      <div v-for="(information, index) in informations" :key="`infoG-${index}`">
        <div class="informations">
          <h4>{{ information.title }}</h4>
          <b-card :img-src="information.img" img-alt="Card image" img-top>
            <b-card-text>
              {{ information.content }}
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.GeneralInformations {
  padding-bottom: 15%;

  .card {
    border: none;
  }
  .informations {
    padding-left: 5vw;
    padding-right: 5vw;
    margin-top: 5vh;

    .card {
      img {
        padding: 1.25rem;
      }
    }

    h4 {
      text-align: center;
      margin-bottom: 3vh;
    }

    p {
      text-align: justify;
    }
  }

  .alert {
    text-align: center;
    margin-top: 6vh;
    background-color: var(--orange);
    color: var(--dark);
    font-weight: 700;
    border-radius: 0;
    box-shadow: -8px 10px 0px var(--yellow);
    margin-left: -15px;
    margin-right: -15px;
    // margin-left: 3vw;
    // margin-right: 3vw;
    // border-radius: 10px;

    .card {
      background-color: var(--orange);
    }
    .card-text {
      font-size: 1.15rem;
    }

    h4 {
      font-size: 1.65rem;
    }
  }
  img.card-img-top {
    border-radius: 40px;
  }
}
</style>

<script>
import axios from "axios";

import fair from "../assets/fair.jpg";
import concert from "../assets/concert.jpg";
import teddy from "../assets/teddy.jpg";
import arbre from "../assets/arbre.jpg";

export default {
  data() {
    return {
      alerts: [
        {
          title: "Alerte Méteo",
          description: "Grosses averses attendues dimanche 14h-19h",
        },
      ],

      informations: [
        {
          title: "Le site du Festival",
          content:
            "En plein cœur du territoire d’Erdre et Gesvres, la commune de Nort-sur-Erdre accueille depuis 2006 le festival dans l’enceinte du parc du Port Mulon. D’une superficie de 5 ha, ce lieu constitue un magnifique écrin, qui permet au public de profiter d’un site naturel, arboré, longé par la rivière l’Erdre, à quelques minutes à pieds du centre-ville. Ce lieu privilégié abrite notamment le château du Port Mulon, bâtisse datant du XVIIIème siècle. Le château abrite tout l’année un espace de co-working, la ligue d’improvisation de Nantes Atlantique et différents cours de sport. Durant le festival, ce sont plusieurs pôles de l’organisation qui s’y installent : l’espace famille et l’espace presse.",
          img: fair,
        },
        {
          title: "Notre Associations",
          content:
            "Le festival poursuit son engagement en faveur de la sauvegarde des grands singes. Cette initiative est affirmée avec la création d’un partenariat avec le Zoo de la Boissière du Doré. Ce parc est devenu une référence en la matière depuis plusieurs années, notamment en terme de conditions de vie pour les animaux et d’initiatives liées à la sauvegarde des espèces. Des soins à la reproduction en passant par les aménagements, le zoo est devenu un des écrins les plus beaux et adaptés qui soit. En parallèle, de nombreuses actions sont menées à travers le monde par le zoo pour sauvegarder l’habitat naturel de nombreuses familles d’espèces, y compris les grands singes. Une association nommée Boissière Mervent Conservation a même été créée en 2013, apportant une aide financière à des programmes de conservation. Concernant les grands singes, cette aide concerne notamment la construction d’une clinique à Sumatra pour soigner la faune locale blessée avant de la remettre en liberté dans une zone protégée. L’association La Nuit de l’Erdre affiche son soutien envers le Zoo de la Boissière du Doré dans ces initiatives, avec de la sensibilisation pendant le festival et une participation à l’aide apportée à ces programmes.",
          img: teddy,
        },
        {
          title: "EDITION 2019",
          content:
            "Une Année particulièrement énorme !",
          img: concert,
        },
        {
          title: "FESTIVAL ET ENVIRONNEMENT",
          content:
            "La politique du festival est de respecter au maximum l’environnement et la biodiversité du site. Des actions sont mises en place tout au long de l’année dans l’organisation générale et sur site auprès des festivaliers. En interne ou aux côtés de prestataires, des solutions sont trouvées pour que les déchets sont triés et réduits à leur minimum et des systèmes d’évacuation verts sont installés. Enfin, une brigade verte mobile est chargée de veiller à la prévention, l’information et l’entretien du site pendant les trois jours de festivités.",
          img: arbre,
        },
      ],
    };
  },
  mounted() {
    axios
      .get("https://nation-sound.herokuapp.com/api/notification")
      .then((response) => (this.alerts = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
