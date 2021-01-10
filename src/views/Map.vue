<template>
  <div class="map-container">
    <!-- <Plan /> -->
    <!-- <div>
      <span v-if="loading">Loading...</span>
      <label for="checkbox">GeoJSON Visibility</label>
      <input id="checkbox" v-model="show" type="checkbox" />
      <label for="checkboxTooltip">Enable tooltip</label>
      <input id="checkboxTooltip" v-model="enableTooltip" type="checkbox" />
      <input v-model="fillColor" type="color" />
      <br />
    </div> -->
    <l-map :zoom="zoom" :center="center" class="map">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json
        v-if="show"
        :geojson="geojson"
      />
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import Plan from "../components/Plan.vue";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 17,
      center: [47.239543, -1.510883],
      geojson: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // marker: latLng(48.944021, 2.394466),
      marker: latLng(47.2381374,-1.5095204),
    };
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
</style>
