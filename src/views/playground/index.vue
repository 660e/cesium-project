<script setup>
import * as C from 'cesium';
import * as T from 'three';

C.Ion.defaultAccessToken = import.meta.env.VITE_ACCESS_TOKEN;

onMounted(() => {
  console.log(T);

  const viewer = new C.Viewer('cesium-container', {
    terrain: C.Terrain.fromWorldTerrain(),
  });

  viewer.camera.flyTo({
    destination: C.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: C.Math.toRadians(0.0),
      pitch: C.Math.toRadians(-15.0),
    },
  });
});
</script>

<template>
  <div class="h-screen bg-neutral-200">
    <div class="h-full" id="cesium-container"></div>
  </div>
</template>
