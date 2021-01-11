<template>
  <div class="map-container">
    <!-- <Plan /> -->
    <l-map
      :zoom="zoom"
      :center="center"
      :enableHighAccuracy="enableHighAccuracy"
      @ready="onReady"
      @locationfound="onLocationFound"
      class="map"
    >
      <l-marker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="setLatLng(marker.lat, marker.lng)"
      >
        <l-icon :icon-anchor="staticAnchor">
          <img :src="setIcon(marker.type)" class="marker" />
        </l-icon>
      </l-marker>

      <l-tile-layer :url="url" :attribution="attribution" :compass="compass" />
      <l-geo-json v-if="show" :geojson="geojson" />

      <l-marker :lat-lng="userLocation">
        <l-icon :icon-anchor="staticAnchor" class-name="arrow-marker">
          <!-- <img :src="setIcon(marker.type)" class="marker" /> -->
          <ArrowMarker class="arrow-marker" />
        </l-icon>
      </l-marker>
      <l-geo-json :geojson="geojson" :options-style="styleGeo"></l-geo-json>
      <!-- <l-control position="bottomleft">
        <button>
          I am a useless button!
        </button>
      </l-control> -->
    </l-map>
  </div>
</template>

<script>
import Plan from "../components/Plan.vue";
import ArrowMarker from "../assets/markers/marker-arrow.svg";
import { latLng, Control } from "leaflet";
import Compass from "../../node_modules/leaflet-compass/src/leaflet-compass";

// https://leafletjs.com/reference-1.7.1.html#control -> Heading (ctrl + D : North)
// https://stackoverflow.com/questions/28396206/google-maps-js-api-v3-show-orientation-arrow-on-my-location-marker
// https://mobiforge.com/design-development/html5-mobile-web-device-orientation-events

// https://www.npmjs.com/package/vue2-leaflet-rotatedmarker

import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LGeoJson,
  LControl,
} from "vue2-leaflet";
// Geo Json sont des coordonnées pour ajouter un svg sur la map

const poi = [
  // {
  //   name: "Moi",
  //   lat: 47.206557,
  //   lng: -1.54021,
  //   type: "user",
  // },
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
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 17,
      center: [47.205584, -1.540117],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      userLocation: latLng(47.20558, -1.538199),
      staticAnchor: [22, 37],
      enableHighAccuracy: true,
      compass: Compass,
      styleGeo: {
        fillColor: "#d0f4de",
        fillOpacity: 1,
      },
      markers: poi,
      icons: {
        stage: require("../assets/markers/stage.png"),
        user: "..assets/markers/marker-arrow.svg",
      },
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
      for (const [key, value] of Object.entries(this.icons)) {
        if (key === type) {
          console.log(value);
          return value;
        }
      }
    },
  },
  mounted() {
    this.compass = new L.Control.Compass({ autoActive: true, showDigit: true });
    // Ajouter le controleur Compass
  },
  // async created() {
  //   this.loading = true;
  //   const response = await fetch(`./festival.geojson`
  //   , {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }
  //   );
  //   const data = await response.json();
  //   this.geojson = data;
  //   this.loading = false;
  // },
};
</script>

<style lang="scss">
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .map {
    max-height: 500px;
    width: 50%;
    max-width: 800px;
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
}
</style>
