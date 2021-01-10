<template>
  <div class="map-container">
    <!-- <Plan /> -->
    <l-map
      :zoom="zoom"
      :center="center"
      @ready="onReady"
      @locationfound="onLocationFound"
      class="map"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json v-if="show" :geojson="geojson" />

      <l-marker :lat-lng="marker">
        <l-icon :icon-anchor="staticAnchor" class-name="arrow-marker">
          <ArrowMarker class="arrow-marker" />
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import Plan from "../components/Plan.vue";
import ArrowMarker from "../assets/markers/marker-arrow.svg";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LGeoJson } from "vue2-leaflet";
// Geo Json sont des coordonnées pour ajouter un svg sur la map

// https://www.npmjs.com/package/vue2-leaflet-rotatedmarker

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LIcon,
    ArrowMarker,
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 15,
      center: [47.239543, -1.510883],
      geojson: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // marker: latLng(48.944021, 2.394466),
      marker: latLng(47.2381374, -1.5095204),
      // icon: L.icon({
      //   iconUrl: "../assets/markers/marker-arrow.png",
      //   iconSize: [32, 37],
      //   iconAnchor: [16, 37],
      // }),
      staticAnchor: [16, 37],
    };
  },
  methods: {
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      // https://github.com/vue-leaflet/Vue2Leaflet/issues/476
      this.marker = latLng(location.latitude, location.longitude);
      // console.log(location.latitude, location.longitude);
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //   console.log(position.coords.latitude, position.coords.longitude);
      // });
    },
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
</style>
