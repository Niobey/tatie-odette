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
      v-for="(marker, index) in markers"
      :key="index"
    >
      <l-marker :lat-lng="setLatLng(marker.lat, marker.lng)">
        <l-icon :icon-anchor="staticAnchor">
          <!-- <ArrowMarker :class="marker.type" /> -->
          <img :src="setIcon(marker.type)" />
          <Stage style="height: 35px; transform: translate(-50%, -50%);"/>
        </l-icon>
      </l-marker>

      <l-tile-layer :url="url" :attribution="attribution" :compass="compass" />
      <l-geo-json v-if="show" :geojson="geojson" />

      <l-marker :lat-lng="user">
        <l-icon :icon-anchor="staticAnchor" class-name="arrow-marker">
          <ArrowMarker class="arrow-marker" />
        </l-icon>
      </l-marker>
      <l-geo-json :geojson="geojson" :options-style="styleGeo"></l-geo-json>
      <l-control position="bottomleft">
        <button>
          I am a useless button!
        </button>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import Stage from "../assets/markers/stage.svg";
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

const poiIcons = {
  stage: "../assets/markers/stage.svg",
  user: "..assets/markers/marker-arrow.svg",
};

const poi = [
  {
    name: "Scène 1",
    lat: 47.206557,
    lng: -1.54021,
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
    Stage
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 17,
      center: [47.205584, -1.540117],
      geojson: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      user: latLng(47.20558, -1.538199),
      staticAnchor: [16, 37],
      enableHighAccuracy: true,
      compass: Compass,
      styleGeo: {
        fillColor: "#d0f4de",
        fillOpacity: 1,
      },
      markers: poi,
      icons: poiIcons,
    };
  },
  methods: {
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      // https://github.com/vue-leaflet/Vue2Leaflet/issues/476
      this.marker = latLng(location.latitude, location.longitude);
    },
    setLatLng(lat, lng) {
      return latLng(lat, lng);
    },
    setIcon(type) {
      for (const [key, value] of Object.entries(poiIcons)) {
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
  async created() {
    this.loading = true;
    const response = await fetch(`./festival.geojson`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  },
};
</script>

<style lang="scss">
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

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
</style>
