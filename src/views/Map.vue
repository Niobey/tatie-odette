<template>
  <div class="map-page">
    <h1>Plan du festival</h1>
    <div class="map-container">
      <div class="container-sort">
        <!-- POI buttons for markers sort -->
        <button
          type="button"
          class="btn-sort"
          @click="selectedMarkers = 'all'"
          :class="{ active: selectedMarkers === 'all' }"
        >
          Tous
        </button>

        <button
          type="button"
          v-for="(poiType, index) in poiTypes"
          :key="index"
          class="btn-sort"
          :class="[poiType.type, { active: selectedMarkers === poiType.type }]"
          @click="selectedMarkers = poiType.type"
        >
          {{ poiType.type }}
        </button>
        <button type="button" class="btn-sort btn-sort-now">
          Concert en ce moment
        </button>
      </div>

      <div class="poiDescription">
        <h2 v-if="poiInfos">{{ poiInfos.name }} :</h2>
        <div v-if="poiInfos">
          <p v-if="poiInfos.description">{{ poiInfos.description }}</p>
          <p v-if="poiInfos.gender">{{ poiInfos.gender }}</p>
          <p v-if="poiInfos.number">x{{ poiInfos.number }}</p>
          <p v-if="poiInfos.company" class="companyPOI">
            {{ poiInfos.company }}
          </p>
        </div>
      </div>

      <!-- map -->
      <l-map
        :zoom="zoom"
        :center="center"
        :enableHighAccuracy="enableHighAccuracy"
        @ready="onReady"
        @locationfound="onLocationFound"
        class="map"
      >
        <l-marker
          v-for="(marker, index) in filteredPOI"
          :key="index"
          :lat-lng="setLatLng(marker.lat, marker.lng)"
          :class-name="marker.name"
          @click="poiInfos = marker"
        >
          <l-icon :icon-anchor="staticAnchor">
            <Stage v-if="marker.type === 'stage'" class="marker"/>
            <Wc v-if="marker.type === 'wc'" class="marker"/>
            <Bar v-if="marker.type === 'bar'" class="marker"/>
            <Catering v-if="marker.type === 'catering'" class="marker"/>
          </l-icon>
        </l-marker>

        <!-- User geolocation -->
        <l-marker :lat-lng="userLocation">
          <l-icon :icon-anchor="staticAnchor" class-name="arrow-marker">
            <ArrowMarker class="arrow-marker" />
          </l-icon>
        </l-marker>

        <l-tile-layer :url="url" :attribution="attribution" />

        <!-- Festival area -->
        <l-geo-json
          v-if="geojson"
          :geojson="geojson"
          :options-style="styleGeo"
        ></l-geo-json>

        <!-- <l-control position="bottomleft">
        <button>
          I am a useless button!
        </button>
      </l-control> -->
      </l-map>
    </div>
  </div>
</template>

<script>
import ArrowMarker from "../assets/markers/marker-arrow.svg";
import Stage from "../assets/markers/stage.svg";
import Wc from "../assets/markers/wc.svg";
import Bar from "../assets/markers/bar.svg";
import Catering from "../assets/markers/catering.svg";
import { latLng, Control } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LGeoJson,
  LControl,
} from "vue2-leaflet";

// https://leafletjs.com/reference-1.7.1.html#control -> Heading (ctrl + D : North)
// https://stackoverflow.com/questions/28396206/google-maps-js-api-v3-show-orientation-arrow-on-my-location-marker
// https://mobiforge.com/design-development/html5-mobile-web-device-orientation-events

// https://www.npmjs.com/package/vue2-leaflet-rotatedmarker

// Geo Json sont des coordonnées pour ajouter un svg sur la map

const poi = [
  {
    name: "WC",
    lat: 47.206007,
    lng: -1.5405,
    type: "wc",
    gender: "female",
    number: 12,
  },
  {
    name: "La bonne galette",
    lat: 47.204892,
    lng: -1.538838,
    type: "catering",
    description:
      "La bonne galette est le meilleur point restauration pour manger un bonne galette bretonne comme il se doit !",
    company: "Le Breton",
  },
  {
    name: "Le trou Normand",
    lat: 47.205377,
    lng: -1.538629,
    type: "bar",
    description:
      "Quoi de mieux qu'un bon trou normand entre le plat et le fromage ?",
    company: "Le Normand",
  },
  {
    name: "Pastis 44",
    lat: 47.206557,
    lng: -1.54121,
    type: "bar",
    description:
      "Toujours avoir un petit goût du Sud sur vos papilles, voire plusieurs...",
    company: "Le Toulousain",
  },
  {
    name: "Scène 1",
    lat: 47.206557,
    lng: -1.54021,
    type: "stage",
  },
  {
    name: "Scène 2",
    lat: 47.205621,
    lng: -1.54164,
    type: "stage",
  },
  {
    name: "Scène 3",
    lat: 47.203945,
    lng: -1.542,
    type: "stage",
  },
];

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LIcon,
    ArrowMarker,
    LControl,
    Stage,
    Wc,
    Bar,
    Catering
  },
  data() {
    return {
      poiInfos: null,
      selectedMarkers: "all",
      zoom: 17,
      center: [47.205584, -1.540117],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      userLocation: latLng(47.20558, -1.538199),
      staticAnchor: [22, 37],
      enableHighAccuracy: true,
      styleGeo: {
        fillColor: "#d0f4de",
        fillOpacity: 1,
      },
      markers: poi,
      poiTypes: [
        {
          type: "stage",
          icon: "../assets/markers/stage.png",
        },
        {
          type: "bar",
          icon: "../assets/markers/stage.png",
        },
        {
          type: "catering",
          icon: "../assets/markers/marker-arrow.svg",
        },
        {
          type: "wc",
          icon: "../assets/markers/marker-arrow.svg",
        },
      ],
      geojson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              stroke: "#ceeef2",
              "stroke-width": 2,
              "stroke-opacity": 1,
              fill: "#b8faff",
              "fill-opacity": 1,
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-1.5388906002044678, 47.20548790330349],
                  [-1.5395450592041016, 47.206668685534865],
                  [-1.5409934520721436, 47.20655935495097],
                  [-1.5403175354003904, 47.20567741333356],
                  [-1.5405964851379395, 47.20552434759262],
                  [-1.5413045883178709, 47.206019987439],
                  [-1.5422379970550537, 47.20547332558084],
                  [-1.5416264533996582, 47.20507972555462],
                  [-1.542152166366577, 47.20457678793781],
                  [-1.5418732166290283, 47.204379984963666],
                  [-1.5422379970550537, 47.20410300176318],
                  [-1.541980504989624, 47.20384059529184],
                  [-1.5404677391052246, 47.20445287503923],
                  [-1.5388906002044678, 47.20548790330349],
                ],
              ],
            },
          },
        ],
      },
    };
  },
  methods: {
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      // https://github.com/vue-leaflet/Vue2Leaflet/issues/476
      this.userLocation = latLng(location.latitude, location.longitude);
    },
    setLatLng(lat, lng) {
      return latLng(lat, lng);
    },
    setIcon(type) {
      this.poiTypes.forEach((poiType) => {
        if (poiType.type === type) {
          return poiType.icon;
        }
      });
    },
  },
  computed: {
    filteredPOI: function() {
      let self = this;
      let allMarkers = self.markers;
      let selectedMarkers = self.selectedMarkers;
      if (selectedMarkers === "all") {
        return allMarkers;
      } else {
        allMarkers = allMarkers.filter(function(marker) {
          if (marker.type.indexOf(selectedMarkers) !== -1) {
            return marker;
          }
        });
      }
      return allMarkers;
    },
  },
};
</script>

<style lang="scss">
.map-page {
  min-height: 100%;
}

.map-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  min-height: 100%;
  padding: 2em 0;
  width: clamp(320px, 80vw, 56.25rem);

  .map {
    border: 1px solid black;
    box-shadow: -8px 10px 0px var(--pink);
    height: 500px;
    // width: clamp(320px, 80vw, 56.25rem);
    width: 100%;
  }

  .arrow-marker {
    height: 30px;
  }

  .leaflet-interactive {
    stroke: var(--orange);
    stroke-linejoin: round;
  }

  .marker {
    height: 35px;
    // transform: translate(-50%, -50%);
  }

  .container-sort {
    margin: 2vh 0 1em;
    width: 100%;
  }

  .poiDescription {
    display: inline;
    margin-right: auto;
    min-height: 3rem;
    padding-bottom: 0.4em;

    & * {
      display: inline;
      margin-right: 0.4em;
    }

    .companyPOI {
      font-style: italic;
      font-weight: bold;
    }
  }
}
</style>
